import React from 'react';
import './App.css';

const App: React.FC = () => {
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
    <div className="app">
      <header className="app-header">
        <div className="container">
          <h1 className="logo">Board Master</h1>
          <nav>
            <a href="#home">Home</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>Discover Your Next Favorite Board Game</h2>
            <p>In-depth reviews, strategy guides, and more from passionate gamers.</p>
            <button className="cta-button">Browse All Reviews</button>
          </div>
        </section>

        <section id="reviews" className="featured-reviews">
          <div className="container">
            <h3>Featured Reviews</h3>
            <div className="reviews-grid">
              {featuredGames.map((game) => (
                <div key={game.id} className="review-card">
                  <img src={game.image} alt={game.title} className="review-card-img" />
                  <div className="review-card-content">
                    <h4>{game.title}</h4>
                    <div className="rating">{'★'.repeat(Math.floor(game.rating))}{'☆'.repeat(5 - Math.floor(game.rating))} ({game.rating})</div>
                    <p>{game.excerpt}</p>
                    <a href="#" className="read-more">Read More &rarr;</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <div className="container">
          <p>&copy; 2026 Board Master. All rights reserved.</p>
          <div className="social-links">
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
