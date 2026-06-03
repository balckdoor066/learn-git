import { Activity, Bot, Cpu, Network, Settings } from 'lucide-react';
import { useMemo } from 'react';
import type { Agent } from '../lib/agents';

export function StatusBar({ agents, gateway }: { agents: Agent[]; gateway: string }) {
  const activeCount = agents.filter((agent) => agent.status !== 'idle').length;
  const time = useMemo(() => new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }), []);
  return (
    <header className="status-bar">
      <div className="brand-lockup"><Bot size={22} /><div><h1>HERMES COMMAND CENTER</h1><p>Pixel Office / Phase 1</p></div></div>
      <nav className="top-nav" aria-label="Primary"><button className="nav-item active">Office View</button><button className="nav-item">Chat</button><button className="nav-item">Kanban Board</button><button className="nav-icon" title="Settings"><Settings size={16} /></button></nav>
      <div className="system-strip"><span><Activity size={15} /> {activeCount}/7 Active</span><span><Cpu size={15} /> Ollama Cloud OK</span><span><Network size={15} /> NVIDIA NIM OK</span><span className="gateway">{gateway}</span><strong>{time}</strong></div>
    </header>
  );
}
