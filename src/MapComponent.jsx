import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import LineString from 'ol/geom/LineString';
import { fromLonLat } from 'ol/proj';

const MapComponent = ({ startPoint, endPoint }) => {
    const mapRef = useRef(null);

    useEffect(() => {
        console.log("inside useEffect");
        const initializeMap = () => {

            // Check if mapRef.current is null
            if (!mapRef.current) {
                console.log("Map ref is null");
                return;
            }

            if (mapRef.current.offsetWidth === 0 || mapRef.current.offsetHeight === 0) {
                console.log("Map container not ready");
                console.log("mapRef.current.offsetWidth :", mapRef.current.offsetWidth);
                console.log("mapRef.current.offsetHeight :", mapRef.current.offsetHeight);
                return;
            }

            // Initialize map
            const map = new Map({
                target: mapRef.current,
                layers: [
                    new TileLayer({
                        source: new XYZ({
                            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                        }),
                    }),
                ],
                view: new View({
                    center: fromLonLat([(startPoint.lng + endPoint.lng) / 2, (startPoint.lat + endPoint.lat) / 2]),
                    zoom: 10,
                }),
            });

            // Add points and route
            const start = fromLonLat([startPoint.lng, startPoint.lat]);
            const end = fromLonLat([endPoint.lng, endPoint.lat]);

            const pointLayer = new VectorLayer({
                source: new VectorSource({
                    features: [
                        new Feature({
                            geometry: new Point(start),
                        }),
                        new Feature({
                            geometry: new Point(end),
                        }),
                    ],
                }),
            });

            const lineLayer = new VectorLayer({
                source: new VectorSource({
                    features: [
                        new Feature({
                            geometry: new LineString([start, end]),
                        }),
                    ],
                }),
            });

            map.addLayer(pointLayer);
            map.addLayer(lineLayer);
        };

        initializeMap();
    }, [startPoint, endPoint, mapRef.current?.offsetWidth, mapRef.current?.offsetHeight]);


    return <div ref={mapRef} style={{ width: '1400px', height: '600px' }} />;
};

export default MapComponent;