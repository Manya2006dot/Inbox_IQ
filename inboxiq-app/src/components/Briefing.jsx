export default function Briefing({ onOpenPlan }) {
  return (
    <div className="briefing">
      <div className="briefing-text">
        You have <b>3 high-priority emails</b> and <b>1 flagged as suspicious</b>. I have queued the Meridian
        escalation first — ignoring it risks delaying the renewal by a week.
      </div>
      <button className="briefing-cta" onClick={onOpenPlan}>Open Action Plan →</button>
    </div>
  );
}
