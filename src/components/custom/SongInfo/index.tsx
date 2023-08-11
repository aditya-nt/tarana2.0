import { noop } from 'lodash';
import { ReactNode } from 'react';
import { Card } from 'react-bootstrap';
import { styled } from 'styled-components';

interface SongCardProps {
  song: Song | null;
  onClick?: () => void;
  children?: ReactNode;
}

function SongInfo({ song, onClick = noop, children }: SongCardProps) {
  return song ? (
    <SongContainer>
      <Img src={song.artworkUrl100.replace('100x100', '600x600')} alt={song.trackCensoredName}></Img>
      <H1>{song.trackCensoredName}</H1>
      <H2>{song.artistName}</H2>
    </SongContainer>
  ) : (
    <SongContainer>
      <Img src={'/music-mockup.jpg'} alt={'mock-up'}></Img>
      <H1>{'Tarana 3.0'}</H1>
      <H2>{'Play the music'}</H2>
    </SongContainer>
  );
}

const SongContainer = styled.div`
  margin-top: 10vh;
  min-height: 50vh;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 70%;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }

  @keyframes inputFocus {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  animation: inputFocus 1.5s infinite;
`;

const H1 = styled.h2`
  padding: 3rem 1rem 1rem 1rem;
`;

const H2 = styled.h3`
  font-size: 1rem;
`;

export default SongInfo;
