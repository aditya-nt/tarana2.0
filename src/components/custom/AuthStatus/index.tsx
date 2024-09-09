import React from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import FormButton from '../../../components/base/FormButton';
import { HStack, StyledFiller, VStack } from '../../../components/shared/AppStyles';
import { useAuth } from '../../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import TranslationButton from '../TranslationButton';

interface AuthStatusProps {
  header?: boolean;
}

function AuthStatus({ header = false }: AuthStatusProps) {
  const { t } = useTranslation();
  const { user, signout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    signout(() => navigate('/'));
  };

  const isPlaylistPage = location.pathname === '/playlist';

  
  const navigateToPlaylist = () => {
    if (isPlaylistPage) {
     
      navigate(-1);
    } else {
      
      navigate('/playlist');
    }
  };

  if (!user) {
    return header ? (
      <HStack.rowg1>
       
       <FormButton label={t('log_in')} type="button" variant="danger" onClick={handleLogin} data-testid="login" />

        
      </HStack.rowg1>
    ) : (
      <VStack.col>
        <StyledFiller />
        <h1>Gaana.com</h1>
        <FormButton label={t('log_in')} type="button" variant="danger" onClick={handleLogin} data-testid="login"/>
       
      </VStack.col>
    );
  }

  return (
    <HStack.rowg1>
      {header ? (
        <>
         <FormButton label={t('log_out')} type="button" variant="secondary" onClick={handleLogOut} data-testid="logout" />
          
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
