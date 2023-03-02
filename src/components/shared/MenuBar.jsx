import React from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  return (
    <nav className="container hidden lg:block">
      <ul className="flex items-center py-3 space-x-8">
        <div className="relative group">
          <li className="uppercase text-xl p-3 w-[267px]  text-center bg-primary-600 text-white rounded-t-md cursor-pointer space-x-2 font-semibold">
            <span className="lg:hidden xl:inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 inline-block -mt-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
            <span>Categories</span>
            <span className="lg:hidden xl:inline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 inline-block"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </li>
          <div className="shadow-custom opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white hidden lg:block rounded-b-md absolute top-12 left-0 w-full transition duration-300 delay-100 ease-in-out">
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600"> <Link to='/categories'>Fruits & Vegetable</Link></li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600"> <Link to='/categories'>Meats & Fish</Link></li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600"> <Link to='/categories'>Breads & Bakery</Link></li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600"> <Link to='/categories'>Frozen Foods</Link></li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600"> <Link to='/categories'>Breakfast & Dairy</Link></li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600"> <Link to='/categories'>Biscuits & Snacks</Link></li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600"> <Link to='/categories'>Beverages</Link></li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600"> <Link to='/categories'>Grocery</Link></li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600"> <Link to='/categories'>Clothes & Shoes</Link></li>
          </div>
        </div>
        <li className="txtHover active font-medium pl-0  md:pl-12">
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

export default MenuBar;
