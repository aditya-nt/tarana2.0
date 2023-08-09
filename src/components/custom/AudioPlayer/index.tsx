import React, { ReactNode, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Play, Pause, StepBack, StepForward } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    nextTrack,
  previousTrack,
  togglePlaying,
 } from '@/store/tracks/tracksSlice';





interface SongCardProps {
  song: Track | null;
  children?: ReactNode;
}

function SongCard(songDetails: SongCardProps) {
  const { song, children } = songDetails;
  return (
    <Card style={{ width: '100%', padding: '0px', height: '100%' }}>
      <Card.Img variant="top" src={song?.imageUrl} height={'450rem'} />
      <Card.Body style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card.Title>{song?.name}</Card.Title>
        <Card.Text>{song?.artistName}</Card.Text>
        {children}
      </Card.Body>
    </Card>
  );
}

const AudioPlayer = () => {
  const { activeTrack, isPlaying } = useSelector((state: { tracks: TracksState }) => state.tracks);

  const audioRef = useRef<HTMLAudioElement>(null);

  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextTrack());
  };

  const handlePrevious = () => {
    dispatch(previousTrack());
  };

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.log('Autoplay prevented:', error));
      } else {
        audioRef.current.pause();
      }
    }
  };

  const togglePlay = () => {
    dispatch(togglePlaying());
  };

  useEffect(() => {
    togglePlayback();
  }, [isPlaying, activeTrack?.audioUrl]);

  return (
    <Container>
      <Row>
        <Col>
          <SongCard song={activeTrack}>
            <div>
              <Button variant="link" onClick={handlePrevious}>
                <StepBack />
              </Button>
              {isPlaying ? (
                <Button variant="link" onClick={togglePlay}>
                  <Pause />
                </Button>
              ) : (
                <Button variant="link" onClick={togglePlay}>
                  <Play />
                </Button>
              )}
              <Button variant="link" onClick={handleNext}>
                <StepForward />
              </Button>
              <audio ref={audioRef} src={activeTrack?.audioUrl} />
            </div>
          </SongCard>
        </Col>
      </Row>
    </Container>
  );
};

export default AudioPlayer;
