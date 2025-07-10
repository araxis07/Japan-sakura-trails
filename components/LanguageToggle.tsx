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
    <div className={`inline-flex items-center rounded-lg p-1 ${className}`} role="group">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onLanguageChange(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300
            ${currentLanguage === lang.code
              ? 'bg-indigo-600 text-white shadow-md transform scale-105'
              : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'
            }
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed
            mx-0.5 first:ml-0 last:mr-0`}
          aria-pressed={currentLanguage === lang.code ? 'true' : 'false'}
          disabled={currentLanguage === lang.code}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
