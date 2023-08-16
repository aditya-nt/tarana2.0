import React from 'react';

import { HStack } from '@/components/shared/AppStyles';
import AuthStatus from '@/components/custom/AuthStatus';
import { Disc3 } from 'lucide-react';
import { styled } from 'styled-components';
import FormButton from '@/components/base/Button';
import { useThemeContext } from '@/contexts/ThemeContext';

const StyledLogo = styled(Disc3)`
  animation: rotate 4s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Header: React.FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <header style={{ padding: '0.5rem 2rem' }}>
      <HStack.fullFlex style={{ height: '100px', alignItems: 'center' }}>
        <HStack.rowg1 style={{ alignItems: 'center' }}>
          <StyledLogo size={'40px'} strokeWidth={1.5}></StyledLogo>
          <p style={{ marginTop: '1rem' }}>Tarana 2.0</p>
        </HStack.rowg1>
        <HStack.rowg1>
          <FormButton label={theme} type="button" variant="danger" onClick={toggleTheme} />
          <AuthStatus header />
        </HStack.rowg1>
      </HStack.fullFlex>
    </header>
  );
};

export default Header;
