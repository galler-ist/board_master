import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { allReviews } from '../data/games'; // Import allReviews from data file
import UserReviews from '../components/UserReviews';

const ReviewDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const review = allReviews.find((r) => r.id === Number(id));

  if (!review) {
    return (
      <section className="review-detail-page container">
        <Helmet>
          <title>{t('reviewDetail.notFound')} | Board Master</title>
        </Helmet>
        <h2>{t('reviewDetail.notFound')}</h2>
        <p>{t('reviewDetail.notFoundDescription')}</p>
      </section>
    );
  }

  const title = t(review.titleKey);
  const excerpt = t(review.excerptKey);

  return (
    <>
      <Helmet>
        <title>{title} Review | Board Master</title>
        <meta name="description" content={excerpt} />
        <meta property="og:title" content={`${title} Review | Board Master`} />
        <meta property="og:description" content={excerpt} />
        <meta property="og:image" content={review.image} />
        <meta property="og:type" content="article" />
      </Helmet>
      <section className="review-detail-page container">
        <Link to="/reviews" className="back-to-reviews">&larr; {t('reviewDetail.backToReviews')}</Link>
        <img src={review.image} alt={title} className="review-detail-image" />
        <h2>{title}</h2>
        <div className="rating">{'★'.repeat(Math.floor(review.rating))}{'☆'.repeat(5 - Math.floor(review.rating))} ({review.rating})</div>
        <div className="review-full-content" dangerouslySetInnerHTML={{ __html: t(review.fullContentKey).replace(/\n/g, '<br />') }} />

        <UserReviews gameId={review.id} />
      </section>
    </>
  );
};

export default ReviewDetailPage;
