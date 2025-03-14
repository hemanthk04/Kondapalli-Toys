import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="relative w-full z-12">
      {/* Logo in the top-left corner */}
      <div className="absolute top-0.5 left-2">
        <img src="/logo.svg" className="h-12" alt="Logo" />
      </div>

      {/* Centered Floating Navbar */}
      <nav className="absolute left-1/2 transform -translate-x-1/2 bg-white px-16 w-[50%] border border-brown-300 border-opacity-50 py-3 rounded-full">
        <ul className="flex justify-between text-xs font-semibold font-montserrat text-[var(--primary-color)]">
          <li>
            <Link to="/" className="hover:font-[500] cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link to="/store" className="hover:font-[500] cursor-pointer">
              Store
            </Link>
          </li>
          <li>
            <Link to="/maps" className="hover:font-[500] cursor-pointer">
              Maps
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:font-[500] cursor-pointer">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
