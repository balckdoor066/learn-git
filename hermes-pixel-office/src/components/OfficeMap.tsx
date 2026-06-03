import type { CSSProperties } from 'react';
import { MessagesSquare, Users } from 'lucide-react';
import { AgentSprite } from './AgentSprite';
import type { Agent } from '../lib/agents';
import { statusColors } from '../lib/agents';

type Props = { agents: Agent[]; selectedId: string; onSelectAgent: (agent: Agent) => void; onOpenMeeting: () => void; };

export function OfficeMap({ agents, selectedId, onSelectAgent, onOpenMeeting }: Props) {
  return (
    <section className="office-stage" aria-label="Hermes pixel office map">
      <div className="floor-grid" />
      <div className="zone zone-main"><span>Main Floor</span></div>
      <div className="zone zone-advisory"><span>Advisory Wing</span></div>
      <button className="meeting-room" onClick={onOpenMeeting} aria-label="Open meeting room group chat"><Users size={20} /><strong>Meeting Room</strong><small>Group discussion table</small><span className="table-pixels" /></button>
      {agents.map((agent) => (
        <button key={agent.id} data-agent={agent.id} className={'desk ' + (selectedId === agent.id ? 'selected ' : '') + agent.tier} style={{ left: agent.position.x + '%', top: agent.position.y + '%', '--agent-accent': agent.accent } as CSSProperties} onClick={() => onSelectAgent(agent)}>
          <span className="desk-top"><span className="monitor" /><span className="desk-label">{agent.desk}</span></span>
          <AgentSprite agent={agent} size={5} />
          <span className="agent-meta"><strong>{agent.name}</strong><small>{agent.model}</small></span>
          <span className="status-dot" style={{ background: statusColors[agent.status] }} />
          <MessagesSquare className="chat-cue" size={13} />
        </button>
      ))}
    </section>
  );
}
