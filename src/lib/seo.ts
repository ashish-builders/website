import type { Metadata } from 'next';
import type { Organization, Thing, WithContext } from 'schema-dts';
import { alternateName, siteName } from '@/constants/site-info';
import {
  addressLocality,
  addressRegion,
  country,
  countryCode,
  email,
  geo,
  phoneNumber,
  postalCode,
  streetAddress,
} from '@/constants/contact-constants';
import { facebook, instagram, linkedin, youtube, x } from '@/constants/social-constants';
import { getClientSideURL } from './get-url';

/**
 * Options for generating SEO metadata.
 */
export type CreateMetadataOptions = {
  /**
   * Alternate URLs for the page (for hreflang/canonical).
   */
  alternates?: Metadata['alternates'];
  /**
   * List of authors (for meta and OpenGraph siteName).
   */
  authors?: { name: string }[];
  /**
   * List of full author names/URLs for OpenGraph article:author.
   */
  authorsFull?: string[];
  /**
   * Category of the content (meta tag).
   */
  category?: string;
  /**
   * Classification of the content (meta tag).
   */
  classification?: string;
  /**
   * The creator of the content (meta tag).
   */
  creator?: string;
  /**
   * The meta description for the page or article.
   */
  description: string;
  /**
   * URL or path to the main image (OpenGraph/Twitter image).
   */
  image?: string;
  /**
   * Whether the page should be indexable by search engines (robots meta tag).
   * Defaults to true.
   */
  indexable?: boolean;
  /**
   * Array of keywords for the meta keywords tag.
   */
  keywords?: string[];
  /**
   * Locale for the page (e.g., 'en_IN').
   */
  locale?: string;
  /**
   * ISO string for article modified date (OpenGraph/Twitter).
   */
  modifiedTime?: string;
  /**
   * Additional meta tags as key-value pairs.
   */
  other?: Record<string, string>;
  /**
   * ISO string for article published date (OpenGraph/Twitter).
   */
  publishedTime?: string;
  /**
   * The publisher of the content (meta tag).
   */
  publisher?: string;
  /**
   * Tags for the article (OpenGraph/Twitter).
   */
  tags?: string[];
  /**
   * The page or article title (used for <title> and OpenGraph/Twitter).
   */
  title: string;
  /**
   * OpenGraph type: 'website' (default) or 'article'.
   */
  type?: 'article' | 'website';
  /**
   * Canonical URL of the page.
   */
  url?: string;
};

const baseURL = getClientSideURL();

export function createMetadata({
  alternates,
  authors = [{ name: siteName }],
  authorsFull = [],
  category,
  classification,
  creator = siteName,
  description,
  image = '/assets/open-graph-default-design.webp',
  indexable = true,
  keywords = [],
  locale = 'en_IN',
  modifiedTime,
  other = {
    'DC.coverage': [addressLocality, addressRegion, country].join(', '),
    'DC.creator': siteName,
    'DC.description': `Premium real estate developer in ${addressLocality},${addressRegion} offering apartments, villas, and commercial spaces`,
    'DC.language': 'en-IN',
    'DC.subject': `Real Estate, Property Development, ${addressLocality}, ${addressRegion}`,
    'DC.title': siteName,
    'geo.placename': [addressLocality, addressRegion].join(', '),
    'geo.position': `${geo.latitude};${geo.longitude}`,
    'geo.region': 'IN-UT',
    ICBM: `${geo.latitude}, ${geo.longitude}`,
  },
  publishedTime,
  publisher = siteName,
  tags = [],
  title,
  type = 'website',
  url = baseURL,
}: CreateMetadataOptions): Metadata {
  const robots = indexable
    ? {
        follow: true,
        googleBot: {
          follow: true,
          index: true,
          maxImagePreview: 'large' as const,
          maxSnippet: -1,
          maxVideoPreview: -1,
        },
        index: true,
      }
    : {
        follow: false,
        googleBot: {
          follow: false,
          index: false,
        },
        index: false,
      };

  const openGraph: Metadata['openGraph'] = {
    description,
    images: [image],
    locale,
    siteName: authors[0]?.name || siteName,
    title,
    type,
    url,
    ...(type === 'article'
      ? {
          authors: authorsFull.length ? authorsFull : undefined,
          modifiedTime,
          publishedTime,
          tags: tags.length ? tags : undefined,
        }
      : {}),
  };

  return {
    alternates,
    authors,
    category,
    classification,
    creator,
    description,
    keywords,
    metadataBase: new URL(baseURL),
    openGraph,
    other,
    publisher,
    robots,
    title,
    twitter: {
      card: 'summary_large_image',
      description,
      images: [image],
      title,
    },
  };
}

