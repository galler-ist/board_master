import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { allReviews } from '../data/games';
import { getMultipleGameDetails } from '../services/bggService';
import type { BGGGameDetails } from '../services/bggService';
import UserReviews from '../components/UserReviews';

const GamesPage: React.FC = () => {
  const { t } = useTranslation();
  const [bggData, setBggData] = useState<Record<number, BGGGameDetails>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBggData = async () => {
      const ids = allReviews.map(r => r.bggId);
      const data = await getMultipleGameDetails(ids);
      setBggData(data);
      setLoading(false);
    };

    fetchBggData();
  }, []);

  return (
    <>
      <Helmet>
        <title>{t('nav.gameList')} | Board Master</title>
        <meta name="description" content="Explore our in-depth board game reviews and ratings. Find your next favorite game today!" />
      </Helmet>
      <section id="games" className="featured-reviews">
        <div className="container">
          <h3>{t('featured.title')}</h3>
          {loading ? (
            <div className="loading">{t('common.loading') || 'Loading...'}</div>
          ) : (
            <div className="reviews-grid">
              {allReviews.map((review) => {
                const bggGame = bggData[review.bggId];
                const displayTitle = bggGame ? bggGame.name : t(review.titleKey);
                const displayImage = bggGame ? bggGame.thumbnail : review.image;
                const displayDescription = bggGame 
                  ? (bggGame.description.length > 150 ? bggGame.description.substring(0, 150).replace(/&#10;/g, ' ') + '...' : bggGame.description)
                  : t(review.excerptKey);

                return (
                  <div key={review.id} className="review-card">
                    <img src={displayImage} alt={displayTitle} className="review-card-img" />
                    <div className="review-card-content">
                      <h4>{displayTitle}</h4>
                      <div className="rating">{'★'.repeat(Math.floor(review.rating))}{'☆'.repeat(5 - Math.floor(review.rating))} ({review.rating})</div>
                      <p dangerouslySetInnerHTML={{ __html: displayDescription }} />
                      <Link to={`/games/${review.bggId}`} className="read-more">Read More &rarr;</Link>
                    </div>
                  </div>
                );

              })}
            </div>
          )}
        </div>
      </section>

      <section className="user-reviews-global container" style={{ paddingBottom: '4rem' }}>
        <UserReviews />
      </section>
    </>
  );
};

export default GamesPage;
