// src/data/games.ts
export interface GameReview {
  id: number;
  titleKey: string;
  rating: number;
  excerptKey: string;
  image: string;
  fullContentKey: string;
}

export const allReviews: GameReview[] = [
  {
    id: 1,
    titleKey: 'game.catan.title',
    rating: 4.5,
    excerptKey: 'game.catan.excerpt',
    image: 'https://placehold.co/300x200/6C42EF/FFFFFF/png?text=Catan',
    fullContentKey: 'game.catan.fullContent',
  },
  {
    id: 2,
    titleKey: 'game.wingspan.title',
    rating: 5,
    excerptKey: 'game.wingspan.excerpt',
    image: 'https://placehold.co/300x200/F472B6/FFFFFF/png?text=Wingspan',
    fullContentKey: 'game.wingspan.fullContent',
  },
  {
    id: 3,
    titleKey: 'game.gloomhaven.title',
    rating: 4.8,
    excerptKey: 'game.gloomhaven.excerpt',
    image: 'https://placehold.co/300x200/10B981/FFFFFF/png?text=Gloomhaven',
    fullContentKey: 'game.gloomhaven.fullContent',
  },
  {
    id: 4,
    titleKey: 'game.terraformingMars.title',
    rating: 4.7,
    excerptKey: 'game.terraformingMars.excerpt',
    image: 'https://images.unsplash.com/photo-1585504198199-20277593b94f?auto=format&fit=crop&w=500',
    fullContentKey: 'game.terraformingMars.fullContent',
  },
  {
    id: 5,
    titleKey: 'game.root.title',
    rating: 4.6,
    excerptKey: 'game.root.excerpt',
    image: 'https://images.unsplash.com/photo-1579294939223-952796122d25?auto=format&fit=crop&w=500',
    fullContentKey: 'game.root.fullContent',
  },
  {
    id: 6,
    titleKey: 'game.spiritIsland.title',
    rating: 4.9,
    excerptKey: 'game.spiritIsland.excerpt',
    image: 'https://images.unsplash.com/photo-1579486807353-90924e2c3b8f?auto=format&fit=crop&w=500',
    fullContentKey: 'game.spiritIsland.fullContent',
  },
];
