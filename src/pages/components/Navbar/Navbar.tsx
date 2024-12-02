import Link from 'next/link';
import { AiOutlineHome, AiOutlineHeart, AiOutlinePlus, AiOutlineCompass } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="fixed bottom-0 flex w-full justify-around bg-white p-4 shadow-md">
      <Link href="/">
       
          <AiOutlineHome className="h-6 w-6 text-gray-600" />
      </Link>
      <Link href="/map">
       
          <AiOutlineCompass className="h-6 w-6 text-gray-600" />
      </Link>
      <Link href="/liked">
       
          <AiOutlineHeart className="h-6 w-6 text-gray-600" />
      </Link>
      <Link href="/add">
       
          <AiOutlinePlus className="h-6 w-6 text-gray-600" />
      </Link>
    </div>
  );
};

export default Navbar;
