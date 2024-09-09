import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Container, Row ,Button} from 'react-bootstrap';
import FormInput from '../../components/base/FormInput';
import { useSongs } from './helper';
import { useDebouncedCallback } from 'use-debounce';
import SongContainer from '../../containers/SongContainer';
import { setSongs } from '../../store/songs/SongSlice';
import { filterUndefined } from '../../lib/utils/sanitize';
import { DEFAULT_SEARCH } from '../../lib/constants';
import PlayerContainer from '../../containers/PlayerContainer';
import Loader from '../../components/base/Loader';
import styled from 'styled-components';
import NoResult from '../../components/custom/NoResult';
import { useTranslation } from 'react-i18next';
import { useState,useEffect } from 'react';
import { Navigate } from 'react-router-dom'; 

const ScrollContainer = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  padding-right: 16px;
`;

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState<string>(DEFAULT_SEARCH);
  const [page, setPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const debouncedSearch = useDebouncedCallback((value: string) => {
    setSearchTerm(value || DEFAULT_SEARCH);
  }, 700);

  const { fetchNextPage, hasNextPage, songs, status, error } = useSongs(searchTerm);

  console.log('status', status);
  console.log('error', error);

  useEffect(() => {
    if (songs) {
      const filteredSongs = filterUndefined(songs);
      dispatch(setSongs({ songs: filteredSongs }));
    }
  }, [songs, dispatch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    debouncedSearch(event.target.value);
  };

  const handleScroll = () => {
    if (
      containerRef.current &&
      hasNextPage &&
      containerRef.current.scrollTop + containerRef.current.clientHeight >= containerRef.current.scrollHeight - 5
    ) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
      return () => {
        containerRef.current?.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);

 
  
  return (
    <Container>
      <Row>
        <Col lg={5}>
          <PlayerContainer />
         
           
          
        </Col>
        <Col lg={7}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <FormInput
              label={t('search_songs')}
              type="text"
              placeholder={t('enter_the_search_item')}
              onChange={handleInputChange}
            />
          </div>
          <ScrollContainer ref={containerRef}>
            {status === 'loading' ? (
              <Loader type="scale" loading={true} />
            ) : (
              <>
                {songs && songs.length > 0 ? <SongContainer /> : status === 'success' ? <NoResult /> : null}
                {hasNextPage && <Loader type="scale" loading={true} />}
              </>
            )}
          </ScrollContainer>
          
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
