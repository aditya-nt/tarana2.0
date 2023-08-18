import { DEFAULT_SEARCH, PAGE_LIMIT } from '@/lib/constants';
import { getSongsListAPI } from '@/lib/restAPI/ItunesAPI';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';

interface APIResponse {
  resultCount: number;
  results: Song[];
}

export const getSongs = async (
  term: string = '',
  offset: number = 0,
  limit: number = PAGE_LIMIT,
): Promise<{ data: APIResponse | null; error: string | null }> => {
  try {
    const songsData: APIResponse = await getSongsListAPI({ term, offset, limit });
    return { data: songsData, error: null };
  } catch (error) {
    console.error('An error occurred:', error);
    return { data: null, error: 'An error occurred while fetching songs.' };
  }
};

export const useSongs = (searchTerm: string = DEFAULT_SEARCH) => {
  const [offset, setOffset] = useState<number>(9);

  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    [`songs:${searchTerm}`],
    ({ pageParam }) => getSongs(searchTerm, pageParam || offset, PAGE_LIMIT),
    {
      getNextPageParam: (lastPage) => {
        const songsData = lastPage.data;
        if (songsData && songsData.resultCount < PAGE_LIMIT) {
          return null;
        }
        return offset + (lastPage.data ? lastPage.data.results.length : 0);
      },
    },
  );

  const songs = useMemo(() => data?.pages?.flatMap((page) => page.data?.results), [data]);

  useEffect(() => {
    if (data) {
      const totalFetchedResults = data.pages.reduce((total, page) => total + (page.data?.results.length || 0), 0);
      setOffset(totalFetchedResults);
    }
  }, [data]);

  return {
    error,
    fetchNextPage,
    status,
    hasNextPage,
    songs,
    data,
  };
};
