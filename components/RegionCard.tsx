
import React from 'react';
import { Region, Language } from '../types';
import PlaceCard from './PlaceCard';

interface RegionCardProps {
  region: Region;
  currentLanguage: Language;
  onNavigate: (path: string) => void; // For PlaceCard navigation
  className?: string; // For animation
}

const RegionCard: React.FC<RegionCardProps> = ({ region, currentLanguage, onNavigate, className }) => {
  const [showPlaces, setShowPlaces] = React.useState(false);
  const isAsianFont = [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
  const textFontFamily = isAsianFont ? 'font-jp' : 'font-sans';
  const titleFontFamily = isAsianFont ? 'font-jp font-semibold' : 'font-sans font-semibold'; // specific for titles
  
  const placesSectionId = `places-${region.id}`;
  
  const placesTitleText: {[key in Language]: string} = { // Renamed for clarity
    [Language.JA]: `${region.name[Language.JA]}の観光スポット`,
    [Language.EN]: `Places to Visit in ${region.name[Language.EN]}`,
    [Language.TH]: `สถานที่ท่องเที่ยวใน ${region.name[Language.TH]}`,
    [Language.ZH]: `${region.name[Language.ZH]}的观光景点`,
  };
  
  const toggleButtonText: {[key in Language]: string} = {
    [Language.JA]: showPlaces ? '隠す' : '探索する', // Shortened for elegance
    [Language.EN]: showPlaces ? 'Hide Places' : 'Explore Places',
    [Language.TH]: showPlaces ? 'ซ่อน' : 'สำรวจ',
    [Language.ZH]: showPlaces ? '隐藏' : '探索景点',
  };

  return (
    <section 
      className={`mb-12 md:mb-16 bg-white rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 ease-in-out border border-sakura-pink-soft/30 ${className}`}
      aria-labelledby={`region-title-${region.id}`}
    >
      <div className="p-6 md:p-10">
        <div className="flex flex-col lg:flex-row lg:space-x-10 items-start">
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0 overflow-hidden rounded-xl shadow-md"> {/* Increased width slightly */}
            <img 
              src={region.image} 
              alt={region.name[currentLanguage]} 
              className="w-full h-64 md:h-80 lg:h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </div>
          <div className="flex-1">
            <h2 id={`region-title-${region.id}`} className={`text-3xl md:text-4xl font-bold text-sakura-deep-pink mb-4 ${titleFontFamily}`}>
              {region.name[currentLanguage]}
            </h2>
            <p className={`text-sakura-text mb-8 ${textFontFamily} leading-relaxed text-base md:text-lg`}>
              {region.description[currentLanguage]}
            </p>
            <button
              onClick={() => setShowPlaces(!showPlaces)}
              className={`inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ease-in-out
                          ${showPlaces ? 'bg-sakura-pink-dark text-white hover:bg-opacity-90' : 'bg-sakura-accent text-white hover:bg-sakura-deep-pink'} ${textFontFamily}
                          transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sakura-deep-pink focus:ring-opacity-60 shadow-lg hover:shadow-xl`}
              aria-expanded={showPlaces}
              aria-controls={placesSectionId}
            >
              {toggleButtonText[currentLanguage]}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24"  // Increased size
                fill="currentColor" 
                className={`w-6 h-6 ml-2.5 transition-transform duration-300 ${showPlaces ? 'transform rotate-180' : ''}`}
              >
                <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        id={placesSectionId} 
        className={`
          overflow-hidden transition-all duration-700 ease-in-out
          ${showPlaces 
            ? 'max-h-[2000px] opacity-100 mt-0 pt-8 border-t border-sakura-pink-soft/50' 
            : 'max-h-0 opacity-0 pt-0 mt-0 border-t-0'
          }
        `}
        role="region" 
        aria-labelledby={`places-title-${region.id}`}
        style={{transitionProperty: 'max-height, opacity, padding, margin, border-top-width'}}
      >
        <div className={`${showPlaces ? 'px-6 md:px-10 pb-8 md:pb-10' : 'p-0'}`}>
          <h3 id={`places-title-${region.id}`} className={`text-2xl lg:text-3xl font-semibold text-sakura-gold-tint mb-10 text-center ${titleFontFamily}`}>
            {placesTitleText[currentLanguage]}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
            {region.places.map((place) => (
              <PlaceCard 
                key={place.id} 
                place={place} 
                currentLanguage={currentLanguage} 
                regionId={region.id}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegionCard;
