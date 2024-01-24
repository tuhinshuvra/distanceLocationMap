import { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import L from 'leaflet';
import 'leaflet-routing-machine';

const MapComponent = () => {

    const userLocation1 = JSON.parse(localStorage.getItem('location'));
    console.log("UserLocation1 :", userLocation1);

    const userOneLat1 = userLocation1?.coordinates?.lat;
    const userOneLan1 = userLocation1?.coordinates?.lng;
    console.log("User Lati and Langi", userOneLat1, userOneLan1)

    useEffect(() => {
        const map = L.map('map').setView([28.2380, 83.9956], 11);
        const mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: 'Leaflet &copy; ' + mapLink + ', contribution',
            maxZoom: 18
        }).addTo(map);

        // const firstPoint = [55.745, 11.945];
        const firstPoint = [userOneLat1, userOneLan1];
        // const firstPoint = [57.76, 11.42];
        const secondPoint = [23.7682801369032, 90.42319619550057]

        L.Routing.control({
            waypoints: [
                L.latLng(firstPoint),
                L.latLng(secondPoint)
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
