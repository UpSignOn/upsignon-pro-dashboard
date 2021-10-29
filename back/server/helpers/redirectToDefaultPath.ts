import env from './env';

export const redirectToDefaultPath = (req: any, res: any): void => {
  const isSuperadmin = req.session.isSuperadmin;
  const groupId = req.session.groupId;
  const defaultPath = isSuperadmin ? 'superadmin' : groupId;

  if (env.IS_PRODUCTION) {
    res.redirect(303, env.SERVER_URL + '/' + defaultPath + '/');
  } else {
    res.redirect(303, `${req.protocol}://${req.headers.host.replace(/\/$/, '')}/${defaultPath}/`);
  }
};
