import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../screen/Navbar";
import {BiChevronDown} from "react-icons/bi";

const MenuBar = () => {
  return (
    <div className="container hidden lg:flex items-center gap-10 w-full">
      <ul className="flex items-center py-2 w-[300px]">
        <div className="relative group">
          <li className=" flex items-center justify-center uppercase text-xl p-3 text-center bg-primary-600 text-white rounded-t-md cursor-pointer space-x-2 font-semibold">
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
            <BiChevronDown className="text-[25px]"/>
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
      </ul>

      <Navbar/>
    </div>
  );
};

export default MenuBar;
