import { IconStar } from '../icons';
import { priorityLabel } from '../../data/emails';

export default function MailRow({ email, selected, onSelect }) {
  const classes = [
    'mail-row',
    email.unread ? 'unread' : '',
    selected ? 'selected' : '',
    email.flag === 'spam' ? 'spam' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={() => onSelect(email.id)}>
      <div className="chk" onClick={e => e.stopPropagation()} />
      <IconStar className={`star${email.starred ? ' filled' : ''}`} onClick={e => e.stopPropagation()} />

      <div className="mail-main">
        <div className="mail-sender">{email.sender}</div>
        <div className="mail-text">
          <span className="mail-subject">{email.subject}</span>
          <span className="mail-snippet"> — {email.snippet}</span>
        </div>
      </div>

      {email.flag === 'spam' && <span className="flag-badge spam">Spam</span>}
      {email.flag === 'danger' && <span className="flag-badge danger">Danger</span>}

      <span className="mail-time">{email.time}</span>
      <span className={`priority-dot ${email.priority}`} title={priorityLabel(email.priority)} />
    </div>
  );
}
