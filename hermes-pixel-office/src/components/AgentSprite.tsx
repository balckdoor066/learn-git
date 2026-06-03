import type { CSSProperties } from 'react';
import type { Agent } from '../lib/agents';

const spriteClass: Record<Agent['sprite'], string> = {
  reception: 'sprite-reception',
  coder: 'sprite-coder',
  designer: 'sprite-designer',
  tech: 'sprite-tech',
  scientist: 'sprite-scientist',
  reviewer: 'sprite-reviewer',
  thinker: 'sprite-thinker',
};

const accessories: Record<Agent['sprite'], string[]> = {
  reception: ['hair', 'headset', 'mic', 'skirt'],
  coder: ['hood', 'laptop', 'shadow'],
  designer: ['brush', 'palette', 'ponytail'],
  tech: ['vest', 'wrench', 'boots'],
  scientist: ['glasses', 'book', 'coat'],
  reviewer: ['glasses', 'clipboard', 'lens'],
  thinker: ['hood', 'beard', 'thought'],
};

export function AgentSprite({ agent, size = 6 }: { agent: Agent; size?: number }) {
  const scale = Math.max(0.45, size / 6);
  return (
    <div
      className={'sprite-shell detailed-sprite-shell ' + agent.status}
      style={{ '--agent-accent': agent.accent, '--sprite-scale': scale } as CSSProperties}
      aria-hidden="true"
    >
      <div className={'pixel-agent-sprite ' + spriteClass[agent.sprite]}>
        <span className="sprite-shadow" />
        <span className="sprite-leg leg-left" />
        <span className="sprite-leg leg-right" />
        <span className="sprite-body" />
        <span className="sprite-arm arm-left" />
        <span className="sprite-arm arm-right" />
        <span className="sprite-neck" />
        <span className="sprite-head" />
        <span className="sprite-face" />
        <span className="sprite-hair" />
        <span className="sprite-eye eye-left" />
        <span className="sprite-eye eye-right" />
        {accessories[agent.sprite].map((name) => <span key={name} className={'sprite-accessory ' + name} />)}
      </div>
      <span className={'sprite-signal ' + agent.status} />
    </div>
  );
}
