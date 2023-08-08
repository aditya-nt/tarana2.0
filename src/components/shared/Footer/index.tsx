// components/shared/Footer.tsx
import React from 'react';
import { HStack, StyledSpan } from '../AppStyles';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#222222', padding: '0.5rem 2rem' }}>
      <HStack.fullFlex>
        <StyledSpan>Music Player</StyledSpan>
        <StyledSpan>Songs of @2023</StyledSpan>
      </HStack.fullFlex>
    </footer>
  );
};

export default Footer;
