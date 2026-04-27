import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  serverExternalPackages: ['mongoose', 'bullmq', 'ioredis', 'elastic-apm-node', 'pino', 'pino-pretty'],
};

export default nextConfig;
