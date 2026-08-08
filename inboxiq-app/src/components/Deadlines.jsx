export default function Deadlines({ emails }) {
  const items = emails.filter(e => e.priority === 'high' && !e.flag);

  return (
    <div className="view" id="view-deadlines">
      <div className="panel">
        <div className="panel-title">Detected deadlines &amp; events</div>
        <div className="queue">
          {items.map(e => (
            <div className="queue-item" key={e.id}>
              <span className={`priority-dot ${e.priority}`} />
              <div className="queue-body">
                <div className="queue-title">{e.subject}</div>
                <div className="queue-meta">{e.sender} · {e.org}</div>
              </div>
              <div className="queue-time">{e.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
