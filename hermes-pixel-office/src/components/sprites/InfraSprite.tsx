import { SpriteSvg, type PixelBlock } from './SpriteSvg';

const pixels: PixelBlock[] = [
  { x: 9, y: 2, w: 14, h: 3, c: '#FACC15' },
  { x: 7, y: 5, w: 18, h: 3, c: '#EAB308' },
  { x: 9, y: 8, w: 14, h: 7, c: '#F2B48E' },
  { x: 12, y: 10, w: 2, h: 2, c: '#07111A' },
  { x: 18, y: 10, w: 2, h: 2, c: '#07111A' },
  { x: 11, y: 14, w: 10, h: 2, c: '#C77F58' },
  { x: 12, y: 16, w: 8, h: 3, c: '#F2B48E' },
  { x: 7, y: 19, w: 20, h: 4, c: '#6B7280' },
  { x: 6, y: 23, w: 22, h: 9, c: '#F97316' },
  { x: 11, y: 23, w: 3, h: 9, c: '#F59E0B' },
  { x: 20, y: 23, w: 3, h: 9, c: '#F59E0B' },
  { x: 5, y: 23, w: 5, h: 8, c: '#F2B48E' },
  { x: 25, y: 23, w: 5, h: 8, c: '#F2B48E' },
  { x: 4, y: 25, w: 7, h: 3, c: '#6B7280' },
  { x: 24, y: 25, w: 7, h: 3, c: '#6B7280' },
  { x: 9, y: 32, w: 18, h: 4, c: '#4B5563' },
  { x: 10, y: 36, w: 7, h: 8, c: '#1F2937' },
  { x: 19, y: 36, w: 7, h: 8, c: '#1F2937' },
  { x: 9, y: 44, w: 8, h: 3, c: '#07111A' },
  { x: 19, y: 44, w: 8, h: 3, c: '#07111A' },
  { x: 12, y: 32, w: 3, h: 3, c: '#06B6D4' },
  { x: 18, y: 32, w: 3, h: 3, c: '#F59E0B' },
  { x: 24, y: 31, w: 4, h: 2, c: '#E5E7EB' }
];

export function InfraSprite() {
  return <SpriteSvg blocks={pixels} className="infra" delay=".48s" />;
}
