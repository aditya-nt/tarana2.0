import React, { useState, useRef, useEffect } from 'react';
import { VolumeX, Volume1, Volume2 } from 'lucide-react';
import FormButton from '@/components/base/FormButton';

interface VolumeControlProps {
  volume: number;
  volumeRef: React.RefObject<HTMLInputElement>;
  onVolumeChange: (value: number) => void;
  onVolumeIconClick: () => void;
}

const VolumeControl: React.FC<VolumeControlProps> = ({ volume, volumeRef, onVolumeChange, onVolumeIconClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeout = useRef<number | null>(null);

  const getVolumeIcon = () => {
    if (volume === 0) {
      return <VolumeX />;
    } else if (volume <= 0.5) {
      return <Volume1 />;
    } else {
      return <Volume2 />;
    }
  };

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current!);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = window.setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  const handlePopupMouseEnter = () => {
    clearTimeout(hoverTimeout.current!);
    setIsHovered(true);
  };

  const handlePopupMouseLeave = () => {
    handleMouseLeave();
  };

  useEffect(() => {
    return () => {
      clearTimeout(hoverTimeout.current!);
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      <FormButton
        variant="link"
        onClick={onVolumeIconClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {getVolumeIcon()}
      </FormButton>
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1,
            background: 'white',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
          onMouseEnter={handlePopupMouseEnter}
          onMouseLeave={handlePopupMouseLeave}
        >
          <input
            type="range"
            ref={volumeRef}
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          />
        </div>
      )}
    </div>
  );
};

export default VolumeControl;
