import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import PlaylistView from '@/views/PlaylistView';


const PlaylistContainer: React.FC = () => {
  const likedSongs = useSelector((state: RootState) => state.songs.likedSongs) as Song[];

  const handleTogglePlay = (previewUrl: string) => {
    console.log(`Toggled play for song with preview URL: ${previewUrl}`);
  };

  return <PlaylistView likedSongs={likedSongs} onTogglePlay={handleTogglePlay} />;
};

export default PlaylistContainer;
