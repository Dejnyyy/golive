import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const Map = dynamic(() => import('./components/Map'), { ssr: false });

const MapPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with Back Button */}
      <div className="flex items-center p-4 bg-gray-100 shadow-md">
        <button
          onClick={() => router.push('/')}
          className="flex items-center text-gray-600"
        >
          <AiOutlineArrowLeft className="h-6 w-6 mr-2" />
          Back
        </button>
        <h1 className="text-lg font-bold ml-4">Map</h1>
      </div>

      {/* Map Section */}
      <div className="flex-1">
        <Map />
      </div>
    </div>
  );
};

export default MapPage;
