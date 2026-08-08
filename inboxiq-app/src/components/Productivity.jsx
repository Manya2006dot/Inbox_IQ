import { productivityBars } from '../data/queue';

export default function Productivity() {
  return (
    <div className="view" id="view-productivity">
      <div className="panel">
        <div className="panel-title">Time saved, last 7 days</div>
        <div className="bars">
          {productivityBars.map(x => (
            <div className="bar-col" key={x.d}>
              <div className="bar" style={{ height: `${x.v}%` }} />
              <div className="bar-label">{x.d}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="panel">
        <div className="panel-title">This week at a glance</div>
        <div className="stats-row" style={{ marginBottom: 0 }}>
          <div className="stat-card"><span className="stat-label">Avg. reply time</span><div className="stat-value">38m</div></div>
          <div className="stat-card"><span className="stat-label">Deadlines caught</span><div className="stat-value">14</div></div>
          <div className="stat-card"><span className="stat-label">Spam/danger caught</span><div className="stat-value">6</div></div>
          <div className="stat-card"><span className="stat-label">Hours reclaimed</span><div className="stat-value">6.4h</div></div>
        </div>
      </div>
    </div>
  );
}
