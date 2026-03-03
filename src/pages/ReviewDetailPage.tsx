import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { allReviews } from '../data/games';
import UserReviews from '../components/UserReviews';
import { getGameDetails } from '../services/bggService';
import type { BGGGameDetails } from '../services/bggService';

const ReviewDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const review = allReviews.find((r) => r.id === Number(id));
  const [bggGame, setBggGame] = useState<BGGGameDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBggData = async () => {
      if (!review) return;
      const gameData = await getGameDetails(review.bggId);
      setBggGame(gameData);
      setLoading(false);
    };

    fetchBggData();
  }, [review]);

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

  const title = bggGame ? bggGame.name : t(review.titleKey);
  const image = bggGame ? bggGame.image : review.image;
  const description = bggGame ? bggGame.description : t(review.fullContentKey);

  return (
    <>
      <Helmet>
        <title>{title} Review | Board Master</title>
        <meta name="description" content={title} />
        <meta property="og:title" content={`${title} Review | Board Master`} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />
      </Helmet>
      <section className="review-detail-page container">
        <Link to="/reviews" className="back-to-reviews">&larr; {t('reviewDetail.backToReviews')}</Link>
        {loading ? (
          <div className="loading">{t('common.loading') || 'Loading...'}</div>
        ) : (
          <>
            <img src={image} alt={title} className="review-detail-image" />
            <h2>{title}</h2>
            <div className="rating">{'★'.repeat(Math.floor(review.rating))}{'☆'.repeat(5 - Math.floor(review.rating))} ({review.rating})</div>
            <div 
              className="review-full-content" 
              dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br />') }} 
            />
          </>
        )}

        <UserReviews bggId={review.bggId} />
      </section>
    </>
  );
};

export default ReviewDetailPage;
