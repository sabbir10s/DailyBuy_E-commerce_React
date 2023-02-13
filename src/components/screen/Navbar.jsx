import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center pl-32 py-3 space-x-8 text-black">
        <li className="txtHover active font-medium">
          <Link to="/">Home</Link>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <Link to="/products">Products</Link>
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
