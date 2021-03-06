import React from 'react';
import { EditableCell } from '../../helpers/EditableCell';
import { frontUrl } from '../../helpers/env';
import { groupUrlFetch } from '../../helpers/urlFetch';
import { PaginationBar } from '../../helpers/paginationBar';
import { i18n } from '../../i18n/i18n';
import { UserDevices } from './UserDevices';
import './users.css';
import { Toggler } from '../../helpers/Toggler';
import { getDateBack1Month, getDateBack2Weeks } from '../../helpers/dateHelper';

const maxRenderedItems = 50;

// Props = setIsLoading, totalCount
class Users extends React.Component {
  searchInput = null;

  state = {
    userCount: 0,
    users: [],
    limit: maxRenderedItems,
    pageIndex: 1,
    sortingType: 0,
  };
  getCurrentQueryParameters = () => {
    const queryParamsArray = window.location.search
      .replace(/^\?/, '')
      .split('&')
      .map((p) => p.split('='));
    const queryParams = {};
    queryParamsArray.forEach((qp) => {
      if (qp.length === 2) queryParams[qp[0]] = qp[1];
    });
    return queryParams;
  };
  loadUsers = async () => {
    try {
      this.props.setIsLoading(true);
      const queryParams = this.getCurrentQueryParameters();
      const limit = parseInt(queryParams.limit, 10) || maxRenderedItems;
      const pageIndex = parseInt(queryParams.pageIndex, 10) || 1;
      const sortingType = parseInt(queryParams.sortingType, 10) || 0;
      const { users, userCount } = await groupUrlFetch(
        `/api/users?pageIndex=${pageIndex}&limit=${limit}&sortingType=${sortingType}`,
        'GET',
        null,
      );
      this.setState({ users, userCount, limit, pageIndex, sortingType });
    } catch (e) {
      console.error(e);
    } finally {
      this.props.setIsLoading(false);
    }
  };

  deleteUserWithWarning = async (userId, userEmail) => {
    const confirmation = window.confirm(i18n.t('user_delete_warning', { email: userEmail }));
    if (confirmation) {
      try {
        this.props.setIsLoading(true);
        await groupUrlFetch(`/api/delete-user/${userId}`, 'POST', null);
        await this.loadUsers();
      } catch (e) {
        console.error(e);
      } finally {
        this.props.setIsLoading(false);
      }
    }
  };

  loadUserDevices = async (userId) => {
    try {
      this.props.setIsLoading(true);
      const devices = await groupUrlFetch(`/api/user-devices/${userId}`, 'GET', null);
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
    } finally {
      this.props.setIsLoading(false);
    }
  };
  closeUserDevices = async (userId) => {
    this.setState((s) => {
      return {
        ...s,
        users: s.users.map((u) => {
          if (u.user_id === userId) {
            return { ...u, devices: undefined };
          } else {
            return u;
          }
        }),
      };
    });
  };

  componentDidMount() {
    this.loadUsers();
  }

  goToPageIndex = (p) => {
    window.location.href = `${frontUrl}/users/?limit=${this.state.limit}&pageIndex=${p}&sortingType=${this.state.sortingType}`;
  };
  toggleSorting = (sortByTime) => {
    window.location.href = `${frontUrl}/users/?limit=${this.state.limit}&pageIndex=${
      this.state.pageIndex
    }&sortingType=${sortByTime ? 1 : 0}`;
  };

  onSearch = async (ev) => {
    const searchText = ev.target.value;
    // if search is emptied, reload all
    if (!searchText) {
      return this.loadUsers();
    }
    try {
      this.props.setIsLoading(true);
      const limit = 50;
      const pageIndex = 1;
      const { users, userCount } = await groupUrlFetch(
        `/api/users?search=${searchText}&pageIndex=${pageIndex}&limit=${limit}&sortingType=${this.state.sortingType}`,
        'GET',
        null,
      );
      this.setState({ users, userCount, limit, pageIndex });
    } catch (e) {
      console.error(e);
    } finally {
      this.props.setIsLoading(false);
    }
  };

