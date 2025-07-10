import React, { useState, useEffect } from 'react';
import { Language, LocalizedText } from '../types';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onTitleClick: () => void;
}

const siteTitle: LocalizedText = {
  [Language.JA]: '桜の道しるべ',
  [Language.EN]: 'Sakura Trails',
  [Language.TH]: 'เส้นทางซากุระ',
  [Language.ZH]: '樱花之道',
};

const siteSubtitle: LocalizedText = {
  [Language.JA]: '日本旅行ガイド',
  [Language.EN]: 'Japan Travel Guide',
  [Language.TH]: 'คู่มือเที่ยวญี่ปุ่น',
  [Language.ZH]: '日本旅行指南',
};

const CherryBlossomIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    className="w-8 h-8 md:w-10 md:h-10 text-pink-500 group-hover:text-pink-600 transition-colors duration-300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.2-11.55c-.49-.31-1.12-.21-1.46.29-.33.5-.19 1.17.3 1.46.74.46 1.02 1.37.68 2.14-.34.77-1.21 1.17-2.02.93-.81-.24-1.4-.95-1.4-1.77 0-.32.09-.63.25-.9A2.91 2.91 0 008.5 10c-.97 0-1.84.46-2.42 1.21-.58.75-.79 1.72-.54 2.61.25.89.96 1.59 1.87 1.84.91.25 1.85-.03 2.53-.63.2-.18.43-.32.67-.4.59-.21 1.24.03 1.49.61.25.58.01 1.23-.58 1.48-.93.4-1.98.3-2.8-.27-.82-.57-1.32-1.46-1.32-2.42 0-1.3.84-2.4 2-2.82.32-.11.65-.18.98-.18.5 0 .98.15 1.38.45.49.31 1.12.21 1.46-.29.33-.51.19-1.18-.3-1.47z"
      fill="currentColor"
    />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ currentLanguage, onLanguageChange, onTitleClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isAsianFont = [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
  const titleFontFamily = isAsianFont ? 'font-jp' : 'font-sans';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={onTitleClick}
            className="group flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 rounded-lg px-2 py-1"
            aria-label={currentLanguage === Language.JA ? "ホームページへ" : "Go to homepage"}
          >
            <CherryBlossomIcon />
            <div className="flex flex-col">
              <h1 className={`text-2xl sm:text-3xl font-bold 
                ${isScrolled ? 'text-gray-800' : 'text-pink-600'} 
                group-hover:text-pink-500 transition-colors duration-300 ${titleFontFamily}`}
              >
                {siteTitle[currentLanguage]}
              </h1>
              <p className={`text-sm sm:text-base 
                ${isScrolled ? 'text-gray-600' : 'text-gray-700'} 
                group-hover:text-gray-800 transition-colors duration-300 ${titleFontFamily}`}
              >
                {siteSubtitle[currentLanguage]}
              </p>
            </div>
          </button>

          <div className="flex items-center space-x-4">
            <LanguageToggle 
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              className={`${isScrolled ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white/90 hover:bg-white'} 
                shadow-md hover:shadow-lg transition-all duration-300`}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
