import { SpriteSvg, type PixelBlock } from './SpriteSvg';

const pixels: PixelBlock[] = [
  { x: 9, y: 2, w: 9, h: 2, c: '#9F2D4B' },
  { x: 8, y: 4, w: 13, h: 3, c: '#C2415D' },
  { x: 7, y: 7, w: 4, h: 8, c: '#C2415D' },
  { x: 18, y: 6, w: 6, h: 9, c: '#8F2644' },
  { x: 10, y: 6, w: 10, h: 8, c: '#F2B48E' },
  { x: 12, y: 9, w: 2, h: 2, c: '#07111A' },
  { x: 17, y: 9, w: 2, h: 2, c: '#07111A' },
  { x: 11, y: 13, w: 8, h: 2, c: '#C77F58' },
  { x: 5, y: 9, w: 3, h: 7, c: '#06B6D4' },
  { x: 21, y: 9, w: 3, h: 7, c: '#06B6D4' },
  { x: 5, y: 12, w: 20, h: 2, c: '#07111A' },
  { x: 14, y: 15, w: 5, h: 3, c: '#F2B48E' },
  { x: 8, y: 18, w: 16, h: 4, c: '#1E88C8' },
  { x: 7, y: 22, w: 18, h: 10, c: '#136C9E' },
  { x: 10, y: 24, w: 12, h: 4, c: '#06B6D4' },
  { x: 6, y: 23, w: 4, h: 9, c: '#F2B48E' },
  { x: 22, y: 21, w: 4, h: 10, c: '#F2B48E' },
  { x: 23, y: 18, w: 4, h: 4, c: '#F2B48E' },
  { x: 24, y: 17, w: 4, h: 2, c: '#C77F58' },
  { x: 9, y: 32, w: 7, h: 8, c: '#0F3554' },
  { x: 17, y: 32, w: 7, h: 8, c: '#0F3554' },
  { x: 8, y: 40, w: 8, h: 3, c: '#07111A' },
  { x: 18, y: 40, w: 8, h: 3, c: '#07111A' },
  { x: 4, y: 20, w: 8, h: 5, c: '#28506A' },
  { x: 21, y: 20, w: 8, h: 5, c: '#28506A' },
  { x: 25, y: 3, w: 5, h: 6, c: '#8F2644' },
  { x: 24, y: 5, w: 7, h: 4, c: '#C2415D' },
  { x: 6, y: 15, w: 4, h: 6, c: '#FFD166' },
  { x: 25, y: 15, w: 3, h: 8, c: '#FDE68A' }
];

export function DefaultSprite() {
  return <SpriteSvg blocks={pixels} className="default" delay="0s" />;
}
