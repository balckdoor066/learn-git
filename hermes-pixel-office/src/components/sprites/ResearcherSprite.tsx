import { SpriteSvg, type PixelBlock } from './SpriteSvg';

const pixels: PixelBlock[] = [
  { x: 8, y: 2, w: 16, h: 3, c: '#7A4D2B' },
  { x: 7, y: 5, w: 18, h: 5, c: '#8B5E34' },
  { x: 9, y: 8, w: 14, h: 8, c: '#F2B48E' },
  { x: 10, y: 10, w: 5, h: 4, c: '#EAFDFF' },
  { x: 17, y: 10, w: 5, h: 4, c: '#EAFDFF' },
  { x: 15, y: 12, w: 2, h: 1, c: '#07111A' },
  { x: 11, y: 15, w: 10, h: 2, c: '#C77F58' },
  { x: 13, y: 17, w: 6, h: 3, c: '#F2B48E' },
  { x: 6, y: 20, w: 22, h: 4, c: '#EAFDFF' },
  { x: 5, y: 24, w: 24, h: 12, c: '#EDF6FF' },
  { x: 10, y: 24, w: 14, h: 4, c: '#BFD7EA' },
  { x: 7, y: 29, w: 5, h: 8, c: '#F2B48E' },
  { x: 24, y: 29, w: 5, h: 8, c: '#F2B48E' },
  { x: 7, y: 32, w: 9, h: 8, c: '#2F7D4B' },
  { x: 16, y: 32, w: 9, h: 8, c: '#F7E7B5' },
  { x: 8, y: 40, w: 8, h: 3, c: '#07111A' },
  { x: 20, y: 40, w: 8, h: 3, c: '#07111A' },
  { x: 10, y: 36, w: 7, h: 8, c: '#273142' },
  { x: 19, y: 36, w: 7, h: 8, c: '#273142' },
  { x: 6, y: 18, w: 4, h: 5, c: '#7A4D2B' },
  { x: 23, y: 18, w: 4, h: 5, c: '#7A4D2B' }
];

export function ResearcherSprite() {
  return (
    <SpriteSvg blocks={pixels} className="researcher" delay=".64s">
      <g className="sprite-arm researcher-page"><rect x="16" y="32" width="9" height="8" fill="#F7E7B5"/><rect x="18" y="34" width="6" height="1" fill="#8B5E34"/></g>
    </SpriteSvg>
  );
}
