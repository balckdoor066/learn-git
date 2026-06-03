import { useMemo, useState } from 'react';
import { Box, Code2, FolderTree, ShieldCheck } from 'lucide-react';
import { agents as seedAgents } from './lib/agents';
import type { Agent } from './lib/agents';
import { useAgentStatus } from './hooks/useAgentStatus';
import { StatusBar } from './components/StatusBar';
import { OfficeMap } from './components/OfficeMap';
import { ChatPanel } from './components/ChatPanel';
import { KanbanBoard } from './components/KanbanBoard';
import { MiniGame } from './components/MiniGame';

const launchPanels = [
  { title: 'CODE AGENT', body: 'Write, test, refactor, ship faster.', icon: Code2 },
  { title: 'CONTEXT ENGINE', body: '1M+ token context across sessions.', icon: Box },
  { title: 'LOCAL AGENT', body: 'Your data stays on your machine.', icon: ShieldCheck },
  { title: 'OPEN SOURCE', body: 'Built for the community. Built to last.', icon: FolderTree },
];

export default function App() {
  const { gateway, tick } = useAgentStatus();
  const agents = useMemo(() => seedAgents.map((agent, index) => ({ ...agent, status: tick % 3 === 0 && index === 5 ? 'active' as const : agent.status })), [tick]);
  const [selected, setSelected] = useState<Agent>(agents[0]);
  const [meetingMode, setMeetingMode] = useState(false);
  function selectAgent(agent: Agent) { setMeetingMode(false); setSelected(agent); }
  function openMeeting() { setMeetingMode(true); setSelected(agents[0]); }

  return (
    <main className="app-shell launch-shell">
      <section className="launch-hero" aria-label="Hermes Desktop inspired command center">
        <div className="speed-lines" />
        <div className="launch-badge">AI UPDATE</div>
        <h1 className="launch-title">Hermes Desktop</h1>
        <div className="thai-arrived">มาแล้ว</div>
        <p className="launch-subtitle">Nous Research เปิด Public Preview</p>
        <div className="launch-tags"><span>Open Source</span><span>Desktop App</span><span>Local Agent</span></div>
        <div className="feature-rail left">
          {launchPanels.slice(0, 2).map(({ title, body, icon: Icon }) => <article key={title}><Icon size={28} /><strong>{title}</strong><p>{body}</p></article>)}
        </div>
        <div className="feature-rail right">
          {launchPanels.slice(2).map(({ title, body, icon: Icon }) => <article key={title}><Icon size={28} /><strong>{title}</strong><p>{body}</p></article>)}
        </div>
        <div className="desktop-display">
          <StatusBar agents={agents} gateway={gateway} />
          <div className="command-grid">
            <div className="office-column">
              <OfficeMap agents={agents} selectedId={selected.id} onSelectAgent={selectAgent} onOpenMeeting={openMeeting} />
            </div>
            <ChatPanel agent={selected} meetingMode={meetingMode} agents={agents} onSelectAgent={selectAgent} />
          </div>
        </div>
        <div className="os-row" aria-label="Platform shortcuts">
          <button><strong>Mac OS</strong><span>APPLE SILICON</span></button>
          <button><strong>Windows</strong><span>WIN 10/11</span></button>
          <button><strong>Linux</strong><span>ANY DISTRO</span></button>
        </div>
      </section>
      <div className="lower-grid launch-lower"><KanbanBoard /><MiniGame agents={agents} /></div>
    </main>
  );
}
