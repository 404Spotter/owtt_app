import { useCallback, useRef } from 'react';
import Map, { useControl } from 'react-map-gl/maplibre';
import type { MapRef } from 'react-map-gl/maplibre';
import { MapboxOverlay } from '@deck.gl/mapbox';
import type { MapboxOverlayProps } from '@deck.gl/mapbox';
import 'maplibre-gl/dist/maplibre-gl.css';
import LocationSearch from './LocationSearch';
import type { GeoResult } from './LocationSearch';

function DeckOverlay(props: MapboxOverlayProps) {
const overlay = useControl(() => new MapboxOverlay(props));
overlay.setProps(props);
return null;
}
const MAP_STYLE = 'https://tiles.openfreemap.org/styles/liberty';

export default function GlobeMap() {
    const mapRef = useRef<MapRef | null>(null);

    const handleLoad = useCallback(() => {
        const map = mapRef.current?.getMap();
        if (!map) return;
        map.setProjection({ type: 'globe' });
        map.on('style.load', () => map.setProjection({ type: 'globe' }));
        map.once('idle', () => {
            map.getContainer()
                .querySelector('.maplibregl-ctrl-attrib')
                ?.classList.remove('maplibregl-compact-show');
            });
    }, []);

const handlePick = useCallback((r: GeoResult) => {
    const map = mapRef.current?.getMap();
    if (!map) return;
    const [south, north, west, east] = r.boundingbox.map(Number);
    map.fitBounds(
        [[west, south], [east, north]],
        { padding: 80, maxZoom: 14, duration: 1600 },
    );
}, []);

    return (
        <>
            <Map
                ref={mapRef}
                initialViewState={{ longitude: 0, latitude: 20, zoom: 1.5 }}
                mapStyle={MAP_STYLE}
                onLoad={handleLoad}
                attributionControl={{ compact: true }}
                style={{ position: 'absolute', inset: 0 }}
            >
                <DeckOverlay interleaved layers={[]} />
            </Map>
            <LocationSearch onPick={handlePick} />
        </>
    );
}