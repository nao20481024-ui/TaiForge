import { getConfiguredSiteUrl } from '../lib/site';

const robots = () => {
  const siteUrl = getConfiguredSiteUrl();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    ...(siteUrl ? {
      sitemap: new URL('/sitemap.xml', siteUrl).href,
      host: siteUrl.host,
    } : {}),
  };
};

export default robots;
