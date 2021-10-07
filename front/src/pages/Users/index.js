import React from 'react';
import { fetchTemplate } from '../../helpers/fetchTemplate';
import { i18n } from '../../i18n/i18n';
import { UserDevices } from './UserDevices';
import './users.css';

class Users extends React.Component {
  state = {
    users: [],
    isLoading: true,
  };
  async loadUsers() {
    try {
      const users = await fetchTemplate('/api/users', 'GET', null);
      this.setState({ users });
    } catch (e) {
      console.error(e);
    } finally {
      this.setState({ isLoading: false });
    }
  }
  async deleteUser(userId) {
    this.setState({ isLoading: true });
    try {
      await fetchTemplate(`/api/delete-user/${userId}`, 'POST', null);
      await this.loadUsers();
    } catch (e) {
      console.error(e);
      this.setState({ isLoading: false });
    }
  }

  showDeleteWarning(userId, userEmail) {
    const confirmation = window.confirm(i18n.t('user_delete_warning', { email: userEmail }));
    if (confirmation) {
      this.deleteUser(userId);
    }
  }

  async showUserDevices(userId) {
    try {
      const devices = await fetchTemplate(`/api/user-devices/${userId}`, 'GET', null);
      this.setState((s) => {
        return {
          ...s,
          users: s.users.map((u) => {
            if (u.user_id === userId) {
              return { ...u, devices };
            } else {
              return u;
            }
          }),
        };
      });
    } catch (e) {
      console.error(e);
    }
  }

  componentDidMount() {
    this.loadUsers();
  }

  render() {
    return (
      <div>
        <h1>{i18n.t('menu_users')}</h1>
        {this.state.isLoading && <div>{i18n.t('loading')}</div>}
        <table>
          <thead>
            <tr>
              <th>{i18n.t('user_email')}</th>
              <th>{i18n.t('user_data')}</th>
              <th>{i18n.t('user_nb_devices')}</th>
              <th style={{ width: 150 }}>{i18n.t('user_nb_codes_and_accounts')}</th>
              <th style={{ width: 150 }}>{i18n.t('user_passwords_stats')}</th>
              <th>{i18n.t('user_actions')}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((u) => {
              return (
                <React.Fragment>
                  <tr key={u.user_id}>
                    <td>{u.email}</td>
                    <td>
                      <div>{`${Math.round(u.data_length / 1000)}ko`}</div>
                      <div>{new Date(u.updated_at).toLocaleString()}</div>
                    </td>
                    <td>
                      <div
                        className={u.nb_devices > 0 && 'action'}
                        onClick={() => this.showUserDevices(u.user_id)}
                      >
                        {i18n.t('user_nb_devices_value', { nb: u.nb_devices || 0 })}
                      </div>
                    </td>
                    <td>
                      <div>{i18n.t('user_nb_codes_value', { nb: u.nb_codes || 0 })}</div>
                      <div>{i18n.t('user_nb_accounts_value', { nb: u.nb_accounts || 0 })}</div>
                      <div>
                        {u.nb_shared_items &&
                          i18n.t('user_nb_shared_items_value', { nb: u.nb_shared_items || 0 })}
                      </div>
                    </td>
                    <td>
                      <div className={`tag ${u.nb_accounts_weak > 0 && 'positiveWeak'}`}>
                        {i18n.t('user_passwords_weak', { nb: u.nb_accounts_weak || 0 })}
                      </div>
                      <div className={`tag ${u.nb_accounts_medium > 0 && 'positiveMedium'}`}>
                        {i18n.t('user_passwords_medium', { nb: u.nb_accounts_medium || 0 })}
                      </div>
                      <div className={`tag ${u.nb_accounts_strong > 0 && 'positiveStrong'}`}>
                        {i18n.t('user_passwords_strong', { nb: u.nb_accounts_strong || 0 })}
                      </div>
                      <div className={`tag ${u.nb_accounts_reused > 0 && 'positiveReused'}`}>
                        {i18n.t('user_passwords_reused', {
                          nb: u.nb_accounts_with_duplicate_password || 0,
                        })}
                      </div>
                    </td>
                    <td>
                      <div
                        className="action"
                        onClick={() => this.showDeleteWarning(u.user_id, u.email)}
                      >
                        {i18n.t('user_action_delete')}
                      </div>
                    </td>
                  </tr>
                  {u.devices && (
                    <tr colspan={6}>
                      <UserDevices devices={u.devices} />
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export { Users };
