import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import ChevronDown from "../images/ChevronDown";

const Header = () => {
  return (
    <div className="flex justify-between px-16 w-full">
      <img src={logo} alt="Logo" className="h-12 md:h-20" />
      <div className="space-x-4 md:space-x-16 flex items-center">
        <Link to="/tracker">Tracker</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signin">Sign In</Link>
        <Link className="text-white bg-rose p-4 px-8 rounded-lg" to="/signup">
          Sign Up
        </Link>
      </div>
      {/* <ChevronDown/> */}
    </div>
  );
};

export default Header;
