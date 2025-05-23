export const settingsConfig = {
  DISABLE_MANUAL_VALIDATION_FOR_PASSWORD_FORGOTTEN: {
    groupsTitle: 'sasettings_disable_reset_pwd_manual_admin_check',
    recommendedValue: false,
    userTitle: null,
  },
  DISABLE_OFFLINE_MODE_DEFAULT_DESKTOP: {
    groupsTitle: 'sasettings_disable_offline_desktop',
    recommendedValue: false,
    userTitle: 'user_allowed_offline_desktop',
    reverseMeaningForUser: true,
    dbNameForUser: 'allowed_offline_desktop',
  },
  DISABLE_OFFLINE_MODE_DEFAULT_MOBILE: {
    groupsTitle: 'sasettings_disable_offline_mobile',
    recommendedValue: false,
    userTitle: 'user_allowed_offline_mobile',
    reverseMeaningForUser: true,
    dbNameForUser: 'allowed_offline_mobile',
  },
  ALLOWED_TO_EXPORT: {
    groupsTitle: 'sasettings_allow_csv_export',
    recommendedValue: false,
    userTitle: 'user_allowed_csv_export',
    reverseMeaningForUser: false,
    dbNameForUser: 'allowed_to_export',
  },
  ALLOWED_WINDOWS: {
    groupsTitle: 'sasettings_allow_windows',
    recommendedValue: true,
    userTitle: 'user_allow_windows',
    reverseMeaningForUser: false,
  },
  ALLOWED_MACOS: {
    groupsTitle: 'sasettings_allow_macos',
    recommendedValue: true,
    userTitle: 'user_allow_macos',
    reverseMeaningForUser: false,
  },
  ALLOWED_LINUX: {
    groupsTitle: 'sasettings_allow_linux',
    recommendedValue: true,
    userTitle: 'user_allow_linux',
    reverseMeaningForUser: false,
  },
  ALLOWED_IOS: {
    groupsTitle: 'sasettings_allow_ios',
    recommendedValue: true,
    userTitle: 'user_allow_ios',
    reverseMeaningForUser: false,
  },
  ALLOWED_ANDROID: {
    groupsTitle: 'sasettings_allow_android',
    recommendedValue: true,
    userTitle: 'user_allow_android',
    reverseMeaningForUser: false,
  },
  REQUIRE_ADMIN_CHECK_FOR_SECOND_DEVICE: {
    groupsTitle: 'sasettings_require_admin_check_for_second_device',
    recommendedValue: false,
    userTitle: null,
  },
  PREVENT_UPDATE_POPUP: {
    groupsTitle: 'sasettings_prevent_update_popup',
    recommendedValue: false,
    userTitle: null,
  },
  ALLOW_UNSAFE_BROWSER_SETUP: {
    groupsTitle: 'sasettings_allow_unsafe_browser_setup',
    recommendedValue: false,
    userTitle: 'user_allow_unsafe_browser_setup',
  },
};

// NB :
//  - When null, the value will be considered as "recommendedValue"
const autolockDelaysDesktop = [
  { title: '0s', seconds: 0 },
  { title: '30s', seconds: 30 },
  { title: '45s', seconds: 45 },
  { title: '1min', seconds: 60 },
  { title: '3min', seconds: 180 },
  { title: '5min', seconds: 300 },
  { title: '15min', seconds: 900 },
  { title: '30min', seconds: 1800 },
  { title: '1h', seconds: 3600 },
  { title: '3h', seconds: 10800 },
  { title: '6h', seconds: 21600 },
  { title: '12h', seconds: 43200 },
];
const autolockDelaysMobile = [
  { title: '0s', seconds: 0 },
  { title: '30s', seconds: 30 },
  { title: '45s', seconds: 45 },
  { title: '1min', seconds: 60 },
  { title: '3min', seconds: 180 },
  { title: '5min', seconds: 300 },
  { title: '15min', seconds: 900 },
  { title: '30min', seconds: 1800 },
];
export const autolockDelaySettings = {
  DEFAULT_AUTOLOCK_DELAY_DESKTOP: {
    groupsTitle: 'sasettings_default_autolock_delay_desktop',
    recommendedOption: 1800, // 30'
    options: autolockDelaysDesktop,
    maxSettingKey: 'MAX_AUTOLOCK_DELAY_DESKTOP',
  },
  MAX_AUTOLOCK_DELAY_DESKTOP: {
    groupsTitle: 'sasettings_max_autolock_delay_desktop',
    recommendedOption: 43200, // 12h
    options: autolockDelaysDesktop,
    defaultSettingKey: 'DEFAULT_AUTOLOCK_DELAY_DESKTOP',
  },
  DEFAULT_AUTOLOCK_DELAY_MOBILE: {
    groupsTitle: 'sasettings_default_autolock_delay_mobile',
    recommendedOption: 30, // 30"
    options: autolockDelaysMobile,
    maxSettingKey: 'MAX_AUTOLOCK_DELAY_MOBILE',
  },
  MAX_AUTOLOCK_DELAY_MOBILE: {
    groupsTitle: 'sasettings_max_autolock_delay_mobile',
    recommendedOption: 1800, // 30'
    options: autolockDelaysMobile,
    defaultSettingKey: 'DEFAULT_AUTOLOCK_DELAY_MOBILE',
  },
};
