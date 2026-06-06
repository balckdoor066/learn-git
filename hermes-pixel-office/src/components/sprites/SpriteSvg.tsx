import type { CSSProperties } from 'react';

export type PixelBlock = { x: number; y: number; w: number; h: number; c: string };

export function expandPixels(blocks: PixelBlock[]) {
  const rects: Array<{ x: number; y: number; c: string }> = [];
  blocks.forEach((block) => {
    for (let y = block.y; y < block.y + block.h; y += 1) {
      for (let x = block.x; x < block.x + block.w; x += 1) rects.push({ x, y, c: block.c });
    }
  });
  return rects;
}

export function SpriteSvg({ blocks, className, delay, glowId, children }: { blocks: PixelBlock[]; className: string; delay: string; glowId?: string; children?: React.ReactNode }) {
  const pixels = expandPixels(blocks);
  return (
    <div className={'sprite-shell svg-sprite-shell ' + className} style={{ '--sprite-delay': delay } as CSSProperties} aria-hidden="true">
      <svg className="agent-svg-sprite" viewBox="0 0 32 48" shapeRendering="crispEdges">
        {glowId ? <defs><filter id={glowId} x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="1.4" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs> : null}
        <rect x="5" y="45" width="24" height="3" fill="rgba(0,0,0,.42)" />
        {pixels.map((pixel, index) => <rect key={index} x={pixel.x} y={pixel.y} width="1" height="1" fill={pixel.c} />)}
        {children}
      </svg>
    </div>
  );
}
