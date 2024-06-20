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

  // Function to navigate to PlaylistPage or go back
  const navigateToPlaylist = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default anchor behavior
    if (isPlaylistPage) {
      // If on PlaylistPage, navigate back to previous page
      navigate(-1);
    } else {
      // Otherwise, navigate to PlaylistPage
      navigate('/playlist');
    }
  };

  return (
    <HStack.rowg1>
      <Link to={isPlaylistPage ? '#' : '/playlist'} onClick={navigateToPlaylist}>
        <FormButton
          label={isPlaylistPage ? t('back') : t('go_to_playlist')}
          type="button"
          variant="primary"
        />
      </Link>
      <StyledFiller />
    </HStack.rowg1>
  );
}

export default NewPageBtn;
