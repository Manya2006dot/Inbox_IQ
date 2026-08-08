import { IconMenu, IconSearch } from './icons';

const TITLES = {
  dashboard: ['Inbox', 'Monday, 3 August — Gmail & Outlook, unified'],
  planner: ['Action Planner', 'Your prioritized work queue, ordered by impact'],
  deadlines: ['Deadlines', 'Every date InboxIQ has detected from your inbox'],
  productivity: ['Productivity', 'How much time InboxIQ is giving back'],
  mail: ['Connected Mail', 'Manage the inboxes InboxIQ is reading'],
  settings: ['Settings', 'Tone, notifications and preferences'],
};

export default function Topbar({ view, onToggleSidebar, onSearchClick }) {
  const [title, subtitle] = TITLES[view] || TITLES.dashboard;

  return (
    <div className="topbar">
      <button className="hamburger" onClick={onToggleSidebar}>
        <IconMenu />
      </button>

      <div>
        <div className="page-title">{title}</div>
        <div className="page-sub">{subtitle}</div>
      </div>

      <div className="search" onClick={onSearchClick}>
        <IconSearch />
        <span className="search-text">Search emails, tasks, people...</span>
      </div>

      <div className="accounts">
        <div className="pill"><span className="dot" /> <span className="pill-text">Gmail</span></div>
        <div className="pill"><span className="dot" /> <span className="pill-text">Outlook</span></div>
        <div className="avatar">RK</div>
      </div>
    </div>
  );
}
