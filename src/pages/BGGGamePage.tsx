import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import UserReviews from '../components/UserReviews';
import { getGameDetails } from '../services/bggService';
import type { BGGGameDetails } from '../services/bggService';

const BGGGamePage: React.FC = () => {
  const { bggId } = useParams<{ bggId: string }>();
  const { t } = useTranslation();
  const [bggGame, setBggGame] = useState<BGGGameDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBggData = async () => {
      if (!bggId) return;
      const gameData = await getGameDetails(bggId);
      setBggGame(gameData);
      setLoading(false);
    };

    fetchBggData();
  }, [bggId]);

  if (loading) {
    return <div className="container" style={{ padding: '2rem' }}>{t('common.loading') || 'Loading...'}</div>;
  }

  if (!bggGame) {
    return (
      <section className="container" style={{ padding: '2rem' }}>
        <h2>{t('common.error') || 'Error'}</h2>
        <p>Game not found.</p>
        <Link to="/">{t('reviewDetail.backToHome') || 'Back to Home'}</Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{bggGame.name} | Board Master</title>
        <meta name="description" content={bggGame.name} />
      </Helmet>
      <section className="review-detail-page container">
        <Link to="/" className="back-to-reviews">&larr; {t('reviewDetail.backToHome') || 'Back to Home'}</Link>
        <img src={bggGame.image} alt={bggGame.name} className="review-detail-image" />
        <h2>{bggGame.name} {bggGame.yearpublished ? `(${bggGame.yearpublished})` : ''}</h2>
        
        <div 
          className="review-full-content" 
          dangerouslySetInnerHTML={{ __html: bggGame.description.replace(/\n/g, '<br />') }} 
        />

        <UserReviews bggId={Number(bggId)} />
      </section>
    </>
  );
};

export default BGGGamePage;
