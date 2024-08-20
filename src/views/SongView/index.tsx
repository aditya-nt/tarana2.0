import React, { Suspense, lazy } from 'react';
import Loader from '../../components/base/Loader';


const LazySongCard = lazy(() => import('../../components/custom/SongCard'));

interface SongViewProps {
    songs: any[];
    isPlaying: boolean;
    activeSong: any;
   
    handleTogglePlay: () => void;
    handleSetCurrentSong: (index: number) => void;
  }

  const SongView: React.FC<SongViewProps> = ({ isPlaying, activeSong,  songs, handleTogglePlay,handleSetCurrentSong}) => {
    
    
  return (
    <>
      {songs.map((song, index) => (
        <Suspense key={index + 1} fallback={<Loader type="circle" loading={true} />}>
          <LazySongCard
            song={song}
            isActive={song === activeSong}
            isPlaying={isPlaying}
            onTogglePlay={handleTogglePlay}
            onClick={() => handleSetCurrentSong(index)}
          />
        </Suspense>
      ))}
    </>
  );
};

export default SongView;
