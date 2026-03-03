import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import bggLogo from '../assets/powered-by-bgg-rgb.svg';

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
                src={bggLogo} 
                alt="Powered by BoardGameGeek" 
                style={{ height: '30px', display: 'block' }} 
              />
            </a>
          </div>
          <div className="social-links">
            <Link to="/privacy">{t('privacy.title')}</Link>
            <Link to="/terms">Terms of Service</Link>
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
