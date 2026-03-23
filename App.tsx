import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import RegionCard from './components/RegionCard';
import ScrollToTopButton from './components/ScrollToTopButton';
import PlacePage from './components/PlacePage';
import { Language, LocalizedText } from './types';
import { REGIONS_DATA } from './constants';

const useAsianFont = (currentLanguage: Language) => {
  return [Language.JA, Language.TH, Language.ZH].includes(currentLanguage);
};

const siteBaseTitle: LocalizedText = {
  [Language.JA]: '桜の道しるべ',
  [Language.EN]: 'Sakura Trails',
  [Language.TH]: 'เส้นทางซากุระ',
  [Language.ZH]: '樱花之道',
};

const pageEyebrow: LocalizedText = {
  [Language.JA]: '季節でめぐる、やさしい日本旅',
  [Language.EN]: 'A softer way to explore Japan',
  [Language.TH]: 'สำรวจญี่ปุ่นอย่างละมุนในแต่ละฤดู',
  [Language.ZH]: '用更柔和的方式探索日本',
};

const pageTitle: LocalizedText = {
  [Language.JA]: '日本の地域を発見する',
  [Language.EN]: 'Discover the Regions of Japan',
  [Language.TH]: 'ค้นพบภูมิภาคต่างๆ ของญี่ปุ่น',
  [Language.ZH]: '探索日本各地区',
};

const pageSubtitle: LocalizedText = {
  [Language.JA]: '北から南まで、地域ごとの空気感や見どころを比較しながら、自分らしい旅の流れを見つけましょう。',
  [Language.EN]: 'Move from north to south, compare each region’s atmosphere, and build a trip around the places that feel right for you.',
  [Language.TH]: 'ไล่ตั้งแต่เหนือจรดใต้ เปรียบเทียบบรรยากาศของแต่ละภูมิภาค แล้วจัดทริปในแบบที่เหมาะกับคุณที่สุด',
  [Language.ZH]: '从北到南比较各地区的氛围与亮点，找到最适合自己的旅行节奏。',
};

const exploreButtonText: LocalizedText = {
  [Language.JA]: '地域を見てみる',
  [Language.EN]: 'Explore Regions',
  [Language.TH]: 'ดูภูมิภาค',
  [Language.ZH]: '查看地区',
};

const heroAvailabilityText: LocalizedText = {
  [Language.JA]: '4言語で切り替え可能',
  [Language.EN]: 'Switch across 4 languages',
  [Language.TH]: 'สลับได้ 4 ภาษา',
  [Language.ZH]: '支持 4 种语言切换',
};

const heroNoteTitle: LocalizedText = {
  [Language.JA]: '気分と季節から、旅先を選びやすく。',
  [Language.EN]: 'Choose destinations by mood, season, and pace.',
  [Language.TH]: 'เลือกจุดหมายจากอารมณ์ ฤดูกาล และจังหวะการเที่ยวได้ง่ายขึ้น',
  [Language.ZH]: '按心情、季节与节奏来挑选目的地。',
};

const heroNoteBody: LocalizedText = {
  [Language.JA]: '各地域を開くと、厳選したスポットと詳しい旅メモがすぐに見つかります。雰囲気の比較もしやすく、旅の下調べが軽くなります。',
  [Language.EN]: 'Open any region to reveal curated stops and deeper travel notes. It becomes much easier to compare atmospheres before committing to an itinerary.',
  [Language.TH]: 'เปิดแต่ละภูมิภาคเพื่อดูจุดแนะนำและข้อมูลเชิงลึกได้ทันที ทำให้เปรียบเทียบบรรยากาศและวางแผนทริปได้ง่ายขึ้น',
  [Language.ZH]: '展开任意地区即可查看精选地点与更深入的旅行笔记，先比较氛围，再决定路线会轻松得多。',
};