/**
 * Generates a JSON-LD object for any schema.org type using schema-dts types.
 *
 * @param data - The data for the schema type (should match the schema-dts type definition).
 * @returns A JSON-LD object ready for stringification and injection.
 */
export function JsonLd<T extends Thing>(json: Omit<WithContext<T>, '@context'>) {
  if (typeof json !== 'object' || json === null || Array.isArray(json)) {
    throw new Error('JsonLd: data must be a non-null object');
  }
  return { '@context': 'https://schema.org', ...json } as WithContext<T>;
}

export function OrganizationJsonLd() {
  return JsonLd<Organization>({
    '@type': 'Organization',
    address: {
      '@type': 'PostalAddress',
      addressCountry: countryCode,
      addressLocality,
      addressRegion,
      postalCode,
      streetAddress,
    },
    alternateName,
    areaServed: [
      {
        '@type': 'City',
        containedInPlace: {
          '@type': 'State',
          containedInPlace: {
            '@type': 'Country',
            name: country,
          },
          name: addressRegion,
        },
        name: addressLocality,
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      availableLanguage: ['English', 'Hindi'],
      contactType: 'customer service',
      email,
      telephone: phoneNumber,
    },
    description: `Premium real estate developer in ${addressLocality}, ${addressRegion} offering apartments, luxury villas, and commercial spaces with over 20 years of expertise.`,
    foundingDate: '2004',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            description: 'Modern apartments with quality construction and contemporary amenities',
            name: 'Premium Apartments',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            description: 'Spacious villas with private yards and premium fittings',
            name: 'Luxury Villas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            description: 'Prime commercial properties in strategic locations',
            name: 'Commercial Spaces',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            description: 'Affordable 2BHK apartments with modern amenities',
            name: '2BHK Apartments',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            description: 'Spacious 3BHK villas with luxury features',
            name: '3BHK Villas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            description: 'Luxurious 4BHK villas with premium construction',
            name: '4BHK Villas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            description: 'Strategically located commercial properties',
            name: 'Commercial Spaces',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            description: 'High-end real estate offerings in prime locations',
            name: 'Luxury Real Estate',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': '2BHK Villas',
            description: 'Affordable 2BHK villas with modern amenities',
            name: '2BHK Villas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': '3BHK Villas',
            description: 'Spacious 3BHK villas with luxury features',
            name: '3BHK Villas',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': '4BHK Villas',
            description: 'Luxurious 4BHK villas with premium construction',
            name: '4BHK Villas',
          },
        },
      ],
      name: 'Real Estate Services',
    },
    image: `${baseURL}/assets/home/hero-banner.jpg`,
    logo: `${baseURL}/logo.svg`,
    name: siteName,
    sameAs: [facebook, instagram, linkedin, youtube, x],
    serviceType: [
      'Real Estate Development',
      'Residential Construction',
      'Commercial Construction',
      'Luxury Real Estate',
      'Property Investment',
      'Villa Development',
      'Apartment Construction',
      '2BHK Apartments',
      '3BHK Apartments',
      '4BHK Apartments',
      '2BHK Villas',
      '3BHK Villas',
      '4BHK Villas',
      'Luxury Villas',
      'Commercial Spaces',
    ],
    url: baseURL,
  }) as WithContext<Organization>;
}
