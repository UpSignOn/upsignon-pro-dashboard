const translations = {
  suggestion: "Please don't hesitate to send us all your feedbacks and suggestions at",
  yes: 'YES',
  no: 'NO',
  edit: 'Edit',
  see: 'See',
  hide: 'Hide',
  actions: 'Actions',
  delete: 'Delete',
  add: 'Add',
  disconnect: 'Disconnect',
  pagination_pages: 'pages',
  validate: 'Validate',
  cancel: 'Cancel',
  menu_overview: 'Overview',
  menu_users: 'Users',
  menu_settings: 'Settings',
  menu_shared_devices: 'Shared devices',
  menu_shared_accounts: 'Shared accounts',
  menu_superadmin: 'Super-Admin',
  loading: 'Loading data...',
  total: 'Total $count',
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
  user_passwords_red: '$nb red',
  user_passwords_orange: '$nb orange',
  user_passwords_green: '$nb green',
  user_passwords_duplicated: 'of which $nb duplicated',
  user_delete_warning:
    'Beware, you are about to delete $email and all his data. This is irrerversible.',
  user_sorting:
    'Users are sorted by descending number of duplicated passwords, then by descending number of weak passwords, then by descending number of medium passwords, then by alphabetical order.',
  user_change_email_confirm:
    "Are you sure you want to changer this user's email address from $oldEmail to $newEmail?\nThis will be taken into account in the application in a transparent manner for the user (with version 4.6 and above).",
  user_email_already_used:
    'ERROR\n$email is already used or has already been used by another user.',
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
  password_reset_requests_pending: 'Pending password reset requests',
  password_reset_request_date: 'Request date',
  password_reset_request_status: 'Request status',
  password_reset_request_expired: 'Token has expired',
  password_reset_request_valid_until: 'Email sent. Token is valid until $date.',
  password_reset_request_grant: 'Grant',
  password_reset_request_delete_warning: 'Do you wish to delete this password reset request?',
  password_reset_request_grant_warning:
    'Please make sure the request was made by the user himself.\n\nGrant?',
  settings_security: 'Security settings',
  settings_change: 'Change',
  settings_allowed_emails: 'Authorized email addresses',
  settings_allowed_emails_pattern:
    'You can enter entire email addresses or use the syntax *@domain.com to allow all addresses of a domain.',
  settings_allowed_emails_email_pattern: 'Email',
  settings_allowed_emails_new: 'New email address pattern',
  settings_allowed_emails_delete_warning:
    'This will not delete the safes for users matching this email address template.\n\nDelete ?',
  settings_admin_email: 'Email',
  settings_admin_created_at: 'Added on',
  settings_admin_group: 'Group',
  sasettings_admin_delete_warning: 'Are you sure you want to revoke this admin?',
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
  extracts: 'Extracts',
  extract_database: 'Download all stats into csv file',
  extract_emails_text: 'Get the list of emails of users:',
  extract_emails_duplicates: 'who have at least $n duplicate passwords',
  extract_emails_weak: 'who have at least $n weak passwords',
  extract_emails_medium: 'who have at least $n medium passwords',
  extract_emails_long_unused: "who haven't used UpSignOn since at least $n days",
  extract_emails_shared_device: 'who share at least one of their devices',
  extract_emails: 'Extract emails',
  copy_to_pasteboard: 'Copy',
  chart_security_title: 'Passwords strength evolution',
  chart_no_pwd: 'Without pwd',
  chart_weak_pwd: 'Weak pwds',
  chart_medium_pwd: 'Medium pwds',
  chart_strong_pwd: 'Strong pwds',
  chart_duplicate_pwd: 'Duplicate pwds',
  chart_red_pwd: 'Red pwds',
  chart_orange_pwd: 'Orange pwds',
  chart_green_pwd: 'Green pwds',
  chart_nb_accounts: 'Total nb of accounts',
  chart_type_nb: 'Nb',
  chart_type_color: 'By color',
  chart_type_entropy: 'By entropy',
  chart_start_date: 'Start date',
  chart_end_date: 'End date',
  chart_usage_title: 'Number of PRO spaces',
  chart_nb_users: 'Nb of users',
  chart_today_button: 'Today',
  useful_links: 'Useful links',
  install_doc_server_pro: 'Installation documentation for the UpSignOn PRO server',
  install_doc_server_pro_dashboard: 'Installation documentation for the UpSignOn PRO dashboard',
  install_doc_browser_extension: 'Installation documentation for the browser extensions',
  windows_app_download_link: 'Download of the application for Windows 10',
  to_unzip: 'add the .zip extension to unzip it',
  setup_link: 'Application setup link',
  setup_link_is_group_specific: 'Notice this link is group specific.',
  pro_server: 'UpSignOn PRO server',
  pro_server_url: 'URL of your UpSignOn PRO server',
  openid_unfold: 'Special cas of OpenId (optionnal and not recommended)',
  openid_authority: 'OpenId server URL',
  openid_clientid: 'App identifier',
  openid_clientid_browsers: 'Browser extensions identifier',
  link_to_communicate: 'Link to communicate',
  pro_server_status_running: 'Server running.',
  pro_server_status_stopped: 'Server stopped or misconfigured.',
  sasettings_superadmins: 'Administrators',
  sasettings_groups: 'Groups',
  sasettings_group_name: 'Name that will be displayed in the app',
  sasettings_nb_users: 'Number of users',
  sasettings_reset_pwd_admin_check:
    'To reset his password, a user must obtain a validation from an administrator of his group',
  sasettings_group_name_change_warning:
    'Notice: group name changes only affect new devices for now.',
  sasettings_group_delete_warning:
    'Are you sure you want to delete this group? This will permanently delete all user data for this group.This action is irreversible!',
  sasetting_confirm_group_delete: 'To confirm, please type exactly "$name"',
};

export default translations;
