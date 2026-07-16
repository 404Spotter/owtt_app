const LEFT_NAV = [
    { label: 'Live Map', href: '#/' },
    { label: 'Routes', href: '#/' },
    { label: 'Blog', href: '#/blog' },
];
const RIGHT_NAV = [
    { label: 'Data', href: '#/' },
    { label: 'About', href: '#/' },
    { label: 'Contact', href: '#/' },
];
export default function Header() {
    return (
        <header className="site-header">
            <nav className="header-nav">
                <ul className="nav-group">  
                    {LEFT_NAV.map((item) => (
                        <li key={item.label}>
                            <a className="nav-link" href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>   
                <h1 className="title">Open World Transit Tracker</h1>
                <ul className="nav-group">
                    {RIGHT_NAV.map((item) => (
                        <li key={item.label}>
                            <a className="nav-link" href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        <p className="subtitle">Real-time public transit, everywhere on Earth.</p>
        </header>
    );
}