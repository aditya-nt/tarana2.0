import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SongContainer from '@/components/custom/SongContainer';
import { Col, Container, Row } from 'react-bootstrap';
import { setActiveTrack, setTracks } from '@/store/tracks/tracksSlice';
import { Dispatch } from 'redux';
import AudioPlayer from '@/components/custom/AudioPlayer';
import FormInput from '@/components/base/FormInput';
import { getSongs } from '@/pages/Home/helper';
import { PAGE_LIMIT } from '@/lib/constants';

const HomePage = () => {
  const dispatch: Dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const getSongData = useCallback(async () => {
    try {
      const newSongs = await getSongs(searchTerm, page * PAGE_LIMIT);

      const tracksWithModifiedData =
        newSongs.data?.map((track: Song, index: number) => ({
          id: index,
          imageUrl: track.artworkUrl100,
          name: track.trackCensoredName,
          audioUrl: track.previewUrl,
          artistName: track.artistName,
        })) || [];

      dispatch(setTracks({ tracks: tracksWithModifiedData }));
      tracksWithModifiedData && dispatch(setActiveTrack(tracksWithModifiedData[0]));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch, searchTerm, page]);

  useEffect(() => {
    getSongData();
  }, [getSongData]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const handlePrevPage = () => {
    setPage((page) => Math.max(page - 1, 1)); // Ensure page does not go below 1
  };

  const handleNextPage = () => {
    setPage((page) => page + 1);
  };
  return (
    <Container>
      <Row>
        <Col lg={7}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <FormInput
              label="Search Songs"
              type="text"
              placeholder="Enter a search term"
              register={() => {}}
              error={null}
              onChange={handleInputChange}
            />
            <Col>
              <ul className="pagination">
                <li className="page-item">
                  <button className="page-link" onClick={handlePrevPage} disabled={page === 1}>
                    Prev
                  </button>
                </li>
                <li className="page-item">
                  <button className="page-link" onClick={handleNextPage}>
                    Next
                  </button>
                </li>
              </ul>
            </Col>
          </div>
          <SongContainer />
        </Col>
        <Col lg={5}>
          <AudioPlayer />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
