// src/services/bggService.ts

export interface BGGSearchResult {
  id: string;
  name: string;
  yearpublished?: string;
}

export interface BGGGameDetails {
  id: string;
  name: string;
  image: string;
  thumbnail: string;
  description: string;
  yearpublished?: string;
  minplayers?: string;
  maxplayers?: string;
  playingtime?: string;
}

// Helper to extract text from BGG XML parsed objects and handle protocol-relative URLs
const getBGGText = (field: any): string => {
  if (!field) return '';
  let text = '';
  if (typeof field === 'string') text = field;
  else if (typeof field === 'object' && field['#text']) text = field['#text'];
  else if (typeof field === 'object' && field['@_value']) text = field['@_value'];
  else text = String(field);

  // Fix protocol-relative URLs (e.g., //cf.geekdo-images.com/...)
  if (text.startsWith('//')) return 'https:' + text;
  return text;
};

// Helper to extract the primary name from game data
const getPrimaryName = (nameField: any): string => {
  if (!nameField) return 'Unknown Game';
  if (Array.isArray(nameField)) {
    const primary = nameField.find((n: any) => n["@_type"] === "primary" || n["@_primary"] === "true");
    return getBGGText(primary || nameField[0]);
  }
  return getBGGText(nameField);
};

export const searchGames = async (query: string): Promise<BGGSearchResult[]> => {
  try {
    const response = await fetch(`/api/bgg?search=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Search failed');
    const data = await response.json();
    
    // Support both v1 (boardgames.boardgame) and v2 (items.item)
    const items = data.boardgames?.boardgame || data.items?.item;
    
    if (items) {
      const itemsArray = Array.isArray(items) ? items : [items];
      return itemsArray.map((item: any) => ({
        id: item["@_id"] || item["@_objectid"],
        name: getPrimaryName(item.name),
        yearpublished: getBGGText(item.yearpublished)
      }));
    }
    return [];
  } catch (error) {
    console.error('BGG Search error:', error);
    return [];
  }
};

export const getGameDetails = async (id: string | number): Promise<BGGGameDetails | null> => {
  try {
    const response = await fetch(`/api/bgg?id=${id}`);
    if (!response.ok) throw new Error('Failed to fetch BGG data');
    const data = await response.json();
    
    // Support both v1 (boardgames.boardgame) and v2 (items.item)
    const items = data.boardgames?.boardgame || data.items?.item;
    
    if (items) {
      const item = Array.isArray(items) ? items[0] : items;
      
      return {
        id: item["@_id"] || item["@_objectid"],
        name: getPrimaryName(item.name),
        image: getBGGText(item.image),
        thumbnail: getBGGText(item.thumbnail),
        description: getBGGText(item.description),
        yearpublished: getBGGText(item.yearpublished),
        minplayers: getBGGText(item.minplayers),
        maxplayers: getBGGText(item.maxplayers),
        playingtime: getBGGText(item.playingtime)
      };
    }
    return null;
  } catch (error) {
    console.error('BGG GetDetails error:', error);
    return null;
  }
};

export const getMultipleGameDetails = async (ids: (string | number)[]): Promise<Record<number, BGGGameDetails>> => {
  if (ids.length === 0) return {};
  try {
    // API v1 allows multiple IDs separated by commas
    const idString = ids.join(',');
    const response = await fetch(`/api/bgg?id=${idString}`);
    if (!response.ok) throw new Error('Failed to fetch multiple BGG data');
    const data = await response.json();
    
    const mappedData: Record<number, BGGGameDetails> = {};
    const items = data.boardgames?.boardgame || data.items?.item;

    if (items) {
      const itemsArray = Array.isArray(items) ? items : [items];
      
      itemsArray.forEach((item: any) => {
        const id = item["@_id"] || item["@_objectid"];
        const bggId = parseInt(id);
        
        mappedData[bggId] = {
          id: id,
          name: getPrimaryName(item.name),
          image: getBGGText(item.image),
          thumbnail: getBGGText(item.thumbnail),
          description: getBGGText(item.description),
          yearpublished: getBGGText(item.yearpublished)
        };
      });
    }
    return mappedData;
  } catch (error) {
    console.error('BGG GetMultipleDetails error:', error);
    return {};
  }
};
