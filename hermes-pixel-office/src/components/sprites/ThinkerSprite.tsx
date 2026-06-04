import { SpriteSvg, type PixelBlock } from './SpriteSvg';

const pixels: PixelBlock[] = [
  { x: 11, y: 0, w: 10, h: 2, c: '#4BC7FF' },
  { x: 9, y: 2, w: 14, h: 3, c: 'rgba(75,199,255,.45)' },
  { x: 6, y: 4, w: 22, h: 5, c: '#3F365F' },
  { x: 5, y: 9, w: 24, h: 7, c: '#332A4F' },
  { x: 8, y: 12, w: 16, h: 6, c: '#F2B48E' },
  { x: 12, y: 14, w: 2, h: 2, c: '#07111A' },
  { x: 18, y: 14, w: 2, h: 2, c: '#07111A' },
  { x: 13, y: 18, w: 8, h: 3, c: '#D8D2C3' },
  { x: 8, y: 19, w: 18, h: 4, c: '#5B4A82' },
  { x: 7, y: 23, w: 20, h: 11, c: '#4C3A76' },
  { x: 6, y: 27, w: 5, h: 9, c: '#F2B48E' },
  { x: 24, y: 25, w: 5, h: 10, c: '#F2B48E' },
  { x: 23, y: 22, w: 5, h: 3, c: '#F2B48E' },
  { x: 22, y: 20, w: 4, h: 4, c: '#D8D2C3' },
  { x: 10, y: 34, w: 7, h: 9, c: '#2A2445' },
  { x: 19, y: 34, w: 7, h: 9, c: '#2A2445' },
  { x: 9, y: 43, w: 8, h: 3, c: '#07111A' },
  { x: 19, y: 43, w: 8, h: 3, c: '#07111A' },
  { x: 8, y: 7, w: 4, h: 12, c: '#2A2445' },
  { x: 24, y: 7, w: 4, h: 12, c: '#2A2445' }
];

export function ThinkerSprite() {
  return <SpriteSvg blocks={pixels} className="thinker" delay="1s" glowId="thinker-aura" />;
}
