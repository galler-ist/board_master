import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  return (
    <header className="app-header">
      <div className="container">
        <h1 className="logo">
          <NavLink to="/">Board Master</NavLink>
        </h1>
        <nav>
          <NavLink to="/">{t('nav.home')}</NavLink>
          <NavLink to="/games">{t('nav.gameList')}</NavLink>
          <NavLink to="/curator">AI Curator</NavLink>
          <NavLink to="/contact">{t('nav.contact')}</NavLink>
          <NavLink to="/about">{t('nav.about')}</NavLink>
        </nav>
        <div className="header-controls">
          <div className="language-selector">
            <button onClick={() => setLangDropdownOpen(!langDropdownOpen)} className="language-button">
              {i18n.language.toUpperCase()}
            </button>
            {langDropdownOpen && (
              <div className="language-dropdown">
                <a href="#" onClick={() => changeLanguage('en')}>English</a>
                <a href="#" onClick={() => changeLanguage('ko')}>한국어</a>
                <a href="#" onClick={() => changeLanguage('de')}>Deutsch</a>
              </div>
            )}
          </div>
          <div className="theme-switcher">
            <label className="switch">
              <input type="checkbox" onChange={toggleTheme} checked={theme === 'dark'} />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
