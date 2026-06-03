import type { CSSProperties } from 'react';
import type { Agent } from '../lib/agents';

const layouts: Record<Agent['sprite'], string[]> = {
  reception: ['..hhhh..', '.hffffh.', '.fssssf.', '..spps..', '.bbbbbb.', 'bbyyyyb.', '..b..b..', '.cc..cc.'],
  coder: ['..kkkk..', '.kddddk.', '.dssssd.', '..spps..', '.bbbbbb.', 'bbccccb.', '..b..b..', '.ss..ss.'],
  designer: ['..pppp..', '.pffffp.', '.fssssf.', '..spps..', '.bbbbbb.', 'bbmmmmb.', '..b..b..', '.ww..ww.'],
  tech: ['..yyyy..', '.yddddy.', '.dssssd.', '..spps..', '.bbbbbb.', 'bbggggb.', '..b..b..', '.oo..oo.'],
  scientist: ['..wwww..', '.wffffw.', '.fssssf.', '..spps..', '.llllll.', 'llccccl.', '..l..l..', '.bb..bb.'],
  reviewer: ['..bbbb..', '.bffffb.', '.fssssf.', '..spps..', '.gggggg.', 'ggyyyyg.', '..g..g..', '.kk..kk.'],
  thinker: ['..rrrr..', '.rffffr.', '.fssssf.', '..spps..', '.vvvvvv.', 'vvbbbbv.', '..v..v..', '.rr..rr.'],
};

const palette: Record<string, string> = {
  h: '#ffb800', f: '#1d2435', s: '#f0b98f', p: '#101827', b: '#24324b', y: '#ff6b35', c: '#00d4ff', k: '#2b2f40', d: '#3b465f', m: '#c084fc', w: '#e8f3ff', g: '#00ff88', o: '#f97316', l: '#f8fafc', r: '#9b5cff', v: '#5b2f88', '.': 'transparent',
};

export function AgentSprite({ agent, size = 8 }: { agent: Agent; size?: number }) {
  const pixels = layouts[agent.sprite];
  return (
    <div className="sprite-shell" style={{ '--agent-accent': agent.accent } as CSSProperties} aria-hidden="true">
      <div className="sprite-grid" style={{ gridTemplateColumns: 'repeat(8, ' + size + 'px)' }}>
        {pixels.flatMap((row, rowIndex) => row.split('').map((cell, colIndex) => (
          <span key={rowIndex + '-' + colIndex} style={{ width: size, height: size, background: palette[cell] || 'transparent' }} />
        )))}
      </div>
      <span className={'sprite-signal ' + agent.status} />
    </div>
  );
}
