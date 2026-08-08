import { useState } from 'react';

const TONES = ['Formal', 'Friendly', 'Brief'];

export default function Settings() {
  const [tone, setTone] = useState('Formal');

  return (
    <div className="view" id="view-settings">
      <div className="panel">
        <div className="panel-title">Reply tone</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {TONES.map(t => (
            <button
              key={t}
              className={`btn${tone === t ? ' primary' : ''}`}
              onClick={() => setTone(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
