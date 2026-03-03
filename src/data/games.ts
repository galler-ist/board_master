// src/data/games.ts
export interface GameReview {
  id: number;
  bggId: number;
  titleKey: string;
  rating: number;
  excerptKey: string;
  image: string;
  fullContentKey: string;
}

export const allReviews: GameReview[] = [
  {
    id: 1,
    bggId: 13,
    titleKey: 'game.catan.title',
    rating: 4.5,
    excerptKey: 'game.catan.excerpt',
    image: 'https://images.unsplash.com/photo-1579486807353-90924e2c3b8f?auto=format&fit=crop&w=500', // Thematic stock image
    fullContentKey: 'game.catan.fullContent',
  },
  {
    id: 2,
    bggId: 266192,
    titleKey: 'game.wingspan.title',
    rating: 5,
    excerptKey: 'game.wingspan.excerpt',
    image: 'https://images.unsplash.com/photo-1596489396264-a62d08a0d4c6?auto=format&fit=crop&w=500', // Thematic stock image
    fullContentKey: 'game.wingspan.fullContent',
  },
  {
    id: 3,
    bggId: 174430,
    titleKey: 'game.gloomhaven.title',
    rating: 4.8,
    excerptKey: 'game.gloomhaven.excerpt',
    image: 'https://images.unsplash.com/photo-1579294939223-952796122d25?auto=format&fit=crop&w=500', // Thematic stock image
    fullContentKey: 'game.gloomhaven.fullContent',
  },
  {
    id: 4,
    bggId: 167791,
    titleKey: 'game.terraformingMars.title',
    rating: 4.7,
    excerptKey: 'game.terraformingMars.excerpt',
    image: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&w=500', // User provided image
    fullContentKey: 'game.terraformingMars.fullContent',
  },
  {
    id: 5,
    bggId: 237182,
    titleKey: 'game.root.title',
    rating: 4.6,
    excerptKey: 'game.root.excerpt',
    image: 'https://images.unsplash.com/photo-1601614742721-a544a0445d44?auto=format&fit=crop&w=500', // Thematic stock image (general fantasy/forest)
    fullContentKey: 'game.root.fullContent',
  },
  {
    id: 6,
    bggId: 162886,
    titleKey: 'game.spiritIsland.title',
    rating: 4.9,
    excerptKey: 'game.spiritIsland.excerpt',
    image: 'https://images.unsplash.com/photo-1591523497577-9094c8e7e174?auto=format&fit=crop&w=500', // Thematic stock image (island/nature)
    fullContentKey: 'game.spiritIsland.fullContent',
  },
];
