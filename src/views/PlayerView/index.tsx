import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AudioPlayer from '@/components/custom/AudioPlayer';

interface PlayerViewProps {
    isPlaying: boolean;
    activeSong: any; 
    handleNext: () => void;
    handlePrevious: () => void;
    togglePlay: () => void;
  }
  
  const PlayerView: React.FC<PlayerViewProps> = ({ isPlaying, activeSong, handleNext, handlePrevious, togglePlay }) => {
    return (
    <Container>
      <Row>
        <Col>
          <AudioPlayer
            isPlaying={isPlaying}
            activeSong={activeSong}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
            togglePlay={togglePlay}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default PlayerView;
