import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center pl-32 py-3 space-x-8 text-black">
        <li className="txtHover active font-medium">Home</li>
        <li className="txtHover font-medium">Products</li>
        <li className="txtHover font-medium">Blog</li>
        <li className="txtHover font-medium">About us</li>
        <li className="txtHover font-medium">Contact us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
