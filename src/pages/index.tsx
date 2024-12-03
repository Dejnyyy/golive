import dynamic from 'next/dynamic';
import { AiOutlinePlus, AiOutlineHeart, AiOutlineEnvironment, AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import Image from 'next/image';
import { IoPersonOutline } from "react-icons/io5";

// Dynamically load the Map component
const Map = dynamic(() => import('./components/Map'), { ssr: false });

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white p-4">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="font-bold text-xl">LOGO</div>

        {/* Search bar on larger screens, search icon on smaller screens */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search"
            className="hidden sm:block rounded-md border border-gray-300 px-4 py-2 lg:w-1/3 w-1/2 mx-auto"
          />
          <AiOutlineSearch className="float-right sm:hidden h-6 w-6 text-gray-600 cursor-pointer" />
        </div>

        <div className="flex items-center gap-4">
          <AiOutlinePlus className="h-6 w-6 text-gray-600 cursor-pointer" />
          <AiOutlineHeart className="h-6 w-6 text-gray-600 cursor-pointer" />
          <AiOutlineEnvironment className="h-6 w-6 text-gray-600 cursor-pointer" />
          <AiOutlineBell className="h-6 w-6 text-gray-600 cursor-pointer" />
          <IoPersonOutline className="h-6 w-6 text-gray-600 cursor-pointer" /> {/* Profile Icon */}
        </div>
      </header>

      {/* Main Content */}
      <main className="mt-6 grid md:grid-cols-4 grid-cols-1 sm:gap-4">
        {/* Large Featured Image */}
        <div className="col-span-3 lg:ml-16">
          <div className="h-80 bg-gray-300 rounded-md overflow-hidden group">
            <Image
              src="/beach.jpg" // Replace with your featured image
              alt="Featured"
              width={600}
              height={400}
              className="h-full w-full object-fit rounded-md transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Sidebar with Featured Images */}
        <div className="md:col-span-1 lg:ml-16 lg:mr-4 xl:mr-12">
          <div>
            <h1 className="text-left mt-12 sm:mt-0 text-2xl">Featured</h1>
          </div>
          <div className="space-y-4">
            <div className="sm:h-20 bg-gray-300 rounded-md overflow-hidden group">
              <Image
                src="/sol.webp" // Replace with your featured image
                alt="Featured Thumbnail"
                width={150}
                height={100}
                className="h-full w-full object-fit rounded-md transition-transform duration-500 group-hover:scale-125"
              />
            </div>
            <div className="sm:h-20 bg-gray-300 rounded-md overflow-hidden group">
              <Image
                src="/louvree.jpg" // Replace with your featured image
                alt="Featured Thumbnail"
                width={150}
                height={100}
                className="h-full w-full object-fit rounded-md transition-transform duration-500 group-hover:scale-125"
              />
            </div>
            <div className="sm:h-20 bg-gray-300 rounded-md overflow-hidden group">
              <Image
                src="/eiffeltower.jpg" // Replace with your featured image
                alt="Featured Thumbnail"
                width={150}
                height={100}
                className="h-full w-full object-fit rounded-md transition-transform duration-500 group-hover:scale-125"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Explore Section */}
      <section className="mt-6">
        <h2 className="text-lg font-bold mb-4 lg:ml-16">Explore</h2>
        <div className="h-72 rounded-md w-1/2">
          <Map />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
