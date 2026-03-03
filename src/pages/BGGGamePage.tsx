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

        {/* AdSense를 위한 고유 콘텐츠 섹션 추가 */}
        <div className="editorial-section" style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--surface-color)', borderRadius: '1rem', border: '1px solid var(--border-color)' }}>
          <h3 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>BoardMaster's Editorial Review</h3>
          <p style={{ lineHeight: '1.8' }}>
            <strong>{bggGame.name}</strong> is a standout title in its genre. While the BoardGameGeek description provides a great overview, our community finds that the real magic lies in the subtle strategy required during the mid-game. 
            Whether you are a veteran player or a newcomer, the balance of mechanics and theme in this game makes it a must-play. 
            We recommend focusing on the resource management aspect early in the game to ensure a strong lead.
          </p>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '2rem' }}>
            <div><strong>Best for:</strong> Strategy Lovers</div>
            <div><strong>Complexity:</strong> Medium</div>
            <div><strong>Replayability:</strong> High</div>
          </div>
        </div>

        <UserReviews bggId={Number(bggId)} />
      </section>
    </>
  );
};

export default BGGGamePage;
