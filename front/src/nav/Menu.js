import './Menu.css';
import { i18n } from '../i18n/i18n';
import { fetchTemplate } from '../helpers/fetchTemplate';
import { frontUrl } from '../helpers/env';
import { GroupChooser } from './GroupChooser';

function Menu(props) {
  const { pages } = props;
  return (
    <nav>
      <GroupChooser />
      {pages.map((p) => {
        return (
          <a
            key={p.key}
            href={frontUrl + p.href}
            className={`navItem ${p.isCurrent ? 'current' : ''}`}
          >
            {p.title}
          </a>
        );
      })}
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
        <div
          className="action"
          onClick={async () => {
            try {
              await fetchTemplate('/api/disconnect', 'POST', null);
            } catch (e) {
            } finally {
              window.location.href = frontUrl;
            }
          }}
        >
          {i18n.t('disconnect')}
        </div>
      </div>
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 140 140"
          preserveAspectRatio="xMidYMid meet"
        >
          <circle fill="rgb(0, 171, 169)" cx="70" cy="70" r="70" />
          <svg fill="white" strokeWidth="0" x="20" y="20">
            <path d="M50.00,1.00a17 17 0 1 0 0,34a17 17 0 1 0 0,-34v7a10 10 0 0 1 0,20a10 10 0 1 1 0,-20Z" />
            <path d="M24.63,27.23A27 27 0 0 0 75.37,27.23A3.5 3.5 20 1 1 81.95,29.63A34 34 0 0 1 18.05,29.63A3.5 3.5 -20 1 1 24.63,27.23Z" />
            <path d="M8.65,33.05A44 44 0 0 0 91.35,33.05A3.5 3.5 20 1 1 97.92,35.44A51 51 0 0 1 2.08,35.44A3.5 3.5 -20 1 1 8.65,33.05Z" />
            <circle cx="50.00" cy="89.00" r="10" />
          </svg>
        </svg>
        <div>UpSignOn</div>
      </div>
    </nav>
  );
}

export { Menu };
