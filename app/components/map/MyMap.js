"use client"
// "use client"
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import MyExploitations from './MyExploitations';

const exploitations = [
    {
        id: 1,
        name: "GAEC Des Serres de la Farède",
        owner: "Jean Dupont",
        coordinates: [44.417690, 2.009127],
        date: ['01/01/2018', '01/01/2019', '01/01/2020']
    },
    {
        id: 2,
        name: "Lescure-Jaoul",
        owner: "Jean Dupont",
        coordinates: [44.366116, 2.064557],
        date: ['01/01/2018', '01/01/2019', '01/01/2020', '01/01/2021', '01/01/2022']
    },
    {
        id: 3,
        name: "GAEC de Rouergue",
        owner: "Jean Dupont",
        coordinates: [44.371274, 1.991126],
        date: ['01/01/2018', '01/01/2019', '01/01/2020', '01/01/2021']
    },
    {
        id: 4,
        name: "Exploitation Aveyronnaise",
        owner: "Jean Dupont",
        coordinates: [44.345746, 1.991469],
        date: ['01/01/2018', '01/01/2019', '01/01/2020', '01/01/2021', '01/01/2022', '01/01/2023']
    }
];

function MyMap() {
    const [isOpen, setIsOpen] = useState(false);
    const [exploitationId, setExploitationId] = useState(null);

    const getBounds = () => {
        const lats = exploitations.map(exp => exp.coordinates[0]);
        const longs = exploitations.map(exp => exp.coordinates[1]);

        return [
            [Math.min(...lats), Math.min(...longs)],
            [Math.max(...lats), Math.max(...longs)]
        ];
    };

    function FlyToExploitation({ exploitationId }) {
        const map = useMap();
    
        useEffect(() => {
            if (exploitationId) {
                const selectedExploitation = exploitations.find(exp => exp.id === exploitationId);
                if (selectedExploitation) {
                    map.flyTo(selectedExploitation.coordinates, 14);
                }
            } else {
                map.fitBounds(getBounds());
            }
        }, [exploitationId, map]);
    
        return null;
    }
    
      
    const handleExploitation = (exploitationId) => {
        setIsOpen(!isOpen);
        setExploitationId(exploitationId);
    };

    const handleSelectChange = (event) => {
        const selectedExploitationId = parseInt(event.target.value);
        setExploitationId(selectedExploitationId);
        setIsOpen(true);
    };


    const ExploitationDate = (id) => {
        const exploitation = exploitations.find(exp => exp.id === id);
        if (exploitation) {
            return exploitation.date.map((date, index) => (
                <div className='flex flex-row gap-x-3'>
                    <span>prospect_{date}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#03A9F4" d="M13 21h13.17l-2.58 2.59L25 25l5-5l-5-5l-1.41 1.41L26.17 19H13v2z" /><path fill="#03A9F4" d="M22 14v-4a1 1 0 0 0-.29-.71l-7-7A1 1 0 0 0 14 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2h-2v2H4V4h8v6a2 2 0 0 0 2 2h6v2Zm-8-4V4.41L19.59 10Z" /></svg>
                </div>
            ));
        }
        return null; // Si aucune exploitation ne correspond à l'ID
    };

    return (
        <div className="max-w-5xl mx-auto rounded-xl relative overflow-x-hidden overflow-hidden">
            <MapContainer
                zoom={6}
                style={{
                    width: '100%',
                    height: 'calc(100vh - 100px)',
                    zIndex: '0'
                }}
                >
                <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
                />
                <MyExploitations exploitations={exploitations} handleExploitation={handleExploitation} />
                <FlyToExploitation exploitationId={exploitationId} />
            </MapContainer>


            <div className="absolute top-3 left-[60px] z-10">
                <select className="p-2 rounded" onChange={handleSelectChange}>
                    {exploitations.map((exploitation) => (
                        <option key={exploitation.id} value={exploitation.id}>
                            {exploitation.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className={`transform ${isOpen ? 'translate-x-0' : 'translate-x-[250px]'} duration-500 transition-transform ease-in-out flex flex-col items-center z-10 absolute top-0 right-0 w-[250px] h-[800px] bg-[white] border border-1 border-slate-100`}>
                <div className='w-full flex flex-row gap-x-2 items-center justify-center bg-[#03A9F4] p-4 h-[40px] shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="white" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2.002 2.002 0 0 0-2-2h-4 a2.002 2.002 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z" /></svg>
                    <span className='text-white font-bold text-md'>Prospection</span>
                </div>
                <div className='flex flex-col items-center gap-2 mt-5'>
                    {exploitationId && ExploitationDate(exploitationId)}
                </div>
            </div>
        </div>
    );

}

export default MyMap;


