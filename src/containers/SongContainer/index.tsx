import React, { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong } from '@/store/songs/SongSlice';
import { Suspense, lazy } from 'react';
import Loader from '@/components/base/Loader';

const LazySongCard = lazy(() => import('@/components/custom/SongCard'));

const SongContainer = () => {
  const dispatch = useDispatch();
  const { songs, activeSong } = useSelector((state: { songs: SongsState }) => state.songs);

  return (
    <>
      {songs.map((song, index) => (
        <Suspense key={index + 1} fallback={<Loader type="circle" loading={true} />}>
          <LazySongCard
            song={song}
            isActive={song === activeSong}
            onClick={() => {
              dispatch(setCurrentSong({ currentIndex: index }));
            }}
          />
        </Suspense>
      ))}
    </>
  );
};

export default SongContainer;
