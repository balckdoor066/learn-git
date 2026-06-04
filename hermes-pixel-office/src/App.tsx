import { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  Bell,
  Bot,
  Building2,
  ClipboardList,
  Clock3,
  Cloud,
  Cpu,
  MessageSquare,
  Send,
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

function RoomArt({ type }: { type: keyof typeof roomNames }) {
  const common = { shapeRendering: 'crispEdges' as const };
  if (type === 'comms') return <svg className="room-art" viewBox="0 0 120 82" {...common}><rect x="8" y="48" width="72" height="18" fill="#5A351F"/><rect x="8" y="64" width="76" height="5" fill="#26160D"/><rect x="18" y="29" width="24" height="16" fill="#07111A" stroke="#06B6D4"/><rect x="52" y="27" width="25" height="17" fill="#07111A" stroke="#06B6D4"/><rect x="22" y="33" width="14" height="2" fill="#6EE7F9"/><rect x="56" y="32" width="15" height="2" fill="#6EE7F9"/><rect x="89" y="54" width="7" height="9" fill="#EAFDFF"/><rect x="90" y="50" width="5" height="4" fill="#FFB84D"/><rect x="95" y="23" width="2" height="22" fill="#94A3B8"/><rect x="90" y="23" width="12" height="2" fill="#06B6D4"/><rect x="84" y="39" width="12" height="9" fill="#273142"/></svg>;
  if (type === 'code') return <svg className="room-art" viewBox="0 0 120 82" {...common}><rect x="7" y="52" width="86" height="15" fill="#4B2E1A"/><rect x="9" y="67" width="90" height="4" fill="#1E130B"/><rect x="12" y="26" width="22" height="18" fill="#06111A" stroke="#06B6D4"/><rect x="42" y="23" width="24" height="21" fill="#06111A" stroke="#06B6D4"/><rect x="73" y="27" width="22" height="17" fill="#06111A" stroke="#06B6D4"/><rect x="15" y="31" width="13" height="1" fill="#4ADE80"/><rect x="15" y="35" width="16" height="1" fill="#4ADE80"/><rect x="45" y="29" width="16" height="1" fill="#4ADE80"/><rect x="45" y="34" width="12" height="1" fill="#4ADE80"/><rect x="76" y="32" width="12" height="1" fill="#4ADE80"/><rect x="25" y="57" width="44" height="4" fill="#CBD5E1"/><rect x="76" y="52" width="16" height="5" fill="#FFB84D"/><rect x="76" y="47" width="16" height="5" fill="#06B6D4"/><rect x="76" y="42" width="16" height="5" fill="#A855F7"/><path d="M20 72h20v3h22v-3h18" stroke="#06B6D4" strokeWidth="2" fill="none"/></svg>;
  if (type === 'design') return <svg className="room-art" viewBox="0 0 120 82" {...common}><rect x="12" y="53" width="78" height="14" fill="#5A351F"/><rect x="28" y="38" width="38" height="22" fill="#0B1823" stroke="#06B6D4" transform="skewX(-8)"/><rect x="96" y="18" width="4" height="4" fill="#FF5C8A"/><rect x="103" y="18" width="4" height="4" fill="#FFB84D"/><rect x="110" y="18" width="4" height="4" fill="#4ADE80"/><rect x="96" y="25" width="4" height="4" fill="#06B6D4"/><rect x="103" y="25" width="4" height="4" fill="#A855F7"/><rect x="83" y="21" width="8" height="8" fill="#FACC15"/><rect x="91" y="31" width="8" height="8" fill="#F472B6"/><rect x="101" y="39" width="8" height="8" fill="#4ADE80"/><rect x="77" y="51" width="8" height="18" fill="#273142"/><rect x="79" y="44" width="2" height="12" fill="#FFB84D"/><rect x="84" y="42" width="2" height="14" fill="#06B6D4"/><rect x="88" y="45" width="2" height="11" fill="#FF5C8A"/></svg>;
  if (type === 'server') return <svg className="room-art" viewBox="0 0 120 82" {...common}><rect x="13" y="18" width="25" height="58" fill="#111827" stroke="#64748B"/><rect x="47" y="18" width="25" height="58" fill="#111827" stroke="#64748B"/><rect x="18" y="25" width="14" height="2" fill="#334155"/><rect x="52" y="25" width="14" height="2" fill="#334155"/><rect className="svg-led led-a" x="20" y="34" width="3" height="3" fill="#4ADE80"/><rect className="svg-led led-b" x="28" y="34" width="3" height="3" fill="#F59E0B"/><rect className="svg-led led-c" x="54" y="43" width="3" height="3" fill="#4ADE80"/><rect className="svg-led led-d" x="62" y="43" width="3" height="3" fill="#06B6D4"/><path d="M75 65 C91 65 86 37 104 37" stroke="#06B6D4" strokeWidth="2" fill="none"/><path d="M74 58 C89 54 94 62 106 55" stroke="#4ADE80" strokeWidth="2" fill="none"/><rect x="91" y="18" width="12" height="34" fill="#0B1823" stroke="#06B6D4"/><rect x="94" y="24" width="6" height="18" fill="#F59E0B"/></svg>;
  if (type === 'research') return <svg className="room-art" viewBox="0 0 120 82" {...common}><rect x="10" y="14" width="22" height="62" fill="#2B1A0E"/><rect x="38" y="14" width="22" height="62" fill="#2B1A0E"/>{Array.from({length: 14}).map((_,i)=><rect key={i} x={13+(i%2)*28} y={19+Math.floor(i/2)*8} width="15" height="4" fill={i%3===0?'#06B6D4':i%3===1?'#FFB84D':'#4ADE80'}/>) }<rect x="78" y="39" width="36" height="18" fill="#4B2E1A"/><rect x="86" y="28" width="5" height="16" fill="#FFB84D"/><rect x="80" y="26" width="17" height="8" fill="#FDE68A" opacity=".75"/><rect x="79" y="64" width="14" height="3" fill="#EAFDFF"/><rect x="98" y="60" width="12" height="3" fill="#EAFDFF"/></svg>;
  if (type === 'review') return <svg className="room-art" viewBox="0 0 120 82" {...common}><rect x="18" y="54" width="62" height="15" fill="#4B2E1A"/><circle cx="38" cy="38" r="12" fill="none" stroke="#EAFDFF" strokeWidth="5"/><path d="M47 47 L61 60" stroke="#EAFDFF" strokeWidth="5"/><rect x="87" y="18" width="26" height="36" fill="#EAFDFF" stroke="#64748B"/><path d="M92 28 l4 4 l9 -10" stroke="#4ADE80" strokeWidth="2" fill="none"/><path d="M92 40 l4 4 l9 -10" stroke="#4ADE80" strokeWidth="2" fill="none"/><rect x="68" y="46" width="14" height="11" fill="#EF4444" stroke="#1F120A"/></svg>;
  return <svg className="room-art" viewBox="0 0 120 82" {...common}><polygon points="42,41 58,30 82,38 83,57 55,66 35,55" fill="#3A2518" stroke="#B7791F"/><rect x="48" y="43" width="4" height="9" fill="#EAFDFF"/><rect x="58" y="39" width="4" height="9" fill="#111827"/><rect x="68" y="47" width="4" height="9" fill="#EAFDFF"/><rect x="8" y="16" width="42" height="24" fill="#0B1823" stroke="#06B6D4"/><path d="M14 31 C22 20 28 35 35 25 C40 20 43 25 46 22" stroke="#4ADE80" strokeWidth="2" fill="none"/><circle cx="98" cy="52" r="15" fill="rgba(6,182,212,.12)" stroke="#06B6D4"/><path d="M88 52 h20 M98 38 v28" stroke="#06B6D4" strokeWidth="1"/></svg>;
}

function Room({ type, label }: { type: keyof typeof roomNames; label: string }) {
  return (
    <div className={'room room-' + type}>
      <span>{label}</span>
      <RoomArt type={type} />
      <svg className="ceiling-light-svg" viewBox="0 0 80 44" aria-hidden="true">
        <defs><radialGradient id={'light-' + type}><stop offset="0" stopColor="#FFF7D6" stopOpacity=".75"/><stop offset="1" stopColor="#FFF7D6" stopOpacity="0"/></radialGradient></defs>
        <circle cx="40" cy="6" r="34" fill={'url(#light-' + type + ')'} />
        <rect x="28" y="4" width="24" height="3" fill="#EAFDFF" />
      </svg>
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
  const coords = agentCoords[agent.id] || agent.position;
  return (
    <button
      className={'office-agent ' + (selected ? 'selected ' : '') + agent.status}
      style={{ left: coords.x + '%', top: coords.y + '%', '--agent-accent': agent.accent } as React.CSSProperties}
      onClick={() => onSelect(agent)}
      aria-label={agent.name + ' workstation'}
    >
      <svg className="speech-svg" viewBox="0 0 34 18" aria-hidden="true">
        <rect x="1" y="1" width="29" height="12" rx="3" fill="#17251F" stroke={agent.status === 'working' ? '#FFB84D' : '#4ADE80'} />
        <rect x="7" y="6" width="2" height="2" fill="#EAFDFF" /><rect x="14" y="6" width="2" height="2" fill="#EAFDFF" /><rect x="21" y="6" width="2" height="2" fill="#EAFDFF" />
        <rect x="24" y="12" width="4" height="4" fill="#17251F" stroke={agent.status === 'working' ? '#FFB84D' : '#4ADE80'} />
      </svg>
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
<svg className="meeting-art" viewBox="0 0 140 78" shapeRendering="crispEdges" aria-hidden="true">
          <ellipse cx="70" cy="39" rx="42" ry="20" fill="#3A2518" stroke="#B7791F" strokeWidth="2" />
          {[20,42,62,82,102,122].map((x, i) => <rect key={i} x={x} y={i < 3 ? 10 : 58} width="14" height="12" fill="#1B2A38" stroke="#64748B" />)}
          <circle className="holo-disc" cx="70" cy="39" r="13" fill="rgba(6,182,212,.18)" stroke="#06B6D4" strokeWidth="2" />
          <rect x="67" y="36" width="6" height="6" fill="#EAFDFF" />
        </svg>
      </button>
      <Room type="research" label={roomNames.research} />
      <Room type="review" label={roomNames.review} />
      <Room type="strategy" label={roomNames.strategy} />
      <div className="corridor-line horizontal" />
      <div className="corridor-line vertical" />
      <svg className="map-atmosphere" viewBox="0 0 1000 620" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <pattern id="floor-tiles" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#0A0E1A"/><path d="M16 0H0V16" stroke="#0D1220" strokeWidth="1"/></pattern>
          <radialGradient id="plantGlow"><stop offset="0" stopColor="#4ADE80" stopOpacity=".25"/><stop offset="1" stopColor="#4ADE80" stopOpacity="0"/></radialGradient>
        </defs>
        <rect width="1000" height="620" fill="url(#floor-tiles)" opacity=".24" />
        <path d="M330 225 H410 M650 225 H720 M485 392 H540" stroke="#06B6D4" strokeWidth="2" strokeDasharray="8 8" opacity=".45" />
      </svg>
      <PlantSvg className="plant-a" />
      <PlantSvg className="plant-b" />
      <PlantSvg className="plant-c" />
      <PlantSvg className="plant-d" />
      {agents.map((agent) => (
        <PixelDesk key={agent.id} agent={agent} selected={agent.id === selected.id} onSelect={onSelect} />
      ))}
    </section>
  );
}

function PlantSvg({ className }: { className: string }) {
  return <svg className={'plant-svg ' + className} viewBox="0 0 16 22" shapeRendering="crispEdges" aria-hidden="true"><rect x="5" y="14" width="7" height="7" fill="#6B4321"/><rect x="6" y="10" width="5" height="5" fill="#4ADE80"/><rect x="2" y="8" width="5" height="5" fill="#2FA85D"/><rect x="10" y="7" width="5" height="5" fill="#62FF9A"/><rect x="6" y="4" width="5" height="5" fill="#4ADE80"/><rect x="4" y="1" width="3" height="4" fill="#2FA85D"/></svg>;
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
      <section className="bottom-panel system-panel"><h3>System Status</h3>{['Hermes API','WebSocket','Database','Queue Workers'].map((label, index) => <p key={label}><span>{label}</span><b>{index === 3 ? '5 / 5' : index === 1 ? 'CONNECTED' : index === 2 ? 'HEALTHY' : 'ONLINE'}</b></p>)}<svg className="radar-svg" viewBox="0 0 150 130" aria-label="System intelligence radar" role="img">
          <polygon className="radar-grid" points="75,10 132,52 110,116 40,116 18,52" />
          <polygon className="radar-grid" points="75,29 114,57 99,101 51,101 36,57" />
          <polygon className="radar-grid" points="75,48 96,63 88,84 62,84 54,63" />
          <line x1="75" y1="10" x2="75" y2="74" /><line x1="132" y1="52" x2="75" y2="74" /><line x1="110" y1="116" x2="75" y2="74" /><line x1="40" y1="116" x2="75" y2="74" /><line x1="18" y1="52" x2="75" y2="74" />
          <polygon className="radar-fill" points="75,23 109,59 99,103 49,96 30,59" />
          <text x="75" y="9">Speed</text><text x="136" y="52">Reliability</text><text x="112" y="127">Intelligence</text><text x="35" y="127">Creativity</text><text x="19" y="43">Collaboration</text>
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
      <div className="version-line">HERMES COMMAND CENTER v0.7.0</div>
    </main>
  );
}
