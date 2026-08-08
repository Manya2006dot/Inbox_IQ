import MailRow from './MailRow';

export default function MailList({ emails, selectedId, onSelect }) {
  if (emails.length === 0) {
    return (
      <div className="mail-list">
        <div style={{ padding: 40, textAlign: 'center', color: 'var(--ink-faint)', fontSize: 13 }}>
          No emails in this view.
        </div>
      </div>
    );
  }

  return (
    <div className="mail-list">
      {emails.map(email => (
        <MailRow key={email.id} email={email} selected={email.id === selectedId} onSelect={onSelect} />
      ))}
    </div>
  );
}
