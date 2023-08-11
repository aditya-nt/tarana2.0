import { DEFAULT_SEARCH, PAGE_LIMIT } from '@/lib/constants';
import { getSongsListAPI } from '@/lib/restAPI/ItunesAPI';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

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
  const { data, error, fetchNextPage, status, hasNextPage } = useInfiniteQuery(
    [`songs:${searchTerm}`],
    ({ pageParam = 1 }) => getSongs(searchTerm, pageParam * PAGE_LIMIT, PAGE_LIMIT),
    {
      getNextPageParam: (lastPage) => {
        const songsData = lastPage.data;
        if (songsData && songsData.resultCount < PAGE_LIMIT) {
          return null;
        }
        return (lastPage?.data ? lastPage.data.results.length : 0) + 1;
      },
    },
  );

  const songs = useMemo(() => data?.pages?.flatMap((page) => page.data?.results), [data]);

  return {
    error,
    fetchNextPage,
    status,
    hasNextPage,
    songs,
    data,
  };
};

export const Loading = () => {
  return (
    <div className="container-loading">
      <div className="spinner"></div>
      <span>Loading more songs...</span>
    </div>
  );
};