const heroCollectionTitle: LocalizedText = {
  [Language.JA]: '見つけやすい構成',
  [Language.EN]: 'Clearer structure',
  [Language.TH]: 'โครงสร้างที่ดูง่ายขึ้น',
  [Language.ZH]: '更清晰的结构',
};

const heroCollectionBody: LocalizedText = {
  [Language.JA]: '地域、スポット、詳細ページの順で自然に深掘りできます。',
  [Language.EN]: 'Move naturally from regions to highlights to full detail pages.',
  [Language.TH]: 'ไล่ดูจากภูมิภาค ไปยังจุดเด่น และเข้าสู่หน้ารายละเอียดได้อย่างเป็นธรรมชาติ',
  [Language.ZH]: '可以自然地从地区进入亮点，再深入到完整详情页。',
};

const heroFlowTitle: LocalizedText = {
  [Language.JA]: '落ち着いた閲覧体験',
  [Language.EN]: 'Calmer browsing flow',
  [Language.TH]: 'จังหวะการใช้งานที่นิ่งและสบายขึ้น',
  [Language.ZH]: '更舒缓的浏览节奏',
};

const heroFlowBody: LocalizedText = {
  [Language.JA]: '情報の優先順位を整理し、色・余白・視線誘導を統一しました。',
  [Language.EN]: 'Spacing, color, and hierarchy are aligned so the interface feels lighter and easier to scan.',
  [Language.TH]: 'จัดลำดับข้อมูล สี ระยะห่าง และทิศทางสายตาใหม่ ให้สแกนข้อมูลได้เร็วและสบายขึ้น',
  [Language.ZH]: '重新整理了信息优先级、颜色、留白与视线引导，让页面更轻、更好读。',
};

const regionsSectionEyebrow: LocalizedText = {
  [Language.JA]: '地域ガイド',
  [Language.EN]: 'Region Collection',
  [Language.TH]: 'คอลเลกชันภูมิภาค',
  [Language.ZH]: '地区导览',
};

const regionsSectionTitle: LocalizedText = {
  [Language.JA]: '次の旅の空気感を選ぶ',
  [Language.EN]: 'Choose the atmosphere for your next trip',
  [Language.TH]: 'เลือกบรรยากาศของทริปครั้งถัดไป',
  [Language.ZH]: '选择下一段旅程的氛围',
};

const regionsSectionSubtitle: LocalizedText = {
  [Language.JA]: '各地域の物語と代表的なスポットをまとめて見比べられるようにしました。',
  [Language.EN]: 'Each region now presents a stronger visual story, clearer summary, and faster access to the places inside it.',
  [Language.TH]: 'แต่ละภูมิภาคถูกจัดใหม่ให้เห็นคาแรกเตอร์ สรุปเนื้อหา และเข้าถึงสถานที่ด้านในได้ชัดเจนขึ้น',
  [Language.ZH]: '每个地区都以更完整的视觉故事、更清晰的摘要与更快的入口来呈现。',
};

