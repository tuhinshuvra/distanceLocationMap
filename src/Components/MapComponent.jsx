import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const MapComponent = () => {
    useEffect(() => {
        const map = L.map('map').setView([28.2380, 83.9956], 11);
        const mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Leaflet &copy; ' + mapLink + ', contribution',
            maxZoom: 18
        }).addTo(map);

        L.Routing.control({
            waypoints: [
                L.latLng(57.74, 11.94),
                L.latLng(57.6792, 11.949)
            ]
        }).addTo(map);

        return () => {
            // Clean up code, remove event listeners, etc. if needed
        };
    }, []);

    return (
        <div id="map" style={{ width: '100%', height: '100vh' }}>
            <MapContainer style={{ width: '100%', height: '100%' }}>
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='Leaflet &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, contribution'
                    maxZoom={18}
                />
            </MapContainer>
        </div>
    );
};

export default MapComponent;
