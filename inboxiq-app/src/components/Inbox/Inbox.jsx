import { useState } from 'react';
import Briefing from '../Briefing';
import Legend from './Legend';
import Tabs from './Tabs';
import MailList from './MailList';
import ReadingPane from './ReadingPane';

export default function Inbox({ emails, setEmails, onOpenPlan, showToast }) {
  const [filter, setFilter] = useState('all');
  const [selectedId, setSelectedId] = useState(null);
  const [showPaneMobile, setShowPaneMobile] = useState(false);

  const filteredEmails = () => {
    if (filter === 'all') return emails;
    if (filter === 'flagged') return emails.filter(e => e.flag);
    return emails.filter(e => e.priority === filter);
  };

  function handleSelect(id) {
    setSelectedId(id);
    setShowPaneMobile(true);
    setEmails(prev => prev.map(e => (e.id === id ? { ...e, unread: false } : e)));
  }

  function handleBack() {
    setShowPaneMobile(false);
  }

  function handleDone(id) {
    showToast('Marked as done');
    setEmails(prev => prev.filter(e => e.id !== id));
    setSelectedId(null);
  }

  function handleReport(id) {
    showToast('Reported and moved to spam', true);
    handleDone(id);
  }

  const selectedEmail = emails.find(e => e.id === selectedId) || null;

  return (
    <div className="view" id="view-dashboard">
      <Briefing onOpenPlan={onOpenPlan} />
      <Legend />
      <Tabs emails={emails} filter={filter} onFilterChange={setFilter} />

      <div className={`mail-shell${showPaneMobile ? ' show-pane' : ''}`}>
        <MailList emails={filteredEmails()} selectedId={selectedId} onSelect={handleSelect} />
        <ReadingPane
          email={selectedEmail}
          onBack={handleBack}
          onReply={() => showToast('Reply drafted in your voice')}
          onSnooze={() => showToast('Snoozed until tomorrow, 9 AM')}
          onDone={handleDone}
          onReport={handleReport}
        />
      </div>
    </div>
  );
}
