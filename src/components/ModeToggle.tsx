import { useEffect, useState } from 'react';

type Mode = 'outdoor' | 'indoor';

export default function ModeToggle() {
    const [mode, setMode] = useState<Mode>('outdoor');
        useEffect(() => {
        document.documentElement.dataset.mode = mode;
    }, [mode]);
    return (
    <div className="mode-toggle" role="group" aria-label="Indoor / outdoor mode">
        <button
            type="button"
            className={`mode-option${mode === 'outdoor' ? ' is-active' : ''}`}
            aria-pressed={mode === 'outdoor'}
            onClick={() => setMode('outdoor')}
        > Outdoor </button>
        
    <button
            type="button"
            className={`mode-option${mode === 'indoor' ? ' is-active' : ''}`}
            aria-pressed={mode === 'indoor'}
            onClick={() => setMode('indoor')}
    > Indoor </button>
    </div>
    );
}