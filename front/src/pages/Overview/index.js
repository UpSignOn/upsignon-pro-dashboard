import React from 'react';
import { i18n } from '../../i18n/i18n';
import { SecurityChart } from './SecurityChart';
import { UsageChart } from './UsageChart';

// Props = setIsLoading, isSuperadminPage
class Overview extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>{i18n.t('menu_overview')}</h1>
        <h2>{i18n.t('useful_links')}</h2>
        <p>
          {i18n.t('suggestion')} <a href="mailto:contact@upsignon.eu">contact@upsignon.eu</a>
        </p>
        <ul>
          <li>
            <a
              className="link"
              target="_blank"
              href="https://upsignon.notion.site/Notice-d-utilisation-d-UpSignOn-de4f8ba200e14ec1adcaba2613b38340"
              rel="noreferrer"
            >
              {i18n.t('link_to_tutorials')}
            </a>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              href="https://upsignon.notion.site/Notes-de-version-7b9253161210463083a638d116f40956"
              rel="noreferrer"
            >
              {i18n.t('link_to_changelogs')}
            </a>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              href="https://upsignon.notion.site/Liens-de-t-l-chargement-de-l-application-45c3531505d4438d86a67890296ae437"
              rel="noreferrer"
            >
              {i18n.t('link_to_downloads')}
            </a>
          </li>
          <li>
            <a
              className="link"
              target="_blank"
              href="https://github.com/UpSignOn/UpSignOn-pro-server/blob/production/doc/GPO_deployment.md"
              rel="noreferrer"
            >
              {i18n.t('install_doc_browser_extension')}
            </a>
          </li>
          {this.props.isSuperadminPage && (
            <li>
              <a
                className="link"
                target="_blank"
                href="https://github.com/UpSignOn/UpSignOn-pro-server"
                rel="noreferrer"
              >
                {i18n.t('install_doc_server_pro')}
              </a>
            </li>
          )}
        </ul>

        <SecurityChart />
        <UsageChart />
      </div>
    );
  }
}

export { Overview };
