import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import SongCard from '@/components/custom/SongCard';
import { useTranslation } from 'react-i18next';

const PlaylistContainer: React.FC = () => {
  const likedSongs = useSelector((state: RootState) => state.songs.likedSongs);

  const handleTogglePlay = (previewUrl: string) => {
  
    console.log(`Toggled play for song with preview URL: ${previewUrl}`);
  };
  const {t}=useTranslation();

  return (
    <div>
      <h1>{t('liked_songs')}</h1>
      {likedSongs.length === 0 ? (
        <p></p>
      ) : (
        <ul>
          {likedSongs.map((song) => (
            <li key={song.previewUrl}>
              <SongCard
                song={song}
                onTogglePlay={() => handleTogglePlay(song.previewUrl)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistContainer;
