import { SpriteSvg, type PixelBlock } from './SpriteSvg';

const pixels: PixelBlock[] = [
  { x: 9, y: 2, w: 14, h: 4, c: '#2E3A4F' },
  { x: 8, y: 6, w: 16, h: 3, c: '#394B63' },
  { x: 9, y: 8, w: 14, h: 7, c: '#F2B48E' },
  { x: 10, y: 10, w: 5, h: 3, c: '#EAFDFF' },
  { x: 17, y: 10, w: 5, h: 3, c: '#EAFDFF' },
  { x: 15, y: 11, w: 2, h: 1, c: '#07111A' },
  { x: 11, y: 15, w: 10, h: 2, c: '#C77F58' },
  { x: 13, y: 17, w: 6, h: 3, c: '#F2B48E' },
  { x: 7, y: 20, w: 20, h: 4, c: '#6B7A90' },
  { x: 6, y: 24, w: 22, h: 10, c: '#60758E' },
  { x: 10, y: 24, w: 14, h: 5, c: '#EAFDFF' },
  { x: 5, y: 25, w: 5, h: 10, c: '#F2B48E' },
  { x: 25, y: 23, w: 5, h: 12, c: '#F2B48E' },
  { x: 24, y: 25, w: 7, h: 7, c: '#06B6D4' },
  { x: 25, y: 26, w: 5, h: 5, c: 'transparent' },
  { x: 6, y: 35, w: 9, h: 8, c: '#273142' },
  { x: 18, y: 35, w: 9, h: 8, c: '#273142' },
  { x: 6, y: 43, w: 9, h: 3, c: '#07111A' },
  { x: 18, y: 43, w: 9, h: 3, c: '#07111A' },
  { x: 21, y: 31, w: 9, h: 10, c: '#EAFDFF' },
  { x: 22, y: 33, w: 5, h: 1, c: '#22C55E' },
  { x: 22, y: 36, w: 5, h: 1, c: '#22C55E' },
  { x: 22, y: 39, w: 5, h: 1, c: '#22C55E' }
];

export function ReviewerSprite() {
  return (
    <SpriteSvg blocks={pixels} className="reviewer" delay=".8s">
      <g className="sprite-arm reviewer-pen"><rect x="24" y="23" width="6" height="7" fill="#F2B48E"/><rect x="28" y="25" width="1" height="7" fill="#07111A"/></g>
      <g className="sprite-glasses"><rect x="10" y="10" width="5" height="3" fill="none" stroke="#EAFDFF" strokeWidth="1"/><rect x="17" y="10" width="5" height="3" fill="none" stroke="#EAFDFF" strokeWidth="1"/></g>
    </SpriteSvg>
  );
}
