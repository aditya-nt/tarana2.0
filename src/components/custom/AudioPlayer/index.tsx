import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Play, Pause, StepBack, StepForward, VolumeX, Volume2, Volume1 } from 'lucide-react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Loader from '@/components/base/Loader';
import SeekBar from './SeekBar';
import VolumeControl from './VolumeControl';
import FormButton from '@/components/base/FormButton';
import { FaRegHeart,FaHeart } from "react-icons/fa";

import { toggleLike } from '@/store/songs/SongSlice';
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const LazySongInfo = lazy(() => import('@/components/custom/SongInfo'));

const AudioPlayerContainer = styled(Container)`
  padding-top: 20px;
  padding-bottom: 20px;
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
  const seekBarRef = useRef<HTMLInputElement>(null);
  const volumeRef = useRef<HTMLInputElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const dispatch = useDispatch();
  const likedSongs = useSelector((state: RootState) => state.songs.likedSongs);

  const nextHandler = () => {
    handleNext();
  };

  const prevHandler = () => {
    handlePrevious();
  };

  const handleToggleLike = () => {
    if (activeSong) {
      dispatch(toggleLike(activeSong.previewUrl));
    }
  };

  const handleVolumeChange = () => {
    if (audioRef.current && volumeRef.current) {
      const newVolume = parseFloat(volumeRef.current.value);
      audioRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleSeekBarChange = () => {
    if (audioRef.current && seekBarRef.current) {
      const seekTime = parseFloat(seekBarRef.current.value);
      audioRef.current.currentTime = seekTime;
    }
  };

  const updateCurrentTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      if (audioRef.current.currentTime >= audioRef.current.duration) {
        handleNext();
      }
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('timeupdate', updateCurrentTime);
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current?.duration || 0);
      });
      return () => {
        audioRef.current?.removeEventListener('timeupdate', updateCurrentTime);
      };
    }
  }, []);

  useEffect(() => {
    togglePlayback();
  }, [isPlaying, activeSong?.previewUrl]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlayback = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => console.log('Autoplay prevented:', error));
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleVolumeIconClick = () => {
    if (volume === 0) {
      setVolume(0.5);
    } else if (volume <= 0.5) {
      setVolume(1);
    } else {
      setVolume(0);
    }
  };

  const getVolumeIcon = () => {
    if (volume === 0) {
      return <VolumeX />;
    } else if (volume <= 0.5) {
      return <Volume1 />;
    } else {
      return <Volume2 />;
    }
  };

  return (
    <AudioPlayerContainer>
      <Row>
        <Col>
          <Suspense fallback={<Loader type="circle" loading={true} />}>
            <LazySongInfo song={activeSong} />
          </Suspense>

          <SeekBar
            currentTime={currentTime}
            duration={duration}
            onSeekBarChange={handleSeekBarChange}
            seekBarRef={seekBarRef}
          />
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: '60px', height: '50px', backgroundColor: 'transparent' }}></div>{' '}
            {/* Transparent dummy div */}
            <FormButton variant="link" onClick={prevHandler} disabled={!activeSong}>
              <StepBack />
            </FormButton>
            {isPlaying ? (
              <FormButton variant="link" onClick={togglePlay} disabled={!activeSong}>
                <Pause />
              </FormButton>
            ) : (
              <FormButton variant="link" onClick={togglePlay} disabled={!activeSong}>
                <Play />
              </FormButton>
            )}
            <FormButton variant="link" onClick={nextHandler} disabled={!activeSong}>
              <StepForward />
            </FormButton>
            <VolumeControl
              volumeRef={volumeRef}
              volume={volume}
              onVolumeChange={handleVolumeChange}
              onVolumeIconClick={handleVolumeIconClick}
            />
            <Button variant="link" onClick={handleToggleLike}>
              {likedSongs.some(song => song.previewUrl === activeSong?.previewUrl) ? <FaHeart color="black"/> : <FaRegHeart color="black"/>}
            </Button>
          </div>
          <audio ref={audioRef} src={activeSong?.previewUrl} />
        </Col>
      </Row>
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;
