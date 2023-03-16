import React from "react";
import ActiveLink from "../../hooks/ActiveLink";

const Navbar = () => {
  return (
    <nav className="hidden lg:block ml-36 ">
      <ul className="flex items-center gap-10 py-3 text-black">
        <li className="txtHover active font-medium">
          <ActiveLink to="/">Home</ActiveLink>
        </li>
        <li className="txtHover active font-medium">
          <ActiveLink to="/categories">Shop</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/blog">Blog</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/about">About</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/contact">Contact</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/faq">FAQ</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
