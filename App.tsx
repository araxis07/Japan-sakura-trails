
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Header from './components/Header';
import RegionCard from './components/RegionCard';
import ScrollToTopButton from './components/ScrollToTopButton';
import PlacePage from './components/PlacePage'; // New component
import { Language, Region, Place } from './types';
import { REGIONS_DATA } from './constants';

// Helper to determine if Asian font should be used
const useAsianFont = (currentLanguage: Language) => {
  return [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
};

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.JA);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');
  
  const isAsian = useAsianFont(currentLanguage);
  const titleFontFamily = isAsian ? 'font-jp font-bold' : 'font-sans font-bold'; // Ensure titles are bold
  const bodyFont = isAsian ? 'font-jp' : 'font-sans';


  const handleLanguageChange = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo(0,0); // Scroll to top on path change
    };
    window.addEventListener('hashchange', handleHashChange);
    // Initial scroll to top if there's a hash
    if(window.location.hash) window.scrollTo(0,0);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  // Animation for region cards
  useEffect(() => {
    if (currentPath !== '#/' && !currentPath.startsWith('#/place/')) return; // Only run for main page

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -50px 0px" } // Trigger a bit earlier
    );

    const timerId = setTimeout(() => {
      document.querySelectorAll('.region-card-animate').forEach((card) => {
        observer.observe(card);
      });
    }, 100); // Slight delay to ensure DOM is ready


    return () => {
      clearTimeout(timerId);
      observer.disconnect();
    }
  }, [currentPath]); // Re-run if path changes to observe new cards on main page

  const pageTitle: {[key in Language]: string} = {
    [Language.JA]: "日本の地域を発見する",
    [Language.EN]: "Discover the Regions of Japan",
    [Language.TH]: "ค้นพบภูมิภาคต่างๆ ของญี่ปุ่น",
    [Language.ZH]: "探索日本各地区",
  };

  const pageSubtitle: {[key in Language]: string} = {
    [Language.JA]: "北から南まで、日本の多様な魅力を巡る旅に出かけましょう。",
    [Language.EN]: "Embark on a journey from north to south, exploring the diverse beauty of Japan.",
    [Language.TH]: "เริ่มต้นการเดินทางจากเหนือจรดใต้ สัมผัสความงามอันหลากหลายของญี่ปุ่น",
    [Language.ZH]: "从北到南，踏上探索日本多样魅力的旅程。",
  };
  
  const footerText: {[key in Language]: string} = {
    [Language.JA]: "心を込めて作られました",
    [Language.EN]: "Crafted with love",
    [Language.TH]: "สร้างสรรค์ด้วยใจรัก",
    [Language.ZH]: "用心制作",
  };

  const renderContent = () => {
    if (currentPath.startsWith('#/place/')) {
      const [, , regionId, placeId] = currentPath.split('/');
      const region = REGIONS_DATA.find(r => r.id === regionId);
      const place = region?.places.find(p => p.id === placeId);
      if (place && region) {
        return <PlacePage place={place} region={region} currentLanguage={currentLanguage} onNavigate={navigate} />;
      }
    }
    // Default to main page (region list)
    return (
      <>
        <div className="text-center pt-16 pb-20 md:pt-24 md:pb-28 bg-gradient-to-br from-sakura-bg-soft/50 via-sakura-bg to-sakura-bg-soft/30">
          <div className="container mx-auto px-4 sm:px-6">
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-sakura-deep-pink via-sakura-accent to-pink-500 ${titleFontFamily} [text-shadow:_1px_1px_3px_rgba(199,91,112,0.2)]`}
              aria-live="polite"
            >
              {pageTitle[currentLanguage]}
            </h1>
            <p className={`text-lg md:text-xl text-sakura-text max-w-3xl mx-auto ${bodyFont}`} aria-live="polite">
              {pageSubtitle[currentLanguage]}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-10 md:py-16">
          <div className="space-y-12 md:space-y-20"> {/* Increased spacing */}
            {REGIONS_DATA.map((region) => (
              <RegionCard 
                key={region.id} 
                region={region} 
                currentLanguage={currentLanguage}
                onNavigate={navigate}
                className="region-card-animate"
              />
            ))}
          </div>
        </div>
      </>
    );
  };
  
  const CherryBlossomFooterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-sakura-pink inline-block ml-1.5 align-middle group-hover:text-sakura-deep-pink transition-colors">
       <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.2-11.55c-.49-.31-1.12-.21-1.46.29-.33.5-.19 1.17.3 1.46.74.46 1.02 1.37.68 2.14-.34.77-1.21 1.17-2.02.93-.81-.24-1.4-.95-1.4-1.77 0-.32.09-.63.25-.9A2.91 2.91 0 008.5 10c-.97 0-1.84.46-2.42 1.21-.58.75-.79 1.72-.54 2.61.25.89.96 1.59 1.87 1.84.91.25 1.85-.03 2.53-.63.2-.18.43-.32.67-.4.59-.21 1.24.03 1.49.61.25.58.01 1.23-.58 1.48-.93.4-1.98.3-2.8-.27-.82-.57-1.32-1.46-1.32-2.42 0-1.3.84-2.4 2-2.82.32-.11.65-.18.98-.18.5 0 .98.15 1.38.45.49.31 1.12.21 1.46-.29.33-.51.19-1.18-.3-1.47zM15.5 10c-.5 0-.98.15-1.38.45-.49.31-1.12.21-1.46-.29-.33-.5-.19-1.17.3-1.46.74-.46 1.02 1.37.68-2.14-.34.77-1.21 1.17-2.02.93-.81-.24-1.4-.95-1.4-1.77 0-.32.09-.63.25-.9A2.91 2.91 0 0012.5 6c-.97 0-1.84.46-2.42 1.21-.58.75-.79 1.72-.54 2.61.25.89.96 1.59 1.87 1.84.91.25 1.85-.03 2.53-.63.2-.18.43-.32.67-.4.59-.21 1.24.03 1.49.61.25.58.01 1.23-.58 1.48-.93.4-1.98.3-2.8-.27-.82-.57-1.32-1.46-1.32-2.42 0-1.3.84-2.4 2-2.82.32-.11.65-.18.98-.18z"/>
    </svg>
  );

  return (
    <div className={`min-h-screen bg-sakura-bg ${bodyFont} text-sakura-text flex flex-col selection:bg-sakura-deep-pink selection:text-white`}>
      <Header 
        currentLanguage={currentLanguage} 
        onLanguageChange={handleLanguageChange}
        onTitleClick={() => navigate('#/')}
      />
      
      <main className="flex-grow w-full">
        {renderContent()}
      </main>

      <footer className={`py-8 text-center bg-gradient-to-t from-sakura-bg-soft/30 via-white to-white border-t border-sakura-pink/10 mt-auto ${bodyFont} shadow-inner-top`}>
        <p className="text-sm text-sakura-text-light">
          &copy; {new Date().getFullYear()} Sakura Trails. All rights reserved.
        </p>
         <p className={`text-sm text-sakura-deep-pink mt-2 font-medium ${titleFontFamily} group`}>
            {footerText[currentLanguage]} <CherryBlossomFooterIcon />
          </p>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default App;
