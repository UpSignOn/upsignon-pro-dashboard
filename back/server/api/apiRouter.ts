import express from 'express';
import { authorize_device } from './authorize_device';
import { clean_empty_shared_folders } from './clean_empty_shared_folders';
import { copy_urls_from_group } from './copy_urls_from_group';
import { count_password_reset_requests } from './count_password_reset_requests';
import { count_shared_accounts } from './count_shared_accounts';
import { count_shared_devices } from './count_shared_devices';
import { count_users } from './count_users';
import { deactivate_device } from './deactivate_device';
import { deactivate_device_all_users } from './deactivate_device_all_users';
import { delete_allowed_email } from './delete_allowed_email';
import { delete_device } from './delete_device';
import { delete_group_admin } from './delete_group_admin';
import { delete_pwd_reset_request } from './delete_pwd_reset_request';
import { delete_shared_account } from './delete_shared_account';
import { delete_shared_account_user } from './delete_shared_account_user';
import { delete_url } from './delete_url';
import { delete_user } from './delete_user';
import { extract_database } from './extract_database';
import { extract_emails_for_duplicate_passwords } from './extract_emails_for_duplicate_passwords';
import { extract_emails_for_long_unused } from './extract_emails_for_long_unused';
import { extract_emails_for_medium_passwords } from './extract_emails_for_medium_passwords';
import { extract_emails_for_shared_device } from './extract_emails_for_shared_device';
import { extract_emails_for_weak_passwords } from './extract_emails_for_weak_passwords';
import { get_allowed_emails } from './get_allowed_emails';
import { get_group_admins } from './get_group_admins';
import { get_group_settings } from './get_group_settings';
import { get_password_stats } from './get_password_stats';
import { get_pending_password_reset_requests } from './get_pending_password_reset_requests';
import { get_shared_accounts } from './get_shared_accounts';
import { get_shared_devices } from './get_shared_devices';
import { get_shared_folders } from './get_shared_folders';
import { get_urls } from './get_urls';
import { get_usage_stats } from './get_usage_stats';
import { get_users } from './get_users';
import { get_user_devices } from './get_user_devices';
import { grant_pwd_reset_request } from './grant_pwd_reset_request';
import { insert_allowed_email } from './insert_allowed_email';
import { insert_group_admin } from './insert_group_admin';
import { insert_url } from './insert_url';
import { update_allowed_email } from './update_allowed_email';
import { update_group } from './update_group';
import { update_shared_account_manager } from './update_shared_account_manager';
import { update_url } from './update_url';
import { update_user_email } from './update_user_email';
import { get_shared_vaults } from './get_shared_vaults';
import { count_shared_vaults } from './count_shared_vaults';
import { delete_shared_vault_user } from './delete_shared_vault_user';
import { update_shared_vault_manager } from './update_shared_vault_manager';
import { send_email, send_email_precheck } from './send_email';
import { extract_emails_for_windows_below_6_0_4 } from './extract_emails_for_windows_below_6_0_4';
import { update_user_setting } from './update_user_setting';

export const apiRouter = express.Router();

apiRouter.use(async (req, res, next) => {
  if (
    // @ts-ignore
    !req.session.isSuperadmin &&
    // @ts-ignore
    !req.session.groups.includes(req.proxyParamsGroupId)
  ) {
    // @ts-ignore
    console.error('Unauthorized for group ' + req.proxyParamsGroupId);
    return res.status(401).end();
  }
  next();
});
// Users
apiRouter.get('/users', get_users);
apiRouter.get('/count-users', count_users);
apiRouter.post('/delete-user/:userId', delete_user);
apiRouter.post('/update-user-email', update_user_email);
apiRouter.post('/update-user-setting', update_user_setting);

// Devices
apiRouter.get('/user-devices/:userId', get_user_devices);
apiRouter.post('/delete-device/:deviceId', delete_device);
apiRouter.post('/deactivate-device/:deviceId', deactivate_device);
apiRouter.post('/authorize-device/:deviceId', authorize_device);

