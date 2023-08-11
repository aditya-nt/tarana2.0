import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from '@/components/base/Button';
import { HStack, StyledFiller, StyledHeading4, StyledHeading5W, VStack } from '@/components/shared/AppStyles';
import React from 'react';

interface AuthStatusProps {
  header?: boolean;
}

function AuthStatus({ header = false }: AuthStatusProps) {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    signout(() => navigate('/'));
  };

  if (!user) {
    return header ? (
      <HStack.rowg1>
        <FormButton label="LogIn" type="button" variant="danger" onClick={handleLogin} />
      </HStack.rowg1>
    ) : (
      <VStack.col>
        <StyledFiller />
        <h1>Gaana.com</h1>
        <FormButton label="LogIn" type="button" variant="danger" onClick={handleLogin} />
      </VStack.col>
    );
  }

  return (
    <HStack.rowg1>
      {header ? (
        <>
          <StyledHeading5W>Welcome {user}!</StyledHeading5W>
          <FormButton label="LogOut" type="button" variant="secondary" onClick={handleLogOut} />
        </>
      ) : (
        <div>
          <StyledFiller />
          <StyledHeading4>Welcome {user}!</StyledHeading4>
          <Link to="/player">Play Music</Link>
        </div>
      )}
    </HStack.rowg1>
  );
}

export default AuthStatus;
