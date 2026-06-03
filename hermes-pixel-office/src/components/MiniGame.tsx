import type { Agent } from '../lib/agents';

export function MiniGame({ agents }: { agents: Agent[] }) {
  return <section className="training-strip"><div className="section-title"><p>Agent training</p><h2>XP leaderboard</h2></div><div className="leaderboard">{[...agents].sort((a, b) => b.completed - a.completed).slice(0, 5).map((agent, index) => <div key={agent.id} className="leader-row"><span>#{index + 1}</span><strong>{agent.name}</strong><div><i style={{ width: agent.xp + '%', background: agent.accent }} /></div><small>Lv {agent.level} / {agent.completed} tasks</small></div>)}</div></section>;
}
