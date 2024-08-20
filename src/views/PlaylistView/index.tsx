import React from 'react';
import SongCard from '@/components/custom/SongCard';
import { useTranslation } from 'react-i18next';

interface PlaylistViewProps {
  likedSongs: Song[];
  onTogglePlay: (previewUrl: string) => void;
}

const PlaylistView: React.FC<PlaylistViewProps> = ({ likedSongs, onTogglePlay }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('liked_songs')}</h1>
      {likedSongs.length === 0 ? (
        <p>{t('no_liked_songs')}</p>
      ) : (
        <ul>
          {likedSongs.map((song) => (
            <li key={song.previewUrl}>
              <SongCard
                song={song}
                onTogglePlay={() => onTogglePlay(song.previewUrl)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PlaylistView;
