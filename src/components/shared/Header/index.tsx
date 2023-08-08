import React from 'react';
import { HStack } from '../AppStyles';
import { Link } from 'react-router-dom';
import AuthStatus from '../../custom/AuthStatus';

const Header: React.FC = () => {
  return (
    <header style={{ background: '#222222', padding: '1rem 2rem' }}>
      <HStack.fullFlex>
        <HStack.rowg1>
          <Link to="/">Dashboard</Link>
          <Link to="/player">Play Music</Link>
        </HStack.rowg1>
        <AuthStatus header />
      </HStack.fullFlex>
    </header>
  );
};

export default Header;
