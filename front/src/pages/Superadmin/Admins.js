import React from 'react';
import { baseUrlFetch, groupUrlFetch } from '../../helpers/urlFetch';
import { i18n } from '../../i18n/i18n';

// Props : setIsLoading, groups
class Admins extends React.Component {
  state = {
    admins: [],
    newAdminIsSuperadmin: false,
    visibleAdminChangeRightsView: [],
  };
  newInputRef = null;
  adminOrder = null;

  fetchAdmins = async () => {
    try {
      const adminEmails = await groupUrlFetch('/api/admins', 'GET', null);
      if (!this.adminOrder) {
        this.adminOrder = [];
      }
      this.setState({
        admins: adminEmails.sort((a, b) => {
          if (this.adminOrder.indexOf(a.id) === -1) {
            this.adminOrder.push(a.id);
          }
          if (this.adminOrder.indexOf(b.id) === -1) {
            this.adminOrder.push(b.id);
          }
          const idxA = this.adminOrder.indexOf(a.id);
          const idxB = this.adminOrder.indexOf(b.id);
          if (idxA < idxB) return -1;
          else return 1;
        }),
      });
    } catch (e) {
      console.error(e);
    }
  };
  insertAdmin = async () => {
    try {
      this.props.setIsLoading(true);
      const newEmail = this.newInputRef.value;
      if (!newEmail) {
        this.newInputRef.style.borderColor = 'red';
        return;
      } else {
        this.newInputRef.style.borderColor = null;
      }
      await groupUrlFetch('/api/insert-admin', 'POST', {
        newEmail,
        isSuperadmin: this.state.newAdminIsSuperadmin,
      });
      await this.fetchAdmins();
      this.newInputRef.value = null;
      this.setState({ newAdminIsSuperadmin: false });
    } catch (e) {
      console.error(e);
    } finally {
      this.props.setIsLoading(false);
    }
  };
  updateAdminGroup = async (adminId, groupId, willBelongToGroup) => {
    try {
      this.props.setIsLoading(true);
      await groupUrlFetch('/api/update-admin-group', 'POST', {
        adminId,
        groupId,
        willBelongToGroup,
      });
      await this.fetchAdmins();
    } catch (e) {
      console.error(e);
    } finally {
      this.props.setIsLoading(false);
    }
  };
  changeSuperadminStatus = async (adminId, willBeSuperadmin) => {
    try {
      this.props.setIsLoading(true);
      await groupUrlFetch('/api/update-superadmin-status', 'POST', {
        adminId,
        willBeSuperadmin,
      });
      await this.fetchAdmins();

      if (willBeSuperadmin) {
        this.setState((s) => ({
          ...s,
          visibleAdminChangeRightsView: s.visibleAdminChangeRightsView.filter((v) => v !== adminId),
        }));
      }
    } catch (e) {
      console.error(e);
    } finally {
      this.props.setIsLoading(false);
    }
  };
  deleteAdmin = async (id) => {
    const confirmation = window.confirm(i18n.t('sasettings_admin_delete_warning'));
    if (confirmation) {
      try {
        this.props.setIsLoading(true);
        await groupUrlFetch(`/api/delete-admin/${id}`, 'POST', null);
        await this.fetchAdmins();
      } catch (e) {
        console.error(e);
      } finally {
        this.props.setIsLoading(false);
      }
    }
  };
  sendAdminInvite = async (adminEmail) => {
    try {
      this.props.setIsLoading(true);
      const { success } = await baseUrlFetch('/get_admin_invite', 'POST', { adminEmail });
      if (success) {
        window.alert(i18n.t('settings_admin_invite_sent'));
      } else {
        window.alert(i18n.t('sasettings_email_config_testing_error_alert', { e: '' }));
      }
    } catch (e) {
      console.error(e);
      window.alert(i18n.t('sasettings_email_config_testing_error_alert', { e }));
    } finally {
      this.props.setIsLoading(false);
    }
  };
  openChangeRights = (adminId) => {
    this.setState((s) => ({
      ...s,
      visibleAdminChangeRightsView: [...s.visibleAdminChangeRightsView, adminId],
    }));
  };
  closeChangeRights = (adminId) => {
    this.setState((s) => ({
      ...s,
      visibleAdminChangeRightsView: s.visibleAdminChangeRightsView.filter((v) => v !== adminId),
    }));
  };
  componentDidMount() {
    this.fetchAdmins();
  }
  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <h2>{i18n.t('sasettings_superadmins')}</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <input
            ref={(r) => {
              this.newInputRef = r;
            }}
            placeholder="admin.email@domain.com"
            style={{ width: 300, marginRight: 10 }}
          />
          <label>{i18n.t('menu_superadmin')}:</label>
          <div
            className="noSelect"
            style={{
              marginLeft: 10,
              display: 'inline-block',
              padding: 5,
              color: 'white',
              backgroundColor: this.state.newAdminIsSuperadmin
                ? 'rgb(246, 164, 0)'
                : 'rgb(44, 82, 132)',
              borderRadius: 3,
              cursor: 'pointer',
            }}
            onClick={() => {
              this.setState((s) => ({ ...s, newAdminIsSuperadmin: !s.newAdminIsSuperadmin }));
            }}
          >
            {this.state.newAdminIsSuperadmin ? i18n.t('yes') : i18n.t('no')}
          </div>
          <div className="action" style={{ marginLeft: 10 }} onClick={this.insertAdmin}>
            {i18n.t('sasettings_superadmins_invite')}
          </div>
        </div>
        {this.state.admins.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>{i18n.t('settings_admin_email')}</th>
                <th>{i18n.t('settings_admin_created_at')}</th>
                <th>{i18n.t('menu_superadmin')}</th>
                <th>{i18n.t('settings_admin_groups')}</th>
                <th>{i18n.t('actions')}</th>
              </tr>
            </thead>
            <tbody>
              {this.state.admins.map((admin) => {
                const isChangeRightsViewVisible = this.state.visibleAdminChangeRightsView.includes(
                  admin.id,
                );
                return (
                  <React.Fragment key={admin.id}>
                    <tr>
                      <td
                        style={admin.is_superadmin ? { backgroundColor: 'rgb(246, 164, 0)' } : {}}
                      >
                        {admin.email}
                      </td>
                      <td>{new Date(admin.created_at).toLocaleDateString()}</td>
                      <td>{admin.is_superadmin ? i18n.t('yes') : i18n.t('no')}</td>
                      <td
                        style={{
                          backgroundColor: admin.is_superadmin
                            ? 'lightgrey'
                            : admin.groups && admin.groups.length > 0
                              ? 'white'
                              : 'red',
                        }}
                      >
                        {admin.groups?.map((g) => {
                          return <div key={g.id}>{g.name}</div>;
                        })}
                      </td>
                      <td>
                        <div className="action" onClick={() => this.deleteAdmin(admin.id)}>
                          {i18n.t('delete')}
                        </div>
                        <div className="action" onClick={() => this.openChangeRights(admin.id)}>
                          {i18n.t('sasettings_admin_change_rights')}
                        </div>
                        <div className="action" onClick={() => this.sendAdminInvite(admin.email)}>
                          {i18n.t('settings_admin_send_invite')}
                        </div>
                      </td>
                    </tr>
                    {isChangeRightsViewVisible && (
                      <tr>
                        <td colSpan={5}>
                          <div className="action" onClick={() => this.closeChangeRights(admin.id)}>
                            {i18n.t('close')}
                          </div>
                          {admin.is_superadmin ? (
                            <div
                              className="noSelect"
                              onClick={() => this.changeSuperadminStatus(admin.id, false)}
                              style={{
                                display: 'inline-block',
                                backgroundColor: 'rgb(44, 82, 132)',
                                padding: 5,
                                borderRadius: 3,
                                cursor: 'pointer',
                                color: 'white',
                                margin: '5px 0',
                              }}
                            >
                              {i18n.t('sasettings_admin_make_non_superadmin')}
                            </div>
                          ) : (
                            <div
                              className="noSelect"
                              onClick={() => this.changeSuperadminStatus(admin.id, true)}
                              style={{
                                display: 'inline-block',
                                backgroundColor: 'rgb(246, 164, 0)',
                                padding: 5,
                                borderRadius: 3,
                                cursor: 'pointer',
                                color: 'white',
                                margin: '5px 0',
                              }}
                            >
                              {i18n.t('sasettings_admin_make_superadmin')}
                            </div>
                          )}
                          {!admin.is_superadmin && (
                            <div style={{ marginTop: 15, margin: 'auto' }}>
                              {this.props.groups.map((g) => {
                                const doesBelongToGroup = admin.groups?.some(
                                  (ag) => ag.id === g.id,
                                );
                                return (
                                  <div key={g.id} style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                      type="checkbox"
                                      onChange={(v) => {
                                        this.updateAdminGroup(admin.id, g.id, !doesBelongToGroup);
                                      }}
                                      checked={doesBelongToGroup}
                                    />
                                    <div style={{ marginLeft: 5 }}>{g.name}</div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

export { Admins };
