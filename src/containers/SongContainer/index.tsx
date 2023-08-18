import React, { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, togglePlaying } from '@/store/songs/SongSlice';
import { Suspense, lazy } from 'react';
import Loader from '@/components/base/Loader';

const LazySongCard = lazy(() => import('@/components/custom/SongCard'));

const SongContainer = () => {
  const dispatch = useDispatch();
  const { songs, activeSong, isPlaying } = useSelector((state: { songs: SongsState }) => state.songs);

  const handleTogglePlay = () => {
    dispatch(togglePlaying());
  };

  return (
    <>
      {songs.map((song, index) => (
        <Suspense key={index + 1} fallback={<Loader type="circle" loading={true} />}>
          <LazySongCard
            song={song}
            isActive={song === activeSong}
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
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
