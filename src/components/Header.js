import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import ChevronDown from "../images/ChevronDown";

const Header = () => {
  return (
    <div>
      <div className="flex flex-row items-center space-x-40 md:space-x-96">
        <img src={logo} alt="Logo" className="h-12 md:h-20" />
        <div className="space-x-4 md:space-x-16">
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
    </div>
  );
};

export default Header;
