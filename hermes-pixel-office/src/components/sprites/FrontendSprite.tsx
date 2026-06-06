import { SpriteSvg, type PixelBlock } from './SpriteSvg';

const pixels: PixelBlock[] = [
  { x: 10, y: 2, w: 12, h: 3, c: '#1BAA7A' },
  { x: 8, y: 5, w: 16, h: 4, c: '#60D394' },
  { x: 9, y: 8, w: 13, h: 7, c: '#F2B48E' },
  { x: 12, y: 10, w: 2, h: 2, c: '#07111A' },
  { x: 18, y: 10, w: 2, h: 2, c: '#07111A' },
  { x: 11, y: 14, w: 10, h: 2, c: '#C77F58' },
  { x: 13, y: 16, w: 6, h: 3, c: '#F2B48E' },
  { x: 8, y: 19, w: 17, h: 5, c: '#111827' },
  { x: 7, y: 24, w: 19, h: 10, c: '#F7F0D4' },
  { x: 9, y: 25, w: 3, h: 3, c: '#FF5C8A' },
  { x: 14, y: 27, w: 3, h: 3, c: '#06B6D4' },
  { x: 19, y: 24, w: 3, h: 3, c: '#F59E0B' },
  { x: 22, y: 29, w: 3, h: 3, c: '#A855F7' },
  { x: 5, y: 22, w: 4, h: 10, c: '#F2B48E' },
  { x: 23, y: 20, w: 4, h: 12, c: '#F2B48E' },
  { x: 25, y: 17, w: 2, h: 13, c: '#F59E0B' },
  { x: 26, y: 16, w: 2, h: 5, c: '#06B6D4' },
  { x: 10, y: 34, w: 7, h: 8, c: '#283242' },
  { x: 18, y: 34, w: 7, h: 8, c: '#283242' },
  { x: 9, y: 42, w: 8, h: 3, c: '#07111A' },
  { x: 18, y: 42, w: 8, h: 3, c: '#07111A' },
  { x: 4, y: 30, w: 10, h: 4, c: '#06B6D4' },
  { x: 3, y: 29, w: 3, h: 3, c: '#FF5C8A' }
];

export function FrontendSprite() {
  return (
    <SpriteSvg blocks={pixels} className="frontend" delay=".33s">
      <g className="sprite-arm frontend-stylus"><rect x="23" y="20" width="4" height="10" fill="#F2B48E"/><rect x="27" y="16" width="1" height="11" fill="#06B6D4"/></g>
      <g className="sprite-tablet-doodle"><rect x="9" y="27" width="3" height="1" fill="#FF5C8A"/><rect x="13" y="29" width="3" height="1" fill="#06B6D4"/><rect x="18" y="26" width="3" height="1" fill="#F59E0B"/></g>
    </SpriteSvg>
  );
}
