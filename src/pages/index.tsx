import Header from './components/Header';
import Navbar from './components/Navbar';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-4">
        <h2 className="font-bold text-lg">Featured</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="h-40 w-full bg-blue-400 rounded-md"></div>
          <div className="h-40 w-full bg-gray-400 rounded-md"></div>
        </div>
        <h2 className="mt-6 font-bold text-lg">Explore</h2>
        <div className="h-40 mt-4 w-full bg-green-300 rounded-md"></div>
      </div>
      <Navbar />
    </div>
  );
};

export default HomePage;
