import { createSocialImage } from '../../lib/socialImage';

export const runtime = 'edge';

export function GET() {
  return createSocialImage();
}
