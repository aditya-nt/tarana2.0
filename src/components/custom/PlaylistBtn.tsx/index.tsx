import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import FormButton from '@/components/base/FormButton';
import { useTranslation } from 'react-i18next';

function PlaylistBtn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isPlaylistPage = location.pathname === '/playlist';

  
  const navigateToPlaylist = () => {
   
    if (isPlaylistPage) {
      
      navigate(-1);
    } else {
     
      navigate('/playlist');
    }
  };
  return (
    <>  
        <FormButton
        onClick={navigateToPlaylist}
          label={isPlaylistPage ? t('go_back') : t('go_to_playlist')}
          type="button"
          variant="primary"
        />
     
    </>
  );
}

export default PlaylistBtn;
