import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="app-footer">
      <div className="container">
        <p>&copy; 2026 Board Master. {t('footer.rights')}</p>
        <div className="social-links">
          <Link to="/privacy">{t('privacy.title')}</Link> {/* Privacy Policy link */}
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
