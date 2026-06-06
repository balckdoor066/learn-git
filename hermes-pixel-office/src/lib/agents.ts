export type AgentStatus = 'active' | 'working' | 'gateway' | 'standby' | 'idle';
export type AgentTier = 'paid' | 'free';

export type Agent = {
  id: string;
  name: string;
  desk: string;
  zone: string;
  model: string;
  provider: 'Ollama Cloud Pro' | 'NVIDIA NIM';
  tier: AgentTier;
  status: AgentStatus;
  role: string;
  description: string;
  task: string;
  xp: number;
  level: number;
  completed: number;
  position: { x: number; y: number };
  sprite: 'reception' | 'coder' | 'designer' | 'tech' | 'scientist' | 'reviewer' | 'thinker';
  accent: string;
};

export const agents: Agent[] = [
  { id: 'default', name: 'default', desk: 'Comms Desk', zone: 'Main Floor', model: 'glm-4.6', provider: 'Ollama Cloud Pro', tier: 'paid', status: 'active', role: 'Telegram bot and front desk receptionist', description: 'Routes incoming requests, summarizes intent, and keeps the office queue clean.', task: 'Triaging 12 inbound messages', xp: 78, level: 7, completed: 94, position: { x: 16, y: 30 }, sprite: 'reception', accent: '#FF6B35' },
  { id: 'backend', name: 'backend', desk: 'Code Lab', zone: 'Main Floor', model: 'kimi-k2.6', provider: 'Ollama Cloud Pro', tier: 'paid', status: 'working', role: 'API/DB analyst with hardened SOUL.md', description: 'Audits endpoints, schema health, migration risk, and server-side contracts.', task: 'Analyzing kanban gateway endpoints', xp: 91, level: 9, completed: 142, position: { x: 37, y: 24 }, sprite: 'coder', accent: '#00D4FF' },
  { id: 'frontend', name: 'frontend', desk: 'Design Studio', zone: 'Main Floor', model: 'glm-5.1', provider: 'Ollama Cloud Pro', tier: 'paid', status: 'working', role: 'UI builder for React and Next.js', description: 'Builds screens, interaction states, responsive polish, and dashboard flows.', task: 'Drafting JARVIS nav integration', xp: 66, level: 6, completed: 88, position: { x: 58, y: 24 }, sprite: 'designer', accent: '#FFB800' },
  { id: 'infra', name: 'infra', desk: 'Server Room', zone: 'Main Floor', model: 'glm-5.1', provider: 'Ollama Cloud Pro', tier: 'paid', status: 'active', role: 'System checks, Docker, and monitoring', description: 'Watches containers, ports, CPU, disks, health checks, and deployment state.', task: 'Watching CT 200 container metrics', xp: 83, level: 8, completed: 119, position: { x: 79, y: 30 }, sprite: 'tech', accent: '#00FF88' },
  { id: 'researcher', name: 'researcher', desk: 'Research Library', zone: 'Advisory Wing', model: 'llama-3.3-70b', provider: 'NVIDIA NIM', tier: 'free', status: 'active', role: 'Deep analysis and planning', description: 'Explores options, gathers context, and writes planning reports for hard calls.', task: 'Comparing Hermes Desktop workflows', xp: 72, level: 7, completed: 50, position: { x: 22, y: 72 }, sprite: 'scientist', accent: '#4ADE80' },
  { id: 'reviewer', name: 'reviewer', desk: 'Review Corner', zone: 'Advisory Wing', model: 'llama-3.1-8b', provider: 'NVIDIA NIM', tier: 'free', status: 'idle', role: 'Code review and quality audit', description: 'Checks regressions, missing tests, risky assumptions, and deployment drift.', task: 'Waiting for next diff', xp: 47, level: 4, completed: 37, position: { x: 52, y: 76 }, sprite: 'reviewer', accent: '#60A5FA' },
  { id: 'thinker', name: 'thinker', desk: 'Strategy Room', zone: 'Advisory Wing', model: 'llama-3.1-70b', provider: 'NVIDIA NIM', tier: 'free', status: 'working', role: 'Reasoning and tradeoff analysis', description: 'Turns messy decisions into crisp options with consequences and next moves.', task: 'Writing deployment tradeoffs memo', xp: 59, level: 5, completed: 44, position: { x: 78, y: 72 }, sprite: 'thinker', accent: '#C084FC' },
];

export const statusColors: Record<AgentStatus, string> = { active: '#00FF88', working: '#FFB800', gateway: '#00D4FF', standby: '#767C8D', idle: '#767C8D' };
export const kanbanTasks = [
  { title: 'Wire Hermes status polling', assignee: 'infra', status: 'Ready', runtime: '0m' },
  { title: 'Review JARVIS nav link', assignee: 'reviewer', status: 'Backlog', runtime: '--' },
  { title: 'Build group meeting API adapter', assignee: 'backend', status: 'Running', runtime: '18m' },
  { title: 'Pixel office Phase 1 QA', assignee: 'frontend', status: 'Done', runtime: '42m' },
];
