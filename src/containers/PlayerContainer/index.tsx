import React, { useDispatch, useSelector } from 'react-redux';
import { nextSong, previousSong, togglePlaying } from '@/store/songs/SongSlice';
import { Col, Container, Row } from 'react-bootstrap';
import AudioPlayer from '@/components/custom/AudioPlayer';

const PlayerContainer = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state: { songs: SongsState }) => state.songs);

  const handleNext = () => {
    dispatch(nextSong());
  };

  const handlePrevious = () => {
    dispatch(previousSong());
  };

  const togglePlay = () => {
    dispatch(togglePlaying());
  };

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

export default PlayerContainer;
