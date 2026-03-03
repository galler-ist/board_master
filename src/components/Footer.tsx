import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="app-footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2026 Board Master. {t('footer.rights') || 'All rights reserved.'}</p>
          <div className="bgg-attribution">
            <a href="https://boardgamegeek.com" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://cf.geekdo-images.com/pub/powered_by_bgg.png" 
                alt="Powered by BoardGameGeek" 
                style={{ height: '40px', opacity: 0.8, transition: 'opacity 0.3s' }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = '1')}
                onMouseOut={(e) => (e.currentTarget.style.opacity = '0.8')}
              />
            </a>
          </div>
          <div className="social-links">
            <Link to="/privacy">{t('privacy.title')}</Link>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
