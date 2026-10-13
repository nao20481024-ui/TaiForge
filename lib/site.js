const configuredUrl = () => {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
  ];
  const raw = candidates.find((value) => typeof value === 'string' && value.trim());
  if (!raw) return null;

  try {
    const trimmed = raw.trim();
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const url = new URL(withProtocol);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
    return new URL(`${url.protocol}//${url.host}`);
  } catch {
    return null;
  }
};

export const siteName = 'TAI Forge';

export const siteTitle = 'Managed AI Operations & Automation Support | TAI Forge';

export const siteDescription = 'TAI Forge provides managed AI operations, workflow monitoring and technical support for AI agents, automations and integrations. Request an AI Health Check.';

export const getConfiguredSiteUrl = () => configuredUrl();

export const organizationJsonLd = (siteUrl) => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    description: siteDescription,
  };

  if (!siteUrl) return data;

  return {
    ...data,
    url: siteUrl.origin,
    logo: {
      '@type': 'ImageObject',
      url: new URL('/TaiForge_Logo_Package/TaiForge_Primary.png', siteUrl).href,
      width: 2280,
      height: 570,
    },
  };
};
