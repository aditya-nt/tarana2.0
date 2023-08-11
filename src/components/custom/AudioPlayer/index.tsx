import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Play, Pause, StepBack, StepForward } from 'lucide-react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import SongInfo from '@/components/custom/SongInfo';

const AudioPlayerContainer = styled(Container)`
  padding-top: 20px;
`;

const ControlButton = styled(Button)`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  margin: 0 10px;
  cursor: pointer;
`;

interface AudioPlayerProps {
  isPlaying: boolean;
  activeSong: Song | null;
  handleNext: () => void;
  handlePrevious: () => void;
  togglePlay: () => void;
}

const AudioPlayer = ({ isPlaying, activeSong, handleNext, handlePrevious, togglePlay }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const nextHandler = () => {
    handleNext();
  };

  const prevHandler = () => {
    handlePrevious();
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

  useEffect(() => {
    togglePlayback();
  }, [isPlaying, activeSong?.previewUrl]);

  return (
    <AudioPlayerContainer>
      <Row>
        <Col>
          <SongInfo song={activeSong}></SongInfo>
          <div className="d-flex align-items-center justify-content-center">
            <ControlButton variant="link" onClick={prevHandler} disabled={!activeSong}>
              <StepBack />
            </ControlButton>
            {isPlaying ? (
              <ControlButton variant="link" onClick={togglePlay} disabled={!activeSong}>
                <Pause />
              </ControlButton>
            ) : (
              <ControlButton variant="link" onClick={togglePlay} disabled={!activeSong}>
                <Play />
              </ControlButton>
            )}
            <ControlButton variant="link" onClick={nextHandler} disabled={!activeSong}>
              <StepForward />
            </ControlButton>
          </div>
          <audio ref={audioRef} src={activeSong?.previewUrl} />
        </Col>
      </Row>
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;
