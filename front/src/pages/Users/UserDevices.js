import React from 'react';
import { fetchTemplate } from '../../helpers/fetchTemplate';
import { i18n } from '../../i18n/i18n';
import './userDevice.css';

class UserDevices extends React.Component {
  deleteDeviceWithWarning = async (deviceId) => {
    const confirmation = window.confirm(i18n.t('device_delete_warning'));
    if (confirmation) {
      if (confirmation) {
        try {
          await fetchTemplate(`/api/delete-device/${deviceId}`, 'POST', null);
          await this.props.reloadDevices();
        } catch (e) {
          console.error(e);
        }
      }
    }
  };
  deactivateDeviceWithWarning = async (deviceId) => {
    const confirmation = window.confirm(i18n.t('device_deactivate_warning'));
    if (confirmation) {
      try {
        await fetchTemplate(`/api/deactivate-device/${deviceId}`, 'POST', null);
        await this.props.reloadDevices();
      } catch (e) {
        console.error(e);
      }
    }
  };
  authorizeDeviceWithWarning = async (deviceId) => {
    const confirmation = window.confirm(i18n.t('device_authorize_warning'));
    if (confirmation) {
      if (confirmation) {
        try {
          await fetchTemplate(`/api/authorize-device/${deviceId}`, 'POST', null);
          await this.props.reloadDevices();
        } catch (e) {
          console.error(e);
        }
      }
    }
  };

  render() {
    const passwordResetRequests = this.props.devices.filter((d) => d.pwd_reset_id);
    return (
      <div style={{ margin: '0 20px 20px 20px' }}>
        {passwordResetRequests.length > 0 && (
          <div>
            <h5 className="detailsTitle">{i18n.t('password_reset_requests')}</h5>
            <table>
              <thead>
                <th>{i18n.t('device_name')}</th>
                <th>{i18n.t('password_reset_request_status')}</th>
                <th>{i18n.t('actions')}</th>
              </thead>
              <tbody>
                {passwordResetRequests.map((d) => {
                  const isPendingAdminCheck = d.pwd_reset_status === 'PENDING_ADMIN_CHECK';
                  const expTime = new Date(d.reset_token_expiration_date);
                  const isExpired = !!d.reset_token_expiration_date
                    ? expTime < new Date().getTime()
                    : false;
                  return (
                    <tr>
                      <td>{d.device_name}</td>
                      <td>
                        <div>{d.pwd_reset_status}</div>
                        <div>
                          {isExpired
                            ? i18n.t('password_reset_request_expired')
                            : i18n.t('password_reset_request_valid_until', {
                                date: expTime.toLocaleString(),
                              })}
                        </div>
                      </td>
                      <td>
                        <div className="action">{i18n.t('password_reset_request_delete')}</div>
                        <div className="action">{i18n.t('password_reset_request_grant')}</div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <h5 className="detailsTitle">{i18n.t('devices_for_user', { email: this.props.email })}</h5>
        <table>
          <thead>
            <tr>
              <th>{i18n.t('device_name')}</th>
              <th>{i18n.t('device_app_version')}</th>
              <th>{i18n.t('device_type')}</th>
              <th>{i18n.t('device_status')}</th>
              <th>{i18n.t('device_last_session')}</th>
              <th>{i18n.t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {this.props.devices.map((d) => {
              const isAuthorized = d.authorization_status === 'AUTHORIZED';
              const isRevokedByUser = d.authorization_status === 'REVOKED_BY_USER';
              return (
                <tr key={d.id}>
                  <td>{d.device_name}</td>
                  <td>{d.app_version}</td>
                  <td>
                    <div>{d.device_type}</div>
                    <div>{d.os_version}</div>
                  </td>
                  <td>
                    <div className={!isAuthorized ? 'unauthorizedDevice' : ''}>
                      {d.authorization_status}
                    </div>
                    {!isAuthorized && d.revocation_date != null && (
                      <div>{new Date(d.revocation_date).toLocaleString()}</div>
                    )}
                  </td>
                  <td>{new Date(d.last_session).toLocaleString()}</td>
                  <td>
                    <div className="action" onClick={() => this.deleteDeviceWithWarning(d.id)}>
                      {i18n.t('device_delete')}
                    </div>
                    {isAuthorized && (
                      <div
                        className="action"
                        onClick={() => this.deactivateDeviceWithWarning(d.id)}
                      >
                        {i18n.t('device_deactivate')}
                      </div>
                    )}
                    {!isAuthorized && !isRevokedByUser && (
                      <div className="action" onClick={() => this.authorizeDeviceWithWarning(d.id)}>
                        {i18n.t('device_authorize')}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export { UserDevices };
