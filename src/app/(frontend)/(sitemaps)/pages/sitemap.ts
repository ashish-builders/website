import { getClientSideURL } from '@/lib/get-url';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = getClientSideURL();
  return [
    {
      changeFrequency: 'monthly',
      lastModified: new Date('08-10-2025'),
      priority: 1.0,
      url: baseURL,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date('08-10-2025'),
      priority: 0.8,
      url: `${baseURL}/about-us`,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date('08-10-2025'),
      priority: 0.8,
      url: `${baseURL}/projects`,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date('08-10-2025'),
      priority: 0.8,
      url: `${baseURL}/blog`,
    },
    {
      changeFrequency: 'monthly',
      lastModified: new Date('08-10-2025'),
      priority: 0.8,
      url: `${baseURL}/contact-us`,
    },
  ];
}
