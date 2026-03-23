import React from 'react';
import { Place, Region, Language, LocalizedText } from '../types';

interface PlacePageProps {
  place: Place;
  region: Region;
  currentLanguage: Language;
  onNavigate: (path: string) => void;
}

const PlacePage: React.FC<PlacePageProps> = ({ place, region, currentLanguage, onNavigate }) => {
  const isAsianFont = [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
  const titleFontFamily = isAsianFont ? 'font-jp font-bold' : 'font-display font-semibold';
  const bodyFont = isAsianFont ? 'font-jp' : 'font-sans';

  const backButtonText: LocalizedText = {
    [Language.JA]: 'すべての地域へ戻る',
    [Language.EN]: 'Back to All Regions',
    [Language.TH]: 'กลับไปยังทุกภูมิภาค',
    [Language.ZH]: '返回全部地区',
  };

  const regionLabelText: LocalizedText = {
    [Language.JA]: '地域',
    [Language.EN]: 'Region',
    [Language.TH]: 'ภูมิภาค',
    [Language.ZH]: '地区',
  };

  const overviewTitle: LocalizedText = {
    [Language.JA]: '概要',
    [Language.EN]: 'Overview',
    [Language.TH]: 'ภาพรวม',
    [Language.ZH]: '概览',
  };

  const regionStoryTitle: LocalizedText = {
    [Language.JA]: '地域について',
    [Language.EN]: 'About the Region',
    [Language.TH]: 'ภาพของภูมิภาค',
    [Language.ZH]: '地区背景',
  };

  const quickNavigationTitle: LocalizedText = {
    [Language.JA]: 'クイックナビ',
    [Language.EN]: 'Quick Navigation',
    [Language.TH]: 'ทางลัดภายในหน้า',
    [Language.ZH]: '快速导航',
  };

  const sectionCountTitle: LocalizedText = {
    [Language.JA]: 'ガイド項目',
    [Language.EN]: 'Guide Sections',
    [Language.TH]: 'หัวข้อคู่มือ',
    [Language.ZH]: '导览分区',
  };

  const continueTitle: LocalizedText = {
    [Language.JA]: '次の場所も見てみる',
    [Language.EN]: 'Keep exploring the trail',
    [Language.TH]: 'ดูจุดหมายต่อในเส้นทางนี้',
    [Language.ZH]: '继续探索这条旅行线',
  };

  const continueBody: LocalizedText = {
    [Language.JA]: '地域一覧に戻ると、他のエリアやスポットも同じ流れで比較できます。',
    [Language.EN]: 'Return to the region collection to compare more atmospheres and destinations with the same flow.',
    [Language.TH]: 'กลับไปยังหน้ารวมภูมิภาคเพื่อเปรียบเทียบบรรยากาศและจุดหมายอื่น ๆ ต่อได้ในรูปแบบเดียวกัน',
    [Language.ZH]: '回到地区总览后，你可以用同样的节奏继续比较更多地区与目的地。',
  };

  const continueButton: LocalizedText = {
    [Language.JA]: '地域一覧へ',
    [Language.EN]: 'Return to Regions',
    [Language.TH]: 'กลับไปดูภูมิภาค',
    [Language.ZH]: '返回地区页',
  };

  const sectionTitles = {
    history: {
      [Language.JA]: '歴史',
      [Language.EN]: 'History',
      [Language.TH]: 'ประวัติศาสตร์',
      [Language.ZH]: '历史',
    },
    culture_festivals: {
      [Language.JA]: '文化と祭り',
      [Language.EN]: 'Culture & Festivals',
      [Language.TH]: 'วัฒนธรรมและเทศกาล',
      [Language.ZH]: '文化与庆典',
    },
    things_to_do: {
      [Language.JA]: '体験できること',
      [Language.EN]: 'Things To Do',
      [Language.TH]: 'กิจกรรมที่น่าสนใจ',
      [Language.ZH]: '推荐体验',
    },
    local_cuisine: {
      [Language.JA]: '郷土料理',
      [Language.EN]: 'Local Cuisine',
      [Language.TH]: 'อาหารท้องถิ่น',
      [Language.ZH]: '当地美食',
    },
    access: {
      [Language.JA]: 'アクセス',
      [Language.EN]: 'Access',
      [Language.TH]: 'การเดินทาง',
      [Language.ZH]: '交通方式',
    },
  } as const;

  const detailSections = [
    {
      id: 'history',
      title: sectionTitles.history,
      content: place.history?.[currentLanguage],
    },
    {
      id: 'culture-festivals',
      title: sectionTitles.culture_festivals,
      content: place.culture_festivals?.[currentLanguage],
    },
    {
      id: 'things-to-do',
      title: sectionTitles.things_to_do,
      content: place.things_to_do?.[currentLanguage],
    },
    {
      id: 'local-cuisine',
      title: sectionTitles.local_cuisine,
      content: place.local_cuisine?.[currentLanguage],
    },
    {
      id: 'access',
      title: sectionTitles.access,
      content: place.access?.[currentLanguage],
    },
  ].filter((section) => Boolean(section.content));

  React.useEffect(() => {
    const siteBaseTitle: LocalizedText = {
      [Language.JA]: '桜の道しるべ',
      [Language.EN]: 'Sakura Trails',
      [Language.TH]: 'เส้นทางซากุระ',
      [Language.ZH]: '樱花之道',
    };

    document.title = `${place.name[currentLanguage]} | ${region.name[currentLanguage]} - ${siteBaseTitle[currentLanguage]}`;
  }, [place, region, currentLanguage]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="detail-shell">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => onNavigate('#/')} className="secondary-cta">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
            <path
              d="M19 12H5m8-6-6 6 6 6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {backButtonText[currentLanguage]}
        </button>

        <span className={`detail-chip ${bodyFont}`}>
          {regionLabelText[currentLanguage]}: {region.name[currentLanguage]}
        </span>

        <span className={`detail-chip ${bodyFont}`}>
          {detailSections.length} {sectionCountTitle[currentLanguage]}
        </span>
      </div>

      <section className="detail-hero mt-6">
        <div className="grid lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <div className="detail-hero__media">
            <img src={place.image} alt={place.name[currentLanguage]} />

            <div className="absolute inset-x-0 bottom-0 z-[2] p-6 sm:p-8">
              <p className={`text-xs font-semibold uppercase tracking-[0.28em] text-white/60 ${bodyFont}`}>
                {regionLabelText[currentLanguage]} · {region.name[currentLanguage]}
              </p>
              <h1 className={`mt-3 text-4xl text-white sm:text-5xl lg:text-6xl ${titleFontFamily}`}>
                {place.name[currentLanguage]}
              </h1>
            </div>
          </div>

          <div className="detail-hero__content flex flex-col gap-6">
            <div className="space-y-4">
              <span className="section-label">{overviewTitle[currentLanguage]}</span>
              <p className={`text-base leading-8 text-sakura-text-light sm:text-lg ${bodyFont}`}>
                {place.description[currentLanguage]}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <article className="mini-panel">
                <p className={`text-xs font-semibold uppercase tracking-[0.24em] text-sakura-deep-pink ${bodyFont}`}>
                  {regionStoryTitle[currentLanguage]}
                </p>
                <p className={`mt-3 text-sm leading-7 text-sakura-text-light ${bodyFont}`}>
                  {region.description[currentLanguage]}
                </p>
              </article>

              <article className="mini-panel">
                <p className={`text-xs font-semibold uppercase tracking-[0.24em] text-sakura-deep-pink ${bodyFont}`}>
                  {sectionCountTitle[currentLanguage]}
                </p>
                <p className={`mt-3 text-3xl text-sakura-text ${titleFontFamily}`}>{detailSections.length}</p>
                <p className={`mt-2 text-sm leading-7 text-sakura-text-light ${bodyFont}`}>
                  {quickNavigationTitle[currentLanguage]}
                </p>
              </article>
            </div>

            {detailSections.length > 0 && (
              <div className="space-y-3">
                <p className={`text-xs font-semibold uppercase tracking-[0.24em] text-sakura-deep-pink ${bodyFont}`}>
                  {quickNavigationTitle[currentLanguage]}
                </p>
                <div className="detail-chip-row">
                  {detailSections.map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => scrollToSection(section.id)}
                      className={`detail-chip transition-transform duration-300 hover:-translate-y-0.5 ${bodyFont}`}
                    >
                      {section.title[currentLanguage]}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {detailSections.length > 0 && (
        <section className="mt-8 grid gap-5 lg:grid-cols-2">
          {detailSections.map((section, index) => (
            <article
              id={section.id}
              key={section.id}
              className="detail-panel reveal-on-scroll scroll-mt-32"
            >
              <span className="detail-panel__index">{String(index + 1).padStart(2, '0')}</span>
              <h2 className={`mt-3 text-2xl text-sakura-text sm:text-3xl ${titleFontFamily}`}>
                {section.title[currentLanguage]}
              </h2>
              <p className={`mt-4 ${bodyFont}`}>{section.content}</p>
            </article>
          ))}
        </section>
      )}

      <section className="mt-8">
        <div className="surface-panel rounded-[1.8rem] p-6 sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className={`text-2xl text-sakura-text sm:text-3xl ${titleFontFamily}`}>
                {continueTitle[currentLanguage]}
              </p>
              <p className={`mt-3 max-w-2xl text-sm leading-7 text-sakura-text-light sm:text-base ${bodyFont}`}>
                {continueBody[currentLanguage]}
              </p>
            </div>

            <button type="button" onClick={() => onNavigate('#/')} className="primary-cta">
              {continueButton[currentLanguage]}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacePage;
