import { withPayload } from '@payloadcms/next/withPayload';
import type { NextConfig } from 'next';
import { allowedRemotePatterns } from './src/image';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: allowedRemotePatterns,
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

export default withPayload(nextConfig, { devBundleServerPackages: false });
