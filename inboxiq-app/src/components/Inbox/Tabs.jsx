const TAB_DEFS = [
  { key: 'all', label: 'All' },
  { key: 'high', label: 'Very important' },
  { key: 'medium', label: 'Average' },
  { key: 'low', label: 'Not so important' },
  { key: 'flagged', label: 'Spam / Danger' },
];

export default function Tabs({ emails, filter, onFilterChange }) {
  function countFor(key) {
    if (key === 'all') return emails.length;
    if (key === 'flagged') return emails.filter(e => e.flag).length;
    return emails.filter(e => e.priority === key).length;
  }

  return (
    <div className="tabs">
      {TAB_DEFS.map(tab => (
        <button
          key={tab.key}
          className={`tab${filter === tab.key ? ' active' : ''}`}
          onClick={() => onFilterChange(tab.key)}
        >
          {tab.label} <span className="count">{countFor(tab.key)}</span>
        </button>
      ))}
    </div>
  );
}
