import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string; // e.g. "/", "/shajra-shareef", "/events/urs-mubarak-2026"
  ogImage?: string;
  ogType?: 'website' | 'article' | 'event';
  breadcrumbs?: Array<{ name: string; item: string }>;
  eventSchema?: {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    locationName: string;
    locality: string;
    region: string;
    country: string;
    isPast?: boolean;
    image?: string;
    url: string;
  };
  noindex?: boolean;
  structuredData?: object[];
}

const DOMAIN = 'https://tahirifoundation.uk';
const DEFAULT_IMAGE = `${DOMAIN}/assets/dargah-allahabad-sharif-authentic.jpg`;

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  ogImage = DEFAULT_IMAGE,
  ogType = 'website',
  breadcrumbs,
  eventSchema,
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to set or update meta tag
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper to set or update link rel="canonical"
    const fullCanonicalUrl = canonicalPath.startsWith('http')
      ? canonicalPath
      : `${DOMAIN}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', 'index, follow');

    // 3. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', fullCanonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', 'Tahiri Foundation UK');
    setMetaTag('property', 'og:image', ogImage);

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 5. Schema.org JSON-LD structured data
    const schemas: any[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Tahiri Foundation UK',
        url: DOMAIN,
        logo: `${DOMAIN}/assets/tahiri_logo_emblem.png`,
        image: DEFAULT_IMAGE,
        description:
          'Islamic and Sufi spiritual educational foundation connected with Dargah Allahabad Sharif, Sindh.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Tahiri Foundation UK',
        url: DOMAIN,
        description:
          'Spiritual teachings, Shajra Shareef, Zikr-e-Qalbi, and heritage of Dargah Allahabad Sharif, Sindh.',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: title,
        url: fullCanonicalUrl,
        description: description,
        publisher: {
          '@type': 'Organization',
          name: 'Tahiri Foundation UK',
        },
      },
    ];

    // BreadcrumbList Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${DOMAIN}/`,
          },
          ...breadcrumbs.map((b, idx) => ({
            '@type': 'ListItem',
            position: idx + 2,
            name: b.name,
            item: b.item.startsWith('http') ? b.item : `${DOMAIN}${b.item}`,
          })),
        ],
      });
    }

    // Event Schema (only when on dedicated event page)
    if (eventSchema) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: eventSchema.name,
        description: eventSchema.description,
        startDate: eventSchema.startDate,
        endDate: eventSchema.endDate,
        eventStatus: eventSchema.isPast
          ? 'https://schema.org/EventCompleted'
          : 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: eventSchema.locationName,
          address: {
            '@type': 'PostalAddress',
            addressLocality: eventSchema.locality,
            addressRegion: eventSchema.region,
            addressCountry: eventSchema.country,
          },
        },
        image: [eventSchema.image || DEFAULT_IMAGE],
        organizer: {
          '@type': 'Organization',
          name: 'Tahiri Foundation UK',
          url: DOMAIN,
        },
        url: eventSchema.url.startsWith('http') ? eventSchema.url : `${DOMAIN}${eventSchema.url}`,
      });
    }

    // Injected JSON-LD script in document head
    let scriptTag = document.getElementById('seo-json-ld') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'seo-json-ld';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemas);
  }, [title, description, canonicalPath, ogImage, ogType, breadcrumbs, eventSchema]);

  return null;
};
