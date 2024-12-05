import { useRouter } from 'next/router';
import Map from './components/Map'; // Import the Map component

const MapPage = () => {
  const router = useRouter();

  return (
    <div className="relative h-screen">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 p-2 bg-gray-800 text-white rounded-full shadow-md"
      >
        &lt; Back
      </button>
      <div className="flex-1">
        <Map />
      </div>
    </div>
  );
};

export default MapPage;
