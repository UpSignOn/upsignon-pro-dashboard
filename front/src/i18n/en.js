const translations = {
  yes: 'YES',
  no: 'NO',
  actions: 'Actions',
  delete: 'Delete',
  add: 'Add',
  pagination_pages: 'pages',
  validate: 'Validate',
  menu_overview: 'Overview',
  menu_users: 'Users',
  menu_settings: 'Settings',
  menu_shared_devices: 'Shared devices',
  menu_shared_accounts: 'Shared accounts',
  loading: 'Loading data...',
  user_search: 'Search a user',
  user_unit_name: 'users',
  user_email: 'Email',
  user_data: 'Data',
  user_nb_devices: 'Nb of devices',
  user_nb_devices_value: '$nb devices',
  user_nb_codes_and_accounts: 'Nb of web accounts and codes (shared or not)',
  user_nb_codes_value: '$nb codes',
  user_nb_accounts_value: '$nb accounts',
  user_nb_shared_items_value: 'of which $nb shared',
  user_passwords_stats: 'Passwords stats (shared or not)',
  user_passwords_weak: '$nb weak',
  user_passwords_medium: '$nb medium',
  user_passwords_strong: '$nb strong',
  user_passwords_reused: 'of which $nb reused',
  user_delete_warning:
    'Beware, you are about to delete $email and all his data. This is irrerversible.',
  user_sorting:
    'Users are sorted by descending number of reused passwords, then by descending number of weak passwords, then by descending number of medium passwords, then by alphabetical order.',
  devices_for_user: 'Devices of $email',
  device_name: 'Device name',
  device_app_version: 'App version',
  device_type: 'Type',
  device_status: 'Status',
  device_last_session: 'Last session',
  device_deactivate: 'Deactivate',
  device_deactive_all: 'Deactivate all users\non this devices',
  device_authorize: 'Authorize',
  device_delete_warning:
    'This will definitively delete this device and its history.\n\nYou can use the Deactivate option to no longer authorize connections from this device while keeping its history.\n\nContinue the deletion?',
  device_deactivate_warning:
    'This device will no longer be authorized but will stay in the list.\n\nDeactivate?',
  device_authorize_warning:
    'This device will be authorized without the user needing to validate his email address.\n\nMake sure this request originates from a legitimate user!\n\nAuthorize?',
  device_shared_with: 'Device shared with',
  password_reset_requests: 'Password reset requests',
  password_reset_request_status: 'Status',
  password_reset_request_expired: 'Token has expired',
  password_reset_request_valid_until: 'Email sent. Token is valid until $date.',
  password_reset_request_grant: 'Grant',
  password_reset_request_delete_warning: 'Do you wish to delete this password reset request?',
  password_reset_request_grant_warning:
    'Please make sure the request was made by the user himself.\n\nGrant?',
  settings_security: 'Security settings',
  settings_reset_pwd_admin_check:
    'To reset his password, a user must obtain a validation from an administrator:',
  settings_change: 'Change',
  settings_allowed_emails: 'Authorized email addresses',
  settings_allowed_emails_pattern:
    'You can enter entire email addresses or use the syntax *@domain.com to allow all addresses of a domain.',
  settings_allowed_emails_email_pattern: 'Email',
  settings_allowed_emails_new: 'New email address pattern',
  settings_allowed_emails_delete_warning:
    'This will not delete the safes for users matching this email address template.\n\nDelete ?',
  settings_urls: 'Prefilled websites',
  settings_urls_explanation:
    'The websites you enter here will be offered to users to simplify the registration of their passwords.',
  settings_urls_new: 'New website',
  settings_urls_name: 'Site name',
  settings_urls_signin_url: 'Signin URL',
  settings_urls_password_change_url: 'Password change URL',
  settings_urls_delete_warning: 'Are your sure?',
  shared_devices_explanation:
    'This is the list of devices where at least two users have authorized their PRO space.',
  shared_devices_uid: 'Device unique id',
  shared_devices_user_email: 'Email',
  shared_devices_created_at: 'Add date',
  shared_devices_name: 'Device name',
  shared_devices_type: 'Device type',
  shared_devices_status: 'Status',
  shared_devices_last_session: 'Last session',
  shared_account_name: 'Name',
  shared_account_type: 'Type',
  shared_account_url: 'Type, URL & login',
  shared_account_users: 'Users',
  shared_account_user_creation_date: 'Since',
  shared_account_user_is_manager: 'Manager',
  shared_account_user_actions: 'Actions',
  shared_account_user_delete: 'Delete from sharing',
  shared_account_user_delete_warning:
    '$accountName will no longer be shared with $user.\n\nAre you sure?',
  shared_account_last_user_warning:
    'THIS IS THE LAST USER WITH ACCESS TO THIS ACCOUNT. THE PASSWORD WILL BE LOST.',
  shared_account_search: 'Search by user email address',
  shared_account_unit_name: 'Shared accounts',
  shared_account_manager_note:
    "You can't remove management rights from the last manager of an account or delete him from the share. But you can transfer the management rights to another user.",
};

export default translations;
