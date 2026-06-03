import { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  Bell,
  Bot,
  Brain,
  Brush,
  Building2,
  ClipboardList,
  Clock3,
  Cloud,
  Code2,
  Cpu,
  Library,
  MessageSquare,
  SearchCheck,
  Send,
  Server,
  Settings,
  ShieldCheck,
  Star,
  Terminal,
  Users,
} from 'lucide-react';
import { AgentSprite } from './components/AgentSprite';
import { agents as seedAgents } from './lib/agents';
import type { Agent } from './lib/agents';
import { useAgentStatus } from './hooks/useAgentStatus';

const navItems = [
  { label: 'Office', icon: Building2, active: true },
  { label: 'Agents', icon: Bot },
  { label: 'Chat', icon: MessageSquare },
  { label: 'Meetings', icon: Users },
  { label: 'Tasks', icon: ClipboardList },
  { label: 'Training', icon: Star },
  { label: 'Logs', icon: Terminal },
  { label: 'System', icon: Settings },
];

const roomIcons: Record<string, typeof Code2> = {
  default: MessageSquare,
  backend: Code2,
  frontend: Brush,
  infra: Server,
  researcher: Library,
  reviewer: SearchCheck,
  thinker: Brain,
};

const agentCoords: Record<string, { x: number; y: number }> = {
  default: { x: 16, y: 29 },
  backend: { x: 37, y: 29 },
  frontend: { x: 58, y: 29 },
  infra: { x: 79, y: 29 },
  researcher: { x: 22, y: 77 },
  reviewer: { x: 52, y: 77 },
  thinker: { x: 78, y: 77 },
};

const roomNames = {
  comms: 'COMMS DESK',
  code: 'CODE LAB',
  design: 'DESIGN STUDIO',
  server: 'SERVER ROOM',
  research: 'RESEARCH LIBRARY',
  review: 'REVIEW CORNER',
  strategy: 'STRATEGY ROOM',
};

function Room({ type, label }: { type: keyof typeof roomNames; label: string }) {
  return (
    <div className={'room room-' + type}>
      <span>{label}</span>
      <i />
      <div className={'room-props props-' + type}>
        <b className="prop-a" />
        <b className="prop-b" />
        <b className="prop-c" />
        <b className="prop-d" />
      </div>
      <em className="ceiling-light" />
    </div>
  );
}


function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return now;
}

function timeParts(date: Date) {
  return {
    time: date.toLocaleTimeString('en-GB', { hour12: false }),
    date: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' }),
  };
}

function TopBar({ activeCount, gateway }: { activeCount: number; gateway: string }) {
  const now = useClock();
  const parts = timeParts(now);
  return (
    <header className="top-command-bar">
      <div className="brand-panel">
        <div className="wing-mark">H</div>
        <div>
          <h1>HERMES</h1>
          <span>COMMAND CENTER</span>
        </div>
      </div>
      <div className="telemetry-strip">
        <section><Clock3 /><div><strong>{parts.time}</strong><span>{parts.date}</span></div></section>
        <section><Users /><div><strong><b>{activeCount}</b> / 7</strong><span>Agents Active</span></div></section>
        <section><Cloud /><div><strong>ONLINE</strong><span>Ollama Cloud Ready</span></div></section>
        <section><Cpu /><div><strong>ONLINE</strong><span>NVIDIA NIM Ready</span></div></section>
        <section><ShieldCheck /><div><strong>{gateway}</strong><span>Gateway ready</span></div></section>
      </div>
      <div className="utility-buttons">
        <button aria-label="Terminal"><Terminal /></button>
        <button aria-label="Notifications"><Bell /></button>
        <button aria-label="Settings"><Settings /></button>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="command-sidebar">
      {navItems.map(({ label, icon: Icon, active }) => (
        <button key={label} className={active ? 'active' : ''}>
          <Icon />
          <span>{label}</span>
        </button>
      ))}
    </aside>
  );
}

