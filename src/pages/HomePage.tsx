import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { searchGames } from '../services/bggService';
import type { BGGSearchResult } from '../services/bggService';
import { allReviews } from '../data/games';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<BGGSearchResult[]>([]);
  const [loading, setLoading] = useState(false);

  // Pick a random game from our featured list for initial recommendation
  const [recommendedGame] = useState(() => {
    const randomIndex = Math.floor(Math.random() * allReviews.length);
    return allReviews[randomIndex];
  });

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    const searchResults = await searchGames(searchQuery);
    setResults(searchResults);
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>{t('hero.title')} | Board Master</title>
        <meta name="description" content={t('hero.subtitle')} />
      </Helmet>
      <section className="hero">
        <div className="container">
          <div className="daily-recommendation">
            <span className="rec-badge">{t('home.recommendationTag', 'Today\'s Pick')}</span>
            <Link to={`/games/${recommendedGame.bggId}`} className="rec-link">
              <strong>{t(recommendedGame.titleKey)}</strong> &rarr;
            </Link>
          </div>
          <h2>{t('hero.title')}</h2>
          <p>{t('hero.subtitle')}</p>
          
          <form onSubmit={handleSearch} className="search-form">
            <input 
              type="text" 
              placeholder={t('search.placeholder') || "Search for a board game..."} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="cta-button" disabled={loading}>
              {loading ? t('common.loading') : t('search.button') || "Search"}
            </button>
          </form>

          {results.length > 0 && (
            <div className="search-results">
              <h3>{t('search.results') || "Search Results"}</h3>
              <ul>
                {results.map(result => (
                  <li key={result.id}>
                    <Link to={`/games/${result.id}`}>
                      {result.name} {result.yearpublished ? `(${result.yearpublished})` : ''}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div style={{ marginTop: '2rem' }}>
            <Link to="/games" className="secondary-button">
              {t('hero.button')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
