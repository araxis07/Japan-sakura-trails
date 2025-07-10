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
  className = ''
}) => {
  const languages = [
    { code: Language.JA, name: '日本語' },
    { code: Language.EN, name: 'English' },
    { code: Language.TH, name: 'ภาษาไทย' },
    { code: Language.ZH, name: '中文' },
  ];

  return (
    <div className={`inline-flex items-center rounded-full p-1 bg-white/80 shadow-subtle-pink border border-sakura-pink-soft gap-1 ${className}`} role="group">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm font-semibold transition-all duration-300
            ${currentLanguage === lang.code
              ? 'bg-sakura-deep-pink text-white shadow-elegant scale-105 ring-2 ring-sakura-pink-soft'
              : 'bg-white text-sakura-accent border border-sakura-pink-soft hover:bg-sakura-pink-soft/80 hover:text-sakura-deep-pink'
            }
            focus:outline-none focus:ring-2 focus:ring-sakura-accent focus:ring-offset-2
            disabled:opacity-60 disabled:cursor-not-allowed
            mx-0.5 first:ml-0 last:mr-0 drop-shadow-sm`}
          aria-pressed={currentLanguage === lang.code ? 'true' : 'false'}
          disabled={currentLanguage === lang.code}
          style={{letterSpacing: lang.code === Language.JA ? '0.05em' : undefined}}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
