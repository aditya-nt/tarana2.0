import React, { ReactNode, useState } from 'react';
import { noop } from 'lodash';
import { styled } from 'styled-components';
import Image from '@/components/base/Image';
import { Disc3, Pause, PauseIcon, PlayIcon } from 'lucide-react';
import { Row } from 'react-bootstrap';
import { truncateText } from '@/lib/common';

interface SongCardProps {
  song: Song;
  isActive?: boolean;
  onClick?: () => void;
  onTogglePlay: () => void;
  isPlaying?: boolean;
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
  border-bottom: 1px dotted black;
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

const SongCardImage = styled(Image)`
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

const StyledRow = styled(Row)`
  align-items: center;
`;

function SongCard({ song, onClick = noop, isActive = false, isPlaying, onTogglePlay, children }: SongCardProps) {
  const handleIconClick = (event: React.MouseEvent<SVGElement, MouseEvent>) => {
    event.stopPropagation();
    onTogglePlay();
  };

  return (
    <StyledSongCard onClick={onClick} style={{ backgroundColor: isActive ? 'teal' : 'transparent' }}>
      <SongCardImage src={song.artworkUrl100} alt={song.trackCensoredName} />
      <SongCardContent>
        <SongCardTitle>{truncateText(song.trackCensoredName, 50)}</SongCardTitle>
        <SongCardArtist>{song.artistName}</SongCardArtist>
        {children}
      </SongCardContent>
      {isActive && (
        <StyledRow>
          {isPlaying ? (
            <PauseIcon strokeWidth={2} size={'2rem'} onClick={handleIconClick} />
          ) : (
            <PlayIcon strokeWidth={2} size={'2rem'} onClick={handleIconClick} />
          )}
        </StyledRow>
      )}
    </StyledSongCard>
  );
}

export default SongCard;
