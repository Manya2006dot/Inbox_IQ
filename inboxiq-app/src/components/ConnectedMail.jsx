export default function ConnectedMail() {
  return (
    <div className="view" id="view-mail">
      <div className="panel">
        <div className="panel-title">Connected inboxes</div>
        <div className="queue">
          <div className="queue-item">
            <div className="queue-body">
              <div className="queue-title">Gmail — rohan.kapoor@company.com</div>
              <div className="queue-meta">Synced 2 minutes ago · 146 emails today</div>
            </div>
            <div className="pill"><span className="dot" /> Connected</div>
          </div>
          <div className="queue-item">
            <div className="queue-body">
              <div className="queue-title">Outlook — r.kapoor@company.com</div>
              <div className="queue-meta">Synced 6 minutes ago · 58 emails today</div>
            </div>
            <div className="pill"><span className="dot" /> Connected</div>
          </div>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn primary">+ Connect another inbox</button>
        </div>
      </div>
    </div>
  );
}
