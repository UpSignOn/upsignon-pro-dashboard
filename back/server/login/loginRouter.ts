import express from 'express';
import bcrypt from 'bcrypt';
import { db } from '../helpers/db';
import { v4 as uuidv4 } from 'uuid';
import env from '../helpers/env';
import { logError } from '../helpers/logger';
import { redirectToDefaultPath } from '../helpers/redirectToDefaultPath';
import { updateSessionAuthorizations } from '../helpers/updateSessionAuthorizations';

export const loginRouter = express.Router();

// UPSIGNON config
const CONFIG_VERSION = '1';
const config = {
  version: CONFIG_VERSION,
  legalTerms: [],
  fields: [{ type: 'email', key: 'email1', mandatory: true }],
};

const buttonConfigs = {
  signin: {
    fields: [{ type: 'email', key: 'email1', mandatory: true }],
    forceFormDisplay: false,
    generalConfigVersion: CONFIG_VERSION,
    disableAccountCreation: true,
  },
};

/* HELPERS */

const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

const passwordIsOk = async (password: string, passwordHash: string): Promise<boolean> => {
  return await bcrypt.compare(password, passwordHash);
};

const isTokenExpired = (expired_at: Date) => {
  return expired_at.getTime() < new Date().getTime();
};

const checkPassword = async (userId: string, password: string): Promise<boolean> => {
  try {
    if (!password) return false;
    let dbRes;
    try {
      dbRes = await db.query('SELECT password_hash FROM admins WHERE id=$1', [userId]);
    } catch {}
    if (!dbRes || dbRes.rowCount === 0) return false;
    const isOk: boolean = await passwordIsOk(password, dbRes.rows[0].password_hash);
    return isOk;
  } catch {
    return false;
  }
};

/* ROUTER */

loginRouter.get('/config', async (req: any, res: any) => {
  try {
    return res.status(200).json(config);
  } catch (e) {
    logError('/config', e);
    res.status(444).end();
  }
});

loginRouter.get('/button-config', async (req: any, res: any) => {
  try {
    const buttonId = req.query.buttonId;
    // @ts-ignore
    const buttonConfig = buttonConfigs[buttonId];
    if (!buttonConfig) {
      return res.status(404).end();
    }
    return res.status(200).json(buttonConfig);
  } catch (e) {
    logError('/button-config', e);
    res.status(404).end();
  }
});

loginRouter.post('/connect', async (req: any, res: any) => {
  try {
    const password = req.body.password;
    const id = req.body.userId;
    const buttonId = req.body.buttonId;
    if (!id) return res.status(401).end();
    if (!password) return res.status(401).end();

    const isOk = await checkPassword(id, password);
    if (!isOk) return res.status(401).end();

    const connectionToken = uuidv4();
    const expiresAt = new Date();
    const ttl = 30000; // 30 seconds
    expiresAt.setTime(expiresAt.getTime() + ttl);
    try {
      await db.query('UPDATE admins SET token=$1, token_expires_at=$2 WHERE id=$3', [
        connectionToken,
        expiresAt,
        id,
      ]);
    } catch {
      return res.status(400).end();
    }
    let redirectionUri;
    switch (buttonId) {
      default:
        redirectionUri = env.BACKEND_URL + '/login/redirection/';
    }
    res.status(200).json({ connectionToken, redirectionUri });
  } catch (e) {
    logError('/connect', e);
    res.status(444).end();
  }
});

loginRouter.post('/create-account', async (req: any, res: any) => {
  return res.status(403).json({ message: 'Account creation is forbidden' });
});

