import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import ChevronDown from "../images/ChevronDown";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-16 w-full">
      <img src={logo} alt="Logo" className="h-12 md:h-20" />
      <div className="space-x-4 md:space-x-20 flex items-center">
        <Link to="/tracker" className="hover:scale-105 hover:text-rose transition duration-150 ease-in-out">Tracker</Link>
        <Link to="/about" className="hover:scale-105 hover:text-rose transition duration-150 ease-in-out">About</Link>
        <Link to="/contact" className="hover:scale-105 hover:text-rose transition duration-150 ease-in-out">Contact</Link>
        <Link to="/signin" className="hover:scale-105 hover:text-rose transition duration-150 ease-in-out">Sign In</Link>
        <Link className="text-white bg-rose p-3 px-10 rounded-lg hover:bg-[#e11d48] hover:scale-105 transition duration-150 ease-in-out" to="/signup">
          Sign Up
        </Link>
      </div>
      {/* <ChevronDown/> */}
    </div>
  );
};

export default Header;
