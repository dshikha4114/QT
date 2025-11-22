import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/projects" className="hover:text-gray-400">Projects</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        {/* <Link to="/projects" className="hover:text-gray-400">Projects</Link> */}
            {/* <Link to="/contact" className="hover:text-gray-400">Contact</Link> */}

      </div>
    </nav>
  );
};

export default Navbar;
