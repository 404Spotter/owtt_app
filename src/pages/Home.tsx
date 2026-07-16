import Header from '../components/Header';
import GlobeMap from '../components/GlobeMap';
import LiveStats from '../components/LiveStats';
import SiteUpdates from '../components/SiteUpdates';

export default function Home() {
    return (
        <main className="home">
            <Header />
            <div className="home-layout">
            <LiveStats />
            <section className="globe-card">
            <GlobeMap />
            <a className="load-globe-btn" href="#/globe">Load Globe</a>
            </section>
            <SiteUpdates />
            </div>
        </main>
    );
}