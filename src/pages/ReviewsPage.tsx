import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Import Link

const ReviewsPage: React.FC = () => {
  const { t } = useTranslation();

  const featuredGames = [
    {
      id: 1,
      title: 'Catan',
      rating: 4.5,
      excerpt: 'A game of strategy and resource management. The classic for a reason!',
      image: 'https://placehold.co/300x200/6C42EF/FFFFFF/png?text=Catan',
    },
    {
      id: 2,
      title: 'Wingspan',
      rating: 5,
      excerpt: 'A beautiful and engaging engine-building game about birds.',
      image: 'https://placehold.co/300x200/F472B6/FFFFFF/png?text=Wingspan',
    },
    {
      id: 3,
      title: 'Gloomhaven',
      rating: 4.8,
      excerpt: 'A cooperative legacy game with a massive world to explore.',
      image: 'https://placehold.co/300x200/10B981/FFFFFF/png?text=Gloomhaven',
    },
  ];

  return (
    <section id="reviews" className="featured-reviews">
      <div className="container">
        <h3>{t('featured.title')}</h3>
        <div className="reviews-grid">
          {featuredGames.map((game) => (
            <div key={game.id} className="review-card">
              <img src={game.image} alt={game.title} className="review-card-img" />
              <div className="review-card-content">
                <h4>{game.title}</h4>
                <div className="rating">{'★'.repeat(Math.floor(game.rating))}{'☆'.repeat(5 - Math.floor(game.rating))} ({game.rating})</div>
                <p>{game.excerpt}</p>
                {/* Use Link to navigate to the detail page */}
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
