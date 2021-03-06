import { db } from '../helpers/connection';
import { logError } from '../helpers/logger';

export const insert_allowed_email = async (req: any, res: any): Promise<void> => {
  try {
    await db.query(`INSERT INTO allowed_emails (pattern, group_id) VALUES (lower($1), $2)`, [
      req.body.newPattern,
      req.proxyParamsGroupId,
    ]);
    res.status(200).end();
  } catch (e) {
    logError(e);
    res.status(400).end();
  }
};
