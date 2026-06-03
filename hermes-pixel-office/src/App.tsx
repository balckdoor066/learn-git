import { useMemo, useState } from 'react';
import { agents as seedAgents } from './lib/agents';
import type { Agent } from './lib/agents';
import { useAgentStatus } from './hooks/useAgentStatus';
import { StatusBar } from './components/StatusBar';
import { OfficeMap } from './components/OfficeMap';
import { ChatPanel } from './components/ChatPanel';
import { KanbanBoard } from './components/KanbanBoard';
import { MiniGame } from './components/MiniGame';

export default function App() {
  const { gateway, tick } = useAgentStatus();
  const agents = useMemo(() => seedAgents.map((agent, index) => ({ ...agent, status: tick % 3 === 0 && index === 5 ? 'active' as const : agent.status })), [tick]);
  const [selected, setSelected] = useState<Agent>(agents[0]);
  const [meetingMode, setMeetingMode] = useState(false);
  function selectAgent(agent: Agent) { setMeetingMode(false); setSelected(agent); }
  function openMeeting() { setMeetingMode(true); setSelected(agents[0]); }
  return <main className="app-shell"><StatusBar agents={agents} gateway={gateway} /><div className="command-grid"><div className="office-column"><OfficeMap agents={agents} selectedId={selected.id} onSelectAgent={selectAgent} onOpenMeeting={openMeeting} /><div className="lower-grid"><KanbanBoard /><MiniGame agents={agents} /></div></div><ChatPanel agent={selected} meetingMode={meetingMode} agents={agents} onSelectAgent={selectAgent} /></div></main>;
}
