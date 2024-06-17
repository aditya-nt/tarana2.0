import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from '@/components/base/FormButton';
import { HStack, StyledFiller, StyledHeading4, StyledHeading5W, VStack } from '@/components/shared/AppStyles';
import React from 'react';
import { useTranslation } from 'react-i18next';
import TranslationButton from '@/components/base/translationButton';
interface AuthStatusProps {
  header?: boolean;
}

function AuthStatus({ header = false }: AuthStatusProps) {
  const { t } = useTranslation();
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
        <TranslationButton /> 
         <FormButton label={t('log_in')} type="button" variant="danger" onClick={handleLogin} />
      </HStack.rowg1>
    ) : (
      <VStack.col>
        <StyledFiller />
        <h1>Gaana.com</h1>
        <FormButton label={t('log_in')} type="button" variant="danger" onClick={handleLogin} />
      </VStack.col>
    );
  }

  return (
    <HStack.rowg1>
      {header ? (
        <>
          <FormButton label={t('log_out')} type="button" variant="secondary" onClick={handleLogOut} />
        </>
      ) : (
        <div>
          <StyledFiller />
          <Link to="/player">{t('play_music')}</Link>
        </div>
      )}
    </HStack.rowg1>
  );
}

export default AuthStatus;
