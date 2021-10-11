import React from 'react';
import { fetchTemplate } from '../../helpers/fetchTemplate';
import { i18n } from '../../i18n/i18n';

// Props = setIsLoading
class SharedDevices extends React.Component {
  state = {
    sharedDevices: [],
    count: 0,
  };
  getCount = async () => {
    try {
      const count = await fetchTemplate('/api/count-shared-devices', 'GET', null);
      this.setState({ count });
    } catch (e) {
      console.error(e);
    }
  };
  getSharedDevices = async () => {
    try {
      this.props.setIsLoading(true);
      const devices = await fetchTemplate('/api/shared-devices', 'GET', null);
      const deviceGroups = {};
      devices.forEach((d) => {
        if (!deviceGroups[d.unique_id]) {
          deviceGroups[d.unique_id] = [];
        }
        deviceGroups[d.unique_id].push(d);
      });
      const sharedDevices = Object.keys(deviceGroups).map((uid) => {
        return { unique_id: uid, users: deviceGroups[uid] };
      });
      this.setState({ sharedDevices });
    } catch (e) {
      console.error(e);
    } finally {
      this.props.setIsLoading(false);
    }
  };
  componentDidMount() {
    this.getSharedDevices();
    this.getCount();
  }
  render() {
    return (
      <div className="page">
        <h1>{`${i18n.t('menu_shared_devices')} - ${this.state.count}`}</h1>
        <div style={{ marginBottom: 20 }}>{i18n.t('shared_devices_explanation')}</div>
        <table>
          <thead>
            <tr>
              <th style={{ maxWidth: 150 }}>{i18n.t('shared_devices_uid')}</th>
              <th>{i18n.t('shared_devices_user_email')}</th>
              <th>{i18n.t('shared_devices_created_at')}</th>
              <th>{i18n.t('shared_devices_name')}</th>
              <th>{i18n.t('shared_devices_type')}</th>
              <th>{i18n.t('shared_devices_status')}</th>
              <th>{i18n.t('shared_devices_last_session')}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sharedDevices.map((sd) => {
              return (
                <React.Fragment key={sd.unique_id}>
                  {sd.users.map((u, i) => {
                    return (
                      <tr key={u.email}>
                        {i === 0 ? (
                          <td style={{ maxWidth: 150 }} rowSpan={sd.users.length}>
                            {sd.unique_id}
                          </td>
                        ) : null}
                        <td>{u.email}</td>
                        <td>{new Date(u.created_at).toLocaleDateString()}</td>
                        <td>{u.name}</td>
                        <td>{u.type}</td>
                        <td>
                          <div
                            className={
                              u.authorization_status !== 'AUTHORIZED' ? 'unauthorizedDevice' : ''
                            }
                          >
                            {u.authorization_status}
                          </div>
                          {u.revocation_date && (
                            <div>{new Date(u.revocation_date).toLocaleString()}</div>
                          )}
                        </td>
                        <td>{new Date(u.last_session).toLocaleString()}</td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
          <thead>
            <tr>
              <th style={{ maxWidth: 150 }}>{i18n.t('shared_devices_uid')}</th>
              <th>{i18n.t('shared_devices_user_email')}</th>
              <th>{i18n.t('shared_devices_created_at')}</th>
              <th>{i18n.t('shared_devices_name')}</th>
              <th>{i18n.t('shared_devices_type')}</th>
              <th>{i18n.t('shared_devices_status')}</th>
              <th>{i18n.t('shared_devices_last_session')}</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export { SharedDevices };
