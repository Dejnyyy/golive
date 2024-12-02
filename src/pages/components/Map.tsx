import { MapContainer, TileLayer, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

// Component to update the map center dynamically
const SetViewOnLocation = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    if (coords) {
      map.setView(coords, 7); // Center the map on the provided coordinates
    }
  }, [coords, map]);
  return null;
};

// Component to create a pulsating circle
const PulsatingCircle = ({ coords }: { coords: [number, number] }) => {
  const [radius, setRadius] = useState(2000); // Initial radius in meters
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRadius((prevRadius) => {
        // Toggle between increasing and decreasing the radius
        if (isIncreasing && prevRadius >= 3000) {
          setIsIncreasing(false);
        } else if (!isIncreasing && prevRadius <= 2000) {
          setIsIncreasing(true);
        }

        return isIncreasing ? prevRadius + 500 : prevRadius - 500;
      });
    }, 300); // Adjust the interval time for smoother animation

    return () => clearInterval(interval); // Clean up on component unmount
  }, [isIncreasing]);

  return <Circle center={coords} radius={radius} color="blue" fillOpacity={0.3} />;
};

const Map = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    // Use Geolocation API to get user's position
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (location) => {
          const { latitude, longitude } = location.coords;
          setPosition([latitude, longitude]); // Set the user's coordinates
        },
        (error) => {
          console.error('Error getting location:', error);
          // Default to London if geolocation fails
          setPosition([51.505, -0.09]);
        }
      );
    } else {
      console.warn('Geolocation is not supported by this browser.');
      // Default to London if geolocation is not available
      setPosition([51.505, -0.09]);
    }
  }, []);

  return (
    <div className="h-full w-full lg:ml-16">
      {position ? (
        <MapContainer
          center={position} // Center the map at the user's location
          zoom={7}
          className="lg:w-11/12 h-full rounded-lg"
        >
          {/* CartoDB tile layer to ensure labels are in English */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
          />
          {/* Add the pulsating circle */}
          <PulsatingCircle coords={position} />
          {/* Update the map view dynamically based on the position */}
          <SetViewOnLocation coords={position} />
        </MapContainer>
      ) : (
        <p>Loading map...</p> // Fallback while waiting for location
      )}
    </div>
  );
};

export default Map;
