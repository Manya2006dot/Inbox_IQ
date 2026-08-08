# InboxIQ — AI Executive Email Assistant

InboxIQ turns a flooded inbox into a prioritized work queue. Instead of just summarizing
emails or drafting replies, it decides **what needs you, why it matters, and how long it
will take** — then hands you a daily action plan.

This repo is the **frontend prototype**: a React + Vite dashboard wired to realistic mock
data, built to validate the product experience before connecting real inboxes and an LLM
backend.

> 🎨 UI-only prototype. No real email accounts are connected — all data lives in
> `src/data/` and resets on page reload.

---

## ✨ Features

- **Unified inbox** — Gmail-style list + reading pane, with Gmail and Outlook shown as
  connected sources
- **AI priority scoring** — every email gets a 🔴 High / 🟠 Average / 🟢 Low priority dot
- **Spam & phishing detection** — flagged emails get a `Spam` or `Danger` badge and a
  warning banner in the reading pane
- **AI summaries** — a one-line "why this matters" summary on every email
- **Action Planner** — a checkable, time-estimated queue of what to do next, in priority
  order
- **Deadline tracking** — auto-surfaced dates and events pulled from your inbox
- **Productivity dashboard** — time saved, response rate, and weekly trends
- **Daily briefing** — a short AI-written summary of what needs attention today
- **Responsive** — collapses into a mobile-friendly single-column layout with a slide-in
  nav drawer below 860px

---

## 🖥️ Tech stack

| Layer      | Choice                          |
|------------|----------------------------------|
| Framework  | React 18 + Vite 5                |
| Styling    | Plain CSS with design tokens (no framework) |
| State      | React hooks (`useState`) — no external state library yet |
| Data       | Local mock data in `src/data/`   |

No backend yet — see [Roadmap](#-roadmap-to-the-real-product) for what connecting it for
real would involve.

---

## 🚀 Getting started

```bash
git clone https://github.com/<your-username>/inboxiq.git
cd inboxiq
npm install
npm run dev
```

Open the local URL Vite prints (usually **http://localhost:5173**).

### Build for production

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

---

## 📁 Project structure

```
src/
├── main.jsx                  # React entry point
├── App.jsx                   # Top-level state + view routing
├── styles/
│   └── index.css             # All design tokens & styles
├── data/
│   ├── emails.js              # Mock inbox data
│   └── queue.js                # Mock action-planner + productivity data
└── components/
    ├── icons.jsx               # Shared inline SVG icons
    ├── Sidebar.jsx              # Left navigation
    ├── Topbar.jsx               # Header: search, accounts, hamburger
    ├── Briefing.jsx             # Daily AI briefing banner
    ├── Toast.jsx                # Bottom toast notifications
    ├── ActionPlanner.jsx        # Prioritized work queue view
    ├── Deadlines.jsx            # Detected deadlines view
    ├── Productivity.jsx         # Time-saved chart + stats view
    ├── ConnectedMail.jsx        # Connected inbox accounts view
    ├── Settings.jsx             # Reply tone settings view
    └── Inbox/
        ├── Inbox.jsx             # Inbox view container (filter/selection state)
        ├── Tabs.jsx               # Priority filter tabs
        ├── Legend.jsx             # Priority/flag color legend
        ├── MailList.jsx           # List of email rows
        ├── MailRow.jsx            # Single email row
        └── ReadingPane.jsx        # Selected email detail + actions
```

Each view owns its own component; shared visual language (colors, spacing, type) lives
in one file — `src/styles/index.css` — so restyling the whole app means editing one place.

---

## 🗺️ Roadmap to the real product

This prototype proves the UX. Turning it into the real InboxIQ means:

- [ ] **Auth** — Google OAuth (and Microsoft OAuth for Outlook)
- [ ] **Live mail** — Gmail API + Outlook/Graph API integration, replacing `data/emails.js`
- [ ] **AI engine** — LLM calls (Gemini / OpenAI / Llama) for:
  - Intent detection & task extraction
  - Priority + consequence scoring
  - Spam/phishing detection
  - Tone-matched reply drafting
- [ ] **Backend** — FastAPI service + PostgreSQL for persistence, replacing local React state
- [ ] **Scheduling** — deadline detection wired to calendar events/reminders
- [ ] **Multi-account sync** — background polling/webhooks per connected inbox

---

## 📄 License

Prototype for internal / personal use. Add a license here before open-sourcing.
