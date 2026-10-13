import { getConfiguredSiteUrl } from '../lib/site';

const sitemap = () => {
  const siteUrl = getConfiguredSiteUrl();
  if (!siteUrl) return [];

  return [
    {
      url: siteUrl.origin,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
};

export default sitemap;
