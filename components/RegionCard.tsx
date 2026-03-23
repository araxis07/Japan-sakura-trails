import React, { useState } from 'react';
import { Region, Language } from '../types';
import PlaceCard from './PlaceCard';

interface RegionCardProps {
  index: number;
  region: Region;
  currentLanguage: Language;
  onNavigate: (path: string) => void;
  className?: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength).trimEnd()}…`;
};

const RegionCard: React.FC<RegionCardProps> = ({
  index,
  region,
  currentLanguage,
  onNavigate,
  className,
}) => {
  const [showPlaces, setShowPlaces] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const isAsianFont = [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
  const textFontFamily = isAsianFont ? 'font-jp' : 'font-sans';
  const titleFontFamily = isAsianFont ? 'font-jp font-bold' : 'font-display font-semibold';
  const placesSectionId = `places-${region.id}`;
  const fallbackImage =
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';
  const regionNumber = String(index + 1).padStart(2, '0');
  const reverseLayout = index % 2 === 1;

  const facts = [
    {
      label: {
        [Language.JA]: '自然',
        [Language.EN]: 'Nature',
        [Language.TH]: 'ธรรมชาติ',
        [Language.ZH]: '自然',
      },
      content: region.natural_features?.[currentLanguage],
    },
    {
      label: {
        [Language.JA]: '文化',
        [Language.EN]: 'Culture',
        [Language.TH]: 'วัฒนธรรม',
        [Language.ZH]: '文化',
      },
      content: region.regional_culture?.[currentLanguage],
    },
    {
      label: {
        [Language.JA]: '食',
        [Language.EN]: 'Cuisine',
        [Language.TH]: 'อาหาร',
        [Language.ZH]: '美食',
      },
      content: region.local_cuisine?.[currentLanguage],
    },
    {
      label: {
        [Language.JA]: '気候',
        [Language.EN]: 'Climate',
        [Language.TH]: 'อากาศ',
        [Language.ZH]: '气候',
      },
      content: region.climate?.[currentLanguage],
    },
    {
      label: {
        [Language.JA]: 'アクセス',
        [Language.EN]: 'Access',
        [Language.TH]: 'การเดินทาง',
        [Language.ZH]: '交通',
      },
      content: region.accessibility?.[currentLanguage],
    },
  ]
    .filter((fact) => Boolean(fact.content))
    .slice(0, 4);

  const placesTitleText = {
    [Language.JA]: `${region.name[Language.JA]}のスポット`,
    [Language.EN]: `${region.name[Language.EN]} highlights`,
    [Language.TH]: `ไฮไลต์ใน${region.name[Language.TH]}`,
    [Language.ZH]: `${region.name[Language.ZH]}亮点`,
  };

  const toggleButtonText = {
    [Language.JA]: showPlaces ? 'スポットを閉じる' : 'スポットを開く',
    [Language.EN]: showPlaces ? 'Hide Places' : 'View Places',
    [Language.TH]: showPlaces ? 'ซ่อนสถานที่' : 'ดูสถานที่',
    [Language.ZH]: showPlaces ? '收起地点' : '查看地点',
  };

  const placesSummaryText = {
    [Language.JA]: '厳選したスポットを見比べて、そのまま詳しい旅メモへ進めます。',
    [Language.EN]: 'Compare curated stops inside this region, then jump directly into each destination guide.',
    [Language.TH]: 'เปรียบเทียบสถานที่เด่นในภูมิภาคนี้ แล้วเข้าไปดูคู่มือแต่ละจุดต่อได้ทันที',
    [Language.ZH]: '先比较这个地区中的精选地点，再直接进入每个目的地的详细指南。',
  };

  const compareHintText = {
    [Language.JA]: 'まず地域の雰囲気を確認してから、気になるスポットを開いてください。',
    [Language.EN]: 'Start with the regional mood, then open the places that stand out to you.',
    [Language.TH]: 'เริ่มจากดูคาแรกเตอร์ของภูมิภาคก่อน แล้วค่อยเปิดสถานที่ที่คุณสนใจ',
    [Language.ZH]: '先感受这个地区的氛围，再打开你感兴趣的地点。',
  };

  const chapterText = {
    [Language.JA]: '章',
    [Language.EN]: 'Chapter',
    [Language.TH]: 'ตอน',
    [Language.ZH]: '章节',
  };

  const placeCountText = {
    [Language.JA]: `${region.places.length}スポット`,
    [Language.EN]: `${region.places.length} places`,
    [Language.TH]: `${region.places.length} จุด`,
    [Language.ZH]: `${region.places.length}个地点`,
  };

  return (
    <section
      className={`region-card-animate ${className ?? ''}`}
      aria-labelledby={`region-title-${region.id}`}
    >
      <div className="region-shell__frame">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10">
          <div className={`region-visual ${reverseLayout ? 'lg:order-2' : ''}`}>
            {!imageLoaded && <div className="image-loading-skeleton" />}
            <img
              src={region.image || fallbackImage}
              alt={region.name[currentLanguage]}
              onLoad={() => setImageLoaded(true)}
              onError={(event) => {
                event.currentTarget.src = fallbackImage;
                setImageLoaded(true);
              }}
              className={`absolute inset-0 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />

            <div className="region-badge">
              <span className={`text-[0.72rem] font-semibold uppercase tracking-[0.3em] ${textFontFamily}`}>
                {chapterText[currentLanguage]} {regionNumber}
              </span>
            </div>

            <div className="region-count">
              <span className={`text-sm font-medium ${textFontFamily}`}>{placeCountText[currentLanguage]}</span>
            </div>

            <div className="absolute inset-x-0 bottom-0 z-[2] p-6">
              <p className={`text-xs font-semibold uppercase tracking-[0.28em] text-white/60 ${textFontFamily}`}>
                Sakura Trails
              </p>
              <p className={`mt-3 text-2xl text-white sm:text-3xl ${titleFontFamily}`}>
                {region.name[currentLanguage]}
              </p>
            </div>
          </div>

          <div className={`flex flex-col justify-center ${reverseLayout ? 'lg:order-1' : ''}`}>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`detail-chip text-xs uppercase tracking-[0.24em] ${textFontFamily}`}>
                {chapterText[currentLanguage]} {regionNumber}
              </span>
              <span className={`detail-chip ${textFontFamily}`}>{placeCountText[currentLanguage]}</span>
            </div>

            <h2
              id={`region-title-${region.id}`}
              className={`mt-5 text-3xl text-sakura-text sm:text-4xl lg:text-5xl ${titleFontFamily}`}
            >
              {region.name[currentLanguage]}
            </h2>

            <p className={`mt-4 text-base leading-8 text-sakura-text-light sm:text-lg ${textFontFamily}`}>
              {region.description[currentLanguage]}
            </p>

            {facts.length > 0 && (
              <div className="region-fact-grid mt-6">
                {facts.map((fact) => (
                  <article key={fact.label[currentLanguage]} className="region-fact-card">
                    <p className={`text-xs font-semibold uppercase tracking-[0.24em] text-sakura-deep-pink ${textFontFamily}`}>
                      {fact.label[currentLanguage]}
                    </p>
                    <p className={`mt-3 text-sm leading-7 text-sakura-text-light ${textFontFamily}`}>
                      {truncateText(fact.content ?? '', 110)}
                    </p>
                  </article>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <button
                type="button"
                onClick={() => setShowPlaces((previous) => !previous)}
                className={showPlaces ? 'secondary-cta' : 'primary-cta'}
                aria-expanded={showPlaces}
                aria-controls={placesSectionId}
              >
                {toggleButtonText[currentLanguage]}
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path
                    d={showPlaces ? 'M6 14l6-6 6 6' : 'M6 10l6 6 6-6'}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <p className={`max-w-md text-sm leading-7 text-sakura-text-light ${textFontFamily}`}>
                {compareHintText[currentLanguage]}
              </p>
            </div>
          </div>
        </div>

        {showPlaces && (
          <div id={placesSectionId} className="mt-10 border-t border-sakura-pink-soft/70 pt-8">
            <div className="section-heading">
              <div className="space-y-3">
                <span className="section-label">{placesTitleText[currentLanguage]}</span>
                <h3 className={`text-2xl text-sakura-text sm:text-3xl ${titleFontFamily}`}>
                  {placesTitleText[currentLanguage]}
                </h3>
              </div>
              <p className={`max-w-2xl text-sm leading-7 text-sakura-text-light sm:text-base ${textFontFamily}`}>
                {placesSummaryText[currentLanguage]}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
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
