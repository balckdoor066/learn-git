import { kanbanTasks } from '../lib/agents';

export function KanbanBoard() {
  return <section className="kanban-preview"><div className="section-title"><p>Kanban pulse</p><h2>Task flow</h2></div><div className="kanban-columns">{['Backlog', 'Ready', 'Running', 'Done', 'Blocked'].map((status) => <div className="kanban-column" key={status}><strong>{status}</strong>{kanbanTasks.filter((task) => task.status === status).map((task) => <article key={task.title}><span>{task.assignee}</span><p>{task.title}</p><small>{task.runtime}</small></article>)}</div>)}</div></section>;
}
