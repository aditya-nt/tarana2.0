import { makeAPIRequest } from '.';
import { PAGE_LIMIT } from '@/lib/constants';

interface GetSongsListAPIProps {
  term?: string;
  offset?: number;
  limit?: number;
}

export function getSongsListAPI({ term = '', offset = 0, limit = PAGE_LIMIT }: GetSongsListAPIProps) {
  const apiPath = `search/?term=${encodeURIComponent(term)}&offset=${offset}&limit=${limit}`;

  return makeAPIRequest<any>('GET', apiPath);
}
