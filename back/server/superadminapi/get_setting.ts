import { db } from '../helpers/db';
import env from '../helpers/env';
import { logError } from '../helpers/logger';
import { superadminSettingKeys } from '../helpers/superadminSettingKeys';

export const get_setting = async (req: any, res: any): Promise<void> => {
  try {
    if (!superadminSettingKeys.includes(req.body.key)) {
      logError(`Attempted to request ${req.body.key} from settings.`);
      return res.status(400).end();
    }

    if (env.USE_POSTFIX && req.body.key === 'EMAIL_CONFIG') {
      return res.status(200).json({ usePostfix: true });
    }

    const dbRes = await db.query('SELECT value FROM settings WHERE key=$1', [req.body.key]);
    if (dbRes.rowCount === 1) {
      const result = { [req.body.key]: dbRes.rows[0].value };
      res.status(200).json(result);
    } else {
      res.status(200).json({});
    }
  } catch (e) {
    logError("get_setting", e);
    res.status(400).end();
  }
};
