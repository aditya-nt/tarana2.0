import { Paragraph } from '../../../components/base/Typography';
import React from 'react';
import { Row } from 'react-bootstrap';

interface SeekBarProps {
  currentTime: number;
  duration: number;
  onSeekBarChange: (value: number) => void;
  seekBarRef: React.RefObject<HTMLInputElement>;
}

const SeekBar: React.FC<SeekBarProps> = ({ currentTime, duration, onSeekBarChange, seekBarRef }) => {
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div style={{ paddingInline: '1rem', marginTop: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Paragraph>{formatTime(currentTime)}</Paragraph>
        <Paragraph>{formatTime(duration)}</Paragraph>
      </div>
      <div>
        <input
          style={{ width: '100%' }}
          type="range"
          ref={seekBarRef}
          min="0"
          max={duration}
          step="1"
          value={currentTime}
          onChange={(e) => onSeekBarChange(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default SeekBar;
