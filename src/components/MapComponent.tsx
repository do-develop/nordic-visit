import React, { useState, useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import {useGeographic} from 'ol/proj.js';
import VectorSource from 'ol/source/Vector';
import Feature from 'ol/Feature';
import { Point } from 'ol/geom';

interface MapComponentProps {
    curr_address: string;
    curr_coordinates: number[] | undefined;
}

const MapComponent: React.FC<MapComponentProps> = ( curr_accomodation ) => {
    useGeographic();
    const mapElement = useRef<HTMLDivElement>(null);
    const mapRef = useRef<Map | null>(null);
    const [view, setView] = useState<View | null>(null);

    useEffect(() => {
        if (!mapElement.current || mapRef.current) return;

        const initialView = new View({
            center: [0, 0],
            zoom: 2,
        });

        const initialMap = new Map({
            target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: initialView,
        });

        mapRef.current = initialMap;
        setView(initialView);
    }, [mapElement]);

    useEffect(() => {
        if (!mapRef.current || !view) return;

        const updateMap = async (address: string) => {
            let geocodeCoordinates = [0, 0];
            
            try{
                const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
                    .then(response => response.json());

                if (response && response.length > 0) {
                    geocodeCoordinates = [parseFloat(response[0].lon), parseFloat(response[0].lat)];
                } else {
                    geocodeCoordinates = curr_accomodation.curr_coordinates || [0, 0];
                    console.log("GeocodeCoordinates: ", geocodeCoordinates);
                }

                const point = new Point(geocodeCoordinates);

                const vectorLayer = new VectorLayer({
                    source: new VectorSource({
                        features: [new Feature(point)],
                    }),
                    style: {
                        'circle-radius': 7,
                        'circle-fill-color': 'red',
                    },
                });

                // Clear previous vector layers before adding the new one
                mapRef.current?.getLayers().getArray().forEach(layer => {
                    if (layer instanceof VectorLayer) {
                        mapRef.current?.removeLayer(layer);
                    }
                });

                mapRef.current?.addLayer(vectorLayer);
                view.setCenter(geocodeCoordinates);
                console.log("view: ", view.getCenter())
                view.setZoom(12);
            } catch (error) {
                console.error('Error fetching geocode data:', error);
            }
            
            
        };

        updateMap(curr_accomodation.curr_address);
    }, [curr_accomodation, view]);

    return <div id="map" ref={mapElement} style={{ width: '98%', height: '400px' }} />;
};

export default MapComponent;