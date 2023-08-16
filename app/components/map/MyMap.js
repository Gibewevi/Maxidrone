"use client"
// "use client"
import React, { useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MyExploitations from './MyExploitations';

function MyMap({ data }) {
    const map = useMap();
    const [isClicked, setIsClicked] = useState(false);

    const marketLocation = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#03A9F4" d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"/><circle cx="16" cy="13" r="4" fill="none"/></svg>`;

    const icon = L.divIcon({
        className: "my-custom-pin",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
        html: marketLocation
    });

    useEffect(() => {
        L.marker(data.coordinates, { icon: icon }).addTo(map).bindPopup(`${data.name}<br>Propriétaire: ${data.owner}`);
    }, [map, icon, data]);

    return null;
}

function MyMapComponent() {
    const position = [46.603354, 1.888334];

    return (
        <div className='max-w-5xl mx-auto rounded-xl overflow-hidden'>
            <MapContainer center={position} zoom={6} style={{ width: '100%', height: '800px', zIndex: '0' }}>
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                />
                <MyExploitations />
            </MapContainer>
        </div>
    );
}

export default MyMapComponent;


