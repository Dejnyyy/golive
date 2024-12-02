import dynamic from 'next/dynamic';
import { AiOutlinePlus, AiOutlineHeart, AiOutlineEnvironment, AiOutlineBell } from 'react-icons/ai';
import Image from "next/image"
// Dynamically load the Map component
const Map = dynamic(() => import('./components/Map'), { ssr: false });

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="font-bold text-xl">LOGO</div>
        <input
          type="text"
          placeholder="Search"
          className="rounded-md border border-gray-300 px-4 py-2 w-1/3"
        />
        <div className="flex items-center gap-4">
          <AiOutlinePlus className="h-6 w-6 text-gray-600 cursor-pointer" />
          <AiOutlineHeart className="h-6 w-6 text-gray-600 cursor-pointer" />
          <AiOutlineEnvironment className="h-6 w-6 text-gray-600 cursor-pointer" />
          <AiOutlineBell className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-6 grid grid-cols-4 gap-4">
        {/* Large Featured Image */}
        <div className="col-span-3 lg:ml-16 ">

          <div className="h-64 bg-gray-300 rounded-md">
            <Image
              src="" // Replace with your featured image
              alt="Featured"
              width={500}
              height={400}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        </div>

        {/* Sidebar with Featured Images */}
        <div className="col-span-1 space-y-4 lg:ml-16">
          <div className="h-20 bg-gray-300 rounded-md">
            <Image
              src="" // Replace with your image
              alt="Featured Thumbnail"
              width={150}
              height={100}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="h-20 bg-gray-300 rounded-md">
            <img
              src="" // Replace with your image
              alt="Featured Thumbnail"
              width={150}
              height={100}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
          <div className="h-20 bg-gray-300 rounded-md">
            <img
              src="" // Replace with your image
              alt="Featured Thumbnail"
              width={150}
              height={100}
              className="h-full w-full object-cover rounded-md"
            />
          </div>
        </div>
      </main>

      {/* Explore Section */}
      <section className="mt-6">
        <h2 className="text-lg font-bold mb-4 lg:ml-16">Explore</h2>
        <div className="h-72 rounded-md">
          <Map />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
