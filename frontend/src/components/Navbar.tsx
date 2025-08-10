import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 text-white shadow-md">
      <div className="text-xl font-bold">
        Bookmarked
      </div>
      <ul className="flex space-x-6 text-sm font-medium">
        <button className="px-8 py-2 border-1 rounded-full hover:bg-[#93032e79]">
            <li className="cursor-pointer">Login</li>
        </button>
        <button className="px-8 py-2 border-1 rounded-full bg-[#93032E] hover:bg-[#88465a]">
            <li className="cursor-pointer">Sign Up</li>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
