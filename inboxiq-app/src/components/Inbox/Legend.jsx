export default function Legend() {
  return (
    <div className="legend-bar">
      <span className="legend-item"><span className="legend-dot" style={{ background: 'var(--high)' }} /> Very important</span>
      <span className="legend-item"><span className="legend-dot" style={{ background: 'var(--med)' }} /> Average</span>
      <span className="legend-item"><span className="legend-dot" style={{ background: 'var(--low)' }} /> Not so important</span>
      <span className="legend-item"><span className="flag-badge spam">Spam</span> Likely spam</span>
      <span className="legend-item"><span className="flag-badge danger">Danger</span> Suspicious / phishing</span>
    </div>
  );
}
