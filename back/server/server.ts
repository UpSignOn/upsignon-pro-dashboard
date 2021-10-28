/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../.env') });

import express from 'express';
import { startServer } from './helpers/serverProcess';
import { logError, logInfo } from './helpers/logger';
import { apiRouter } from './api/apiRouter';
import env from './helpers/env';
import expressSession from 'express-session';
import SessionStore from './helpers/sessionStore';
import { loginRouter } from './login/loginRouter';
import { get_available_groups } from './helpers/get_available_groups';
import { checkGroupAuthorization } from './helpers/checkGroupAuthorization';
import { superadminApiRouter } from './superadminapi/superadminApiRouter';
import { get_server_url } from './helpers/get_server_url';
import { disconnect } from './helpers/disconnect';
import { redirectToDefaultPath } from './helpers/redirectToDefaultPath';

const app = express();

// Set express trust-proxy so that secure sessions cookies can work
app.set('trust proxy', 1);
app.disable('x-powered-by');
// Configure sessions
app.use(
  expressSession({
    cookie: {
      path: '/',
      httpOnly: true,
      secure: env.IS_PRODUCTION,
      maxAge: 3600000, // one hour
      sameSite: env.IS_PRODUCTION ? 'strict' : 'lax',
    },
    name: 'upsignon_dashboard_session',
    // @ts-ignore
    secret: env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    unset: 'destroy',
    store: new SessionStore(),
  }),
);
if (!env.IS_PRODUCTION) {
  app.use((req, res, next) => {
    // @ts-ignore
    req.session?.adminEmail = env.DEV_FALLBACK_ADMIN_URL;
    next();
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static('../front/build'));
app.get('/login.html', (req, res) => {
  res.status(200).sendFile('login.html', {
    root: path.resolve('../front/build'),
    dotfiles: 'deny',
  });
});
app.use('/login/', loginRouter);

app.use((req, res, next) => {
  // @ts-ignore
  const adminEmail = req.session?.adminEmail;
  logInfo(adminEmail || 'unconnected user', req.method, req.url);
  if (!env.IS_PRODUCTION) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  }

  // Check Auth
  const isLoginRoute = req.url.startsWith('/login');
  if (!adminEmail && !isLoginRoute) {
    try {
      return res.status(401).end();
    } catch (e) {
      logError(e);
      return res.status(404).end();
    }
  } else {
    next();
  }
});

// ROUTES THAT ARE AVAILABLE TO ALL ADMINS
app.get('/get_available_groups', get_available_groups);
app.get('/server_url', get_server_url);

// SUPERADMIN
app.use('/superadmin/', (req, res, next) => {
  // @ts-ignore
  if (!req.session?.isSuperadmin) return redirectToDefaultPath(req, res);
  return express.static('../front/build')(req, res, next);
});
app.use('/superadmin-api/', superadminApiRouter);
app.use('/disconnect/', disconnect);

// GROUP ROUTING
app.use('/:groupId/', express.static('../front/build'));
app.use('/:groupId/users/', express.static('../front/build'));
app.use('/:groupId/shared_devices/', express.static('../front/build'));
app.use('/:groupId/shared_accounts/', express.static('../front/build'));
app.use('/:groupId/settings/', express.static('../front/build'));

app.use('/:groupId/api/', async (req, res, next) => {
  // GROUP AUTHORIZATION
  const isGroupAuthorized = await checkGroupAuthorization(req, res);
  if (isGroupAuthorized) {
    return apiRouter(req, res, next);
  } else {
    return res.status(401).end();
  }
});

// START
if (module === require.main) {
  startServer(app, () => {});
}

module.exports = app;