const guideSteps = [
  {
    title: {
      [Language.JA]: 'まずは地域から選ぶ',
      [Language.EN]: 'Start with a region',
      [Language.TH]: 'เริ่มจากเลือกภูมิภาค',
      [Language.ZH]: '先选地区',
    },
    body: {
      [Language.JA]: '大まかな雰囲気や季節感を見ながら、行きたいエリアを絞り込みます。',
      [Language.EN]: 'Scan the bigger mood and seasonality first, then narrow your shortlist.',
      [Language.TH]: 'ดูภาพรวมของบรรยากาศและฤดูกาลก่อน แล้วค่อยคัดภูมิภาคที่อยากไป',
      [Language.ZH]: '先看整体氛围和季节感，再缩小想去的地区范围。',
    },
  },
  {
    title: {
      [Language.JA]: '注目スポットを開く',
      [Language.EN]: 'Open curated highlights',
      [Language.TH]: 'เปิดดูจุดเด่นที่คัดไว้',
      [Language.ZH]: '展开精选亮点',
    },
    body: {
      [Language.JA]: '地域カードからスポットを一覧で比較し、興味のある場所へすぐ進めます。',
      [Language.EN]: 'Compare destinations inside the region card before diving into any one place.',
      [Language.TH]: 'เปรียบเทียบสถานที่ภายในภูมิภาคเดียวกันได้ทันที ก่อนเลือกไปดูรายละเอียดต่อ',
      [Language.ZH]: '先在地区卡片里比较各个地点，再决定要深入查看哪一个。',
    },
  },
  {
    title: {
      [Language.JA]: '詳しい旅メモを読む',
      [Language.EN]: 'Read deeper travel notes',
      [Language.TH]: 'อ่านโน้ตท่องเที่ยวเชิงลึก',
      [Language.ZH]: '阅读更深入的旅行笔记',
    },
    body: {
      [Language.JA]: '歴史、文化、グルメ、アクセスまで、詳細ページで流れよく把握できます。',
      [Language.EN]: 'History, culture, cuisine, and access are organized into sections that are easier to use.',
      [Language.TH]: 'ประวัติศาสตร์ วัฒนธรรม อาหาร และการเดินทาง ถูกจัดเป็นส่วน ๆ ที่อ่านและใช้งานง่ายขึ้น',
      [Language.ZH]: '历史、文化、美食与交通都被整理成更容易阅读的分区。',
    },
  },
];

const statLabels = {
  regions: {
    [Language.JA]: '地域',
    [Language.EN]: 'Regions',
    [Language.TH]: 'ภูมิภาค',
    [Language.ZH]: '地区',
  },
  places: {
    [Language.JA]: 'スポット',
    [Language.EN]: 'Places',
    [Language.TH]: 'สถานที่',
    [Language.ZH]: '地点',
  },
  languages: {
    [Language.JA]: '言語',
    [Language.EN]: 'Languages',
    [Language.TH]: 'ภาษา',
    [Language.ZH]: '语言',
  },
};

const footerText: LocalizedText = {
  [Language.JA]: '心地よく旅先を探せる、静かなガイドとして整えました。',
  [Language.EN]: 'Refined into a calmer guide for exploring Japan one region at a time.',
  [Language.TH]: 'ปรับให้เป็นคู่มือที่นิ่ง สบาย และค้นหาที่เที่ยวในญี่ปุ่นได้ง่ายขึ้น',
  [Language.ZH]: '把它整理成了一个更平静、更容易探索日本各地区的旅行指南。',
};

const footerMetaText: LocalizedText = {
  [Language.JA]: 'ゆったりと旅を計画できるよう、視覚的な流れを丁寧に整えました。',
  [Language.EN]: 'Crafted with care for slower, more visual travel planning.',
  [Language.TH]: 'ออกแบบอย่างพิถีพิถัน เพื่อให้การวางแผนทริปเป็นภาพที่ดูง่ายและสบายขึ้น',
  [Language.ZH]: '为了让旅行规划更从容、更具视觉层次而细致整理。',
};

const ScenicBackdrop: React.FC = () => {
  const petals = [
    { left: '12%', top: '8%', delay: '-2s', duration: '15s', scale: 1 },
    { left: '28%', top: '14%', delay: '-7s', duration: '18s', scale: 0.9 },
    { left: '66%', top: '6%', delay: '-5s', duration: '16s', scale: 1.1 },
    { left: '82%', top: '18%', delay: '-10s', duration: '19s', scale: 0.85 },
    { left: '20%', top: '42%', delay: '-12s', duration: '17s', scale: 0.95 },
    { left: '74%', top: '44%', delay: '-4s', duration: '20s', scale: 1 },
  ];

  return (
    <div className="app-backdrop" aria-hidden="true">
      <div className="backdrop-layer backdrop-sun" />
      <div className="backdrop-layer backdrop-mist-a" />
      <div className="backdrop-layer backdrop-mist-b" />
      <div className="backdrop-layer backdrop-wave" />
      {petals.map((petal, index) => {
        const style = {
          left: petal.left,
          top: petal.top,
          animationDelay: petal.delay,
          transform: `scale(${petal.scale})`,
          '--petal-duration': petal.duration,
        } as React.CSSProperties & { '--petal-duration': string };

        return <span key={`${petal.left}-${index}`} className="backdrop-petal" style={style} />;
      })}
    </div>
  );
};

