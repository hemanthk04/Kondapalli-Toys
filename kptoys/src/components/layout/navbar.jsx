import React from "react";

const Navbar = () => {
  return (
    <header className="relative w-full z-12">
      {/* Logo in the top-left corner */}
      <div className="absolute top-[0.5] left-2">
        <img src="/logo.svg" className="h-12"></img>
      </div>

      {/* Centered Floating Navbar */}
      <nav className="absolute mt-1 left-1/2 transform -translate-x-1/2 bg-white px-16  w-[50%] border border-brown-300 border-opacity-50 py-3 rounded-full ">
        <ul className="flex justify-between text-xs font-semibold font-montserrat text-[var(--primary-color)]">
          <li>
            <a href="#" className="hover:font-[500]">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-[500]">
              Store
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-[500]">
              Maps
            </a>
          </li>
          <li>
            <a href="#" className="hover:font-[500]">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
