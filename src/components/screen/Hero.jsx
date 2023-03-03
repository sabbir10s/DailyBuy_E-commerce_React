import React, {useState} from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import {BiChevronUp, BiChevronDown} from "react-icons/bi";

const Hero = () => {
  const [active,
    setActive] = useState(true);
  const handleButton = () => {
    if (active) {
      return setActive(false)
    } else 
      return setActive(true)
  }
  return (
    <div className="container mt-2">
      <div className="flex items-center gap-10 w-full">
        <button
          onClick={handleButton}
          className="w-[300px] uppercase text-xl py-3 text-center bg-primary-600 text-white rounded-t-md cursor-pointer space-x-2 font-semibold flex items-center justify-center">
          <span className="hidden lg:inline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block -mt-1">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
            </svg>
          </span>
          <span>Categories</span>
          {
           active && <BiChevronUp className="text-[25px]"/>
          }
          {
           !active && <BiChevronDown className="text-[25px]"/>
          }
            
        </button>
        <Navbar/>
      </div>
      {active && <div>
        <div className="flex items-center gap-8">
          <div className="shadow-custom_secondary hidden lg:block rounded-b-[10px] w-[300px]">
            <ul>
              <li className="py-3 border-b border-gray-100 txtHover text-gray-600">Fruits & Vegetable</li>
              <li className="py-3 border-b border-gray-100 txtHover text-gray-600">Meats & Fish</li>
              <li className="py-3 border-b border-gray-100 txtHover text-gray-600">Breads & Bakery</li>
              <li className="py-3 border-b border-gray-100 txtHover text-gray-600">Frozen Foods</li>
              <li className="py-3 border-b border-gray-100 txtHover text-gray-600">Breakfast & Dairy</li>
              <li className="py-3 border-b border-gray-100 txtHover text-gray-600">Biscuits & Snacks</li>
              <li className="py-3 border-b border-gray-100 txtHover text-gray-600">Beverages</li>
              <li className="py-3 border-b border-gray-100 txtHover text-gray-600">Grocery</li>
              <li className="py-3 border-b border-gray-100 txtHover text-gray-600">Clothes & Shoes</li>
            </ul>
          </div>
          <div className="w-full">
            <Banner/>
          </div>
        </div>
      </div>
}
      {!active && <Banner/>
      }
    </div>
  );
};

export default Hero;
