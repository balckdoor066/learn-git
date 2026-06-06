import { SpriteSvg, type PixelBlock } from './SpriteSvg';

const pixels: PixelBlock[] = [
  { x: 7, y: 2, w: 18, h: 4, c: '#172033' },
  { x: 5, y: 6, w: 22, h: 6, c: '#1E1B4B' },
  { x: 4, y: 12, w: 24, h: 8, c: '#241849' },
  { x: 8, y: 9, w: 16, h: 7, c: '#0B1020' },
  { x: 12, y: 12, w: 3, h: 2, c: '#22C55E' },
  { x: 18, y: 12, w: 3, h: 2, c: '#22C55E' },
  { x: 10, y: 16, w: 12, h: 4, c: '#111827' },
  { x: 7, y: 20, w: 18, h: 13, c: '#2E1F5E' },
  { x: 6, y: 25, w: 20, h: 8, c: '#20163F' },
  { x: 4, y: 29, w: 7, h: 8, c: '#1C1438' },
  { x: 21, y: 29, w: 7, h: 8, c: '#1C1438' },
  { x: 11, y: 33, w: 6, h: 8, c: '#111827' },
  { x: 18, y: 33, w: 6, h: 8, c: '#111827' },
  { x: 9, y: 41, w: 8, h: 3, c: '#07111A' },
  { x: 18, y: 41, w: 8, h: 3, c: '#07111A' },
  { x: 5, y: 30, w: 5, h: 4, c: '#F2B48E' },
  { x: 22, y: 30, w: 5, h: 4, c: '#F2B48E' },
  { x: 3, y: 34, w: 12, h: 5, c: '#22C55E' },
  { x: 17, y: 34, w: 12, h: 5, c: '#22C55E' },
  { x: 6, y: 38, w: 22, h: 3, c: '#07111A' },
  { x: 7, y: 36, w: 20, h: 2, c: '#D7F7FF' },
  { x: 9, y: 22, w: 14, h: 4, c: '#0E1628' }
];

export function BackendSprite() {
  return (
    <SpriteSvg blocks={pixels} className="backend" delay=".18s">
      <g className="sprite-arm backend-left"><rect x="4" y="30" width="7" height="4" fill="#F2B48E"/></g>
      <g className="sprite-arm backend-right"><rect x="22" y="30" width="7" height="4" fill="#F2B48E"/></g>
      <g className="sprite-screen-lines"><rect x="9" y="22" width="5" height="1" fill="#4ADE80"/><rect x="16" y="24" width="7" height="1" fill="#06B6D4"/><rect x="11" y="26" width="8" height="1" fill="#4ADE80"/></g>
    </SpriteSvg>
  );
}
