import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { allReviews } from '../data/games'; // Import allReviews from data file

const ReviewDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const review = allReviews.find((r) => r.id === Number(id));

  if (!review) {
    return (
      <section className="review-detail-page container">
        <h2>{t('reviewDetail.notFound')}</h2>
        <p>{t('reviewDetail.notFoundDescription')}</p>
      </section>
    );
  }

  return (
    <section className="review-detail-page container">
      <Link to="/reviews" className="back-to-reviews">&larr; {t('reviewDetail.backToReviews')}</Link>
      <img src={review.image} alt={t(review.titleKey)} className="review-detail-image" /> {/* Use t() for alt text */}
      <h2>{t(review.titleKey)}</h2> {/* Use t() for title */}
      <div className="rating">{'★'.repeat(Math.floor(review.rating))}{'☆'.repeat(5 - Math.floor(review.rating))} ({review.rating})</div>
      <div className="review-full-content" dangerouslySetInnerHTML={{ __html: t(review.fullContentKey).replace(/\n/g, '<br />') }} /> {/* Use t() for full content */}

      {/* Disqus comment section removed */}
    </section>
  );
};

export default ReviewDetailPage;
