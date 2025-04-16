import React from "react";
import { Link } from "react-router-dom"; // Importing Link component for routing

const Header = ({ darkMode }) => {
  return (
    <header
      className={`py-4 px-6 flex items-center justify-between shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <h1 className="text-2xl font-bold tracking-wide">
        Naukri<span className="text-blue-500">Clone</span>
      </h1>
      <nav className="space-x-4 text-sm sm:text-base">
        <Link to="/" className="hover:text-blue-500">
          Jobs
        </Link>
        <Link to="/about" className="hover:text-blue-500">
         About
        </Link>
        <Link to="/services" className="hover:text-blue-500">
          Services
        </Link>
        <Link to="/login" className="hover:text-blue-500">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
