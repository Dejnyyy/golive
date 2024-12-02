const Header = () => {
    return (
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <div className="font-bold text-lg">LOGO</div>
        <input
          type="text"
          placeholder="Search"
          className="flex-1 mx-4 rounded-md border px-2 py-1"
        />
        <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
      </div>
    );
  };
  
  export default Header;
  