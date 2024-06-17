import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FormButton from '../FormButton';

const TranslationButton: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setShowLanguages(false); 
  };

  const [showLanguages, setShowLanguages] = useState(false);

  return (
    <div>
      <FormButton label="Select Language" onClick={() => setShowLanguages(!showLanguages)} />

      {showLanguages && (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
          <FormButton label="English" onClick={() => changeLanguage('en')} />
          <FormButton label="Français" onClick={() => changeLanguage('fr')} />
          <FormButton label="Español" onClick={() => changeLanguage('es')} />
        </div>
      )}
    </div>
  );
};

export default TranslationButton;
