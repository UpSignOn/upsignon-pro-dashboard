const translations = {
  suggestion: "N'hésitez pas à nous envoyer toutes vos remarques et suggestions à",
  yes: 'OUI',
  no: 'NON',
  default_yes: '(OUI)',
  default_no: '(NON)',
  or: 'ou',
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
  newsletter_admins:
    'Newsletter administrateurs (notes de versions en avance, information utiles pour le déploiement, autres informations importantes).',
  newsletter_tech:
    'Bulletins techniques (pour les infogéreurs - alertes de sécurité, demandes de maintenance manuelle).',
  menu_overview: "Vue d'ensemble",
  menu_password_reset_requests: 'Demandes de réinitialisation de mot de passe',
  menu_users: 'Utilisateurs',
  menu_other: 'Autres requêtes',
  menu_settings: 'Paramètres',
  menu_shared_devices: 'Appareils partagés',
  menu_shared_vaults: 'Coffres-forts partagés',
  menu_superadmin: 'Super-Admin',
  loading: 'Chargement des données...',
  total_count: 'Total $count',
  user_sort_by_vuln: 'Par vulnérabilité',
  user_sort_by_time: 'Par dernière session',
  user_filter_by_deactivated: 'Désactivés',
  user_deactivated: 'Utilisateur désactivé',
  reactivate: 'Réactiver',
  user_sorting_by_vuln:
    'Tri par vulnérabilité : Les utilisateurs sont triés par nombre décroissant de mots de passe dupliqués, puis par nombre décroissant de mots de passe faibles, puis par nombre décroissant de mots de passe moyens, puis par ordre alphabétique.',
  user_sorting_by_time:
    'Tri par dernière session : Les utilisateurs sont triés par date de dernière activité en commençant par les plus anciennes.',
  user_filtering_by_deactivated:
    "Les coffres-forts seront désactivés automatiquement si leur adresse email n'est plus autorisée (ni par les adresses emails autorisées ni via Microsoft Entra si configuré).\nSi vous autorisez à nouveau une adresse email via les adresses emails autorisées ou via Microsoft Entra, le coffre-fort sera réactivé automatiquement à la prochaine vérification.",
  user_filtering_by_deactivated_interval:
    'NB : Les vérifications ont lieu automatiquement à 1h et 13h tous les jours.',
  user_search: 'Rechercher un utilisateur',
  user_unit_name: 'utilisateurs',
  user_id: 'Id',
  user_email: 'Email',
  user_data: 'Données',
  user_data_updated_at: 'Modifiées le',
  user_data_seen_at: 'Synchronisées le',
  user_general_stats: 'Stats générales',
  user_nb_devices_value: '$nb appareils',
  user_nb_codes_value: '$nb codes',
  user_nb_accounts_value: '$nb comptes',
  user_nb_shared_items_value: 'dont $nb partagés',
  user_passwords_stats: 'Stats des mots de passe (non partagés uniquement)',
  user_settings_override: 'Paramètres',
  shared_vault_passwords_stats: 'Stats des mots de passe',
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
  user_email_already_used_or_not_authorized:
    "ERREUR\n$email est déjà utilisé ou a déjà été utilisé par un autre utilisateur ou n'est pas encore autorisé.",
  user_allowed_offline_desktop: 'Hors-ligne ordi:',
  user_allowed_offline_mobile: 'Hors-ligne mobile:',
  user_allowed_csv_export: 'Export CSV :',
  devices_for_user: 'Appareils de $email',
  device_name: "Nom de l'appareil",
  device_app_version: "Version de l'app",
  device_type: 'Type',
  device_status: 'Statut',
  device_last_sync_date: 'Dernière synchro',
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
  password_reset_request_granted_by: 'Autorisé par :',
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
  settings_server_redirection: 'DANGER : Redirection',
  settings_server_redirection_explanation:
    "Si vous souhaitez migrer vers un autre serveur (revenir en SAAS ou passer en auto-hébergement), cette option peut être utilisée pour simplifier la migration de vos utilisateurs après transfert de la base de données. Contactez-nous avant d'utiliser cette option.",
  settings_server_redirection_new_url_label: 'Rediriger cette banque vers',
  settings_server_redirection_confirm:
    'Êtes-vous sûr ? Cette action interrompra le service pour cette banque',
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
  settings_urls_basic_auth: 'Authentification HTTP basic',
  settings_urls_basic_auth_details:
    "Si le site utilise une méthode d'authentification HTTP basic, signalez-le ici pour que l'extension de navigateur puisse connecter automatiquement l'utilisateur car le remplissage automatique ne pourra pas fonctionner.",
  settings_urls_delete_warning: 'Êtes-vous sûr ?',
  settings_group_admins_title: 'Administrateurs de cette banque de coffres-forts',
  settings_group_admins_invite: 'Ajouter et (ré)envoyer une invitation si nécessaire',
  settings_group_admin_delete_warning:
    "Êtes-vous sûr de vouloir supprimer l'accès de cet administrateur à cette banque de coffres-forts ?",
  settings_group_settings: 'Options',
  settings_group_settings_toggle_all_settings: 'Montrer/cacher tous les paramètres',
  settings_group_settings_toggle_group_settings: 'Montrer/cacher',
  shared_devices_explanation:
    'Voici la liste des appareils sur lesquels au moins deux utilisateurs ont autorisé leur espace PRO.',
  shared_devices_uid: "Identifiant unique de l'appareil",
  shared_devices_user_email: 'Email',
  shared_devices_created_at: "Date d'ajout",
  shared_devices_name: "Nom de l'appareil",
  shared_devices_type: "Type d'appareil",
  shared_devices_status: 'Statut',
  shared_devices_last_sync_date: 'Dernière synchro',
  shared_vault_shared_folder_name: 'Coffre-fort partagé',
  shared_account_shared_folder_name: 'Dossier partagé',
  shared_account_type: 'Type',
  shared_account_items: 'Éléments',
  shared_account_items_summary: '$n éléments',
  shared_account_users: 'Utilisateurs',
  shared_account_user_creation_date: 'Depuis',
  shared_account_user_is_manager: 'Gestionnaire',
  shared_account_user_actions: 'Actions',
  shared_account_user_delete: 'Supprimer du partage',
  shared_account_user_delete_warning:
    "L'élément $name ne sera plus partagé avec $user.\n\nÊtes-vous sûrs ?",
  shared_vault_user_delete_warning:
    'Le coffre partafé $name ne sera plus partagé avec $user.\n\nÊtes-vous sûrs ?',
  shared_folder_user_delete_warning:
    'Le dossier $name ne sera plus partagé avec $user.\n\nÊtes-vous sûrs ?',
  shared_account_last_user_warning:
    "IL S'AGIT DU DERNIER UTILISATEUR AYANT ACCÈS À CE COMPTE. LE MOT DE PASSE SERA PERDU.",
  shared_account_search: "Rechercher par adresse email d'utilisateur",
  shared_vault_search: "Rechercher par adresse email d'utilisateur",
  shared_account_unit_name: 'Comptes partagés',
  shared_vault_unit_name: 'Coffres-forts partagés',
  shared_account_manager_note:
    "Vous ne pouvez pas enlever les droits de gestion au dernier gestionnaire d'un compte ou le supprimer du partage. Mais vous pouvez transférer les droits de gestion à un autre utilisateur.",
  shared_vault_manager_note:
    "Vous ne pouvez pas enlever les droits de gestion au dernier gestionnaire d'un coffre-fort partagé ou le supprimer du partage. Mais vous pouvez transférer les droits de gestion à un autre utilisateur.",
  extracts: 'Extractions',
  extract_database: 'Télécharger toutes les stats au format csv',
  extract_emails_text:
    "Récupérer la liste des emails des utilisateurs remplissant l'une des ces conditions :",
  extract_emails_duplicates: 'ayant au moins $n mots de passe dupliqués',
  extract_emails_weak: 'ayant au moins $n mots de passe faibles',
  extract_emails_medium: 'ayant au moins $n mots de passe moyens',
  extract_emails_long_unused: "qui n'ont pas utilisé UpSignOn depuis au moins $n jours",
  extract_emails_shared_device: 'qui partagent au moins un de leurs appareils',
  extract_emails: 'Récupérer les emails',
  extract_emails_msi:
    "Récupérer les utilisateurs ayant la version msi de l'application Windows (à partir d'UpSignOn 7.5.0)",
  mail_writer: 'Envoyer un email',
  mail_writer_to_selection: 'Utiliser la liste de destinataires de la sélection ci-dessus.',
  mail_writer_to_all: "Envoyer à tous les détenteurs d'un coffre-fort.",
  mail_writer_subject_placeholder: 'Objet',
  mail_writer_placeholder: 'Écrivez votre message ici',
  mail_writer_send: 'Envoyer',
  mail_writer_success: 'SUCCÈS\n\nMail envoyé à $n destinataires',
  mail_writer_error: 'ERREUR\n\n$e',
  mail_writer_empty_fields:
    "ERREUR\n\nL'object et le contenu ne peuvent pas être vides pour envoyer un email.",
  mail_writer_confirm_send:
    "Vous êtes sur le point d'envoyer un email à $n personnes. Voulez-vous continuer ?",
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
  link_to_tutorials: "Tutoriels / notice d'utilisation pour les utilisateurs",
  link_to_changelogs: 'Notes de version',
  link_to_downloads: "Liens de téléchargement de l'application",
  pro_server: 'Serveur UpSignOn PRO',
  setup_link: "Lien de configuration de l'application",
  setup_link_is_group_specific:
    'Notez que ce lien est spécifique à chaque banque de coffres-forts.',
  pro_server_url: 'URL de votre serveur UpSignOn PRO',
  link_to_communicate: 'Lien à communiquer',
  preconfig_title: 'Préconfiguration du lien par stratégie de groupe.',
  preconfig_line1:
    "À partir de la version 7.7.0 de l'application, vous pouvez préconfigurer ce lien sur les appareils de vos utilisateurs en créant un fichier contenant",
  preconfig_line2: "à l'emplacement suivant :",
  preconfig_case1: "cas d'une installation par le Microsoft Store ou via le fichier .appxbundle :",
  preconfig_case2: "cas d'une installation via le fichier .msi :",
  preconfig_script_example:
    'Vous pouvez par exemple utiliser le script powershell suivant pour déployer ce fichier :',
  pro_server_status_running: "Serveur en cours d'exécution",
  pro_server_status_stopped: 'Serveur arrêté ou mal configuré.',
  sasettings_superadmins: 'Administrateurs',
  sasettings_superadmins_invite: '(Ré)Envoyer une invitation (valide 24h)',
  sasettings_groups: 'Banques de coffres-forts',
  sasettings_groups_explanation:
    "Les banques de coffres-forts sont des zones hermétiques. Les utilisateurs ne pourront pas partager leurs comptes avec des personnes extérieures à leur banque. Cette fonctionnalité est particulièrement utile dans le cas de groupes d'entreprises qui mettent en commun leurs ressources informatiques mais veulent garder leur indépendance. Un même utilisateur peut avoir un coffre dans plusieurs banques.",
  sasettings_group_id: 'ID',
  sasettings_group_name: 'Nom de la banque de coffres-forts',
  sasettings_group_created_at: 'Crée le',
  sasettings_group_is_testing: 'Phase de test',
  sasettings_group_test_expires_at: "Date d'expiration du test",
  sasettings_group_test_expires_at_never: 'Jamais',
  sasettings_group_open: 'Voir',
  sasettings_nb_users: "Nombre d'utilisateurs",
  sasettings_nb_licences_sold: 'Licences vendues',
  sasettings_disable_reset_pwd_manual_admin_check:
    "Désactiver la validation manuelle d'un administrateur pour les demandes de réinitialisation de mot de passe",
  sasettings_disable_offline_desktop:
    'Par défaut, désactiver le mode hors-ligne sur les ordinateurs de bureau',
  sasettings_disable_offline_mobile:
    'Par défaut, désactiver le mode hors-ligne sur téléphones et tablettes',
  sasettings_allow_csv_export: "Par défaut, autoriser l'export CSV",
  sasettings_allow_windows: 'Par défaut, autoriser Windows',
  sasettings_allow_ios: 'Par défaut, autoriser iOS',
  sasettings_allow_android: 'Par défaut, autoriser Android',
  sasettings_allow_macos: 'Par défaut, autoriser macOS',
  sasettings_allow_linux: 'Par défaut, autoriser Linux',
  user_allow_windows: 'Windows',
  user_allow_ios: 'iOS',
  user_allow_android: 'Android',
  user_allow_macos: 'macOS',
  user_allow_linux: 'Linux',
  sasettings_require_admin_check_for_second_device:
    "Exiger une validation manuelle d'un administrateur pour l'ajout de plus d'un appareil",
  sasettings_group_name_change_warning:
    "NB : les changements de nom de banque n'affectent que les nouveaux appareils pour l'instant.",
  sasettings_group_delete_warning:
    'Êtes-vous sûr de vouloir supprimer cette banque ? Tous les coffres-forts associés à cette banque et les secrets qui y sont stockés seront définitivement supprimés. Cette action est irréversible !',
  sasetting_confirm_group_delete: 'Pour confirmer, saisissez exactement "$name"',
  sasettings_admin_make_superadmin: 'Donner les droits super-admin',
  sasettings_admin_make_non_superadmin: 'Enlever les droits super-admin',
  sasettings_email_config: "Configuration de l'envoi d'emails",
  sasettings_email_config_use_postfix:
    "Postfix est utilisé pour l'envoi des emails. Vous n'avez rien d'autre à configurer.",
  sasettings_email_config_use_postfix_check_deliverability:
    "Nous vous conseillons de vérifier la délivrabilité de vos emails grâce à l'outil gratuit",
  sasettings_email_config_label_host: 'Serveur SMTP',
  sasettings_email_config_label_port: 'Port (e.g. 25, 587 ou 465)',
  sasettings_email_config_label_user: "Identifiant (habituellement identique à l'adresse d'envoi)",
  sasettings_email_config_label_pass: 'Mot de passe',
  sasettings_email_config_label_sending_address: "Adresse email d'envoi",
  sasettings_email_config_label_allow_invalid_certificate:
    'Autoriser un certificat non vérifié (dangereux)',
  sasettings_email_config_apply_config: 'Appliquer la configuration',
  sasettings_email_config_testing: 'Tester',
  sasettings_email_config_testing_button: 'Envoyer un email à cette adresse',
  sasettings_email_config_testing_alert: 'Un email a été envoyé',
  sasettings_email_config_testing_error_alert: "Error d'envoi du mail : $e",
  group_setting_microsoft_entra_title: 'BETA - Configuration Microsoft Entra ID (optionnel)',
  group_setting_microsoft_entra_pitch:
    "UpSignOn peut interroger votre graphe Microsoft Entra ID pour vérifier l'autorisation d'un utilisateur, récupérer les utilisateurs partis, et (bientôt) obtenir les groupes de l'utilisateur pour le partage en équipe.",
  group_setting_microsoft_entra_authorizations:
    'Si vous choisissez de configurer Microsoft Entra, UpSignOn aura besoin des autorisations suivantes nécessitant une validation administrateur :',
  group_setting_microsoft_entra_tenant_id_label:
    "ID de client (alias tenant ID, alias ID de l'annuaire)",
  group_setting_microsoft_entra_client_id_label:
    'ID d\'application pour l\'Application "UpSignOn" que vous avez créé dans votre annuaire',
  group_setting_microsoft_entra_client_secret_label: 'Secret Client pour l\'Application "UpSignOn"',
  group_setting_microsoft_entra_app_resource_id_label:
    'ID d\'objet pour l\'Application "UpSignOn" (alias ID principal de service)',
  group_setting_microsoft_entra_apply_config: 'Appliquer la configuration',
  group_setting_microsoft_entra_testing: 'Tester',
  group_setting_microsoft_entra_test_start: 'Lancer le test',
  group_setting_microsoft_entra_test_error: 'Erreur lors du test de Microsoft Entra ID: $e',
  group_setting_microsoft_entra_test_user_authorized: 'Utilisateur autorisé :',
  group_setting_microsoft_entra_test_user_groupes: 'Groupes associés à cet utilisateur :',
};

export default translations;
