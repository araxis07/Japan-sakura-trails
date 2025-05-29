
import React from 'react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLanguage, onLanguageChange }) => {
  const languages = [
    { code: Language.JA, name: '日本語' },
    { code: Language.EN, name: 'English' },
    { code: Language.TH, name: 'ภาษาไทย' },
    { code: Language.ZH, name: '中文' },
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-end">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sakura-deep-pink focus:ring-opacity-50
            ${currentLanguage === lang.code
              ? 'bg-sakura-deep-pink text-white shadow-elegant transform scale-105'
              : 'bg-white text-sakura-accent hover:bg-sakura-pink-soft/70 hover:text-sakura-gold-tint border border-sakura-pink-soft hover:border-sakura-pink hover:shadow-subtle-pink'
            }`}
          aria-pressed={currentLanguage === lang.code}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
