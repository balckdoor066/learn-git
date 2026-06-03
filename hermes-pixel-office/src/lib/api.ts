import { agents } from './agents';

export async function getHermesStatus() {
  const baseUrl = import.meta.env.VITE_HERMES_API_URL as string | undefined;
  if (!baseUrl) {
    return {
      gateway: 'demo-mode',
      activeAgents: agents.filter((agent) => agent.status !== 'idle').length,
      providers: { ollama: 'online', nvidia: 'online' },
    };
  }

  try {
    const response = await fetch(baseUrl + '/api/hermes/status', {
      signal: AbortSignal.timeout(1800),
    });
    if (!response.ok) throw new Error('Hermes gateway unavailable');
    return await response.json();
  } catch {
    return {
      gateway: 'demo-mode',
      activeAgents: agents.filter((agent) => agent.status !== 'idle').length,
      providers: { ollama: 'online', nvidia: 'online' },
    };
  }
}
