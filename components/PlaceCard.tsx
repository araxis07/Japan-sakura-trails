import React, { useState } from 'react';
import { Place, Language } from '../types';

interface PlaceCardProps {
  place: Place;
  currentLanguage: Language;
  regionId: string;
  onNavigate: (path: string) => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, currentLanguage, regionId, onNavigate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isAsianFont = [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
  const textFontFamily = isAsianFont ? 'font-jp' : 'font-sans';
  const titleFontFamily = isAsianFont ? 'font-jp font-semibold' : 'font-sans font-semibold';

  const handlePlaceClick = () => {
    onNavigate(`#/place/${regionId}/${place.id}`);
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80';

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl cursor-pointer group flex flex-col"
      onClick={handlePlaceClick}
      onKeyPress={(e) => e.key === 'Enter' && handlePlaceClick()}
      role="link"
      tabIndex={0}
      aria-label={`${place.name[currentLanguage]} - ${currentLanguage === Language.JA ? '詳細を見る' : 'View Details'}`}
    >
      <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
        <div className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={place.image || fallbackImage}
            alt={place.name[currentLanguage]}
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
              setImageLoaded(true);
            }}
            className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse">
            <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-90"></div>
        <h3 className={`absolute bottom-0 left-0 p-6 text-xl md:text-2xl font-bold text-white ${titleFontFamily} tracking-wide [text-shadow:_2px_2px_4px_rgba(0,0,0,0.8)] w-full`}>
          {place.name[currentLanguage]}
        </h3>
      </div>
      <div className="p-6 flex-grow flex flex-col space-y-4">
        <p className={`text-base text-gray-700 ${textFontFamily} leading-relaxed line-clamp-3 flex-grow`}>
          {place.description[currentLanguage]}
        </p>
        <div className="pt-4 border-t border-gray-100">
          <span 
            className={`inline-flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-800 transition-colors duration-200 ${textFontFamily}`}
            aria-hidden="true" 
          >
            {currentLanguage === Language.JA ? '詳細を見る →' : 
             currentLanguage === Language.TH ? 'ดูรายละเอียด →' :
             currentLanguage === Language.ZH ? '查看详情 →' :
             'View Details →'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