function PixelDesk({ agent, selected, onSelect }: { agent: Agent; selected: boolean; onSelect: (agent: Agent) => void }) {
  const Icon = roomIcons[agent.id] || Bot;
  const coords = agentCoords[agent.id] || agent.position;
  return (
    <button
      className={'office-agent ' + (selected ? 'selected ' : '') + agent.status}
      style={{ left: coords.x + '%', top: coords.y + '%', '--agent-accent': agent.accent } as React.CSSProperties}
      onClick={() => onSelect(agent)}
      aria-label={agent.name + ' workstation'}
    >
      <span className="speech-dot"><MessageSquare size={12} /><em>{agent.status === 'idle' ? '...' : agent.status}</em></span>
      <span className="desk-rig"><Icon size={20} /><i /></span>
      <AgentSprite agent={agent} size={selected ? 7 : 6} />
      <strong>{agent.name}</strong>
    </button>
  );
}

function OfficeMap({ agents, selected, onSelect }: { agents: Agent[]; selected: Agent; onSelect: (agent: Agent) => void }) {
  return (
    <section className="office-map-panel">
      <div className="floor-tab main">MAIN FLOOR</div>
      <div className="floor-tab advisory">ADVISORY WING</div>
      <Room type="comms" label={roomNames.comms} />
      <Room type="code" label={roomNames.code} />
      <Room type="design" label={roomNames.design} />
      <Room type="server" label={roomNames.server} />
      <button className="meeting-room" onClick={() => onSelect(agents[0])}>
        <span>MEETING ROOM</span>
        <b />
        <i className="meeting-chair chair-a" />
        <i className="meeting-chair chair-b" />
        <i className="meeting-chair chair-c" />
        <i className="meeting-chair chair-d" />
        <em className="holo-core" />
      </button>
      <Room type="research" label={roomNames.research} />
      <Room type="review" label={roomNames.review} />
      <Room type="strategy" label={roomNames.strategy} />
      <div className="corridor-line horizontal" />
      <div className="corridor-line vertical" />
      <div className="doorway door-main-a" />
      <div className="doorway door-main-b" />
      <div className="doorway door-wing-a" />
      <div className="plant plant-a"><i /><b /></div>
      <div className="plant plant-b"><i /><b /></div>
      <div className="plant plant-c"><i /><b /></div>
      {agents.map((agent) => (
        <PixelDesk key={agent.id} agent={agent} selected={agent.id === selected.id} onSelect={onSelect} />
      ))}
    </section>
  );
}

function AgentInspector({ agent }: { agent: Agent }) {
  const xpMax = Math.max(100, Math.ceil(agent.xp / 100) * 100 + 100);
  const xpPercent = Math.min(94, Math.round((agent.xp / xpMax) * 100));
  return (
    <aside className="agent-inspector">
      <div className="inspector-header"><span>{agent.desk}</span><button aria-label="Close">×</button></div>
      <div className="agent-card-head">
        <div className="portrait"><AgentSprite agent={agent} size={8} /></div>
        <div><h2>{agent.name.toUpperCase()}</h2><p>{agent.role}</p></div>
      </div>
      <dl className="agent-facts">
        <div><dt>Model</dt><dd>{agent.model}</dd></div>
        <div><dt>Provider</dt><dd>{agent.provider}</dd></div>
        <div><dt>Status</dt><dd className={agent.status}><span />{agent.status}</dd></div>
      </dl>
      <div className="task-block"><span>Current Task</span><p>{agent.task}</p><small>ETA {agent.status === 'idle' ? '--' : (agent.level + 5) + ' min'}</small></div>
      <div className="xp-block"><span>XP Level</span><div><i style={{ width: xpPercent + '%' }} /><b>{agent.xp * 35} / {xpMax * 35} XP</b></div></div>
      <div className="quick-label">Quick Actions</div><div className="quick-grid">
        <button><MessageSquare /> Chat</button>
        <button><ClipboardList /> Assign Task</button>
        <button><BarChart3 /> View Tasks</button>
        <button><Send /> View Stats</button>
      </div>
      <div className="personality-box">
        <span>Personality</span>
        <p><b>Focus:</b> {agent.zone}</p>
        <p><b>Strength:</b> {agent.desk}</p>
        <p><b>Trait:</b> {agent.description}</p>
      </div>
      <footer>Last active&nbsp; {timeParts(new Date()).time}</footer>
    </aside>
  );
}

