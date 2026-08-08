import { useState, useCallback, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Toast from './components/Toast';
import Inbox from './components/Inbox/Inbox';
import ActionPlanner from './components/ActionPlanner';
import Deadlines from './components/Deadlines';
import Productivity from './components/Productivity';
import ConnectedMail from './components/ConnectedMail';
import Settings from './components/Settings';
import { initialEmails } from './data/emails';
import { initialQueue } from './data/queue';

export default function App() {
  const [view, setView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [emails, setEmails] = useState(initialEmails);
  const [queue, setQueue] = useState(initialQueue);
  const [toast, setToast] = useState({ message: '', visible: false, danger: false });
  const toastTimer = useRef(null);

  const showToast = useCallback((message, danger = false) => {
    setToast({ message, visible: true, danger });
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToast(t => ({ ...t, visible: false }));
    }, 2200);
  }, []);

  function navigate(nextView) {
    setView(nextView);
    setSidebarOpen(false);
  }

  return (
    <div className="app">
      {sidebarOpen && <div className="backdrop show" onClick={() => setSidebarOpen(false)} />}
      <Sidebar view={view} onNavigate={navigate} isOpen={sidebarOpen} />

      <div className="main">
        <Topbar
          view={view}
          onToggleSidebar={() => setSidebarOpen(o => !o)}
          onSearchClick={() => showToast('Search coming soon')}
        />

        <div className="content">
          {view === 'dashboard' && (
            <Inbox
              emails={emails}
              setEmails={setEmails}
              onOpenPlan={() => navigate('planner')}
              showToast={showToast}
            />
          )}
          {view === 'planner' && <ActionPlanner queue={queue} setQueue={setQueue} />}
          {view === 'deadlines' && <Deadlines emails={emails} />}
          {view === 'productivity' && <Productivity />}
          {view === 'mail' && <ConnectedMail />}
          {view === 'settings' && <Settings />}
        </div>
      </div>

      <Toast message={toast.message} visible={toast.visible} danger={toast.danger} />
    </div>
  );
}
