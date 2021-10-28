import React from 'react';
import { adminFetchTemplate } from '../../helpers/fetchTemplate';
import { i18n } from '../../i18n/i18n';

export class ProSetupLink extends React.Component {
  qrcodeGenerator = null;
  base64Img = null;
  urlInputRef = null;

  state = {
    proServerUrlConfig: null,
  };
  fetchSetupUrlComponents = async () => {
    try {
      const serverUrl = await adminFetchTemplate('/server_url', 'GET');
      if (serverUrl) {
        this.setState({
          proServerUrlConfig: serverUrl,
        });
        this.computeProSetupLink();
      }
    } catch (e) {
      console.error(e);
    }
  };
  componentDidMount() {
    this.fetchSetupUrlComponents();
  }

  computeProSetupLink = () => {
    if (!this.state.proServerUrlConfig) return '';

    // First get link
    const { url, oidcAuthority, oidcClientId, oidcClientIdForAddons } =
      this.state.proServerUrlConfig;

    let link = `https://upsignon.eu/pro-setup?url=${encodeURIComponent(url.trim())}`;
    if (oidcAuthority && oidcClientId) {
      link += `&oidcAuthority=${encodeURIComponent(
        oidcAuthority.trim(),
      )}&oidcClientId=${oidcClientId.trim()}`;
      if (oidcClientIdForAddons) {
        link += `&oidcClientIdForAddons=${oidcClientIdForAddons.trim()}`;
      }
    }
    this.proSetupLink = link;

    // Then compute QR code
    if (!this.qrcodeGenerator) {
      this.qrcodeGenerator = require('./qrcode_generator').qrcode;
    }
    // create QR code
    const size = 150;
    const typeNumber = 0; // auto
    const errorCorrectionLevel = 'L';
    const qr = this.qrcodeGenerator(typeNumber, errorCorrectionLevel);
    qr.addData(this.proSetupLink);
    qr.make();
    const nbPixels = qr.getModuleCount();
    const cellSize = Math.round(size / nbPixels);
    const margin = 0;
    this.base64Img = qr.createDataURL(cellSize, margin);

    // Force rendering
    this.forceUpdate();
  };

  render() {
    if (!this.proSetupLink) return null;
    return (
      <div>
        <h2>{i18n.t('setup_link')}</h2>
        <div>{i18n.t('setup_link_is_group_specific')}</div>
        <a
          href={this.proSetupLink}
          className="link"
          target="_blank"
          style={{
            margin: 20,
            borderRadius: 10,
            border: '1px solid #eee',
            padding: 20,
            width: 400,
            maxWidth: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 0 3px #eee',
          }}
          rel="noreferrer"
        >
          <div style={{ fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>
            {i18n.t('link_to_communicate')}
          </div>
          <div
            style={{
              textAlign: 'center',
              display: 'block',
              marginBottom: 20,
              textOverflow: 'ellipsis',
              maxWidth: '100%',
              wordWrap: 'break-word',
            }}
          >
            {this.proSetupLink}
          </div>
          <img src={this.base64Img} style={{ height: 150, width: 150 }} alt="" />
        </a>
      </div>
    );
  }
}
