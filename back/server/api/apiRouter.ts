import express from 'express';
import { authorize_device } from './authorize_device';
import { deactivate_device } from './deactivate_device';
import { delete_allowed_email } from './delete_allowed_email';
import { delete_device } from './delete_device';
import { delete_pwd_reset_request } from './delete_pwd_reset_request';
import { delete_url } from './delete_url';
import { delete_user } from './delete_user';
import { get_allowed_emails } from './get_allowed_emails';
import { get_settings } from './get_settings';
import { get_shared_devices } from './get_shared_devices';
import { get_urls } from './get_urls';
import { get_users } from './get_users';
import { get_user_devices } from './get_user_devices';
import { grant_pwd_reset_request } from './grant_pwd_reset_request';
import { insert_allowed_email } from './insert_allowed_email';
import { insert_url } from './insert_url';
import { update_allowed_email } from './update_allowed_email';
import { update_setting } from './update_setting';
import { update_url } from './update_url';

export const apiRouter = express.Router();

apiRouter.get('/users', get_users);
apiRouter.post('/delete-user/:userId', delete_user);
apiRouter.get('/user-devices/:userId', get_user_devices);
apiRouter.post('/delete-device/:deviceId', delete_device);
apiRouter.post('/deactivate-device/:deviceId', deactivate_device);
apiRouter.post('/authorize-device/:deviceId', authorize_device);
apiRouter.post('/delete-pwd-reset-request/:requestId', delete_pwd_reset_request);
apiRouter.post('/grant-pwd-reset-request/:requestId', grant_pwd_reset_request);
apiRouter.get('/settings', get_settings);
apiRouter.post('/setting', update_setting);
apiRouter.get('/allowed-emails', get_allowed_emails);
apiRouter.post('/delete-allowed-email/:id', delete_allowed_email);
apiRouter.post('/update-allowed-email', update_allowed_email);
apiRouter.post('/insert-allowed-email', insert_allowed_email);
apiRouter.get('/urls', get_urls);
apiRouter.post('/delete-url/:id', delete_url);
apiRouter.post('/update-url', update_url);
apiRouter.post('/insert-url', insert_url);
apiRouter.get('/shared-devices', get_shared_devices);
