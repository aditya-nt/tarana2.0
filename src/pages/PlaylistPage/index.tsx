import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PlaylistContainer from '../../containers/PlaylistContainer';
import { useTranslation } from 'react-i18next';


const PlaylistPage: React.FC = () => {
  const {t}=useTranslation();
  return (
    <Container>
      <Row className="justify-content-center align-items-center" style={{ height: '100vh' }}>
        <Col xs={12} md={6} lg={4}>
          <div className="text-center">
            <h1>{t('playlist')}</h1>
            
            <PlaylistContainer/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaylistPage;
