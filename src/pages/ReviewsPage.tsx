import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ReviewsPage: React.FC = () => {
  const { t } = useTranslation();

  const allReviews = [
    {
      id: 1,
      title: 'Catan',
      rating: 4.5,
      excerpt: 'A game of strategy and resource management. The classic for a reason!',
      image: 'https://placehold.co/300x200/6C42EF/FFFFFF/png?text=Catan',
      fullContent: `...` // Placeholder for full content, actual content in ReviewDetailPage
    },
    {
      id: 2,
      title: 'Wingspan',
      rating: 5,
      excerpt: 'A beautiful and engaging engine-building game about birds.',
      image: 'https://placehold.co/300x200/F472B6/FFFFFF/png?text=Wingspan',
      fullContent: `...`
    },
    {
      id: 3,
      title: 'Gloomhaven',
      rating: 4.8,
      excerpt: 'A cooperative legacy game with a massive world to explore.',
      image: 'https://placehold.co/300x200/10B981/FFFFFF/png?text=Gloomhaven',
      fullContent: `...`
    },
    {
      id: 4,
      title: 'Terraforming Mars',
      rating: 4.7,
      excerpt: 'A strategic game about corporations terraforming Mars.',
      image: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&w=500', // User provided image
      fullContent: `...`
    },
    {
      id: 5,
      title: 'Root',
      rating: 4.6,
      excerpt: 'A game of adventure and war in a vast wilderness.',
      image: 'https://images.unsplash.com/photo-1579294939223-952796122d25?auto=format&fit=crop&w=500', // Placeholder Unsplash
      fullContent: `...`
    },
    {
      id: 6,
      title: 'Spirit Island',
      rating: 4.9,
      excerpt: 'A cooperative game of elemental spirits defending their island home.',
      image: 'https://images.unsplash.com/photo-1579486807353-90924e2c3b8f?auto=format&fit=crop&w=500', // Placeholder Unsplash
      fullContent: `...`
    },
  ];

  return (
    <section id="reviews" className="featured-reviews">
      <div className="container">
        <h3>{t('featured.title')}</h3>
        <div className="reviews-grid">
          {allReviews.map((game) => (
            <div key={game.id} className="review-card">
              <img src={game.image} alt={game.title} className="review-card-img" />
              <div className="review-card-content">
                <h4>{game.title}</h4>
                <div className="rating">{'★'.repeat(Math.floor(game.rating))}{'☆'.repeat(5 - Math.floor(game.rating))} ({game.rating})</div>
                <p>{game.excerpt}</p>
                <Link to={`/reviews/${game.id}`} className="read-more">Read More &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;
