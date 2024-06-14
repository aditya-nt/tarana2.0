import React, { Suspense, lazy } from 'react';
import Loader from '@/components/base/Loader';
import { useDispatch } from 'react-redux';
import { setCurrentSong } from '@/store/songs/SongSlice';
import { togglePlaying } from '@/store/songs/SongSlice';

const LazySongCard = lazy(() => import('@/components/custom/SongCard'));

interface SongViewProps {
    songs: any[];
    isPlaying: boolean;
    activeSong: any;
   
    handleTogglePlay: () => void;
    
  }

  const SongView: React.FC<SongViewProps> = ({ isPlaying, activeSong,  songs, handleTogglePlay}) => {
    
    const dispatch = useDispatch();
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

export default SongView;
