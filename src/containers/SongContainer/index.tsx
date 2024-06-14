import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong, togglePlaying } from '@/store/songs/SongSlice';
import SongView from '@/view/SongView';// Adjust the import path as per your project structure
 
const SongContainer = () => {
  const dispatch = useDispatch();
  const { songs, activeSong, isPlaying } = useSelector((state: { songs: SongsState }) => state.songs);

  const handleTogglePlay = () => {
    dispatch(togglePlaying());
  };

  

  return (
    <SongView
      songs={songs}
      activeSong={activeSong}
      isPlaying={isPlaying}
     handleTogglePlay={handleTogglePlay}
      
    />
  );
};

export default SongContainer;
