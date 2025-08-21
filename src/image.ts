import { NextConfig } from 'next';

export const allowedRemotePatterns: NonNullable<
  NonNullable<NextConfig['images']>['remotePatterns']
> = [
  {
    hostname: 'img.youtube.com',
    pathname: '/vi/**/**.jpg',
    protocol: 'https',
  },
  {
    hostname: 'res.cloudinary.com',
    pathname: '/**',
    port: '',
    protocol: 'https',
  },
];
