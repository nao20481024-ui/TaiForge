import '../styles/globals.css';

const title = 'TAI Forge | Managed AI Operations & Technical Support';
const description = 'TAI Forge helps businesses monitor, maintain, troubleshoot, and optimize existing AI agents, automations, and integrations.';

export const metadata = {
  title,
  description,
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', type: 'image/png' },
  },
  openGraph: {
    type: 'website',
    siteName: 'TAI Forge',
    title,
    description,
    images: [{ url: '/icon.svg', alt: 'TAI Forge' }],
  },
  twitter: {
    card: 'summary',
    title,
    description,
    images: ['/icon.svg'],
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
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
