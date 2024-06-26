import { db } from '../helpers/db';
import { logError } from '../helpers/logger';

export const getRedirectionUrl = async (req: any, res: any): Promise<void> => {
  try {
    const dbRes = await db.query('SELECT redirect_url FROM groups WHERE id=$1', [
      req.proxyParamsGroupId,
    ]);
    res.status(200).json({ redirectionUrl: dbRes.rows[0].redirect_url || '' });
  } catch (e) {
    logError('update_group', e);
    res.status(400).end();
  }
};