function Leaderboard({ agents }: { agents: Agent[] }) {
  const ranked = [...agents].sort((a, b) => b.xp - a.xp);
  return (
    <section className="bottom-panel leaderboard-panel">
      <h3>Agent Leaderboard (XP)</h3>
      <div className="leader-grid">
        {ranked.map((agent, index) => (
          <div key={agent.id} className="leader-entry">
            <span>{index + 1}</span><AgentSprite agent={agent} size={3} /><b>{agent.name}</b>
            <i><em style={{ width: Math.max(24, agent.xp) + '%' }} /></i><strong>{agent.xp * 35}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatsPanels({ agents }: { agents: Agent[] }) {
  const completed = agents.reduce((sum, agent) => sum + agent.completed, 0);
  return (
    <>
      <section className="bottom-panel today-panel"><h3>Today's Stats</h3><p><span>Tasks Completed</span><b>{completed}</b></p><p><span>Total XP Earned</span><b>+{agents.reduce((s, a) => s + a.xp, 0) * 8}</b></p><p><span>Code Commits</span><b>28</b></p><p><span>Uptime</span><b>99.2%</b></p><div className="sparkline" /></section>
      <section className="bottom-panel training-panel"><h3>Training Progress</h3>{['RAG Knowledge','Code Generation','System Design','Review Quality'].map((label, index) => <p key={label}><span>{label}</span><i><em style={{ width: 58 + index * 9 + '%' }} /></i><b>Lv. {18 + index}</b></p>)}</section>
      <section className="bottom-panel system-panel"><h3>System Status</h3>{['Hermes API','WebSocket','Database','Queue Workers'].map((label, index) => <p key={label}><span>{label}</span><b>{index === 3 ? '5 / 5' : index === 1 ? 'CONNECTED' : index === 2 ? 'HEALTHY' : 'ONLINE'}</b></p>)}<svg className="radar-svg" viewBox="0 0 120 110" aria-label="System intelligence radar" role="img">
          <polygon className="radar-grid" points="60,8 112,45 92,104 28,104 8,45" />
          <polygon className="radar-grid inner" points="60,28 88,48 78,82 42,82 32,48" />
          <line x1="60" y1="8" x2="60" y2="60" /><line x1="112" y1="45" x2="60" y2="60" /><line x1="92" y1="104" x2="60" y2="60" /><line x1="28" y1="104" x2="60" y2="60" /><line x1="8" y1="45" x2="60" y2="60" />
          <polygon className="radar-fill" points="60,16 98,47 82,88 34,92 22,48" />
          <text x="60" y="7">Speed</text><text x="114" y="45">Reliability</text><text x="91" y="109">Intelligence</text><text x="2" y="109">Creativity</text><text x="0" y="43">Collaboration</text>
        </svg></section>
    </>
  );
}

export default function App() {
  const { gateway, tick } = useAgentStatus();
  const agents = useMemo(() => seedAgents.map((agent, index) => ({ ...agent, status: tick % 4 === 0 && index === 5 ? 'active' as const : agent.status })), [tick]);
  const [selectedId, setSelectedId] = useState('backend');
  const selected = agents.find((agent) => agent.id === selectedId) || agents[0];
  const activeCount = agents.filter((agent) => agent.status !== 'idle').length;

  return (
    <main className="command-center">
      <TopBar activeCount={activeCount} gateway={gateway} />
      <div className="center-grid">
        <Sidebar />
        <OfficeMap agents={agents} selected={selected} onSelect={(agent) => setSelectedId(agent.id)} />
        <AgentInspector agent={selected} />
      </div>
      <div className="bottom-grid"><Leaderboard agents={agents} /><StatsPanels agents={agents} /></div>
      <div className="version-line">HERMES COMMAND CENTER v0.3.0</div>
    </main>
  );
}