// Shared devices
apiRouter.get('/shared-devices', get_shared_devices);
apiRouter.post('/deactivate-device-all-users/:deviceId', deactivate_device_all_users);
apiRouter.get('/count-shared-devices', count_shared_devices);

// Password reset requests
apiRouter.get('/count-password-reset-requests', (req, res) =>
  count_password_reset_requests(req, res, false),
);
apiRouter.get('/get-pending-password-reset-requests', (req, res) =>
  get_pending_password_reset_requests(req, res, false),
);
apiRouter.post('/delete-pwd-reset-request/:requestId', (req, res) =>
  delete_pwd_reset_request(req, res, false),
);
apiRouter.post('/grant-pwd-reset-request/:requestId', (req, res) =>
  grant_pwd_reset_request(req, res, false),
);

// Shared accounts
apiRouter.get('/shared-accounts', get_shared_accounts);
apiRouter.get('/count-shared-accounts', count_shared_accounts);
apiRouter.post('/delete-shared-account/:sharedAccountId', delete_shared_account);
apiRouter.post('/delete-shared-account-user', delete_shared_account_user);
apiRouter.post('/update-shared-account-manager', update_shared_account_manager);
apiRouter.post('/clean-empty-shared-folders', clean_empty_shared_folders);
apiRouter.get('/shared_folders', get_shared_folders);

// Shared vaults
apiRouter.get('/shared-vaults', get_shared_vaults);
apiRouter.get('/count-shared-vaults', count_shared_vaults);
apiRouter.post('/delete-shared-vault-user', delete_shared_vault_user);
apiRouter.post('/update-shared-vault-manager', update_shared_vault_manager);

// Stats
apiRouter.get('/get-password-stats', (req, res) => get_password_stats(req, res, false));
apiRouter.get('/get-usage-stats', (req, res) => get_usage_stats(req, res, false));

// Extracts
apiRouter.get('/extract-database', (req, res) => extract_database(req, res, false));
apiRouter.get('/extract-emails-for-duplicate-passwords', (req, res) =>
  extract_emails_for_duplicate_passwords(req, res, false),
);
apiRouter.get('/extract-emails-for-weak-passwords', (req, res) =>
  extract_emails_for_weak_passwords(req, res, false),
);
apiRouter.get('/extract-emails-for-medium-passwords', (req, res) =>
  extract_emails_for_medium_passwords(req, res, false),
);
apiRouter.get('/extract-emails-for-shared-device', (req, res) =>
  extract_emails_for_shared_device(req, res, false),
);
apiRouter.get('/extract-emails-for-long-unused', (req, res) =>
  extract_emails_for_long_unused(req, res, false),
);
apiRouter.get('/extract-emails-for-windows-below-6-0-4', (req, res) =>
  extract_emails_for_windows_below_6_0_4(req, res, false),
);

// Send emails
apiRouter.post('/send-email-precheck', (req, res) => send_email_precheck(req, res, false));
apiRouter.post('/send-email', (req, res) => send_email(req, res, false));

// Allowed emails
apiRouter.get('/allowed-emails', get_allowed_emails);
apiRouter.post('/delete-allowed-email/:id', delete_allowed_email);
apiRouter.post('/update-allowed-email', update_allowed_email);
apiRouter.post('/insert-allowed-email', insert_allowed_email);

// Urls
apiRouter.get('/urls', get_urls);
apiRouter.post('/delete-url/:id', delete_url);
apiRouter.post('/update-url', update_url);
apiRouter.post('/insert-url', insert_url);
apiRouter.post('/copy_urls_from_group', copy_urls_from_group);

// Admins
apiRouter.post('/delete-admin/:id', delete_group_admin);
apiRouter.post('/insert-admin', insert_group_admin);
apiRouter.get('/group-admins', get_group_admins);

// Settings
apiRouter.get('/group-settings', get_group_settings);
apiRouter.post('/group-settings-update', update_group);
