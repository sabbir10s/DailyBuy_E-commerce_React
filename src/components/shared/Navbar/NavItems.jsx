import React from "react";
import ActiveLink from "../../theme/ActiveLink";

const NavItems = () => {
  return (
    <nav className="hidden lg:block">
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
          <ActiveLink to="/about">About us</ActiveLink>
        </li>
        <li className="txtHover font-medium">
          {" "}
          <ActiveLink to="/contact">Contact us</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavItems;
