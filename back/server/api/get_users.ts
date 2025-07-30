import { db } from '../helpers/db';
import { logError } from '../helpers/logger';

export const get_users = async (req: any, res: any): Promise<void> => {
  try {
    // search
    let search = req.query.search;
    if (!!search && typeof search !== 'string') return res.status(401).end();
    search = search?.toLowerCase();
    const isSearching = !!search;

    // sorting
    const sortingType = parseInt(req.query.sortingType, 10) || 0;

    // COUNT USERS
    let userCount;
    if (isSearching) {
      const countUsersReq = await db.query(
        `SELECT COUNT(id) FROM users WHERE (email LIKE '%' || $1 || '%' OR id::varchar(5) LIKE $1 || '%') AND users.group_id=$2
        ${sortingType === 2 ? 'AND deactivated' : ''}`,
        [search, req.proxyParamsBankId],
      );
      userCount = parseInt(countUsersReq.rows[0].count, 10);
    } else {
      const countUsersReq = await db.query(
        `SELECT COUNT(id) FROM users WHERE users.group_id=$1 ${sortingType === 2 ? 'AND deactivated' : ''}`,
        [req.proxyParamsBankId],
      );
      userCount = parseInt(countUsersReq.rows[0].count, 10);
    }

    // pagination
    const pageIndex = parseInt(req.query.pageIndex, 10) || 1;
    let pageOffset = pageIndex - 1;
    const limit = parseInt(req.query.limit, 10) || 50;
    if (pageOffset * limit >= userCount) pageOffset = 0;

    // Users
    const queryInputs: string[] = [
      limit.toString(),
      (pageOffset * limit).toString(),
      req.proxyParamsBankId,
    ];
    if (isSearching) {
      queryInputs.push(search);
    }

    const requestString = `SELECT
    u.id AS user_id,
    u.email AS email,
    length(u.encrypted_data_2) AS data2_length,
    u.updated_at AS updated_at,
    u.deactivated AS deactivated,
    (SELECT COUNT(ud.id) FROM user_devices AS ud WHERE ud.user_id=u.id) AS nb_devices,
    (SELECT last_sync_date FROM user_devices AS ud WHERE ud.user_id=u.id ORDER BY last_sync_date DESC NULLS LAST LIMIT 1) AS last_sync_date,
    (SELECT COUNT(svr.user_id) FROM shared_vault_recipients AS svr WHERE svr.user_id=u.id) AS nb_shared_items,
    u.nb_codes AS nb_codes,
    u.nb_accounts AS nb_accounts,
    u.nb_accounts_weak AS nb_accounts_weak,
    u.nb_accounts_medium AS nb_accounts_medium,
    u.nb_accounts_strong AS nb_accounts_strong,
    u.nb_accounts_red AS nb_accounts_red,
    u.nb_accounts_orange AS nb_accounts_orange,
    u.nb_accounts_green AS nb_accounts_green,
    u.nb_accounts_with_duplicated_password AS nb_accounts_with_duplicated_password,
    u.nb_accounts_with_no_password AS nb_accounts_with_no_password,
    g.settings AS group_settings,
    u.allowed_to_export AS allowed_to_export,
    u.allowed_offline_mobile AS allowed_offline_mobile,
    u.allowed_offline_desktop AS allowed_offline_desktop,
    u.settings_override AS settings_override
  FROM users AS u
  INNER JOIN groups AS g ON u.group_id=g.id
  WHERE u.group_id=$3
  ${isSearching ? "AND (u.email LIKE '%' || $4 || '%' OR u.id::varchar(5) LIKE $4 || '%')" : ''}
  ${
    sortingType === 0
      ? 'ORDER BY nb_accounts_with_duplicated_password DESC, nb_accounts_weak DESC, nb_accounts_medium DESC, u.email ASC'
      : sortingType === 1
        ? 'ORDER BY last_sync_date ASC NULLS FIRST, u.email ASC'
        : 'AND u.deactivated ORDER BY u.email ASC'
  }
  LIMIT $1
  OFFSET $2
  `;

    const usersRequest = await db.query(requestString, queryInputs);
    const users = usersRequest.rows.map((u) => ({
      ...u,
      nb_devices: parseInt(u.nb_devices, 10),
      nb_shared_items: parseInt(u.nb_shared_items, 10),
    }));

    res.status(200).send({ users, userCount });
  } catch (e) {
    logError('get_users', e);
    res.status(400).end();
  }
};
