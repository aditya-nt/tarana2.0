import Image from '@/components/base/Image';
import { Heading2, Heading3 } from '@/components/base/Typography';
import { truncateText } from '@/lib/common';
import { noop } from 'lodash';
import { ReactNode } from 'react';
import { Card } from 'react-bootstrap';
import { styled } from 'styled-components';
import { useTranslation } from 'react-i18next';

interface SongCardProps {
  song: Song | null;
  onClick?: () => void;
  children?: ReactNode;
}

function SongInfo({ song, onClick = noop, children }: SongCardProps) {
  const { t } = useTranslation();
  return song ? (
    <SongContainer>
      <StyledImg src={song.artworkUrl100.replace('100x100', '600x600')} alt={song.trackCensoredName}></StyledImg>
      <Heading2>{truncateText(song.trackCensoredName, 50)}</Heading2>
      <Heading3>{song.artistName}</Heading3>
    </SongContainer>
  ) : (
    <SongContainer>
      <StyledImg src={'/music-mockup.jpg'} alt={'mock-up'}></StyledImg>
      <Heading2>{'Tarana 2.0'}</Heading2>
      <Heading3>{t('play_music')}</Heading3>
    </SongContainer>
  );
}

const SongContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 2vh;
  min-height: 50vh;
  max-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImg = styled(Image)`
  width: 60%;
  border-radius: 50%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export default SongInfo;
