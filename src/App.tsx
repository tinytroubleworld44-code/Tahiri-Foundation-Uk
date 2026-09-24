import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IntroductionSection } from './components/IntroductionSection';
import { SalanaUrsAnnouncementSection } from './components/SalanaUrsAnnouncementSection';
import { HeritageSection } from './components/HeritageSection';
import { HuzoorSohnaSaeenFeatureSection } from './components/HuzoorSohnaSaeenFeatureSection';
import { ThreeCorePrinciplesSection } from './components/ThreeCorePrinciplesSection';
import { ShajraFeatureSection } from './components/ShajraFeatureSection';
import { SplendidAbodeFeatureSection } from './components/SplendidAbodeFeatureSection';
import { FeaturedTeachingsSection } from './components/FeaturedTeachingsSection';
import { FAQSection } from './components/FAQSection';
import { SpiritualReflectionSection } from './components/SpiritualReflectionSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ShajraPage } from './components/ShajraPage';
import { SplendidAbodePage } from './components/SplendidAbodePage';
import { EventsPage } from './components/EventsPage';
import { SajjanSaeenPage } from './components/SajjanSaeenPage';
import { ZikrEQalbiPage } from './components/ZikrEQalbiPage';
import { NotFoundPage } from './components/NotFoundPage';
import { SEOHead } from './components/SEOHead';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ARTICLES } from './data/articles';
import { TAHIRI_EVENTS } from './data/events';