  onChangeEmail = async (userId, oldEmail, newEmail) => {
    if (oldEmail !== newEmail) {
      const confirmation = window.confirm(
        i18n.t('user_change_email_confirm', { oldEmail, newEmail }),
      );
      if (confirmation) {
        try {
          await groupUrlFetch('/api/update-user-email', 'POST', { userId, oldEmail, newEmail });
          this.setState((s) => ({
            ...s,
            users: s.users.map((u) => {
              if (u.user_id === userId) {
                return { ...u, email: newEmail };
              } else {
                return u;
              }
            }),
          }));
        } catch (e) {
          console.error(e);
          window.alert(i18n.t('user_email_already_used', { email: newEmail }));
        }
      }
    }
  };

  render() {
    const searchInputStyle = { width: 200 };
    if (this.state.users.length === 0 && !!this.searchInput?.value) {
      searchInputStyle.borderColor = 'red';
    } else if (this.state.users.length === 1 && !!this.searchInput?.value) {
      searchInputStyle.borderColor = 'green';
    }
    return (
      <div className="page">
        <h1>{`${i18n.t('menu_users')} - ${i18n.t('total_count', {
          count: this.props.totalCount,
        })}`}</h1>
        <div style={{ marginBottom: 15 }}>
          {this.state.sortingType === 0
            ? i18n.t('user_sorting_by_vuln')
            : i18n.t('user_sorting_by_time')}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div>{i18n.t('user_search')}</div>
            <input
              ref={(r) => (this.searchInput = r)}
              type="search"
              style={searchInputStyle}
              placeholder="email@domain.com"
              onChange={this.onSearch}
            />
          </div>
          <Toggler
            choices={[
              {
                key: 'vuln',
                title: i18n.t('user_sort_by_vuln'),
                isCurrent: this.state.sortingType === 0,
              },
              {
                key: 'time',
                title: i18n.t('user_sort_by_time'),
                isCurrent: this.state.sortingType !== 0,
              },
            ]}
            onSelect={(choice) => this.toggleSorting(choice === 'time')}
          />
        </div>
        <PaginationBar
          pageIndex={this.state.pageIndex}
          limit={this.state.limit}
          totalCount={this.state.userCount}
          onClick={this.goToPageIndex}
          itemUnitName={i18n.t('user_unit_name')}
        />
        <table>
          <thead>
            <tr>
              <th>{i18n.t('user_email')}</th>
              <th>{i18n.t('user_data')}</th>
              <th style={{ width: 150 }}>{i18n.t('user_general_stats')}</th>
              <th style={{ width: 150 }}>{i18n.t('user_passwords_stats')}</th>
              <th>{i18n.t('actions')}</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((u) => {
              let lastSessionStyle = {};
              if (this.state.sortingType !== 0) {
                const isLastSessionOld = new Date(u.last_session) < getDateBack2Weeks();
                const isLastSessionVeryOld = new Date(u.last_session) < getDateBack1Month();
                lastSessionStyle = {
                  fontWeight: 'bold',
                  backgroundColor: isLastSessionVeryOld
                    ? 'red'
                    : isLastSessionOld
                    ? 'orange'
                    : 'green',
                  color: 'white',
                  padding: '0 3px',
                };
              }
              return (
                <React.Fragment key={u.user_id}>
                  <tr>
                    <EditableCell
                      value={u.email}
                      placeholder="email@domain.fr"
                      onChange={(newEmail) => {
                        if (!newEmail) return;
                        this.onChangeEmail(u.user_id, u.email, newEmail);
                      }}
                    />
                    <td>
                      <div style={{ fontSize: 12 }}>{`${Math.round(u.data_length / 1000)}ko`}</div>
                      <div>
                        {i18n.t('user_data_updated_at')}{' '}
                        <span style={{ fontSize: 12 }}>
                          {new Date(u.updated_at).toLocaleString()}
                        </span>
                      </div>
                      <div>
                        {i18n.t('user_data_seen_at')}{' '}
                        <span style={{ fontSize: 12, ...lastSessionStyle }}>
                          {new Date(u.last_session).toLocaleString()}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div
                        className={u.nb_devices > 0 && 'action'}
                        onClick={() => this.loadUserDevices(u.user_id)}
                      >
                        {i18n.t('user_nb_devices_value', { nb: u.nb_devices || 0 })}
                      </div>
                      <div>{i18n.t('user_nb_codes_value', { nb: u.nb_codes || 0 })}</div>
                      <div>{i18n.t('user_nb_accounts_value', { nb: u.nb_accounts || 0 })}</div>
                      <div>
                        {u.nb_shared_items &&
                          i18n.t('user_nb_shared_items_value', { nb: u.nb_shared_items || 0 })}
                      </div>
                    </td>
                    <td>
                      <div style={{ display: 'flex', flexWrap: 'nowrap', flexDirection: 'row' }}>
                        <div
                          style={{
                            paddingRight: 10,
                            borderRight: '1px solid #eee',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          <div className={`tag ${u.nb_accounts_strong > 0 && 'positiveStrong'}`}>
                            {i18n.t('user_passwords_strong', { nb: u.nb_accounts_strong || 0 })}
                          </div>
                          <div className={`tag ${u.nb_accounts_medium > 0 && 'positiveMedium'}`}>
                            {i18n.t('user_passwords_medium', { nb: u.nb_accounts_medium || 0 })}
                          </div>
                          <div className={`tag ${u.nb_accounts_weak > 0 && 'positiveWeak'}`}>
                            {i18n.t('user_passwords_weak', { nb: u.nb_accounts_weak || 0 })}
                          </div>
                        </div>
                        <div style={{ paddingLeft: 10, whiteSpace: 'nowrap' }}>
                          <div className={`tag ${u.nb_accounts_green > 0 && 'positiveStrong'}`}>
                            {i18n.t('user_passwords_green', { nb: u.nb_accounts_green || 0 })}
                          </div>
                          <div className={`tag ${u.nb_accounts_orange > 0 && 'positiveMedium'}`}>
                            {i18n.t('user_passwords_orange', { nb: u.nb_accounts_orange || 0 })}
                          </div>
                          <div className={`tag ${u.nb_accounts_red > 0 && 'positiveWeak'}`}>
                            {i18n.t('user_passwords_red', { nb: u.nb_accounts_red || 0 })}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ borderTop: '1px solid #eee' }}
                        className={`tag ${
                          u.nb_accounts_with_duplicate_password > 0 && 'positiveReused'
                        }`}
                      >
                        {i18n.t('user_passwords_duplicated', {
                          nb: u.nb_accounts_with_duplicate_password || 0,
                        })}
                      </div>
                    </td>
                    <td>
                      <div
                        className="action"
                        onClick={() => this.deleteUserWithWarning(u.user_id, u.email)}
                      >
                        {i18n.t('delete')}
                      </div>
                    </td>
                  </tr>
                  {u.devices && (
                    <tr className="detailContainer">
                      <td colSpan={6}>
                        <UserDevices
                          setIsLoading={this.props.setIsLoading}
                          devices={u.devices}
                          email={u.email}
                          reloadDevices={() => this.loadUserDevices(u.user_id)}
                          close={() => this.closeUserDevices(u.user_id)}
                        />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
        <PaginationBar
          pageIndex={this.state.pageIndex}
          limit={this.state.limit}
          totalCount={this.state.userCount}
          onClick={this.goToPageIndex}
          itemUnitName={i18n.t('user_unit_name')}
        />
      </div>
    );
  }
}

export { Users };
