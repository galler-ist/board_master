import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { allReviews } from '../data/games'; // Import allReviews from data file

const ReviewsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('nav.reviews')} | Board Master</title>
        <meta name="description" content="Explore our in-depth board game reviews and ratings. Find your next favorite game today!" />
      </Helmet>
      <section id="reviews" className="featured-reviews">
        <div className="container">
          <h3>{t('featured.title')}</h3>
          <div className="reviews-grid">
            {allReviews.map((game) => (
              <div key={game.id} className="review-card">
                <img src={game.image} alt={t(game.titleKey)} className="review-card-img" />
                <div className="review-card-content">
                  <h4>{t(game.titleKey)}</h4> {/* Use t() for title */}
                  <div className="rating">{'★'.repeat(Math.floor(game.rating))}{'☆'.repeat(5 - Math.floor(game.rating))} ({game.rating})</div>
                  <p>{t(game.excerptKey)}</p> {/* Use t() for excerpt */}
                  <Link to={`/reviews/${game.id}`} className="read-more">Read More &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsPage;
