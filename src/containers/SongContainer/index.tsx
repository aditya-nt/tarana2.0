import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, togglePlaying } from '../../store/songs/SongSlice';
import SongView from '../../views/SongView';
 
const SongContainer = () => {
  const dispatch = useDispatch();
  const { songs, activeSong, isPlaying } = useSelector((state: { songs: SongsState }) => state.songs);

  const handleTogglePlay = () => {
    dispatch(togglePlaying());
  };
  const handleSetCurrentSong = (index: number) => {
    dispatch(setCurrentSong({ currentIndex: index }));
    
  };
  

  return (
    <SongView
      songs={songs}
      activeSong={activeSong}
      isPlaying={isPlaying}
     handleTogglePlay={handleTogglePlay}
     handleSetCurrentSong={handleSetCurrentSong}
      
    />
  );
};

export default SongContainer;
