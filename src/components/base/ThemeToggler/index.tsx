import React from 'react';
import styled from 'styled-components';
import { useThemeContext } from '@/contexts/ThemeContext';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  border: none;
  background: none;
`;

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  const getToggleLabel = (): string => {
    switch (theme) {
      case 'day':
        return 'Switch to night theme';
      case 'night':
        return 'Switch to dream theme';
      case 'dream':
        return 'Switch to day theme';
      default:
        return 'Toggle Theme';
    }
  };

  return (
    <ButtonContainer>
      <span>Toggle Theme:</span>
      <Button onClick={toggleTheme}>{getToggleLabel()}</Button>
    </ButtonContainer>
  );
};

export default ThemeToggler;
