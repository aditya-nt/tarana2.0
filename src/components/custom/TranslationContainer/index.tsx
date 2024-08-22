import React from 'react';
import FormButton from '../../base/FormButton';

interface TranslationButtonProps {
  showLanguages: boolean;
  onToggleLanguageMenu: () => void;
  onChangeLanguage: (language: string) => void;
}

const TranslationButton: React.FC<TranslationButtonProps> = ({
  showLanguages,
  onToggleLanguageMenu,
  onChangeLanguage,
}) => {
  return (
    <div>
      <FormButton label="Select Language" onClick={onToggleLanguageMenu} />

      {showLanguages && (
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
          <FormButton label="English" onClick={() => onChangeLanguage('en')} />
          <FormButton label="Français" onClick={() => onChangeLanguage('fr')} />
          <FormButton label="Español" onClick={() => onChangeLanguage('es')} />
        </div>
      )}
    </div>
  );
};

export default TranslationButton;
