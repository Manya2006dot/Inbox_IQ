import { IconMailOutline, IconChevronLeft, IconFlag, IconReply, IconSnooze, IconCheck } from '../icons';
import { priorityLabel } from '../../data/emails';

export default function ReadingPane({ email, onBack, onReply, onSnooze, onDone, onReport }) {
  if (!email) {
    return (
      <div className="reading-pane">
        <div className="rp-empty">
          <IconMailOutline />
          <div>Select an email to read it here</div>
        </div>
      </div>
    );
  }

  return (
    <div className="reading-pane">
      <button className="rp-back" onClick={onBack}>
        <IconChevronLeft /> Back to inbox
      </button>

      <div className="rp-top">
        <div className="rp-subject">{email.subject}</div>
        <span className={`priority-dot ${email.priority}`} title={priorityLabel(email.priority)} style={{ marginTop: 6 }} />
      </div>

      <div className="rp-meta">
        <div className="rp-avatar">{email.initials}</div>
        <div>
          <b>{email.sender}</b> · {email.org}
          <br /><span style={{ color: 'var(--ink-faint)' }}>{email.time}</span>
        </div>
      </div>

      {email.flag === 'danger' && (
        <div className="rp-danger-banner">
          <IconFlag /> This looks like a phishing attempt. Do not click any links.
        </div>
      )}
      {email.flag === 'spam' && (
        <div className="rp-danger-banner spam-banner">
          <IconFlag /> Marked as likely spam.
        </div>
      )}

      <div className="rp-ai">
        <div className="rp-ai-label">AI summary</div>
        <div className="rp-ai-text">{email.ai}</div>
      </div>

      <div className="rp-body">{email.body}</div>

      <div className="rp-actions">
        {email.flag ? (
          <button className="btn danger-btn" onClick={() => onReport(email.id)}>
            <IconFlag /> Report {email.flag}
          </button>
        ) : (
          <button className="btn primary" onClick={onReply}>
            <IconReply /> Reply
          </button>
        )}
        <button className="btn" onClick={onSnooze}><IconSnooze /> Snooze</button>
        <button className="btn" onClick={() => onDone(email.id)}><IconCheck /> Done</button>
      </div>
    </div>
  );
}
