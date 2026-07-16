import GlobeMap from '../components/GlobeMap';

export default function GlobePage() {
    return (
    <div className="globe-fullscreen">
    <GlobeMap />
    <a className="back-btn" href="#/">← Back</a>
    </div>
    );
}