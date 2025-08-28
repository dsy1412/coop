/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  // 暂时移除 basePath 和 assetPrefix，在部署时可以通过环境变量设置
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/resume-website' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/resume-website' : '',
}

module.exports = nextConfig
