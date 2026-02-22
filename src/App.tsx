import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from './contexts/ThemeContext';
import ContactForm from './components/ContactForm'; // Import the new component
import './App.css';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const featuredGames = [
    {
      id: 1,
      title: 'Catan',
      rating: 4.5,
      excerpt: 'A game of strategy and resource management. The classic for a reason!',
      image: 'https://placehold.co/300x200/6C42EF/FFFFFF/png?text=Catan',
    },
    {
      id: 2,
      title: 'Wingspan',
      rating: 5,
      excerpt: 'A beautiful and engaging engine-building game about birds.',
      image: 'https://placehold.co/300x200/F472B6/FFFFFF/png?text=Wingspan',
    },
    {
      id: 3,
      title: 'Gloomhaven',
      rating: 4.8,
      excerpt: 'A cooperative legacy game with a massive world to explore.',
      image: 'https://placehold.co/300x200/10B981/FFFFFF/png?text=Gloomhaven',
    },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangDropdownOpen(false);
  };

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xykdnrwv';

  return (
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="logo">Board Master</h1>
          <nav>
            <a href="#home">{t('nav.home')}</a>
            <a href="#reviews">{t('nav.reviews')}</a>
            <a href="#contact">{t('nav.contact')}</a> {/* Updated navigation link */}
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

      <main>
        <section className="hero">
          <div className="container">
            <h2>{t('hero.title')}</h2>
            <p>{t('hero.subtitle')}</p>
            <button className="cta-button">{t('hero.button')}</button>
          </div>
        </section>

        <section id="reviews" className="featured-reviews">
          <div className="container">
            <h3>{t('featured.title')}</h3>
            <div className="reviews-grid">
              {featuredGames.map((game) => (
                <div key={game.id} className="review-card">
                  <img src={game.image} alt={game.title} className="review-card-img" />
                  <div className="review-card-content">
                    <h4>{game.title}</h4>
                    <div className="rating">{'★'.repeat(Math.floor(game.rating))}{'☆'.repeat(5 - Math.floor(game.rating))} ({game.rating})</div>
                    <p>{game.excerpt}</p>
                    <a href="#" className="read-more">Read More &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <ContactForm formspreeEndpoint={FORMSPREE_ENDPOINT} />
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2026 Board Master. {t('footer.rights')}</p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
