import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Dummy data - In a real app, you would fetch this from an API
const allReviews = [
  {
    id: 1,
    title: 'Catan',
    rating: 4.5,
    excerpt: 'A game of strategy and resource management. The classic for a reason!',
    image: 'https://placehold.co/600x400/6C42EF/FFFFFF/png?text=Catan',
    fullContent: `
      Catan, originally published as Settlers of Catan, is a multiplayer board game designed by Klaus Teuber. It was first published in 1995 in Germany and has since sold over 32 million copies in 40 languages.
      Players take on the role of settlers, attempting to tame the remote but rich isle of Catan. Beginning with two small settlements and two roads, players collect resources (wood, brick, sheep, wheat, and ore) based on the dice roll and the hexagonal terrain tiles adjacent to their settlements.
      These resources are then used to build new roads, settlements, and cities. The goal is to be the first to reach 10 victory points.
      Catan is renowned for its blend of strategy, resource management, and negotiation. Its simple rules are easy to learn, but the depth of strategy keeps players engaged for years.
      The random setup of the board ensures high replayability, as every game presents a new challenge. While luck can play a role due to dice rolls, skilled players can mitigate this through clever trading and strategic placement.
    `,
  },
  {
    id: 2,
    title: 'Wingspan',
    rating: 5,
    excerpt: 'A beautiful and engaging engine-building game about birds.',
    image: 'https://placehold.co/600x400/F472B6/FFFFFF/png?text=Wingspan',
    fullContent: `
      Wingspan is a competitive, medium-weight, card-driven, engine-building board game designed by Elizabeth Hargrave and published by Stonemaier Games in 2019. It has received critical acclaim for its beautiful artwork, engaging gameplay, and unique theme.
      Players are bird enthusiasts—researchers, bird watchers, ornithologists, and collectors—seeking to discover and attract the best birds to their network of wildlife preserves. Each bird you play extends a chain of powerful combinations in one of your three habitats (forest, grassland, and wetland).
      Each habitat focuses on a key action: gaining food tokens (forest), laying eggs (graßsland), or drawing bird cards (wetland). The game features over 170 unique bird cards, each with its own special abilities, beautiful illustrations, and interesting facts.
      Wingspan is praised for its elegant design, relaxing gameplay, and educational value. It's a game that appeals to both seasoned board gamers and newcomers alike, offering a fresh take on engine-building mechanics.
    `,
  },
  {
    id: 3,
    title: 'Gloomhaven',
    rating: 4.8,
    excerpt: 'A cooperative legacy game with a massive world to explore.',
    image: 'https://placehold.co/600x400/10B981/FFFFFF/png?text=Gloomhaven',
    fullContent: `
      Gloomhaven is a cooperative legacy board game designed by Isaac Childres and published by Cephalofair Games in 2017. It is a massive, campaign-driven game that combines elements of tactical combat, role-playing, and dungeon crawling.
      Players take on the role of a group of mercenaries, each with unique abilities and motivations, as they embark on a sprawling campaign filled with challenging scenarios, branching narratives, and difficult decisions. The game features a persistent world that changes based on player choices, with new locations, events, and characters unlocking over time.
      Combat is tactical and card-driven, requiring careful planning and coordination. The "legacy" aspect means that the game components change permanently as you play, revealing new secrets, unlocking new characters, and evolving the story.
      Gloomhaven is celebrated for its immersive world, deep strategic combat, and incredible replayability. It's a game that demands a significant time investment but rewards players with an unparalleled cooperative board gaming experience.
    `,
  },
];

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
      <img src={review.image} alt={review.title} className="review-detail-image" />
      <h2>{review.title}</h2>
      <div className="rating">{'★'.repeat(Math.floor(review.rating))}{'☆'.repeat(5 - Math.floor(review.rating))} ({review.rating})</div>
      <div className="review-full-content" dangerouslySetInnerHTML={{ __html: review.fullContent.replace(/\n/g, '<br />') }} />

      {/* Disqus comment section removed */}
    </section>
  );
};

export default ReviewDetailPage;
