import React from 'react';

import { HStack } from '@/components/shared/AppStyles';
import AuthStatus from '@/components/custom/AuthStatus';
import { RollerCoaster } from 'lucide-react';
import { styled } from 'styled-components';
import ThemeToggler from '@/components/custom/ThemeToggler';
import { Heading3 } from '@/components/base/Typography';
import NewPageBtn from '@/components/custom/NewPageBtn';

const StyledLogo = styled(RollerCoaster)`
  // animation: rotate 4s linear infinite;

  // @keyframes rotate {
  //   0% {
  //     transform: rotate(0deg);
  //   }
  //   100% {
  //     transform: rotate(360deg);
  //   }
  // }
`;

const Header: React.FC = () => {
  return (
    <header style={{ padding: '0.5rem 2rem' }}>
      <HStack.fullFlex style={{ height: '100px', alignItems: 'center' }}>
        <HStack.rowg1 style={{ alignItems: 'center' }}>
          <StyledLogo size={'40px'} strokeWidth={1.5}></StyledLogo>
          <Heading3 style={{ marginTop: '0.5 rem' }}>Tarana 2.0</Heading3>
        </HStack.rowg1>
        <HStack.rowg1 >
          <ThemeToggler />
          <AuthStatus header />
          <NewPageBtn/>
        </HStack.rowg1>
      </HStack.fullFlex>
    </header>
  );
};

export default Header;
