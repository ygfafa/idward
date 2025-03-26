import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    /**
     * @see https://nextjs.org/docs/app/api-reference/config/typescript#statically-typed-links
     * 라우팅 경로 타이핑
     */
    typedRoutes: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
