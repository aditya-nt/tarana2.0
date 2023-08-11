import React, { ReactNode, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Play, Pause, StepBack, StepForward } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { nextSong, previousSong, togglePlaying } from '@/store/songs/SongSlice';
import SongCard from '../SongCard';

interface AudioPlayerProps {
  isPlaying : boolean;
  activeSong : Song;
  handleNext : () => void;
  handlePrevious : () => void;
  togglePlay : () => void;
}

const AudioPlayer = ({isPlaying, activeSong, handleNext , handlePrevious, togglePlay} : AudioPlayerProps) => {

  const audioRef = useRef<HTMLAudioElement>(null);

  const nextHandler = () => {
    handleNext()
  }

  const prevHandler = () => {
    handlePrevious()
  }

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((error) => console.log('Autoplay prevented:', error));
      } else {
        audioRef.current.pause();
      }
    }
  };

  useEffect(() => {
    togglePlayback();
  }, [isPlaying, activeSong?.previewUrl]);

  return (
    <Container>
      <Row>
        <Col>
          <SongCard song={activeSong} >
            <div>
              <Button variant="link" onClick={prevHandler}>
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
              <Button variant="link" onClick={nextHandler}>
                <StepForward />
              </Button>
              <audio ref={audioRef} src={activeSong?.previewUrl} />
            </div>
          </SongCard>
        </Col>
      </Row>
    </Container>
  );
};

export default AudioPlayer;
