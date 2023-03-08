import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden lg:block ml-36 ">
      <ul className="flex items-center gap-10 py-3 text-black">
        <li className="txtHover active font-medium">
          <Link to="/">Home</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link to="/blog">Blog</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link to="/about">About us</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
