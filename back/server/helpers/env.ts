import fs from 'fs';

const {
  DB_USER,
  DB_PASS,
  DB_NAME,
  DB_HOST,
  DB_PORT,
  NODE_ENV,
  SERVER_PORT,
  SSL_CERTIFICATE_KEY_PATH, // DEPRECATED
  SSL_CERTIFICATE_CRT_PATH, // DEPRECATED
  LOCALHOST_SSL_CERTIFICATE_KEY_PATH,
  LOCALHOST_SSL_CERTIFICATE_CRT_PATH,
  SESSION_SECRET,
  SERVER_URL,
  DEV_FALLBACK_ADMIN_URL,
  HTTP_PROXY,
  EMAIL_ALLOW_INVALID_CERTIFICATE,
  USE_POSTFIX,
  DKIM_HOSTNAME, // DEPRECATED
  SENDING_MAIL,
  DKIM_KEY_SELECTOR,
  DKIM_PRIVATE_KEY_PATH,
} = process.env;

let DKIM_PRIVATE_KEY;
if (!!USE_POSTFIX && !!DKIM_PRIVATE_KEY_PATH) {
  DKIM_PRIVATE_KEY = fs.readFileSync(DKIM_PRIVATE_KEY_PATH);
}

export default {
  IS_PRODUCTION: NODE_ENV !== 'development',
  DB_HOST,
  DB_PORT: DB_PORT ? Number.parseInt(DB_PORT, 10) : 5432,
  DB_USER,
  DB_NAME,
  DB_PASS,
  SERVER_PORT: SERVER_PORT ? Number.parseInt(SERVER_PORT, 10) : 3001,
  LOCALHOST_SSL_CERTIFICATE_KEY_PATH:
    LOCALHOST_SSL_CERTIFICATE_KEY_PATH || SSL_CERTIFICATE_KEY_PATH || '',
  LOCALHOST_SSL_CERTIFICATE_CRT_PATH:
    LOCALHOST_SSL_CERTIFICATE_CRT_PATH || SSL_CERTIFICATE_CRT_PATH || '',
  SESSION_SECRET,
  SERVER_URL: SERVER_URL?.replace(/\/$/, ''),
  DEV_FALLBACK_ADMIN_URL,
  HTTP_PROXY,
  EMAIL_ALLOW_INVALID_CERTIFICATE,
  USE_POSTFIX,
  SENDING_MAIL: SENDING_MAIL || `ne-pas-repondre@${DKIM_HOSTNAME}`,
  DKIM_KEY_SELECTOR,
  DKIM_PRIVATE_KEY,
};
