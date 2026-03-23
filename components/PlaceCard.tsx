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
  const titleFontFamily = isAsianFont ? 'font-jp font-semibold' : 'font-display font-semibold';
  const fallbackImage =
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80';

  const handlePlaceClick = () => {
    onNavigate(`#/place/${regionId}/${place.id}`);
  };

  const badgeText = {
    [Language.JA]: 'おすすめ',
    [Language.EN]: 'Featured',
    [Language.TH]: 'แนะนำ',
    [Language.ZH]: '精选',
  };

  const viewDetailText = {
    [Language.JA]: '詳細を見る',
    [Language.EN]: 'View Details',
    [Language.TH]: 'ดูรายละเอียด',
    [Language.ZH]: '查看详情',
  };

  const topics = [
    {
      label: {
        [Language.JA]: '歴史',
        [Language.EN]: 'History',
        [Language.TH]: 'ประวัติ',
        [Language.ZH]: '历史',
      },
      active: Boolean(place.history),
    },
    {
      label: {
        [Language.JA]: '文化',
        [Language.EN]: 'Culture',
        [Language.TH]: 'วัฒนธรรม',
        [Language.ZH]: '文化',
      },
      active: Boolean(place.culture_festivals),
    },
    {
      label: {
        [Language.JA]: '体験',
        [Language.EN]: 'Things To Do',
        [Language.TH]: 'กิจกรรม',
        [Language.ZH]: '体验',
      },
      active: Boolean(place.things_to_do),
    },
    {
      label: {
        [Language.JA]: '食',
        [Language.EN]: 'Cuisine',
        [Language.TH]: 'อาหาร',
        [Language.ZH]: '美食',
      },
      active: Boolean(place.local_cuisine),
    },
  ]
    .filter((topic) => topic.active)
    .slice(0, 3);

  return (
    <button
      type="button"
      className="place-card-shell group"
      onClick={handlePlaceClick}
      aria-label={`${place.name[currentLanguage]} - ${viewDetailText[currentLanguage]}`}
    >
      <div className="place-card-media">
        {!imageLoaded && <div className="image-loading-skeleton" />}
        <img
          src={place.image || fallbackImage}
          alt={place.name[currentLanguage]}
          onLoad={() => setImageLoaded(true)}
          onError={(event) => {
            event.currentTarget.src = fallbackImage;
            setImageLoaded(true);
          }}
          className={`${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="place-badge">
          <span className={`text-xs font-semibold uppercase tracking-[0.24em] ${textFontFamily}`}>
            {badgeText[currentLanguage]}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-[2] p-5 sm:p-6">
          <h3 className={`text-2xl text-white sm:text-[1.85rem] ${titleFontFamily}`}>
            {place.name[currentLanguage]}
          </h3>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 sm:p-6">
        {topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span key={topic.label[currentLanguage]} className={`topic-chip ${textFontFamily}`}>
                {topic.label[currentLanguage]}
              </span>
            ))}
          </div>
        )}

        <p className={`truncate-3 text-sm leading-7 text-sakura-text-light sm:text-base ${textFontFamily}`}>
          {place.description[currentLanguage]}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-sakura-pink-soft/70 pt-4">
          <span className={`text-sm font-semibold tracking-[0.2em] uppercase text-sakura-deep-pink ${textFontFamily}`}>
            {viewDetailText[currentLanguage]}
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sakura-pink-soft/70 text-sakura-deep-pink transition-transform duration-300 group-hover:translate-x-1">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
};

export default PlaceCard;
