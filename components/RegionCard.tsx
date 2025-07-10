import React, { useState } from 'react';
import { Region, Language } from '../types';
import PlaceCard from './PlaceCard';

interface RegionCardProps {
  region: Region;
  currentLanguage: Language;
  onNavigate: (path: string) => void;
  className?: string;
}

const RegionCard: React.FC<RegionCardProps> = ({ region, currentLanguage, onNavigate, className }) => {
  const [showPlaces, setShowPlaces] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isAsianFont = [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
  const textFontFamily = isAsianFont ? 'font-jp' : 'font-sans';
  const titleFontFamily = isAsianFont ? 'font-jp font-bold' : 'font-sans font-bold';
  
  const placesSectionId = `places-${region.id}`;
  
  const placesTitleText: {[key in Language]: string} = {
    [Language.JA]: `${region.name[Language.JA]}の観光スポット`,
    [Language.EN]: `Places to Visit in ${region.name[Language.EN]}`,
    [Language.TH]: `สถานที่ท่องเที่ยวใน${region.name[Language.TH]}`,
    [Language.ZH]: `${region.name[Language.ZH]}的观光景点`,
  };
  
  const toggleButtonText: {[key in Language]: string} = {
    [Language.JA]: showPlaces ? '閉じる ↑' : '観光スポットを見る ↓',
    [Language.EN]: showPlaces ? 'Close ↑' : 'View Places ↓',
    [Language.TH]: showPlaces ? 'ปิด ↑' : 'ดูสถานที่ท่องเที่ยว ↓',
    [Language.ZH]: showPlaces ? '关闭 ↑' : '查看景点 ↓',
  };

  const fallbackImage = 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80';

  return (
    <section 
      className={`mb-12 md:mb-16 japanese-card rounded-2xl transition-all duration-500 ease-in-out hover:shadow-xl ${className}`}
      aria-labelledby={`region-title-${region.id}`}
    >
      <div className="p-6 md:p-8 lg:p-10">
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-start">
          <div className="w-full lg:w-2/5 mb-6 lg:mb-0 overflow-hidden rounded-xl shadow-lg relative image-hover">
            <div className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <img 
                src={region.image || fallbackImage}
                alt={region.name[currentLanguage]}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.currentTarget.src = fallbackImage;
                  setImageLoaded(true);
                }}
                className="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>
            {!imageLoaded && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse">
                <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h2 
              id={`region-title-${region.id}`} 
              className={`japanese-heading text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-700 mb-4 ${titleFontFamily}`}
            >
              {region.name[currentLanguage]}
            </h2>
            
            <p className={`text-lg text-gray-700 leading-relaxed mb-6 ${textFontFamily}`}>
              {region.description[currentLanguage]}
            </p>
            
            <button
              onClick={() => setShowPlaces(!showPlaces)}
              className={`inline-flex items-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200
                ${showPlaces 
                  ? 'bg-pink-600 hover:bg-pink-700' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
                } ${textFontFamily} transform hover:scale-105`}
              aria-expanded={showPlaces ? 'true' : 'false'}
              aria-controls={placesSectionId}
            >
              {toggleButtonText[currentLanguage]}
            </button>
          </div>
        </div>

        {showPlaces && (
          <div 
            id={placesSectionId}
            className="mt-8 pt-8 border-t border-pink-100 animate-fade-in"
          >
            <h3 className={`japanese-heading text-2xl font-semibold mb-6 text-gray-800 ${titleFontFamily}`}>
              {placesTitleText[currentLanguage]}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        )}
      </div>
    </section>
  );
};

export default RegionCard;
