import { ClientSecretCredential } from '@azure/identity';
import { Client, ClientOptions } from '@microsoft/microsoft-graph-client';
import { TokenCredentialAuthenticationProvider } from '@microsoft/microsoft-graph-client/authProviders/azureTokenCredentials';

// Necessary permissions are listed here
// Création de l'application: App Registrations > New
//   - choisir le scope qui correspond aux personnes qui auront le droit d'utiliser upsignon
//   - pas de redirect URL
// API Permissions > Microsoft Graph > Application Permission
// - User.Read.All
// - Directory.Read.All
// - Team.ReadBasic.All
// - DeviceManagementManagedDevices.Read.All
// Puis Grant Admin consent for Default Directory
// Then create an appRole that allows users to have a PRO vault:
//   - Description : Can create an UpSignOn PRO vault

export class MicrosoftGraph {
  static instances: { [groupId: number]: _MicrosoftGraph } = {};

  static initInstance(
    groupId: number,
    entraConfig: {
      tenantId: string;
      clientId: string;
      clientSecret: string;
      appResourceId: string;
    },
  ): _MicrosoftGraph {
    if (!MicrosoftGraph.instances[groupId]) {
      // see app overview
      MicrosoftGraph.instances[groupId] = new _MicrosoftGraph(
        entraConfig.tenantId,
        entraConfig.clientId,
        entraConfig.clientSecret,
        entraConfig.appResourceId,
      );
    }
    return MicrosoftGraph.instances[groupId];
  }
}

class _MicrosoftGraph {
  msGraph: Client;
  appResourceId: string;

  /**
   *
   * @param tenantId - The Microsoft Entra tenant (directory) ID.
   * @param clientId - The client (application) ID of an App Registration in the tenant.
   * @param clientSecret - A client secret that was generated for the App Registration.
   * @param appResourceId - Identifier of the ressource (UpSignOn) in the graph that users need to have access to in order to be authorized to use an UpSignOn licence
   */
  constructor(tenantId: string, clientId: string, clientSecret: string, appResourceId: string) {
    const credential = new ClientSecretCredential(tenantId, clientId, clientSecret);
    const authProvider = new TokenCredentialAuthenticationProvider(credential, {
      // The client credentials flow requires that you request the
      // /.default scope, and pre-configure your permissions on the
      // app registration in Azure. An administrator must grant consent
      // to those permissions beforehand.
      scopes: ['https://graph.microsoft.com/.default'],
    });

    const clientOptions: ClientOptions = {
      authProvider,
    };
    this.msGraph = Client.initWithMiddleware(clientOptions);
    this.appResourceId = appResourceId;
  }

  /**
   * Gets the id of the first user to match that email address and who has been assigned the role for using UpSignOn
   *
   * @param email
   * @returns the id if such a user exists, null otherwise
   */
  async _getUserIdFromEmail(email: string): Promise<string | null> {
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      throw 'Email is malformed';
    }

    const users = await this.msGraph
      .api('/users')
      .header('ConsistencyLevel', 'eventual')
      .filter(`mail eq '${email}' or otherMails/any(oe:oe eq '${email}')`)
      .select(['id'])
      .get();
    const userId = users.value[0]?.id;
    return userId;
  }
  async isUserAuthorizedForUpSignOn(email: string): Promise<boolean> {
    const userId = await this._getUserIdFromEmail(email);
    if (!userId) return false;

    const appRoleAssignments = await this.msGraph
      .api(`/users/${userId}/appRoleAssignments`)
      .header('ConsistencyLevel', 'eventual')
      .filter(`resourceId eq ${this.appResourceId}`)
      .get();
    return appRoleAssignments.value.length > 0;
  }

  /**
   * Returns all groups (and associated groups) that this user belongs to
   * To be used for sharing to teams ?
   * This would suppose a user can only shared to teams to which it belongs ?
   * @param email
   * @returns
   */
  async getUserMemberships(email: string): Promise<{ id: string; displayName: string }[]> {
    const userId = await this._getUserIdFromEmail(email);
    if (!userId) return [];
    const memberships = await this.msGraph
      .api(`/users/${userId}/memberOf`) // https://learn.microsoft.com/en-us/graph/api/associatedteaminfo-list?view=graph-rest-1.0&tabs=http
      // or .api(`/users/${userId}/joinedTeams`) // https://learn.microsoft.com/en-us/graph/api/user-list-joinedteams?view=graph-rest-1.0&tabs=http
      .header('ConsistencyLevel', 'eventual')
      .select(['type', 'id', 'displayName'])
      .get();

    // type can be #microsoft.graph.administrativeUnit, #microsoft.graph.group

    console.log(memberships);
    return memberships.value;
  }

  /**
   * Returns all groups in the directory
   * @returns
   */
  async listGroups(): Promise<{ id: string; displayName: string }[]> {
    const groups = await this.msGraph
      .api(`/groups`) // https://learn.microsoft.com/en-us/graph/api/group-list?view=graph-rest-1.0&tabs=http
      .header('ConsistencyLevel', 'eventual')
      .select(['id', 'displayName'])
      .get();

    console.log(groups);
    return groups.value;
  }

  /**
   * Returns all members of a group
   * @returns
   */
  async listGroupMembers(groupId: string): Promise<{ id: string; displayName: string }[]> {
    const groupMembers = await this.msGraph
      .api(`/groups/${groupId}/members/microsoft.graph.user/`) // https://learn.microsoft.com/en-us/graph/api/group-list-members?view=graph-rest-1.0&tabs=http
      .header('ConsistencyLevel', 'eventual')
      .filter('')
      .select(['id', 'mail', 'displayName'])
      .get();

    console.log(groupMembers);
    return groupMembers.value;
  }
  /**
   * Returns all members of an administrative unit
   * @returns
   */
  async listAdministrativeUnitMembers(
    groupId: string,
  ): Promise<{ id: string; displayName: string }[]> {
    const groupMembers = await this.msGraph
      .api(`/administrativeUnits/${groupId}/members/microsoft.graph.user/`) // https://learn.microsoft.com/en-us/graph/api/group-list-members?view=graph-rest-1.0&tabs=http
      .header('ConsistencyLevel', 'eventual')
      .filter('')
      .select(['id', 'mail', 'displayName'])
      .get();

    console.log(groupMembers);
    return groupMembers.value;
  }

  // async isDeviceAuthorizedForUser(email: string, deviceId: string): Promise<boolean> {
  //   const userId = await this._getUserIdFromEmail(email);
  //   if (!userId) return false;
  //   // TODO make sure deviceId has been validated
  //   const userDevices = await this.msGraph
  //     .api(`/deviceManagement/managedDevices`) // https://learn.microsoft.com/en-us/graph/api/intune-devices-manageddevice-get?view=graph-rest-1.0&tabs=http
  //     .header('ConsistencyLevel', 'eventual')
  //     .filter(`userId eq '${userId}'`)
  //     .select([
  //       'id',
  //       'userId',
  //       'osVersion',
  //       'model',
  //       'jailBroken',
  //       'easDeviceId',
  //       'emailAddress',
  //       'deviceName',
  //       'imei',
  //       'serialNumber',
  //     ])
  //     .get();

  //   console.log(userDevices);
  //   return userDevices.value;
  // }
}
