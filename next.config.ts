import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';
import { allowedRemotePatterns } from './src/image';

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
        ],
        source: '/prakash-nilayam-form.html',
      },
    ];
  },
  images: {
    minimumCacheTTL: 7 * 24 * 60 * 60, // 7 Days
    remotePatterns: allowedRemotePatterns,
  },
  turbopack: {
    resolveAlias: {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    },
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    };

    return webpackConfig;
  },
};
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
