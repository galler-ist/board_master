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

export const searchGames = async (query: string): Promise<BGGSearchResult[]> => {
  try {
    const response = await fetch(`/api/bgg?search=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error('Search failed');
    const data = await response.json();
    
    if (data.items && data.items.item) {
      const items = Array.isArray(data.items.item) ? data.items.item : [data.items.item];
      return items.map((item: any) => ({
        id: item["@_id"],
        name: Array.isArray(item.name) 
          ? item.name.find((n: any) => n["@_type"] === "primary")["@_value"] 
          : item.name["@_value"],
        yearpublished: item.yearpublished?.["@_value"]
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
    
    if (data.items && data.items.item) {
      const item = data.items.item;
      const name = Array.isArray(item.name) 
        ? item.name.find((n: any) => n["@_type"] === "primary")["@_value"] 
        : item.name["@_value"];
      
      return {
        id: item["@_id"],
        name,
        image: item.image,
        thumbnail: item.thumbnail,
        description: item.description,
        yearpublished: item.yearpublished?.["@_value"],
        minplayers: item.minplayers?.["@_value"],
        maxplayers: item.maxplayers?.["@_value"],
        playingtime: item.playingtime?.["@_value"]
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
    const idString = ids.join(',');
    const response = await fetch(`/api/bgg?id=${idString}`);
    if (!response.ok) throw new Error('Failed to fetch multiple BGG data');
    const data = await response.json();
    
    const mappedData: Record<number, BGGGameDetails> = {};
    if (data.items && data.items.item) {
      const items = Array.isArray(data.items.item) ? data.items.item : [data.items.item];
      
      items.forEach((item: any) => {
        const name = Array.isArray(item.name) 
          ? item.name.find((n: any) => n["@_type"] === "primary")["@_value"] 
          : item.name["@_value"];
        
        const bggId = parseInt(item["@_id"]);
        mappedData[bggId] = {
          id: item["@_id"],
          name,
          image: item.image,
          thumbnail: item.thumbnail,
          description: item.description,
          yearpublished: item.yearpublished?.["@_value"]
        };
      });
    }
    return mappedData;
  } catch (error) {
    console.error('BGG GetMultipleDetails error:', error);
    return {};
  }
};