loginRouter.post('/export-account', async (req: any, res: any) => {
  try {
    const password = req.body.currentPassword;
    const login = req.body.currentLogin;
    const connectionToken = req.body.connectionToken;
    const newPassword = req.body.newPassword;
    if (!newPassword) return res.status(400).end();
    if ((!login || !password) && !connectionToken) return res.status(400).end();
    if (!!login && !!password && !!connectionToken) return res.status(400).end();

    let adminId;
    let userData;
    if (!!login && !!password) {
      let dbRes;
      try {
        dbRes = await db.query('SELECT id, email, password_hash FROM admins WHERE email=$1', [
          login,
        ]);
      } catch {}
      if (!dbRes || dbRes.rowCount === 0) return res.status(401).end();
      const isPasswordOK = await passwordIsOk(password, dbRes.rows[0].password_hash);
      if (!isPasswordOK) return res.status(401).end();
      adminId = dbRes.rows[0].id;
      userData = [{ type: 'email', key: 'email1', value: { address: login, isValidated: true } }];
    } else {
      const currentRes = await db.query(
        'SELECT id, email, token_expires_at FROM admins WHERE token=$1',
        [connectionToken],
      );
      if (!currentRes || currentRes.rowCount === 0) return res.status(401).end();
      if (isTokenExpired(currentRes.rows[0].token_expires_at)) return res.status(401).end();
      adminId = currentRes.rows[0].id;
      await db.query('UPDATE admins SET token=null, token_expires_at=null WHERE id=$1', [adminId]);
      userData = [
        {
          type: 'email',
          key: 'email1',
          value: { address: currentRes.rows[0].email, isValidated: true },
        },
      ];
    }
    const hash = await hashPassword(newPassword);
    await db.query('UPDATE admins SET password_hash=$1 WHERE id=$2', [hash, adminId]);
    res.status(200).json({ userId: adminId, userData });
  } catch (e) {
    logError('/export-account', e);
    res.status(444).end();
  }
});

loginRouter.get('/redirection/', async (req: any, res: any) => {
  try {
    const userId = req.query.userId;
    const connectionToken = req.query.connectionToken;
    if (!userId || !connectionToken) return res.status(404).end();
    let dbRes;
    try {
      dbRes = await db.query(
        'SELECT email, token_expires_at FROM admins WHERE id=$1 AND token=$2',
        [userId, connectionToken],
      );
    } catch {}
    if (!dbRes || dbRes.rowCount !== 1) return res.status(401).send('CONNECTION ERROR');
    if (isTokenExpired(dbRes.rows[0].token_expires_at))
      return res.status(401).send('CONNECTION ERROR');
    await db.query('UPDATE admins SET token=null, token_expires_at=null WHERE id=$1 ', [userId]);

    await updateSessionAuthorizations(req, dbRes.rows[0].email);
    redirectToDefaultPath(req, res);
  } catch (e) {
    logError('/redirection/', e);
    res.status(444).end();
  }
});

loginRouter.post('/update-password', async (req: any, res: any) => {
  try {
    const password = req.body.password;
    const newPassword = req.body.newPassword;
    const id = req.body.userId;
    if (!id || !newPassword) return res.status(400).end();

    const isOk = await checkPassword(id, password);
    if (isOk) {
      const newPasswordHash = await hashPassword(newPassword);
      await db.query('UPDATE admins SET password_hash=$1 WHERE id=$2', [newPasswordHash, id]);
      res.status(200).end();
    } else {
      const isNewPasswordOK = await checkPassword(id, newPassword);
      if (isNewPasswordOK) return res.status(200).end();
      return res.status(401).end();
    }
  } catch (e) {
    logError('/update-password', e);
    res.status(444).end();
  }
});

loginRouter.post('/update-data', async (req: any, res: any) => {
  return res
    .status(403)
    .send({ message: 'Vous ne pouvez pas modifier votre adresse email pour ce compte.' });
});

loginRouter.post('/delete-account-and-data', async (req: any, res: any) => {
  try {
    const password = req.body.password;
    const id = req.body.userId;
    if (!id) return res.status(400).end();
    if (!password) return res.status(401).end();
    let dbRes;
    try {
      dbRes = await db.query('SELECT password_hash FROM admins WHERE id=$1', [id]);
    } catch {}
    if (!dbRes || dbRes.rowCount === 0) return res.status(200).json({ deletionStatus: 'DONE' });
    const isOk: boolean = await passwordIsOk(password, dbRes.rows[0].password_hash);
    if (!isOk) return res.status(401).end();
    const deletedAdmin = await db.query('DELETE FROM admins WHERE id=$1 RETURNING email', [id]);
    deletedAdmin.rows.forEach(async (a) => {
      await db.query(`DELETE FROM admin_sessions WHERE session_data ->> 'adminEmail' = $1`, [
        a.email,
      ]);
    });
    res.status(200).json({ deletionStatus: 'DONE' });
  } catch (e) {
    logError('/delete-account-and-data', e);
    res.status(444).end();
  }
});
