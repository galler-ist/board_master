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
  {
    id: 4,
    title: 'Terraforming Mars',
    rating: 4.7,
    excerpt: 'A strategic game about corporations terraforming Mars.',
    image: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&w=600',
    fullContent: `
      Terraforming Mars is a board game for 1 to 5 players designed by Jacob Fryxelius and published by FryxGames in 2016. In the game, players take on the role of powerful corporations, working together to terraform the planet Mars by raising the temperature, increasing the oxygen level, and covering the planet with ocean.
      Players achieve these goals by playing project cards, which represent various technologies, resource production, and actions. Each project card has requirements that must be met to play it, such as a certain temperature or oxygen level.
      The game features a high degree of strategic depth, with players needing to balance their own corporate objectives with the overarching goal of terraforming Mars. The interaction between players is primarily indirect, through competition for resources and placement of tiles on the board.
      Terraforming Mars is praised for its thematic integration, strategic complexity, and high replayability. It offers a satisfying blend of engine-building, tableau building, and area control, making it a favorite among Eurogame enthusiasts.
    `,
  },
  {
    id: 5,
    title: 'Root',
    rating: 4.6,
    excerpt: 'A game of adventure and war in a vast wilderness.',
    image: 'https://images.unsplash.com/photo-1579294939223-952796122d25?auto=format&fit=crop&w=600',
    fullContent: `
      Root is a game of adventure and war in a vast wilderness where players embody one of four factions, each with its own unique gameplay mechanics and victory conditions. Designed by Cole Wehrle and published by Leder Games in 2017, Root features asymmetric gameplay, where each faction plays by fundamentally different rules.
      The Marquise de Cat occupies the forest and seeks to industrialize it. The Eyrie Dynasties must command the respect of the old regime. The Woodland Alliance works to gather supporters and spark a rebellion. And the Vagabond plays all sides, fulfilling quests and manipulating the conflict for personal gain.
      Root is celebrated for its highly asymmetric design, rich thematic integration, and beautiful artwork. It offers a unique blend of strategic depth and player interaction, making every game a dynamic and memorable experience. The game's intricate rules can be challenging to learn, but the rewarding gameplay makes it worthwhile for dedicated players.
    `,
  },
  {
    id: 6,
    title: 'Spirit Island',
    rating: 4.9,
    excerpt: 'A cooperative game of elemental spirits defending their island home.',
    image: 'https://images.unsplash.com/photo-1579486807353-90924e2c3b8f?auto=format&fit=crop&w=600',
    fullContent: `
      Spirit Island is a cooperative, highly thematic strategy game designed by R. Eric Reuss and published by Greater Than Games in 2017. Players take on the role of powerful nature spirits, working together to defend their sacred island from invading colonial powers.
      Each spirit has unique elemental powers and a distinct playstyle. Players grow their powers, gain new abilities, and work to blight the land and drive the invaders from the island. The game features an innovative system where player actions have both immediate and long-term consequences, requiring careful planning and coordination.
      Spirit Island is renowned for its deep strategic gameplay, high replayability, and challenging difficulty. It offers a fresh take on cooperative board gaming, with players actively working against a complex and evolving invader system. The game's rich theme and diverse spirits ensure that every playthrough feels unique and engaging.
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
