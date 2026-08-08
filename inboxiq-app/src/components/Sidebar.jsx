import { IconInbox, IconCheckSquare, IconClock, IconBarChart, IconMailOutline, IconSettings } from './icons';

const NAV_ITEMS = [
  { key: 'dashboard', label: 'Inbox', icon: IconInbox },
  { key: 'planner', label: 'Action Planner', icon: IconCheckSquare },
  { key: 'deadlines', label: 'Deadlines', icon: IconClock },
  { key: 'productivity', label: 'Productivity', icon: IconBarChart },
];

const WORKSPACE_ITEMS = [
  { key: 'mail', label: 'Connected Mail', icon: IconMailOutline },
  { key: 'settings', label: 'Settings', icon: IconSettings },
];

export default function Sidebar({ view, onNavigate, isOpen }) {
  return (
    <div className={`sidebar${isOpen ? ' open' : ''}`}>
      <div className="logo">
        <div className="logo-mark">IQ</div>
        <div>
          <div className="logo-text">InboxIQ</div>
          <div className="logo-sub">Executive Assistant</div>
        </div>
      </div>

      <nav>
        {NAV_ITEMS.map(item => (
          <NavButton key={item.key} item={item} active={view === item.key} onNavigate={onNavigate} />
        ))}

        <div className="nav-divider" />
        <div className="nav-label">Workspace</div>

        {WORKSPACE_ITEMS.map(item => (
          <NavButton key={item.key} item={item} active={view === item.key} onNavigate={onNavigate} />
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="row"><span className="status-dot" /> All inboxes synced</div>
      </div>
    </div>
  );
}

function NavButton({ item, active, onNavigate }) {
  const Icon = item.icon;
  return (
    <button className={`nav-item${active ? ' active' : ''}`} onClick={() => onNavigate(item.key)}>
      <Icon />
      {item.label}
    </button>
  );
}

export { NAV_ITEMS, WORKSPACE_ITEMS };
