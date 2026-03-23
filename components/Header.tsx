import React, { useEffect, useState } from 'react';
import { Language, LocalizedText } from '../types';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  onTitleClick: () => void;
  onExploreClick: () => void;
  isDetailPage: boolean;
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

const exploreText: LocalizedText = {
  [Language.JA]: '地域を見る',
  [Language.EN]: 'Explore Regions',
  [Language.TH]: 'ดูภูมิภาค',
  [Language.ZH]: '查看地区',
};

const allRegionsText: LocalizedText = {
  [Language.JA]: '地域一覧',
  [Language.EN]: 'All Regions',
  [Language.TH]: 'ทุกภูมิภาค',
  [Language.ZH]: '全部地区',
};

const BlossomMark = () => (
  <svg viewBox="0 0 32 32" fill="none" className="h-6 w-6" aria-hidden="true">
    <path
      d="M16 4.667c1.95 0 3.996 1.058 5.243 2.732 1.224-.145 2.707.234 3.881 1.115 2.25 1.69 3.103 4.756 2.083 7.358 1.02 2.603.167 5.67-2.083 7.359-1.174.88-2.657 1.26-3.88 1.114C19.995 26.275 17.95 27.333 16 27.333s-3.996-1.058-5.243-2.732c-1.224.146-2.707-.234-3.88-1.114-2.251-1.69-3.104-4.756-2.084-7.359-1.02-2.602-.167-5.668 2.083-7.358 1.174-.88 2.657-1.26 3.88-1.115C12.005 5.725 14.05 4.667 16 4.667Zm0 6.166c-1.105 0-2.119.635-2.602 1.63-.484.995-.35 2.174.344 3.036.694.861 1.826 1.254 2.925 1.014 1.1-.24 1.975-1.07 2.259-2.143.284-1.073-.072-2.214-.918-2.94a3.137 3.137 0 0 0-2.008-.597Z"
      fill="currentColor"
      opacity="0.95"
    />
  </svg>
);

const Header: React.FC<HeaderProps> = ({
  currentLanguage,
  onLanguageChange,
  onTitleClick,
  onExploreClick,
  isDetailPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isAsianFont = [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
  const titleFontFamily = isAsianFont ? 'font-jp font-bold' : 'font-display font-semibold';
  const bodyFont = isAsianFont ? 'font-jp' : 'font-sans';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8 lg:pt-5">
      <div className="mx-auto max-w-7xl">
        <div className={`header-shell ${isScrolled ? 'header-shell--scrolled' : ''}`}>
          <button
            type="button"
            onClick={onTitleClick}
            className="group flex items-center gap-3 rounded-full px-2 py-1 text-left transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none"
            aria-label={currentLanguage === Language.JA ? 'ホームへ戻る' : 'Go to homepage'}
          >
            <span className="brand-mark">
              <BlossomMark />
            </span>

            <span className="min-w-0">
              <span className={`block truncate text-xl leading-none text-sakura-text sm:text-2xl ${titleFontFamily}`}>
                {siteTitle[currentLanguage]}
              </span>
              <span className={`mt-1 block truncate text-xs uppercase tracking-[0.22em] text-sakura-text-light sm:text-[0.72rem] ${bodyFont}`}>
                {siteSubtitle[currentLanguage]}
              </span>
            </span>
          </button>

          <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
            <button type="button" onClick={onExploreClick} className="secondary-cta hidden sm:inline-flex">
              {isDetailPage ? allRegionsText[currentLanguage] : exploreText[currentLanguage]}
            </button>

            <LanguageToggle
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              className={bodyFont}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
