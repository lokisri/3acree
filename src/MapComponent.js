
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer ,  GeoJSON} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ latitude, longitude }) => {
  const [pathData, setPathData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'f131656c91df5f85150d193e8027ef8f49bc834a';

      try {
        const response = await fetch(
          `https://bhuvan-app1.nrsc.gov.in/api/routing/curl_routing_state.php?lat1=${latitude}&lon1=${longitude}&token=${apiKey}`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          setPathData(data[0]);
        } else {
          console.error('No data available');
        }
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />
      {pathData && <GeoJSON data={pathData} />}
      
    </MapContainer>
  );
};

export default MapComponent;
