import { db } from '../helpers/connection';
import { logError } from '../helpers/logger';

export const get_allowed_emails = async (req: any, res: any): Promise<void> => {
  try {
    const dbRes = await db.query(
      'SELECT id, pattern FROM allowed_emails WHERE group_id=$1 ORDER BY id ASC',
      [req.proxyParamsGroupId],
    );
    res.status(200).send(dbRes.rows);
  } catch (e) {
    logError(e);
    res.status(400).end();
  }
};
