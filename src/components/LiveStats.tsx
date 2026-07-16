const STATS = [
    { label: 'Vehicles Tracked', value: '—' },
    { label: 'Active Agencies', value: '—' },
    { label: 'Countries', value: '—' },
    { label: 'Routes live', value: '—' },
];
export default function LiveStats() {
    return (
        <aside className="side-col stats-col">
        <h2 className="col-title">Live STATS</h2>
        <ul className="stat-list">
            {STATS.map((stat) => (
                <li key={stat.label} className="stat-item">
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                </li>
            ))}
        </ul>
        </aside>
    );
}