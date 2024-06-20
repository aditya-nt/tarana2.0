import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HStack, StyledFiller } from '@/components/shared/AppStyles';
import FormButton from '@/components/base/FormButton';
import { useTranslation } from 'react-i18next';

function NewPageBtn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const isPlaylistPage = location.pathname === '/playlist';

  
  const navigateToPlaylist = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); 
    if (isPlaylistPage) {
      
      navigate(-1);
    } else {
     
      navigate('/playlist');
    }
  };

  return (
    <>
      <Link to={isPlaylistPage ? '#' : '/playlist'} onClick={navigateToPlaylist}>
        <FormButton
          label={isPlaylistPage ? t('back') : t('go_to_playlist')}
          type="button"
          variant="primary"
        />
      </Link>
      {/* <StyledFiller /> */}
    </>
  );
}

export default NewPageBtn;
