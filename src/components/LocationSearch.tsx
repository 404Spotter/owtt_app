import { useEffect, useRef, useState } from 'react';

export interface GeoResult {
    display_name: string;
    lat: string;
    lon: string;
    boundingbox: [string, string, string, string]; // [south, north, west, east]
}
interface Props {
    onPick: (result: GeoResult) => void;
}

export default function LocationSearch({ onPick }: Props) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<GeoResult[]>([]);
    const [open, setOpen] = useState(false);
    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const q = query.trim();
        if (q.length < 3) { setResults([]); return; }

        const controller = new AbortController();
        const timer = setTimeout(() => {
        
            const url =
                'https://nominatim.openstreetmap.org/search?format=json&limit=5&q=' +
                encodeURIComponent(q);
            fetch(url, { signal: controller.signal, headers: { Accept: 'application/json' } })
                .then((res) => res.json())
                .then((data: GeoResult[]) => { setResults(data); setOpen(true); })
                .catch(() => { /* ignore aborts / network errors */ });
            }, 300);
        
            
            return () => { clearTimeout(timer); controller.abort(); };
        }, [query]);

        useEffect(() => {
            const onDocClick = (e: MouseEvent) => {
            if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
            };
            document.addEventListener('mousedown', onDocClick);
            return () => document.removeEventListener('mousedown', onDocClick);
        }, []);

        const choose = (r: GeoResult) => {
            onPick(r);
            setQuery(r.display_name.split(',')[0]);
            setResults([]);
            setOpen(false);
        };

return (
    <div className="location-search" ref={boxRef}>
        <input
            className="location-input"
            type="search"
            placeholder="Search locations…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => results.length > 0 && setOpen(true)}
        />
        {open && results.length > 0 && (
            <ul className="location-results">
                {results.map((r) => (
                    <li key={`${r.lat},${r.lon}`}>
                        <button type="button" className="location-result" onClick={() => choose(r)}>
                            {r.display_name}
                        </button>
                    </li>
                ))}
            </ul>
        )}
    </div>
);
}