import React, { useDispatch, useSelector } from 'react-redux';
import { Row, Card } from 'react-bootstrap';
import { setCurrentSong } from '@/store/songs/SongSlice';

interface SongCardProps {
  song: Song;
  onClick: () => void;
}

function SongCard(songDetails: SongCardProps) {
  const { song, onClick } = songDetails;

  return (
    <Card style={{ width: '14rem', padding: '0px' }} onClick={onClick}>
      <Card.Img variant="top" src={song.artworkUrl100} height={'200rem'} />
      <Card.Body>
        <Card.Title>{song.trackCensoredName}</Card.Title>
        <Card.Text>{song.artistName}</Card.Text>
      </Card.Body>
    </Card>
  );
}

const SongContainer = () => {
  const { activeSong, error, isPlaying, loading, songs, index } = useSelector(
    (state: { songs: SongsState }) => state.songs, // Adjust the state type accordingly
  );
  const dispatch = useDispatch();

  console.table(songs);
  return (
    <>
      {songs.map((song, index) => (
        <SongCard
          song={song}
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
