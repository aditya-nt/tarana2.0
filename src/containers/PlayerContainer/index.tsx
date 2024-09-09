import React, { useDispatch, useSelector } from 'react-redux';
import { nextSong, previousSong, togglePlaying } from '../../store/songs/SongSlice';
import PlayerView from '../../views/PlayerView';

const PlayerContainer = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state: { songs: SongsState }) => state.songs);

  const handleNext = () => {
    dispatch(nextSong());
  };

  const handlePrevious = () => {
    dispatch(previousSong());
  };

  const togglePlay = () => {
    dispatch(togglePlaying());
  };

  return (
    <PlayerView
      isPlaying={isPlaying}
      activeSong={activeSong}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      togglePlay={togglePlay}
    />
  );
};

export default PlayerContainer;
