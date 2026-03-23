import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
  className = '',
}) => {
  const languages = [
    { code: Language.JA, name: '日本語' },
    { code: Language.EN, name: 'English' },
    { code: Language.TH, name: 'ไทย' },
    { code: Language.ZH, name: '中文' },
  ];

  return (
    <div
      className={`language-switcher ${className}`}
      role="group"
      aria-label="Select language"
    >
      {languages.map((lang) => {
        const isActive = currentLanguage === lang.code;

        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => onLanguageChange(lang.code)}
            className={`language-switcher__button ${isActive ? 'language-switcher__button--active' : ''}`}
            aria-pressed={isActive}
          >
            {lang.name}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
