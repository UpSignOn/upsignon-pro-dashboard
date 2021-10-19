import { db } from '../helpers/connection';
import { logError } from '../helpers/logger';

export const update_allowed_email = async (req: any, res: any): Promise<void> => {
  try {
    await db.query(`UPDATE allowed_emails SET pattern=$1 WHERE id=$2`, [
      req.body.updatedPattern,
      req.body.allowedEmailId,
    ]);
    res.status(200).end();
  } catch (e) {
    logError(e);
    res.status(400).end();
  }
};
