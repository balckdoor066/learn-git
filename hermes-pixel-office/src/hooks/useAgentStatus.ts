import { useEffect, useState } from 'react';
import { getHermesStatus } from '../lib/api';

export function useAgentStatus() {
  const [tick, setTick] = useState(0);
  const [gateway, setGateway] = useState('demo-mode');

  useEffect(() => {
    let mounted = true;
    const poll = async () => {
      const status = await getHermesStatus();
      if (mounted) {
        setGateway(status.gateway || 'demo-mode');
        setTick((value) => value + 1);
      }
    };
    poll();
    const timer = window.setInterval(poll, 12000);
    return () => { mounted = false; window.clearInterval(timer); };
  }, []);

  return { gateway, tick };
}
