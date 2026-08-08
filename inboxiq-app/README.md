# InboxIQ — Frontend Prototype

A React + Vite prototype of the InboxIQ dashboard: a Gmail-style inbox with AI priority
scoring, spam/danger flags, an action planner, deadline tracking, and a productivity view.

This is UI only, wired to mock data in `src/data/`. No real email accounts are connected yet.

## Project structure

```
src/
  main.jsx                 entry point
  App.jsx                  top-level state + view routing
  styles/index.css         design tokens + all styles
  data/
    emails.js               mock inbox data
    queue.js                mock action planner + productivity data
  components/
    icons.jsx               shared inline SVG icons
    Sidebar.jsx              left nav
    Topbar.jsx               header bar (search, accounts, hamburger)
    Briefing.jsx             daily AI briefing banner
    Toast.jsx                bottom toast notifications
    ActionPlanner.jsx        prioritized work queue view
    Deadlines.jsx            detected deadlines view
    Productivity.jsx         time-saved chart + stats view
    ConnectedMail.jsx        connected inbox accounts view
    Settings.jsx             reply tone settings view
    Inbox/
      Inbox.jsx              inbox view container (state for filter/selection)
      Tabs.jsx                priority filter tabs
      Legend.jsx              priority/flag color legend
      MailList.jsx            list of email rows
      MailRow.jsx              single email row
      ReadingPane.jsx          selected email detail + actions
```

## Running it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Building for production

```bash
npm run build
npm run preview
```

## Next steps toward the real product

- Replace `src/data/emails.js` with real data from the Gmail & Outlook APIs (OAuth via Google/Microsoft)
- Replace the mock `ai` fields with real calls to an LLM (Gemini/OpenAI/Llama) for summarization,
  priority scoring, and spam/phishing detection
- Wire `ActionPlanner` and `Deadlines` to a backend (FastAPI + PostgreSQL, per the product doc) instead of local state
- Add authentication (Google OAuth) and per-user data persistence
