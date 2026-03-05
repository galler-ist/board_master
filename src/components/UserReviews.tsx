import React, { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { useTranslation } from 'react-i18next';

import { searchGames } from '../services/bggService';
import type { BGGSearchResult } from '../services/bggService';

interface Review {
  id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
  lang?: string;
  password?: string;
  bgg_id: number;
}

interface UserReviewsProps {
  bggId?: number;
}

const UserReviews: React.FC = ({ bggId: initialBggId }) => {
  const { t, i18n } = useTranslation();
  const [bggId, setBggId] = useState<number | undefined>(initialBggId);
  const [selectedGameName, setSelectedGameName] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [gameSearchQuery, setGameSearchQuery] = useState('');
  const [gameSearchResults, setGameSearchResults] = useState<BGGSearchResult[]>([]);
  const [searchingGame, setSearchingGame] = useState(false);

  // Helper to map lang codes to flag image URLs
  const getFlagUrl = (lang?: string) => {
    const code = lang?.split('-')[0];
    switch (code) {
      case 'ko': return 'https://flagcdn.com/w40/kr.png';
      case 'de': return 'https://flagcdn.com/w40/de.png';
      case 'en': return 'https://flagcdn.com/w40/us.png';
      default: return undefined;
    }
  };

  useEffect(() => {
    if (!bggId) {
      setReviews([]);
      return;
    }

    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .eq('bgg_id', bggId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error("Error fetching reviews: ", error);
      } else {
        setReviews(data || []);
      }
    };

    fetchReviews();

    // Set up real-time subscription
    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'reviews',
          filter: `bgg_id=eq.${bggId}`
        },
        () => {
          fetchReviews();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [bggId]);

  const handleGameSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameSearchQuery.trim()) return;
    setSearchingGame(true);
    const results = await searchGames(gameSearchQuery);
    setGameSearchResults(results);
    setSearchingGame(false);
  };

  const selectGame = (game: BGGSearchResult) => {
    setBggId(Number(game.id));
    setSelectedGameName(game.name);
    setGameSearchResults([]);
    setGameSearchQuery('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userName || !comment || !password || !bggId) return;

    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('reviews')
        .insert([
          {
            bgg_id: bggId,
            user_name: userName,
            rating,
            comment,
            password,
            lang: i18n.language,
          }
        ]);

      if (error) throw error;

      setUserName('');
      setComment('');
      setPassword('');
      setRating(5);
      
    } catch (error: any) {
      console.error("Error adding review: ", error);
      alert(`Failed to submit review: ${error.message || error}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (review: Review) => {
    const inputPassword = window.prompt(t('reviews.passwordPrompt'));
    if (inputPassword === null) return;

    if (inputPassword === review.password) {
      if (window.confirm(t('reviews.deleteConfirm'))) {
        try {
          const { error } = await supabase
            .from('reviews')
            .delete()
            .eq('id', review.id);

          if (error) throw error;
          alert(t('reviews.deleteSuccess'));
        } catch (error) {
          console.error("Error deleting review: ", error);
          alert("Failed to delete review.");
        }
      }
    } else {
      alert(t('reviews.wrongPassword'));
    }
  };

  return (
    <div className="user-reviews-section">
      <hr />
      <h3>{t('reviews.userReviewsTitle', 'User Reviews')}</h3>
      
      {!bggId ? (
        <div className="game-selector">
          <p>{t('reviews.selectGamePrompt', 'Please search for a game to review:')}</p>
          <form onSubmit={handleGameSearch} className="search-form" style={{ marginBottom: '1rem' }}>
            <input 
              type="text" 
              placeholder={t('search.placeholder') || "Search for a board game..."} 
              value={gameSearchQuery}
              onChange={(e) => setGameSearchQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="cta-button" disabled={searchingGame}>
              {searchingGame ? t('common.loading') : t('search.button') || "Search"}
            </button>
          </form>
          {gameSearchResults.length > 0 && (
            <ul className="search-results-list" style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              {gameSearchResults.map(game => (
                <li key={game.id}>
                  <button 
                    onClick={() => selectGame(game)}
                  >
                    {game.name} {game.yearpublished ? `(${game.yearpublished})` : ''}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <>
          {!initialBggId && (
            <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <p style={{ margin: 0 }}>Reviewing: <strong>{selectedGameName}</strong></p>
              <button onClick={() => setBggId(undefined)} className="secondary-button" style={{ padding: '0.2rem 0.5rem', fontSize: '0.8rem' }}>Change</button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="review-form">
            <div className="form-group">
              <input 
                type="text" 
                placeholder={t('reviews.namePlaceholder', 'Your Name')} 
                value={userName} 
                onChange={(e) => setUserName(e.target.value)}
                required
                autoComplete="name"
              />
              <input 
                type="password" 
                placeholder={t('reviews.passwordPlaceholder', 'Password')} 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="new-password"
              />
              <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                {[5, 4, 3, 2, 1].map(n => (
                  <option key={n} value={n}>{n} {t('reviews.stars', 'Stars')}</option>
                ))}
              </select>
            </div>
            <textarea 
              placeholder={t('reviews.commentPlaceholder', 'Leave your review here...')} 
              value={comment} 
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <button type="submit" disabled={submitting} className="cta-button">
              {submitting ? t('reviews.submitting', 'Submitting...') : t('reviews.submitReview', 'Post Review')}
            </button>
          </form>

          <div className="reviews-list">
            {reviews.length === 0 ? (
              <p className="no-reviews">{t('reviews.noReviews', 'No reviews yet. Be the first to review!')}</p>
            ) : (
              reviews.map((rev) => (
                <div key={rev.id} className="user-review-item">
                  <div className="review-header">
                    <div className="user-info">
                      <div className="user-name-wrapper">
                        <strong>{rev.user_name}</strong>
                        {getFlagUrl(rev.lang) && (
                          <img 
                            src={getFlagUrl(rev.lang)} 
                            alt={rev.lang} 
                            className="lang-flag-img" 
                          />
                        )}
                      </div>
                      <button 
                        onClick={() => handleDelete(rev)} 
                        className="delete-button"
                        title={t('reviews.delete')}
                      >
                        &times;
                      </button>
                    </div>
                    <span className="user-rating">{'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}</span>
                  </div>
                  <p>{rev.comment}</p>
                  <small>{new Date(rev.created_at).toLocaleDateString()}</small>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserReviews;
