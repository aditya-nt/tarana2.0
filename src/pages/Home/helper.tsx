import axios from 'axios';
import { PAGE_LIMIT } from '../../lib/constants';

interface Song {
  artistName: string;
  trackCensoredName: string;
  previewUrl: string;
  collectionName: string;
  trackTimeMillis: number;
  artworkUrl100: string;
}

interface SongsResponse {
  results: Song[];
}

export const getSongs = async (
  term?: string,
  offset?: number,
  limit?: number,
): Promise<{ data: Song[] | null; error: string | null }> => {
  const url = `https://itunes.apple.com/search/?term=${term || 'term'}&offset=${offset || 'term'}&limit=${
    limit || PAGE_LIMIT
  }`;

  try {
    const response = await axios.get<SongsResponse>(url);

    if (response.status === 200) {
      return { data: response.data.results || [], error: null };
    } else {
      throw new Error('Failed to fetch songs');
    }
  } catch (error: any) {
    return { data: null, error: 'An error occurred while fetching songs' };
  }
};
