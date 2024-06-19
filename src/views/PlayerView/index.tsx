import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AudioPlayer from '@/components/custom/AudioPlayer';
import LikedSongsPage from '@/components/shared/UserPlay';
interface PlayerViewProps {
  isPlaying: boolean;
  activeSong: Song | null;
  handleNext: () => void;
  handlePrevious: () => void;
  togglePlay: () => void;
  
}

const PlayerView: React.FC<PlayerViewProps> = ({
  isPlaying,
  activeSong,
  handleNext,
  handlePrevious,
  togglePlay,
  
}) => {
  const [likedSongs, setLikedSongs] = useState<Song[]>([]);

  // const toggleLike = (previewUrl: string) => {
  //   // Implement your logic to toggle liked state
  //   if (likedSongs.some((song) => song.previewUrl === previewUrl)) {
  //     setLikedSongs((prevLikedSongs) =>
  //       prevLikedSongs.filter((song) => song.previewUrl !== previewUrl)
  //     );
  //   } else {
  //     const songToAdd = allSongs.find((song) => song.previewUrl === previewUrl);
  //     if (songToAdd) {
  //       setLikedSongs((prevLikedSongs) => [...prevLikedSongs, songToAdd]);
  //     }
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col md={12}>
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
