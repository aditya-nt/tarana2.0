import React, { useDispatch, useSelector } from 'react-redux';
import { setCurrentSong } from '@/store/songs/SongSlice';
import SongCard from '@/components/custom/SongCard';

const SongContainer = () => {
  const dispatch = useDispatch();
  const { songs, activeSong } = useSelector((state: { songs: SongsState }) => state.songs);

  return (
    <>
      {songs.map((song, index) => (
        <SongCard
          song={song}
          isActive={song === activeSong}
          key={index + 1 * Math.random()}
          onClick={() => {
            dispatch(setCurrentSong({ currentIndex: index }));
          }}
        />
      ))}
    </>
  );
};

export default SongContainer;
