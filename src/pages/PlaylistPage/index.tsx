import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LikedSongs from '@/containers/PlaylistContainer';



const PlaylistPage: React.FC = () => {
  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col xs={12} md={6} lg={4}>
          <div className="text-center">
            <h1>Playlist</h1>
            
            <LikedSongs />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaylistPage;
