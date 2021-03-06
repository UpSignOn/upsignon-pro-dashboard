const translations = {
  suggestion: "N'hésitez pas à nous envoyer toutes vos remarques et suggestions à",
  yes: 'OUI',
  no: 'NON',
  edit: 'Modifier',
  see: 'Voir',
  hide: 'Cacher',
  actions: 'Actions',
  delete: 'Supprimer',
  add: 'Ajouter',
  close: 'Fermer',
  total: 'Total',
  disconnect: 'Déconnexion',
  pagination_pages: 'pages',
  validate: 'Valider',
  cancel: 'Annuler',
  menu_overview: "Vue d'ensemble",
  menu_password_reset_requests: 'Demandes de réinitialisation de mot de passe',
  menu_users: 'Utilisateurs',
  menu_settings: 'Paramètres',
  menu_shared_devices: 'Appareils partagés',
  menu_shared_accounts: 'Comptes partagés',
  menu_superadmin: 'Super-Admin',
  loading: 'Chargement des données...',
  total_count: 'Total $count',
  user_sort_by_vuln: 'Par vulnérabilité',
  user_sort_by_time: 'Par dernière session',
  user_sorting_by_vuln:
    'Tri par vulnérabilité : Les utilisateurs sont triés par nombre décroissant de mots de passe dupliqués, puis par nombre décroissant de mots de passe faibles, puis par nombre décroissant de mots de passe moyens, puis par ordre alphabétique.',
  user_sorting_by_time:
    'Tri par dernière session : Les utilisateurs sont triés par date de dernière activité en commençant par les plus anciennes.',
  user_search: 'Rechercher un utilisateur',
  user_unit_name: 'utilisateurs',
  user_email: 'Email',
  user_data: 'Données',
  user_data_updated_at: 'Modifiées le',
  user_data_seen_at: 'Consultées le',
  user_general_stats: 'Stats générales',
  user_nb_devices_value: '$nb appareils',
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
  password_reset_request_group: 'Banque de coffres-forts',
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
  settings_change: 'Changer',
  settings_allowed_emails: 'Adresses email autorisées',
  settings_allowed_emails_pattern:
    "Vous pouvez saisir des adresses email entières ou utiliser la syntaxe *@domaine.fr pour autoriser toutes les adresses d'un domaine.",
  settings_allowed_emails_email_pattern: 'Email',
  settings_allowed_emails_new: "Nouveau modèle d'adresse email",
  settings_allowed_emails_delete_warning:
    "Ceci ne supprimera pas les coffres-forts pour les utilisateurs correspondant à ce modèle d'adresse email.\n\nSupprimer ?",
  settings_admin_email: 'Email',
  settings_admin_created_at: 'Ajouté le',
  settings_admin_groups: 'Banques de coffres-forts',
  sasettings_admin_delete_warning: 'Êtes-vous sûr de vouloir révoquer cet admin ?',
  sasettings_admin_change_rights: 'Changer les droits',
  settings_urls: 'Sites web pré-renseignés',
  settings_urls_explanation:
    "Les sites que vous renseignez ici seront proposés aux utilisateurs pour simplifier l'enregistrement de leurs mots de passe.",
  settings_urls_copiable:
    "Un super administrateur peut facilement copier la liste d'une autre banque de coffres-forts si besoin.",
  settings_urls_copy: "Ajouter la liste d'une autre banque de coffres-forts",
  settings_urls_choose_group: 'Choisir la banque de coffres-forts',
  settings_urls_copied_number: '$n sites copiés',
  settings_urls_new: 'Nouveau site web',
  settings_urls_name: 'Nom du site',
  settings_urls_signin_url: 'URL de signin',
  settings_urls_password_change_url: 'URL de changement de mot de passe',
  settings_urls_basic_auth: 'Authentification HTTP basic',
  settings_urls_basic_auth_details:
    "Si le site utilise une méthode d'authentification HTTP basic, signalez-le ici pour que l'extension de navigateur puisse connecter automatiquement l'utilisateur car le remplissage automatique ne pourra pas fonctionner.",
  settings_urls_delete_warning: 'Êtes-vous sûr ?',
  settings_group_admins_title: 'Administrateurs de cette banque de coffres-forts',
  settings_group_admins_invite: 'Ajouter et (ré)envoyer une invitation si nécessaire',
  settings_group_admin_delete_warning:
    "Êtes-vous sûr de vouloir supprimer l'accès de cet administrateur à cette banque de coffres-forts ?",
  settings_group_settings: 'Autres paramètres',
  shared_devices_explanation:
    'Voici la liste des appareils sur lesquels au moins deux utilisateurs ont autorisé leur espace PRO.',
  shared_devices_uid: "Identifiant unique de l'appareil",
  shared_devices_user_email: 'Email',
  shared_devices_created_at: "Date d'ajout",
  shared_devices_name: "Nom de l'appareil",
  shared_devices_type: "Type d'appareil",
  shared_devices_status: 'Statut',
  shared_devices_last_session: 'Dernière session',
  shared_account_shared_folder_name: 'Dossier partagé',
  shared_account_type: 'Type',
  shared_account_items: 'Éléments',
  shared_account_users: 'Utilisateurs',
  shared_account_user_creation_date: 'Depuis',
  shared_account_user_is_manager: 'Gestionnaire',
  shared_account_user_actions: 'Actions',
  shared_account_user_delete: 'Supprimer du partage',
  shared_account_user_delete_warning:
    "L'élément $name ne sera plus partagé avec $user.\n\nÊtes-vous sûrs ?",
  shared_folder_user_delete_warning:
    'Le dossier $name ne sera plus partagé avec $user.\n\nÊtes-vous sûrs ?',
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
  chart_type_color_explanation:
    "Force des mots de passe telle qu'affichée dans l'application, en combinant l'entropie et le nombre de réutilisations de chaque mot de passe.",
  chart_type_entropy: 'Par entropie',
  chart_type_entropy_explanation:
    "Force des mots de passe en ne prenant en compte que l'entropie, c'est-à-dire sans tenir compte du nombre de réutilisations d'un mot de passe. Cette mesure ne représente pas ce que voit l'utilisateur dans l'application.",
  chart_start_date: 'Date de début',
  chart_end_date: 'Date de fin',
  chart_automatic_dates: 'Dates auto.',
  chart_usage_title: "Nombre d'espaces PRO",
  chart_nb_users: "Nb d'utilisateurs",
  chart_today_button: "Aujourd'hui",
  useful_links: 'Liens utiles',
  install_doc_server_pro: "Documentation d'installation (serveur et console d'administration)",
  install_doc_browser_extension: "Documentation d'installation des extensions de navigateur",
  windows_app_download_link: "Téléchargement de l'application pour Windows 10",
  to_unzip: "ajoutez l'extension .zip pour le dézipper",
  pro_server: 'Serveur UpSignOn PRO',
  setup_link: "Lien de configuration de l'application",
  setup_link_is_group_specific:
    'Notez que ce lien est spécifique à chaque banque de coffres-forts.',
  pro_server_url: 'URL de votre serveur UpSignOn PRO',
  openid_unfold: "Cas particulier d'OpenId (optionnel et non recommandé)",
  openid_authority: 'URL du serveur OpenId',
  openid_clientid: "Identifiant de l'application ",
  openid_clientid_browsers: 'Identifiant pour les extensions de navigateur',
  link_to_communicate: 'Lien à communiquer',
  pro_server_status_running: "Serveur en cours d'exécution",
  pro_server_status_stopped: 'Serveur arrêté ou mal configuré.',
  sasettings_superadmins: 'Administrateurs',
  sasettings_superadmins_invite: '(Ré)Envoyer une invitation (valide 24h)',
  sasettings_groups: 'Banques de coffres-forts',
  sasettings_groups_explanation:
    "Les banques de coffres-forts sont des zones hermétiques. Les utilisateurs ne pourront pas partager leurs comptes avec des personnes extérieures à leur banque. Cette fonctionnalité est particulièrement utile dans le cas de groupes d'entreprises qui mettent en commun leurs ressources informatiques mais veulent garder leur indépendance. Un même utilisateur peut avoir un coffre dans plusieurs banques.",
  sasettings_group_name: 'Nom de la banque de coffres-forts',
  sasettings_group_open: 'Voir',
  sasettings_nb_users: "Nombre d'utilisateurs",
  sasettings_reset_pwd_admin_check:
    "Pour réinitialiser son mot de passe, un utilisateur doit obtenir une validation d'un administrateur de sa banque",
  sasettings_group_name_change_warning:
    "NB : les changements de nom de banque n'affectent que les nouveaux appareils pour l'instant.",
  sasettings_group_delete_warning:
    'Êtes-vous sûr de vouloir supprimer cette banque ? Tous les coffres-forts associés à cette banque et les secrets qui y sont stockés seront définitivement supprimés. Cette action est irréversible !',
  sasetting_confirm_group_delete: 'Pour confirmer, saisissez exactement "$name"',
  sasettings_admin_make_superadmin: 'Donner les droits super-admin',
  sasettings_admin_make_non_superadmin: 'Enlever les droits super-admin',
};

export default translations;
