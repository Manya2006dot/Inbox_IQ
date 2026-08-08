import { IconCheck } from './icons';

export default function ActionPlanner({ queue, setQueue }) {
  function toggle(index) {
    setQueue(prev => prev.map((q, i) => (i === index ? { ...q, checked: !q.checked } : q)));
  }

  const done = queue.filter(q => q.checked).length;
  const remaining = queue.filter(q => !q.checked).reduce((sum, q) => sum + parseInt(q.time), 0);
  const progressPct = (done / queue.length) * 100;

  return (
    <div className="view" id="view-planner">
      <div className="panel">
        <div className="planner-progress-top">
          <span style={{ fontSize: 13, fontWeight: 600 }}>Today's work queue</span>
          <span className="mono" style={{ fontSize: 12, color: 'var(--ink-dim)' }}>
            {done} of {queue.length} done · ~{remaining}m remaining
          </span>
        </div>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <div className="queue">
        {queue.map((q, i) => (
          <div className="queue-item" key={i}>
            <div className={`queue-check${q.checked ? ' checked' : ''}`} onClick={() => toggle(i)}>
              <IconCheck />
            </div>
            <div className="queue-rank">{String(i + 1).padStart(2, '0')}</div>
            <div className="queue-body">
              <div className={`queue-title${q.checked ? ' checked' : ''}`}>{q.title}</div>
              <div className="queue-meta">{q.meta}</div>
            </div>
            <div className="queue-time">{q.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
