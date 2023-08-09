import { useDispatch, useSelector } from 'react-redux';
import { Row, Card } from 'react-bootstrap';
import React from 'react';
import { setCurrentTrack } from '@/store/tracks/tracksSlice';

interface SongCardProps {
  track: Track;
  onClick: () => void;
}

function SongCard(songDetails: SongCardProps) {
  const { track, onClick } = songDetails;
  return (
    <Card style={{ width: '14rem', padding: '0px' }} onClick={onClick}>
      <Card.Img variant="top" src={track.imageUrl} height={'200rem'} />
      <Card.Body>
        <Card.Title>{track.name}</Card.Title>
        <Card.Text>{track.artistName}</Card.Text>
      </Card.Body>
    </Card>
  );
}

const SongContainer = () => {
  const { activeTrack, error, isPlaying, loading, tracks, index } = useSelector(
    (state: { tracks: TracksState }) => state.tracks,
  );
  const dispatch = useDispatch();

  return (
    <div className="no-scroll" style={{ height: '50rem' }}>
      <Row className="no-scroll-content" style={{ gap: '1rem' }}>
        {tracks.map((track, index) => (
          <SongCard
            track={track}
            key={index + 1 * Math.random()}
            onClick={() => {
              dispatch(setCurrentTrack({ currentIndex: index }));
            }}
          />
        ))}
      </Row>
    </div>
  );
};

export default SongContainer;
