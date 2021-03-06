import { db } from '../helpers/connection';
import { logError } from '../helpers/logger';

export const get_groups = async (req: any, res: any): Promise<void> => {
  try {
    const dbRes = await db.query(
      `SELECT
        groups.id,
        groups.name,
        groups.settings,
        (SELECT count(users.id) FROM users WHERE users.group_id=groups.id) AS nb_users
      FROM groups ORDER BY name ASC`,
    );
    res.status(200).send(dbRes.rows);
  } catch (e) {
    logError(e);
    res.status(400).end();
  }
};
