import { Send, Sparkles, Users } from 'lucide-react';
import { useState } from 'react';
import { AgentSprite } from './AgentSprite';
import type { Agent } from '../lib/agents';

const actions = ['Analyze', 'Review', 'Build', 'Report'];

export function ChatPanel({ agent, meetingMode, agents, onSelectAgent }: { agent: Agent; meetingMode: boolean; agents: Agent[]; onSelectAgent: (agent: Agent) => void }) {
  const [messages, setMessages] = useState([{ from: agent.name, text: meetingMode ? 'Meeting room ready. Select agents and drop the mission.' : 'Standing by at ' + agent.desk + '. What should I handle?' }]);
  const [draft, setDraft] = useState('');
  const [invited, setInvited] = useState(() => agents.filter((item) => item.status !== 'idle').map((item) => item.id));
  function sendMessage() {
    if (!draft.trim()) return;
    const responders = meetingMode ? agents.filter((item) => invited.includes(item.id)).slice(0, 3) : [agent];
    setMessages((items) => [...items, { from: 'You', text: draft.trim() }, ...responders.map((item) => ({ from: item.name, text: item.model + ': queued task and prepared a Phase 1 response.' }))]);
    setDraft('');
  }
  return (
    <aside className="chat-panel">
      <div className="panel-head"><AgentSprite agent={agent} size={7} /><div><p>{meetingMode ? 'Meeting Room' : agent.desk}</p><h2>{meetingMode ? 'Group Chat' : agent.name}</h2><span>{agent.provider} / {agent.model}</span></div></div>
      {meetingMode ? <div className="invite-box"><div className="invite-title"><Users size={15} /> Invite agents</div><div className="invite-grid">{agents.map((item) => <label key={item.id}><input type="checkbox" checked={invited.includes(item.id)} onChange={() => setInvited((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])} />{item.name}</label>)}</div></div> : <div className="agent-detail"><div><span>Status</span><strong>{agent.status}</strong></div><div><span>Zone</span><strong>{agent.zone}</strong></div><div><span>Level</span><strong>{agent.level}</strong></div><div><span>Tasks</span><strong>{agent.completed}</strong></div><p>{agent.description}</p><div className="xp-track"><span style={{ width: agent.xp + '%' }} /></div></div>}
      <div className="quick-actions">{actions.map((action) => <button key={action}><Sparkles size={13} /> {action}</button>)}</div>
      <div className="message-list" aria-live="polite">{messages.map((message, index) => <div key={index} className={'message ' + (message.from === 'You' ? 'you' : '')}><strong>{message.from}</strong><p>{message.text}</p></div>)}</div>
      <div className="chat-input"><input value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && sendMessage()} placeholder={meetingMode ? 'Ask all invited agents...' : 'Message ' + agent.name + '...'} /><button onClick={sendMessage} title="Send"><Send size={16} /></button></div>
      {!meetingMode && <button className="switch-agent" onClick={() => onSelectAgent(agents[(agents.findIndex((item) => item.id === agent.id) + 1) % agents.length])}>Next agent</button>}
    </aside>
  );
}