type AppPage =
  | 'home'
  | 'shajra'
  | 'abode'
  | 'events'
  | 'sajjan-saeen'
  | 'zikr-e-qalbi'
  | 'not-found';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // Sync state with URL hash & pathname for browser history & direct URL support
  const parseHash = useCallback(() => {
    // Normalizes hash such as '#/events', '#events', '#/events/', '#/shajra-shareef', '#/', '', etc.
    let hash = window.location.hash || '';
    // Strip leading '#' and any consecutive '/' or '!'
    let rawPath = hash.replace(/^#[/!]*/, '').trim();

    // Check pathname when hash is empty (for direct URL loads and Netlify SPA rewrites)
    if (!rawPath && window.location.pathname && window.location.pathname !== '/') {
      rawPath = window.location.pathname.replace(/^\/+/, '').trim();
    }

    // Split out query string or extra fragments if any
    const [path] = rawPath.split(/[?#]/);
    // Trim trailing slashes and normalize to lowercase
    const clean = (path || '').replace(/\/+$/, '').trim().toLowerCase();

    if (!clean || clean === 'home') {
      setCurrentPage('home');
      setSelectedArticleId(null);
      setSelectedEventId(null);
      return;
    }

    if (clean === 'shajra' || clean === 'shajra-shareef' || clean === 'shajrashareef') {
      setCurrentPage('shajra');
      setSelectedArticleId(null);
      setSelectedEventId(null);
      return;
    }

    if (
      clean === 'abode' ||
      clean === 'splendid-abode-of-the-friend' ||
      clean === 'splendid-abode' ||
      clean === 'jalwa-gah-e-dost'
    ) {
      setCurrentPage('abode');
      setSelectedArticleId(null);
      setSelectedEventId(null);
      return;
    }

    if (clean.startsWith('article/')) {
      const artId = clean.slice('article/'.length).trim();
      setCurrentPage('abode');
      setSelectedArticleId(artId || null);
      setSelectedEventId(null);
      return;
    }

    if (clean === 'events' || clean === 'events-and-programs' || clean === 'events-programs') {
      setCurrentPage('events');
      setSelectedEventId(null);
      setSelectedArticleId(null);
      return;
    }

    if (
      clean === 'monthly-spiritual-dars' ||
      clean === 'monthly-dars' ||
      clean === 'monthly-spiritual-dars-uk'
    ) {
      setCurrentPage('events');
      setSelectedEventId('monthly-spiritual-dars-uk');
      setSelectedArticleId(null);
      return;
    }

    if (clean.startsWith('events/')) {
      const rawEId = clean.slice('events/'.length).trim();
      if (!rawEId) {
        setCurrentPage('events');
        setSelectedEventId(null);
      } else {
        const resolvedId =
          rawEId === 'monthly-spiritual-dars' || rawEId === 'monthly-dars'
            ? 'monthly-spiritual-dars-uk'
            : rawEId;
        setCurrentPage('events');
        setSelectedEventId(resolvedId);
      }
      setSelectedArticleId(null);
      return;
    }

    if (clean === 'sajjan-saeen' || clean === 'sajjansaeen') {
      setCurrentPage('sajjan-saeen');
      setSelectedArticleId(null);
      setSelectedEventId(null);
      return;
    }

    if (clean === 'zikr-e-qalbi' || clean === 'zikreqalbi' || clean === 'zikr') {
      setCurrentPage('zikr-e-qalbi');
      setSelectedArticleId(null);
      setSelectedEventId(null);
      return;
    }

    // Unrecognized route
    setCurrentPage('not-found');
    setSelectedArticleId(null);
    setSelectedEventId(null);
  }, []);

  useEffect(() => {
    // Initial mount route detection
    parseHash();

    // Listen for hashchange and popstate (browser back/forward buttons, direct navigation)
    window.addEventListener('hashchange', parseHash);
    window.addEventListener('popstate', parseHash);
    return () => {
      window.removeEventListener('hashchange', parseHash);
      window.removeEventListener('popstate', parseHash);
    };
  }, [parseHash]);

  const navigateTo = useCallback((
    page: AppPage,
    articleId?: string,
    eventId?: string
  ) => {
    let targetHash = '/';
    if (articleId) {
      targetHash = `/article/${articleId}`;
    } else if (eventId) {
      targetHash = `/events/${eventId}`;
    } else if (page === 'shajra') {
      targetHash = '/shajra-shareef';
    } else if (page === 'abode') {
      targetHash = '/splendid-abode-of-the-friend';
    } else if (page === 'events') {
      targetHash = '/events';
    } else if (page === 'sajjan-saeen') {
      targetHash = '/sajjan-saeen';
    } else if (page === 'zikr-e-qalbi') {
      targetHash = '/zikr-e-qalbi';
    } else if (page === 'home') {
      targetHash = '/';
    }

    // Set state immediately for immediate re-render
    setCurrentPage(page);
    setSelectedArticleId(articleId || null);
    setSelectedEventId(eventId || null);

    // Update URL hash cleanly to '#/<route>' format
    const expectedHash = `#${targetHash}`;
    if (window.location.hash !== expectedHash) {
      window.location.hash = expectedHash;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Compute dynamic SEO attributes
  const currentEvent = selectedEventId
    ? TAHIRI_EVENTS.find(
        (e) =>
          e.id === selectedEventId ||
          (selectedEventId === 'monthly-spiritual-dars' && e.id === 'monthly-spiritual-dars-uk')
      )
    : null;
  const currentArticle = selectedArticleId
    ? ARTICLES.find((a) => a.id === selectedArticleId)
    : null;

  let seoTitle = 'Tahiri Foundation UK | Sajjan Saeen, Zikr-e-Qalbi & Spiritual Heritage';
  let seoDescription =
    'Explore Tahiri Foundation UK, Dargah Allahabad Sharif, Shajra Shareef, Zikr-e-Qalbi, spiritual teachings and the heritage of Sajjan Saeen.';
  let seoCanonical = 'https://tahirifoundation.uk/';
  let seoOgType: 'website' | 'article' = 'website';
  let seoImage = 'https://tahirifoundation.uk/assets/dargah-allahabad-sharif-authentic.jpg';
  let seoNoIndex = false;
  let seoStructuredData: object[] = [];

  if (currentPage === 'home') {
    seoTitle = 'Tahiri Foundation UK | Sajjan Saeen, Zikr-e-Qalbi & Spiritual Heritage';
    seoDescription =
      'Explore Tahiri Foundation UK, Dargah Allahabad Sharif, Shajra Shareef, Zikr-e-Qalbi, spiritual teachings and the heritage of Sajjan Saeen.';
    seoCanonical = 'https://tahirifoundation.uk/';
    seoStructuredData = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Tahiri Foundation UK',
        url: 'https://tahirifoundation.uk/',
        logo: 'https://tahirifoundation.uk/assets/tahiri_logo_emblem.png',
        image: 'https://tahirifoundation.uk/assets/dargah-allahabad-sharif-authentic.jpg',
        description:
          'Islamic and Sufi spiritual educational foundation connected with Dargah Allahabad Sharif, Sindh, Pakistan.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Tahiri Foundation UK',
        url: 'https://tahirifoundation.uk/',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://tahirifoundation.uk/#abode',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Tahiri Foundation UK?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tahiri Foundation UK is an Islamic spiritual and educational organization dedicated to preserving and disseminating the teachings of the Naqshbandi Mujaddidi Tahiri order under the guidance of Dargah Allahabad Sharif, Sindh, Pakistan.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the spiritual connection with Dargah Allahabad Sharif?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dargah Allahabad Sharif in Kandiaro, Sindh, Pakistan is the central spiritual sanctuary and resting place of Huzoor Sohna Saeen (R.A.), carrying an unbroken chain of spiritual transmission under the guidance of Sajjan Saeen.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is Zikr-e-Qalbi in the Naqshbandi Tahiri order?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Zikr-e-Qalbi is the silent remembrance of Allah within the spiritual heart, practiced without vocalization, synchronizing Divine consciousness with the natural pulse and breath.',
            },
          },
          {
            '@type': 'Question',
            name: 'When is the Annual Urs Mubarak celebrated?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Annual Urs Mubarak of Huzoor Sohna Saeen is observed from 27–29 November at Dargah Allahabad Sharif, Sindh, Pakistan.',
            },
          },
        ],
      },
    ];
  } else if (currentPage === 'shajra') {
    seoTitle = 'Shajra Shareef — Blessed Spiritual Lineage | Tahiri Foundation UK';
    seoDescription =
      'Authentic chronological Shajra Shareef of the Naqshbandi Mujaddidi Tahiri order tracing unbroken from the Holy Prophet ﷺ to Dargah Allahabad Sharif, Sindh.';
    seoCanonical = 'https://tahirifoundation.uk/shajra-shareef';
    seoStructuredData = [
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tahirifoundation.uk/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Shajra Shareef',
            item: 'https://tahirifoundation.uk/shajra-shareef',
          },
        ],
      },
    ];
  } else if (currentPage === 'sajjan-saeen') {
    seoTitle = 'Sajjan Saeen — Spiritual Guide & Heritage | Tahiri Foundation UK';
    seoDescription =
      'Spiritual lineage, sacred teachings, and guidance of Sajjan Saeen at Dargah Allahabad Sharif, Sindh. Tahiri Foundation UK.';
    seoCanonical = 'https://tahirifoundation.uk/sajjan-saeen';
    seoImage = 'https://tahirifoundation.uk/assets/sajjan-saeen.jpg';
    seoStructuredData = [
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Sajjan Saeen',
        alternateName: [
          'Hazrat Khwaja Muhammad Tahir Bakhshi',
          'Khwaja Sajjan Saeen',
          'Hazrat Mahboob-e-Sajjani',
        ],
        description:
          'Spiritual guide and successor of the Naqshbandi Mujaddidi Tahiri Sufi order at Dargah Allahabad Sharif, Sindh, Pakistan.',
        image: 'https://tahirifoundation.uk/assets/sajjan-saeen.jpg',
        affiliation: {
          '@type': 'Organization',
          name: 'Tahiri Foundation UK',
          url: 'https://tahirifoundation.uk/',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tahirifoundation.uk/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Sajjan Saeen',
            item: 'https://tahirifoundation.uk/sajjan-saeen',
          },
        ],
      },
    ];
  } else if (currentPage === 'zikr-e-qalbi') {
    seoTitle = 'Zikr-e-Qalbi — Silent Heart Remembrance | Tahiri Foundation UK';
    seoDescription =
      'Authentic teachings and method of silent heart remembrance (Zikr-e-Qalbi) in the Naqshbandi Mujaddidi Tahiri spiritual tradition.';
    seoCanonical = 'https://tahirifoundation.uk/zikr-e-qalbi';
    seoOgType = 'article';
    seoStructuredData = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Zikr-e-Qalbi: The Method and Virtues of Silent Heart Remembrance',
        description:
          'An authentic exposition of silent Zikr (Zikr-e-Qalbi) as preserved and practiced in the Naqshbandi Mujaddidi Tahiri order.',
        author: { '@type': 'Organization', name: 'Tahiri Foundation UK' },
        publisher: {
          '@type': 'Organization',
          name: 'Tahiri Foundation UK',
          url: 'https://tahirifoundation.uk/',
        },
        mainEntityOfPage: 'https://tahirifoundation.uk/zikr-e-qalbi',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tahirifoundation.uk/' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Zikr-e-Qalbi',
            item: 'https://tahirifoundation.uk/zikr-e-qalbi',
          },
        ],
      },
    ];
  } else if (currentPage === 'events') {
    if (currentEvent) {
      seoTitle = `${currentEvent.title} — ${currentEvent.subtitle} | Tahiri Foundation UK`;
      seoDescription = `${currentEvent.title} at ${currentEvent.location}, ${currentEvent.city}. ${currentEvent.officialDescription.slice(0, 130)}...`;
      seoCanonical = `https://tahirifoundation.uk/events/${currentEvent.id}`;
      seoOgType = 'article';
      seoStructuredData = [
        {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: `${currentEvent.title} — ${currentEvent.subtitle}`,
          ...(currentEvent.startDate ? { startDate: currentEvent.startDate } : {}),
          ...(currentEvent.endDate ? { endDate: currentEvent.endDate } : {}),
          eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          location: {
            '@type': 'Place',
            name: currentEvent.location,
            address: {
              '@type': 'PostalAddress',
              addressLocality: currentEvent.city,
              addressCountry: currentEvent.country,
            },
          },
          organizer: {
            '@type': 'Organization',
            name: currentEvent.organizer,
            url: 'https://tahirifoundation.uk/',
          },
          description: currentEvent.officialDescription,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tahirifoundation.uk/' },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Events & Programs',
              item: 'https://tahirifoundation.uk/events',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: currentEvent.title,
              item: `https://tahirifoundation.uk/events/${currentEvent.id}`,
            },
          ],
        },
      ];
    } else {
      seoTitle = 'Events & Programs | Tahiri Foundation UK';
      seoDescription =
        'Official calendar of Islamic spiritual gatherings, Annual Urs Mubarak of Huzoor Sohna Saeen, and monthly Khatm Sharif assemblies.';
      seoCanonical = 'https://tahirifoundation.uk/events';
      seoStructuredData = [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tahirifoundation.uk/' },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Events & Programs',
              item: 'https://tahirifoundation.uk/events',
            },
          ],
        },
      ];
    }
  } else if (currentPage === 'abode') {
    if (currentArticle) {
      seoTitle = `${currentArticle.title} | The Splendid Abode of the Friend`;
      seoDescription = currentArticle.summary;
      seoCanonical = `https://tahirifoundation.uk/article/${currentArticle.id}`;
      seoOgType = 'article';
      seoStructuredData = [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: currentArticle.title,
          description: currentArticle.summary,
          articleSection: currentArticle.category,
          author: { '@type': 'Organization', name: 'Tahiri Foundation UK' },
          publisher: {
            '@type': 'Organization',
            name: 'Tahiri Foundation UK',
            url: 'https://tahirifoundation.uk/',
          },
          mainEntityOfPage: `https://tahirifoundation.uk/article/${currentArticle.id}`,
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tahirifoundation.uk/' },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'The Splendid Abode of the Friend',
              item: 'https://tahirifoundation.uk/splendid-abode-of-the-friend',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: currentArticle.title,
              item: `https://tahirifoundation.uk/article/${currentArticle.id}`,
            },
          ],
        },
      ];
    } else {
      seoTitle = 'The Splendid Abode of the Friend (جلوہ گاہِ دوست) | Tahiri Foundation UK';
      seoDescription =
        'Digital library of authentic Islamic discourses, Tazkiyah treatises, and spiritual knowledge connected with Dargah Allahabad Sharif.';
      seoCanonical = 'https://tahirifoundation.uk/splendid-abode-of-the-friend';
      seoStructuredData = [
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tahirifoundation.uk/' },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'The Splendid Abode of the Friend',
              item: 'https://tahirifoundation.uk/splendid-abode-of-the-friend',
            },
          ],
        },
      ];
    }
  } else if (currentPage === 'not-found') {
    seoTitle = 'Page Not Found | Tahiri Foundation UK';
    seoDescription = 'The requested page could not be found. Explore Tahiri Foundation UK resources.';
    seoNoIndex = true;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111827]">
      {/* Dynamic SEO Meta & Structured Data Injection */}
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonicalPath={seoCanonical}
        ogType={seoOgType}
        ogImage={seoImage}
        noindex={seoNoIndex}
        structuredData={seoStructuredData}
      />

      {/* Sticky Header */}
      <Header activePage={currentPage} onNavigate={(p) => navigateTo(p)} />

      {/* Main Content Area */}
      <main className="flex-grow pt-[72px] sm:pt-[80px] lg:pt-[84px]">
        <ErrorBoundary>
          {currentPage === 'home' && (
            <>
              <HeroSection onNavigate={(p) => navigateTo(p)} />
              <IntroductionSection />
              <SalanaUrsAnnouncementSection
                onNavigateToEvents={(eId) => navigateTo('events', undefined, eId)}
              />
              <HeritageSection />
              <HuzoorSohnaSaeenFeatureSection onNavigate={(p) => navigateTo(p)} />
              <ThreeCorePrinciplesSection onNavigate={(p) => navigateTo(p)} />
              <ShajraFeatureSection onNavigate={(p) => navigateTo(p)} />
              <SplendidAbodeFeatureSection onNavigate={(p, aId) => navigateTo(p, aId)} />
              <FeaturedTeachingsSection onNavigate={(p, aId) => navigateTo(p, aId)} />
              <FAQSection onNavigate={(p) => navigateTo(p)} />
              <SpiritualReflectionSection />
              <FinalCTASection onNavigate={(p) => navigateTo(p)} />
            </>
          )}

          {currentPage === 'shajra' && <ShajraPage onNavigate={(p, aId, eId) => navigateTo(p, aId, eId)} />}

          {currentPage === 'abode' && (
            <SplendidAbodePage
              selectedArticleId={selectedArticleId}
              onSelectArticle={(artId) => {
                if (artId) {
                  navigateTo('abode', artId);
                } else {
                  navigateTo('abode');
                }
              }}
              onNavigate={(p, aId, eId) => navigateTo(p, aId, eId)}
            />
          )}

          {currentPage === 'events' && (
            <EventsPage
              selectedEventId={selectedEventId}
              onSelectEvent={(eId) => {
                if (eId) {
                  navigateTo('events', undefined, eId);
                } else {
                  navigateTo('events');
                }
              }}
              onNavigate={(p, aId, eId) => navigateTo(p, aId, eId)}
            />
          )}

          {currentPage === 'sajjan-saeen' && (
            <SajjanSaeenPage onNavigate={(p, aId, eId) => navigateTo(p, aId, eId)} />
          )}

          {currentPage === 'zikr-e-qalbi' && (
            <ZikrEQalbiPage onNavigate={(p, aId, eId) => navigateTo(p, aId, eId)} />
          )}

          {currentPage === 'not-found' && (
            <NotFoundPage onNavigate={(p, aId, eId) => navigateTo(p, aId, eId)} />
          )}
        </ErrorBoundary>
      </main>

      {/* Footer */}
      <Footer onNavigate={(p) => navigateTo(p)} />
    </div>
  );
}
