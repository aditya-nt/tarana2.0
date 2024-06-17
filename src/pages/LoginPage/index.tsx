import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import LoginForm from '@/components/shared/Forms/LoginForm';
import { HStack, VStack } from '@/components/shared/AppStyles';


const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (data: { email: string; password: string }) => {
    auth.signin(data.email, () => {
      navigate(from, { replace: true });
    });
  };

  return (
   
    <HStack.fullFlex style={{ justifyContent: 'center' }}>
     
      <LoginForm onSubmit={handleSubmit} />
    </HStack.fullFlex>
  );
};

export default LoginPage;
