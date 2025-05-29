
import React from 'react';
import { Place, Language } from '../types';

interface PlaceCardProps {
  place: Place;
  currentLanguage: Language;
  regionId: string; // Needed for navigation
  onNavigate: (path: string) => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, currentLanguage, regionId, onNavigate }) => {
  const isAsianFont = [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
  const textFontFamily = isAsianFont ? 'font-jp' : 'font-sans';
  const titleFontFamily = isAsianFont ? 'font-jp font-semibold' : 'font-sans font-semibold';

  const handlePlaceClick = () => {
    onNavigate(`#/place/${regionId}/${place.id}`);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-elegant overflow-hidden transition-all duration-300 ease-in-out hover:shadow-elegant-hover hover:scale-[1.02] border border-transparent hover:border-sakura-pink-soft/50 cursor-pointer group flex flex-col"
      onClick={handlePlaceClick}
      onKeyPress={(e) => e.key === 'Enter' && handlePlaceClick()}
      role="link"
      tabIndex={0}
      aria-label={`${place.name[currentLanguage]} - ${currentLanguage === Language.JA ? '詳細を見る' : 'View Details'}`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={place.image} 
          alt={place.name[currentLanguage]} 
          className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
         <h3 className={`absolute bottom-0 left-0 p-5 text-lg md:text-xl font-semibold text-white ${titleFontFamily} [text-shadow:_1px_1px_2px_rgba(0,0,0,0.6)] w-full`}>
          {place.name[currentLanguage]}
        </h3>
      </div>
      <div className="p-5 md:p-6 flex-grow flex flex-col">
        <p className={`text-sm text-sakura-text-light ${textFontFamily} leading-relaxed line-clamp-3 mb-4 flex-grow`}>
          {place.description[currentLanguage]}
        </p>
         <span 
            className={`mt-auto inline-block text-sm font-medium text-sakura-accent group-hover:text-sakura-deep-pink transition-colors duration-200 ${textFontFamily}`}
            aria-hidden="true" 
          >
            {currentLanguage === Language.JA ? '詳細を見る →' : 
             currentLanguage === Language.TH ? 'ดูรายละเอียด →' :
             currentLanguage === Language.ZH ? '查看详情 →' :
             'View Details →'}
        </span>
      </div>
    </div>
  );
};

export default PlaceCard;
