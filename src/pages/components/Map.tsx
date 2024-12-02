import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  return (
    <div className="h-full w-full lg:ml-16">
      <MapContainer
        center={[51.505, -0.09]} // London
        zoom={13}
        className="lg:w-11/12 h-full rounded-lg"
      >
        {/* CartoDB tile layer to ensure labels are in English */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        />
      </MapContainer>
    </div>
  );
};

export default Map;
