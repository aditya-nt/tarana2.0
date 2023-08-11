import { noop } from 'lodash';
import { ReactNode } from 'react';
import { Card } from 'react-bootstrap';
import { styled } from 'styled-components';

interface SongCardProps {
  song: Song;
  isActive?: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

const StyledSongCard = styled.div`
  /* Apply styles here based on LibrarySongContainer styles */
  padding: 0 2rem 0 2rem;
  height: 100px;
  width: 100%;
  display: flex;
  transition: all 0.3s ease;
  background-color: 'pink';
  &:hover {
    background-color: lightblue;
    transition: all 0.3s ease;
  }
`;

const SongCardContent = styled.div`
  /* Apply styles here based on LibrarySongDescription styles */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SongCardImage = styled.img`
  /* Apply styles here based on Img styles */
  margin: 20px 0;
  height: 60px;
`;

const SongCardTitle = styled.h3`
  /* Apply styles here based on H1 styles */
  padding-left: 1rem;
  font-size: 1rem;
`;

const SongCardArtist = styled.h4`
  /* Apply styles here based on H2 styles */
  padding-left: 1rem;
  font-size: 0.7rem;
`;

const SongCardSkeleton = styled.div`
  /* You can define skeleton styles here */
  /* For example, a loading animation or placeholder styles */
`;

function SongCard({ song, onClick = noop, isActive = false, children }: SongCardProps) {
  return (
    <StyledSongCard
      //  isActive={isActive}
      onClick={onClick}
    >
      <SongCardImage src={song.artworkUrl100} alt={song.trackCensoredName} />
      <SongCardContent>
        <SongCardTitle>{song.trackCensoredName}</SongCardTitle>
        <SongCardArtist>{song.artistName}</SongCardArtist>
        {children}
      </SongCardContent>
    </StyledSongCard>
  );
}

export default SongCard;
