import type { Agent } from '../lib/agents';
import { BackendSprite } from './sprites/BackendSprite';
import { DefaultSprite } from './sprites/DefaultSprite';
import { FrontendSprite } from './sprites/FrontendSprite';
import { InfraSprite } from './sprites/InfraSprite';
import { ResearcherSprite } from './sprites/ResearcherSprite';
import { ReviewerSprite } from './sprites/ReviewerSprite';
import { ThinkerSprite } from './sprites/ThinkerSprite';

const spriteComponents = {
  reception: DefaultSprite,
  coder: BackendSprite,
  designer: FrontendSprite,
  tech: InfraSprite,
  scientist: ResearcherSprite,
  reviewer: ReviewerSprite,
  thinker: ThinkerSprite,
} satisfies Record<Agent['sprite'], () => React.ReactNode>;

export function AgentSprite({ agent, size = 6 }: { agent: Agent; size?: number }) {
  const Sprite = spriteComponents[agent.sprite];
  return (
    <div className={'agent-sprite-frame ' + agent.status} style={{ '--sprite-scale': Math.max(0.45, size / 6), '--agent-accent': agent.accent } as React.CSSProperties} aria-hidden="true">
      <Sprite />
      <span className={'sprite-signal ' + agent.status} />
    </div>
  );
}
