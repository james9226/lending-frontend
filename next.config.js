const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  child-src 'self';
  style-src 'self';
  font-src 'self';
  style-src-elem 'self' 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swapd';
`;

module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true, serverActions: true },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: "camera=(); battery=(); geolocation=(); microphone=()",
          },
          // {
          //   key: 'Content-Security-Policy',
          //   value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
          // },
        ],
      },
    ];
  },
}
