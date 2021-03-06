import { db } from '../helpers/connection';
import { logError } from '../helpers/logger';

export const extract_emails_for_medium_passwords = async (req: any, res: any): Promise<void> => {
  try {
    const nb = parseInt(req.query.minMedium, 10) || 1;
    const dbRes = await db.query(
      `SELECT email FROM users AS u
    WHERE (SELECT nb_accounts_medium FROM data_stats AS ds WHERE ds.user_id=u.id ORDER BY date DESC LIMIT 1) >= $1
    AND u.group_id=$2
  `,
      [nb, req.proxyParamsGroupId],
    );
    res.status(200).send(dbRes.rows.map((u) => u.email));
  } catch (e) {
    logError(e);
    res.status(400).end();
  }
};
