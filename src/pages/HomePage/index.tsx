import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import FormInput from '@/components/base/FormInput';
import { useSongs } from '@/pages/HomePage/helper';
import { useDebouncedCallback } from 'use-debounce';
import SongContainer from '@/containers/SongContainer';
import InfiniteScroll from 'react-infinite-scroll-component';
import { setSongs } from '@/store/songs/SongSlice';
import { filterUndefined } from '@/lib/utils/sanitize';
import { DEFAULT_SEARCH } from '@/lib/constants';
import PlayerContainer from '@/containers/PlayerContainer';
import Loader from '@/components/base/Loader';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>(DEFAULT_SEARCH);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearchTerm(value || DEFAULT_SEARCH);
    // dispatch(setSongs({ songs: [] }));
  }, 700);

  const { fetchNextPage, hasNextPage, songs } = useSongs(searchTerm);

  useEffect(() => {
    if (songs) {
      const filteredSongs = filterUndefined(songs);
      dispatch(setSongs({ songs: filteredSongs }));
    }
  }, [songs, dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col lg={5}>
          <PlayerContainer />
        </Col>
        <Col lg={7}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <FormInput
              label="Search Songs"
              type="text"
              placeholder="Enter a search term"
              onChange={handleInputChange}
            />
          </div>
          <InfiniteScroll
            dataLength={songs ? songs.length : 0}
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={<Loader type="scale" loading={true} />}
          >
            <SongContainer />
          </InfiniteScroll>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
