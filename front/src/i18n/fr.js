const translations = {
  suggestion:
    "N'hésitez pas à nous envoyer toutes vos remarques et suggestions à contact@upsignon.eu.",
  yes: 'OUI',
  no: 'NON',
  edit: 'Modifier',
  see: 'Voir',
  hide: 'Cacher',
  actions: 'Actions',
  delete: 'Supprimer',
  add: 'Ajouter',
  disconnect: 'Déconnexion',
  pagination_pages: 'pages',
  validate: 'Valider',
  menu_overview: "Vue d'ensemble",
  menu_users: 'Utilisateurs',
  menu_settings: 'Paramètres',
  menu_shared_devices: 'Appareils partagés',
  menu_shared_accounts: 'Comptes partagés',
  menu_superadmin: 'Super-Admin',
  loading: 'Chargement des données...',
  total: 'Total $count',
  user_search: 'Rechercher un utilisateur',
  user_unit_name: 'utilisateurs',
  user_email: 'Email',
  user_data: 'Données',
  user_nb_devices: "Nb d'appareils",
  user_nb_devices_value: '$nb appareils',
  user_nb_codes_and_accounts: 'Nb de comptes et codes',
  user_nb_codes_value: '$nb codes',
  user_nb_accounts_value: '$nb comptes',
  user_nb_shared_items_value: 'dont $nb partagés',
  user_passwords_stats: 'Stats des mots de passe (partagés ou non)',
  user_passwords_weak: '$nb faibles',
  user_passwords_medium: '$nb moyens',
  user_passwords_strong: '$nb forts',
  user_passwords_red: '$nb rouges',
  user_passwords_orange: '$nb oranges',
  user_passwords_green: '$nb verts',
  user_passwords_duplicated: 'dont $nb dupliqués',
  user_delete_warning:
    'Attention, vous allez supprimer $email et toutes ses données. Cette action est irréversible.',
  user_sorting:
    'Les utilisateurs sont triés par nombre décroissant de mots de passe dupliqués, puis par nombre décroissant de mots de passe faibles, puis par nombre décroissant de mots de passe moyens, puis par ordre alphabétique.',
  user_change_email_confirm:
    "Êtes-vous sûr de vouloir changer l'adresse email de cet utilisateur de $oldEmail à $newEmail ?\nCeci sera pris en compte de façon transparente dans l'application (à partir de la version 4.6).",
  user_email_already_used:
    'ERREUR\n$email est déjà utilisé ou a déjà été utilisé par un autre utilisateur.',
  devices_for_user: 'Appareils de $email',
  device_name: "Nom de l'appareil",
  device_app_version: "Version de l'app",
  device_type: 'Type',
  device_status: 'Statut',
  device_last_session: 'Dernière session',
  device_deactivate: 'Désactiver',
  device_deactive_all: 'Désactiver tous les utilisateurs sur cet appareil',
  device_authorize: 'Autoriser',
  device_delete_warning:
    "Ceci supprimera définitivement cet appareil et son historique.\n\nVous pouvez utiliser l'option Désactiver pour ne plus autoriser les connexions à partir de cet appareil tout en gardant son historique.\n\nContinuer la suppression ?",
  device_deactivate_warning:
    'Cet appareil ne sera plus autorisé mais restera dans la liste.\n\nDésactiver ?',
  device_authorize_warning:
    "Cet appareil sera autorisé sans que l'utilisateur n'ait besoin de valider son adresse email.\n\nAssurez-vous que la demande provienne bien d'un utilisateur légitime !\n\nAutoriser l'appareil ?",
  device_shared_with: 'Appareil partagé avec',
  password_reset_requests: 'Demandes de réinitialisation de mot de passe',
  password_reset_requests_pending: 'Demandes de réinitialisation de mot de passe en attente',
  password_reset_request_date: 'Date de la demande',
  password_reset_request_status: 'Statut de la demande',
  password_reset_request_expired: 'Token expiré',
  password_reset_request_valid_until: "Email envoyé. Jeton valide jusqu'au $date.",
  password_reset_request_grant: 'Accorder',
  password_reset_request_delete_warning:
    'Voulez-vous supprimer cette demande de réinitialisation de mot de passe ?',
  password_reset_request_grant_warning:
    "Assurez-vous que la requête a bien été faite par l'utilisateur lui-même.\n\nAccorder ?",
  settings_security: 'Paramètres de sécurité',
  settings_reset_pwd_admin_check:
    "Pour réinitialiser son mot de passe, un utilisateur doit obtenir une validation d'un administrateur :",
  settings_change: 'Changer',
  settings_allowed_emails: 'Adresses email autorisées',
  settings_allowed_emails_pattern:
    "Vous pouvez saisir des adresses email entières ou utiliser la syntaxe *@domaine.fr pour autoriser toutes les adresses d'un domaine.",
  settings_allowed_emails_email_pattern: 'Email',
  settings_allowed_emails_new: "Nouveau modèle d'adresse email",
  settings_allowed_emails_delete_warning:
    "Ceci ne supprimera pas les coffres-forts pour les utilisateurs correspondant à ce modèle d'adresse email.\n\nSupprimer ?",
  settings_admins: 'Administrateurs de ce groupe',
  settings_admin_email: 'Email',
  settings_admin_created_at: 'Ajouté le',
  settings_admin_delete_warning: 'Êtes-vous sûr de vouloir révoquer cet admin ?',
  settings_urls: 'Sites web pré-renseignés',
  settings_urls_explanation:
    "Les sites que vous renseignez ici seront proposés aux utilisateurs pour simplifier l'enregistrement de leurs mots de passe.",
  settings_urls_new: 'Nouveau site web',
  settings_urls_name: 'Nom du site',
  settings_urls_signin_url: 'URL de signin',
  settings_urls_password_change_url: 'URL de changement de mot de passe',
  settings_urls_delete_warning: 'Êtes-vous sûr ?',
  shared_devices_explanation:
    'Voici la liste des appareils sur lesquels au moins deux utilisateurs ont autorisé leur espace PRO.',
  shared_devices_uid: "Identifiant unique de l'appareil",
  shared_devices_user_email: 'Email',
  shared_devices_created_at: "Date d'ajout",
  shared_devices_name: "Nom de l'appareil",
  shared_devices_type: "Type d'appareil",
  shared_devices_status: 'Statut',
  shared_devices_last_session: 'Dernière session',
  shared_account_name: 'Nom',
  shared_account_type: 'Type',
  shared_account_url: 'Type, URL & login',
  shared_account_users: 'Utilisateurs',
  shared_account_user_creation_date: 'Depuis',
  shared_account_user_is_manager: 'Gestionnaire',
  shared_account_user_actions: 'Actions',
  shared_account_user_delete: 'Supprimer du partage',
  shared_account_user_delete_warning:
    '$accountName ne sera plus partagé avec $user.\n\nÊtes-vous sûrs ?',
  shared_account_last_user_warning:
    "IL S'AGIT DU DERNIER UTILISATEUR AYANT ACCÈS À CE COMPTE. LE MOT DE PASSE SERA PERDU.",
  shared_account_search: "Rechercher par adresse email d'utilisateur",
  shared_account_unit_name: 'Comptes partagés',
  shared_account_manager_note:
    "Vous ne pouvez pas enlever les droits de gestion au dernier gestionnaire d'un compte ou le supprimer du partage. Mais vous pouvez transférer les droits de gestion à un autre utilisateur.",
  extracts: 'Extractions',
  extract_database: 'Télécharger toutes les stats au format csv',
  extract_emails_text: 'Récupérer la liste des emails des utilisateurs :',
  extract_emails_duplicates: 'ayant au moins $n mots de passe dupliqués',
  extract_emails_weak: 'ayant au moins $n mots de passe faibles',
  extract_emails_medium: 'ayant au moins $n mots de passe moyens',
  extract_emails_long_unused: "qui n'ont pas utilisé UpSignOn depuis au moins $n jours",
  extract_emails_shared_device: 'qui partagent au moins un de leurs appareils',
  extract_emails: 'Récupérer les emails',
  copy_to_pasteboard: 'Copier',
  chart_security_title: 'Évolution de la force des mots de passe',
  chart_no_pwd: 'Sans mdp',
  chart_weak_pwd: 'Mdps faibles',
  chart_medium_pwd: 'Mdps moyens',
  chart_strong_pwd: 'Mdps forts',
  chart_duplicate_pwd: 'Mdps dupliqués',
  chart_red_pwd: 'Mdps rouges',
  chart_orange_pwd: 'Mdps oranges',
  chart_green_pwd: 'Mdps verts',
  chart_nb_accounts: 'Nb total de comptes',
  chart_type_nb: 'Nb',
  chart_type_color: 'Par couleur',
  chart_type_entropy: 'Par entropie',
  chart_start_date: 'Date de début',
  chart_end_date: 'Date de fin',
  chart_usage_title: "Nombre d'espaces PRO",
  chart_nb_users: "Nb d'utilisateurs",
  chart_today_button: "Aujourd'hui",
  useful_links: 'Liens utiles',
  install_doc_server_pro: "Documentation d'installation du serveur UpSignOn PRO",
  install_doc_server_pro_dashboard: "Documentation d'installation du dashboard UpSignOn PRO",
  install_doc_browser_extension: "Documentation d'installation des extensions de navigateur",
  windows_app_download_link: "Téléchargement de l'application pour Windows 10",
  to_unzip: "ajoutez l'extension .zip pour le dézipper",
  setup_link: "Lien de configuration de l'application",
  pro_server_url: 'URL de votre serveur UpSignOn PRO',
  openid_unfold: "Cas particulier d'OpenId (optionnel et non recommandé)",
  openid_authority: 'URL du serveur OpenId',
  openid_clientid: "Identifiant de l'application ",
  openid_clientid_browsers: 'Identifiant pour les extensions de navigateur',
  link_to_communicate: 'Lien à communiquer',
  pro_server_status_running: "Le serveur UpSignOn PRO est en cours d'exécution",
  pro_server_status_stopped:
    'Le serveur UpSignOn PRO est arrêté (ou bien mal configuré dans la page paramètres)',
  pro_server_unknown_status:
    'Pour afficher ici le statut du serveur UpSignOn PRO, configurez son URL dans la page paramètres.',
  sasettings_superadmins: 'Super-Administrateurs',
  sasettings_groups: 'Groupes',
  sasettings_group_name: "Nom qui sera affiché dans l'application",
  sasettings_nb_users: "Nombre d'utilisateurs",
  sasettings_group_name_change_warning:
    "NB : les changements de nom de groupe n'affectent que les nouveaux appareils pour l'instant.",
  sasettings_group_delete_warning:
    'Êtes-vous sûr de vouloir supprimer ce groupe ?\nToutes les données utilisateurs associées à ce groupe seront définitivement supprimées.\n\nCette action est irréversible !',
};

export default translations;
