import React from 'react';
import styled from 'styled-components';
import { themes, useThemeContext } from '@/contexts/ThemeContext';
import { Sun, Moon, Sparkles } from 'lucide-react';
import FormButton from '@/components/base/Button';

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();

  const getToggleLabel = () => {
    switch (theme) {
      case themes.day:
        return <Sun />;
      case themes.night:
        return <Moon />;
      case themes.dream:
        return <Sparkles />;
      default:
        return <Sun />;
    }
  };

  return (
    <ButtonContainer>
      <FormButton label="" type="button" variant="primary" onClick={toggleTheme}>
        {getToggleLabel()}
      </FormButton>
    </ButtonContainer>
  );
};

export default ThemeToggler;