const App: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(Language.JA);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  const isAsian = useAsianFont(currentLanguage);
  const titleFontFamily = isAsian ? 'font-jp font-bold' : 'font-display font-semibold';
  const bodyFont = isAsian ? 'font-jp' : 'font-sans';
  const totalPlaces = REGIONS_DATA.reduce((count, region) => count + region.places.length, 0);

  const handleLanguageChange = useCallback((lang: Language) => {
    setCurrentLanguage(lang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    if (window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  const handleExploreAction = useCallback(() => {
    if (currentPath.startsWith('#/place/')) {
      navigate('#/');
      return;
    }

    document.getElementById('regions')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentPath, navigate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
    );

    const timerId = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.reveal-on-scroll').forEach((node) => {
        if (node.getBoundingClientRect().top < window.innerHeight * 0.88) {
          node.classList.add('fade-in-visible');
          return;
        }

        observer.observe(node);
      });
    }, 60);

    return () => {
      window.clearTimeout(timerId);
      observer.disconnect();
    };
  }, [currentPath, currentLanguage]);

  useEffect(() => {
    if (currentPath.startsWith('#/place/')) {
      return;
    }

    document.title = `${siteBaseTitle[currentLanguage]} | ${pageTitle[currentLanguage]}`;
  }, [currentLanguage, currentPath]);

  const renderHome = () => {
    const stats = [
      { value: REGIONS_DATA.length, label: statLabels.regions[currentLanguage] },
      { value: totalPlaces, label: statLabels.places[currentLanguage] },
      { value: 4, label: statLabels.languages[currentLanguage] },
    ];

    return (
      <>
        <section className="hero-shell">
          <div className="hero-card">
            <div className="hero-grid">
              <div className="space-y-8">
                <div className="space-y-5">
                  <span className="section-label">{pageEyebrow[currentLanguage]}</span>
                  <h1
                    className={`max-w-4xl text-4xl leading-none text-sakura-text sm:text-5xl lg:text-7xl ${titleFontFamily}`}
                    aria-live="polite"
                  >
                    {pageTitle[currentLanguage]}
                  </h1>
                  <p
                    className={`max-w-2xl text-base leading-8 text-sakura-text-light sm:text-lg lg:text-xl ${bodyFont}`}
                    aria-live="polite"
                  >
                    {pageSubtitle[currentLanguage]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button type="button" onClick={handleExploreAction} className="primary-cta">
                    {exploreButtonText[currentLanguage]}
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="ghost-chip">{heroAvailabilityText[currentLanguage]}</div>
                </div>

                <div className="hero-stats">
                  {stats.map((stat) => (
                    <article key={stat.label} className="hero-stat-card">
                      <p className={`text-3xl font-bold text-sakura-text sm:text-4xl ${titleFontFamily}`}>{stat.value}</p>
                      <p className={`mt-2 text-sm font-medium tracking-[0.2em] text-sakura-text-light uppercase ${bodyFont}`}>
                        {stat.label}
                      </p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <article className="hero-note-card">
                  <p className={`text-xs font-semibold uppercase tracking-[0.3em] text-white/60 ${bodyFont}`}>
                    Sakura Trails
                  </p>
                  <h2 className={`mt-4 text-3xl leading-tight text-white sm:text-4xl ${titleFontFamily}`}>
                    {heroNoteTitle[currentLanguage]}
                  </h2>
                  <p className={`mt-4 text-sm leading-7 text-white/78 sm:text-base ${bodyFont}`}>
                    {heroNoteBody[currentLanguage]}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[1.3rem] border border-white/12 bg-white/6 p-4">
                      <p className={`text-xs font-semibold uppercase tracking-[0.25em] text-white/55 ${bodyFont}`}>
                        {heroCollectionTitle[currentLanguage]}
                      </p>
                      <p className={`mt-2 text-sm leading-7 text-white/78 ${bodyFont}`}>
                        {heroCollectionBody[currentLanguage]}
                      </p>
                    </div>
                    <div className="rounded-[1.3rem] border border-white/12 bg-white/6 p-4">
                      <p className={`text-xs font-semibold uppercase tracking-[0.25em] text-white/55 ${bodyFont}`}>
                        {heroFlowTitle[currentLanguage]}
                      </p>
                      <p className={`mt-2 text-sm leading-7 text-white/78 ${bodyFont}`}>
                        {heroFlowBody[currentLanguage]}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell mt-8 md:mt-12">
          <div className="guide-grid">
            {guideSteps.map((step, index) => (
              <article key={step.title[currentLanguage]} className="guide-card reveal-on-scroll">
                <span className="guide-card__index">{String(index + 1).padStart(2, '0')}</span>
                <h2 className={`mt-4 text-2xl text-sakura-text ${titleFontFamily}`}>{step.title[currentLanguage]}</h2>
                <p className={`mt-3 text-sm leading-7 text-sakura-text-light sm:text-base ${bodyFont}`}>
                  {step.body[currentLanguage]}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="regions" className="section-shell mt-12 scroll-mt-32 md:mt-16">
          <div className="section-heading">
            <div className="space-y-4">
              <span className="section-label">{regionsSectionEyebrow[currentLanguage]}</span>
              <h2 className={`text-3xl text-sakura-text sm:text-4xl lg:text-5xl ${titleFontFamily}`}>
                {regionsSectionTitle[currentLanguage]}
              </h2>
            </div>
            <p className={`max-w-2xl text-sm leading-7 text-sakura-text-light sm:text-base ${bodyFont}`}>
              {regionsSectionSubtitle[currentLanguage]}
            </p>
          </div>

          <div className="space-y-8 md:space-y-10">
            {REGIONS_DATA.map((region, index) => (
              <RegionCard
                key={region.id}
                index={index}
                region={region}
                currentLanguage={currentLanguage}
                onNavigate={navigate}
                className="reveal-on-scroll"
              />
            ))}
          </div>
        </section>
      </>
    );
  };

  const renderContent = () => {
    if (currentPath.startsWith('#/place/')) {
      const [, , regionId, placeId] = currentPath.split('/');
      const region = REGIONS_DATA.find((item) => item.id === regionId);
      const place = region?.places.find((item) => item.id === placeId);

      if (place && region) {
        return (
          <PlacePage
            place={place}
            region={region}
            currentLanguage={currentLanguage}
            onNavigate={navigate}
          />
        );
      }
    }

    return renderHome();
  };

  return (
    <div className={`app-shell min-h-screen ${bodyFont}`}>
      <ScenicBackdrop />
      <Header
        currentLanguage={currentLanguage}
        onLanguageChange={handleLanguageChange}
        onTitleClick={() => navigate('#/')}
        onExploreClick={handleExploreAction}
        isDetailPage={currentPath.startsWith('#/place/')}
      />

      <main className="relative z-10 px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pt-32">{renderContent()}</main>

      <footer className="relative z-10 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="footer-shell py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={`text-2xl text-sakura-text ${titleFontFamily}`}>{siteBaseTitle[currentLanguage]}</p>
              <p className={`mt-2 max-w-2xl text-sm leading-7 text-sakura-text-light ${bodyFont}`}>
                {footerText[currentLanguage]}
              </p>
            </div>
            <p className={`text-sm text-sakura-text-light ${bodyFont}`}>{footerMetaText[currentLanguage]}</p>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
    </div>
  );
};

export default App;
