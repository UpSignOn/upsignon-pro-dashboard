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
  close: 'Close',
  total: 'Total',
  disconnect: 'Disconnect',
  pagination_pages: 'pages',
  validate: 'Validate',
  cancel: 'Cancel',
  menu_overview: 'Overview',
  menu_password_reset_requests: 'Password reset requests',
  menu_users: 'Users',
  menu_communications: 'CSV Extract & Communications',
  menu_settings: 'Settings',
  menu_shared_devices: 'Shared devices',
  menu_shared_accounts: 'Shared accounts (deprecated)',
  menu_shared_vaults: 'Shared vaults',
  menu_superadmin: 'Super-Admin',
  loading: 'Loading data...',
  total_count: 'Total $count',
  user_sort_by_vuln: 'By vulnerability',
  user_sort_by_time: 'By last session',
  user_sorting:
    'Sorting by vulnerability: Users are sorted by descending number of duplicated passwords, then by descending number of weak passwords, then by descending number of medium passwords, then by alphabetical order.',
  user_sorting_by_time:
    'Sorting by last session: Users are sorted by date of last session, starting with the oldests.',
  user_search: 'Search a user',
  user_unit_name: 'users',
  user_id: 'Id',
  user_email: 'Email',
  user_data: 'Data',
  user_data_updated_at: 'Updated at',
  user_data_seen_at: 'Seen at',
  user_general_stats: 'General stats',
  user_nb_devices_value: '$nb devices',
  user_nb_codes_value: '$nb codes',
  user_nb_accounts_value: '$nb accounts',
  user_nb_shared_items_value: 'of which $nb shared',
  user_passwords_stats: 'Passwords stats (not shared only)',
  shared_vault_passwords_stats: 'Passwords stats',
  user_passwords_weak: '$nb weak',
  user_passwords_medium: '$nb medium',
  user_passwords_strong: '$nb strong',
  user_passwords_red: '$nb red',
  user_passwords_orange: '$nb orange',
  user_passwords_green: '$nb green',
  user_passwords_duplicated: 'of which $nb duplicated',
  user_delete_warning:
    'Beware, you are about to delete $email and all his data. This is irrerversible.',
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
  password_reset_request_group: 'Bank of safes',
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
  settings_admin_groups: 'Banks of safes',
  sasettings_admin_delete_warning: 'Are you sure you want to revoke this admin?',
  sasettings_admin_change_rights: 'Change rights',
  settings_urls: 'Prefilled websites',
  settings_urls_explanation:
    'The websites you enter here will be offered to users to simplify the registration of their passwords.',
  settings_urls_copiable:
    "A super administrator can easily populate this list from another bank of safes's list if necessary.",
  settings_urls_copy: 'Add the list from another bank of safes',
  settings_urls_choose_group: 'Choose the bank of safes',
  settings_urls_copied_number: 'Copied $n websites',
  settings_urls_new: 'New website',
  settings_urls_name: 'Site name',
  settings_urls_signin_url: 'Signin URL',
  settings_urls_basic_auth: 'HTTP basic authentication',
  settings_urls_basic_auth_details:
    'If the website uses basic authentication, you need to tell it here so the browser extension can automatically connect the user as autofilling cannot work.',
  settings_urls_delete_warning: 'Are your sure?',
  settings_group_admins_title: 'Administrators of this bank of safes',
  settings_group_admins_invite: 'Add and (re)send an invitation if needed',
  settings_group_admin_delete_warning:
    'Are you sure you want to remove the access of this administrator to this bank of safes?',
  settings_group_settings: 'Other settings',
  shared_devices_explanation:
    'This is the list of devices where at least two users have authorized their PRO space.',
  shared_devices_uid: 'Device unique id',
  shared_devices_user_email: 'Email',
  shared_devices_created_at: 'Add date',
  shared_devices_name: 'Device name',
  shared_devices_type: 'Device type',
  shared_devices_status: 'Status',
  shared_devices_last_session: 'Last session',
  shared_account_shared_folder_name: 'Shared folder',
  shared_vault_shared_folder_name: 'Shared vault',
  shared_account_type: 'Type',
  shared_account_items: 'Items',
  shared_account_users: 'Users',
  shared_account_user_creation_date: 'Since',
  shared_account_user_is_manager: 'Manager',
  shared_account_user_actions: 'Actions',
  shared_account_user_delete: 'Delete from sharing',
  shared_account_user_delete_warning:
    'The item $name will no longer be shared with $user.\n\nAre you sure?',
  shared_vault_user_delete_warning:
    'The shared vault $name will no longer be shared with $user.\n\nAre you sure?',
  shared_folder_user_delete_warning:
    'The folder $name will no longer be shared with $user.\n\nAre you sure?',
  shared_account_last_user_warning:
    'THIS IS THE LAST USER WITH ACCESS TO THIS ACCOUNT. THE PASSWORD WILL BE LOST.',
  shared_account_search: 'Search by user email address',
  shared_vault_search: 'Search by user email address',
  shared_account_unit_name: 'Shared accounts',
  shared_vault_unit_name: 'Shared vaults',
  shared_account_manager_note:
    "You can't remove management rights from the last manager of an account or delete him from the share. But you can transfer the management rights to another user.",
  shared_vault_manager_note:
    "You can't remove management rights from the last manager of a shared vault or delete him from the share. But you can transfer the management rights to another user.",
  extracts: 'Extracts',
  extract_database: 'Download all stats into csv file',
  extract_emails_windows_below_6_0_4: "Get emails of all users that have at least one windows device which has a version strictly below 6.0.4.",
  extract_emails_windows_below_6_0_4_empty: "All your windows users are up to date.",
  extract_emails_text: 'Get the list of emails of users matching one of these conditions:',
  extract_emails_duplicates: 'who have at least $n duplicate passwords',
  extract_emails_weak: 'who have at least $n weak passwords',
  extract_emails_medium: 'who have at least $n medium passwords',
  extract_emails_long_unused: "who haven't used UpSignOn since at least $n days",
  extract_emails_shared_device: 'who share at least one of their devices',
  extract_emails: 'Extract emails',
  mail_writer: 'Sending an email',
  mail_writer_to_selection: 'Use recipients from above selection.',
  mail_writer_to_all: 'Send to all vault holders.',
  mail_writer_subject_placeholder: 'Subject',
  mail_writer_placeholder: 'Write your mail here',
  mail_writer_send: 'Send',
  mail_writer_success: 'SUCCESS\n\nMail sent to $n recipients',
  mail_writer_error: 'ERROR\n\n$e',
  mail_writer_empty_fields: 'ERROR\n\nBoth subject and content need to be not empty for sending an email.',
  mail_writer_confirm_send: 'You are about to send an email to $n recipients. Continue?',
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
  chart_type_color_explanation:
    'Password strength as displayed in the application, combining the entropy and the number of reuses of each password.',
  chart_type_entropy: 'By entropy',
  chart_type_entropy_explanation:
    'Password strength considering only entropy, i.e., not considering the number of reuses of a password. This measure does not represent what the user sees in the application.',
  chart_start_date: 'Start date',
  chart_end_date: 'End date',
  chart_automatic_dates: 'Auto. dates',
  chart_usage_title: 'Number of PRO spaces',
  chart_nb_users: 'Nb of users',
  chart_today_button: 'Today',
  useful_links: 'Useful links',
  install_doc_server_pro: 'Installation documentation (server and admin dashboard)',
  install_doc_browser_extension: 'Installation documentation for the browser extensions',
  windows_app_download_link: 'Download of the application for Windows 10',
  to_unzip: 'add the .zip extension to unzip it',
  setup_link: 'Application setup link',
  setup_link_is_group_specific: 'Notice this link is specific to each bank of safes.',
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
  sasettings_superadmins_invite: '(Re)Send an invite (valid for 24h)',
  sasettings_groups: 'Banks of safes',
  sasettings_groups_explanation:
    'Banks of safes are hermetically sealed areas. Users will not be able to share accounts with people outside their bank. This feature is especially useful in the case of business groups that pool their IT resources but want to keep their independence. The same user can have a safe in several banks.',
  sasettings_group_name: 'Bank of safes name',
  sasettings_group_created_at: 'Created on',
  sasettings_group_is_testing: 'Testing',
  sasettings_group_test_expires_at: 'Test expiration date',
  sasettings_group_test_expires_at_never: 'Never',
  sasettings_group_open: 'See',
  sasettings_nb_users: 'Number of users',
  sasettings_nb_licences_sold: 'Licences vendues',
  sasettings_reset_pwd_admin_check:
    'To reset his password, a user must obtain a validation from an administrator of his group',
  sasettings_group_name_change_warning:
    'Notice: bank of safes name changes only affect new devices for now.',
  sasettings_group_delete_warning:
    'Are you sure you want to delete this bank of safes? All safes associated with this bank and the secrets stored in them will be permanently deleted. This action is irreversible!',
  sasetting_confirm_group_delete: 'To confirm, please type exactly "$name"',
  sasettings_admin_make_superadmin: 'Give super-admin rights',
  sasettings_admin_make_non_superadmin: 'Remove super-admin rights',
  sasettings_email_config: 'Sending email configuration',
  sasettings_email_config_use_postfix:
    'Postfix is used to send emails. You have nothing else to configure.',
  sasettings_email_config_use_postfix_check_deliverability:
    'We advise you to check the deliverability of your emails with the free tool',
  sasettings_email_config_label_host: 'SMTP server',
  sasettings_email_config_label_port: 'Port (e.g. 25, 587 or 465)',
  sasettings_email_config_label_user: 'Identifier (usually the same as sending address)',
  sasettings_email_config_label_pass: 'Password',
  sasettings_email_config_label_sending_address: 'Sending email address',
  sasettings_email_config_label_allow_invalid_certificate: 'Allow invalid certificate (dangerous)',
  sasettings_email_config_testing: 'Testing',
  sasettings_email_config_testing_button: 'Send an email to this address',
  sasettings_email_config_testing_alert: 'An email has been sent',
  sasettings_email_config_testing_error_alert: 'Error sending email: $e',
};

export default translations;
