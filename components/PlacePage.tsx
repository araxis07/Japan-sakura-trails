
import React from 'react';
import { Place, Region, Language, LocalizedText } from '../types';

interface PlacePageProps {
  place: Place;
  region: Region; // To display region name or link back
  currentLanguage: Language;
  onNavigate: (path: string) => void;
}

const PlacePage: React.FC<PlacePageProps> = ({ place, region, currentLanguage, onNavigate }) => {
  const isAsianFont = [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
  const titleFontFamily = isAsianFont ? 'font-jp font-bold' : 'font-sans font-bold';
  const bodyFont = isAsianFont ? 'font-jp' : 'font-sans';

  const backButtonText: LocalizedText = {
    [Language.JA]: `全ての地域に戻る`,
    [Language.EN]: `Back to All Regions`,
    [Language.TH]: `กลับไปยังทุกภูมิภาค`,
    [Language.ZH]: `返回所有地区`,
  };
  
  const pageTitleText: LocalizedText = {
    [Language.JA]: place.name[Language.JA],
    [Language.EN]: place.name[Language.EN],
    [Language.TH]: place.name[Language.TH],
    [Language.ZH]: place.name[Language.ZH],
  };

  // Update document title
  React.useEffect(() => {
    const siteBaseTitle: LocalizedText = {
      [Language.JA]: '桜の道しるべ',
      [Language.EN]: 'Sakura Trails',
      [Language.TH]: 'เส้นทางซากุระ',
      [Language.ZH]: '樱花之道',
    };
    document.title = `${place.name[currentLanguage]} | ${region.name[currentLanguage]} - ${siteBaseTitle[currentLanguage]}`;
  }, [place, region, currentLanguage]);

  return (
    <div className={`bg-sakura-bg-soft min-h-full`}> {/* Ensures full height for this view */}
      <div className={`container mx-auto px-4 sm:px-6 py-8 md:py-12 ${bodyFont}`}>
        <button
          onClick={() => onNavigate('#/')}
          className={`mb-8 inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 
                      bg-white text-sakura-accent hover:text-sakura-gold-tint 
                      border border-sakura-pink-soft hover:border-sakura-gold-tint/70 shadow-subtle-pink hover:shadow-card
                      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sakura-deep-pink focus:ring-opacity-50
                      ${bodyFont}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2.5">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L5.56 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
          {backButtonText[currentLanguage]}
        </button>

        <article className="bg-white p-6 md:p-10 rounded-2xl shadow-elegant border border-sakura-pink-soft/40">
          <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-sakura-deep-pink mb-2 md:mb-3 ${titleFontFamily}`}>
            {pageTitleText[currentLanguage]}
          </h1>
          <p className={`text-md md:text-lg text-sakura-gold-tint mb-6 md:mb-8 ${bodyFont} font-medium`}>
            {`${currentLanguage === Language.JA ? '地域' : currentLanguage === Language.TH ? 'ภูมิภาค' : currentLanguage === Language.ZH ? '区域' : 'Region'}: ${region.name[currentLanguage]}`}
          </p>

          <hr className="my-6 md:my-8 border-t border-sakura-pink-soft/40 rounded-full" />
          
          <div className="mb-8 md:mb-10 rounded-xl overflow-hidden shadow-card aspect-[16/10] border-4 border-white">
            <img 
              src={place.image} 
              alt={place.name[currentLanguage]} 
              className="w-full h-full object-cover" 
            />
          </div>

          <div 
            className={`prose prose-lg max-w-none ${bodyFont} text-sakura-text 
                        leading-relaxed md:leading-loose 
                        prose-headings:font-semibold prose-headings:text-sakura-deep-pink 
                        prose-a:text-sakura-accent hover:prose-a:text-sakura-deep-pink prose-a:transition-colors
                        prose-strong:text-sakura-text prose-strong:font-semibold`}
          >
            <p>{place.description[currentLanguage]}</p>
            {/* More detailed content can be added here in a structured way */}
          </div>
        </article>
      </div>
    </div>
  );
};

export default PlacePage;
