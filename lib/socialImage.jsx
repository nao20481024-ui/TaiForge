import { ImageResponse } from 'next/og';

export const socialImage = {
  width: 1200,
  height: 630,
  alt: 'TAI Forge. Managed AI operations and automation support.',
};

export const createSocialImage = () => new ImageResponse(
  (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#1A232E',
        color: '#ffffff',
        padding: '72px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            width: 18,
            height: 18,
            borderRadius: 999,
            backgroundColor: '#F7953B',
            marginRight: 16,
          }}
        />
        <div style={{ fontSize: 28, letterSpacing: 4, color: '#F7953B' }}>
          TAI FORGE
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 920 }}>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1 }}>
          Managed AI operations and automation support
        </div>
        <div style={{ marginTop: 24, fontSize: 28, lineHeight: 1.4, color: '#c7c7c7' }}>
          Monitoring, maintenance, and technical support for AI agents, automations, and integrations.
        </div>
      </div>
    </div>
  ),
  {
    width: socialImage.width,
    height: socialImage.height,
  },
);
