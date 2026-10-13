import '../styles/globals.css';
import MotionProvider from '../components/MotionProvider';
import {
  getConfiguredSiteUrl,
  organizationJsonLd,
  siteDescription,
  siteName,
  siteTitle,
} from '../lib/site';
import { socialImage } from '../lib/socialImage';

const siteUrl = getConfiguredSiteUrl();

export const metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  ...(siteUrl ? { alternates: { canonical: '/' } } : {}),
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: { url: '/apple-touch-icon.png', type: 'image/png', sizes: '1024x1024' },
  },
  openGraph: {
    type: 'website',
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: 'en',
    ...(siteUrl ? {
      url: '/',
      images: [{
        url: '/og',
        width: socialImage.width,
        height: socialImage.height,
        alt: socialImage.alt,
      }],
    } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    ...(siteUrl ? {
      images: [{
        url: '/og',
        width: socialImage.width,
        height: socialImage.height,
        alt: socialImage.alt,
      }],
    } : {}),
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1A232E',
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      <link
        rel="preload"
        as="image"
        href="/tai-forge-website-images/tai-forge-hero.webp"
        type="image/webp"
        media="(min-width: 768px)"
      />
      <link
        rel="preload"
        as="image"
        href="/tai-forge-website-images/tai-forge-hero-mobile.webp"
        type="image/webp"
        media="(max-width: 767px)"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(siteUrl)) }} // eslint-disable-line react/no-danger
      />
    </head>
    <body>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forge focus:px-4 focus:py-3 focus:font-bold focus:text-primary-black"
      >
        Skip to content
      </a>
      <MotionProvider>{children}</MotionProvider>
    </body>
  </html>
);

export default RootLayout;
