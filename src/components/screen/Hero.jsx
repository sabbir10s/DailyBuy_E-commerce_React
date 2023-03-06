import React, {useState} from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import {BiChevronUp, BiChevronDown} from "react-icons/bi";
import fruits from '../../assets/icon/category/Fruits & Vegetable.png'
import meats from '../../assets/icon/category/Meats & Fish.png'
import breads from '../../assets/icon/category/Breads & Bakery.png'
import frozen from '../../assets/icon/category/Frozen Foods.png'
import breakfast from '../../assets/icon/category/Breakfast & Dairy.png'
import biscuits from '../../assets/icon/category/Biscuits & Snacks.png'
import beverages from '../../assets/icon/category/Beverages.png'
import grocery from '../../assets/icon/category/Grocery.png'
import {Link} from "react-router-dom";

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
          {active && <BiChevronUp className="text-[25px]"/>
}
          {!active && <BiChevronDown className="text-[25px]"/>
}

        </button>
        <Navbar/>
      </div>
      {active && <div>
        <div className="flex items-center gap-[27px]">
          <div
            className="shadow-custom_secondary hidden lg:block rounded-b-[10px] w-[300px]">
            <ul>
              <li className="p-3 border-b border-gray-100 txtHover text-gray-600">
                <Link className="flex items-center gap-[8px]" to='/categories'>
                  <img className="w-[25px]" src={fruits} alt=""/>
                  <span>Fruits & Vegetable</span>
                </Link>
              </li>
              <li
                className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
                <Link className="flex items-center gap-[8px]" to='/categories'>
                  <img className="w-[25px]" src={meats} alt=""/>
                  <span>Meats & Fish</span>
                </Link>
              </li>
              <li
                className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
                <Link className="flex items-center gap-[8px]" to='/categories'>
                  <img className="w-[25px]" src={breads} alt=""/>
                  <span>Breads & Bakery</span>
                </Link>
              </li>
              <li
                className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
                <Link className="flex items-center gap-[8px]" to='/categories'>
                  <img className="w-[25px]" src={frozen} alt=""/>
                  <span>Frozen Foods</span>
                </Link>

              </li>
              <li
                className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
                <Link className="flex items-center gap-[8px]" to='/categories'>
                  <img className="w-[25px]" src={breakfast} alt=""/>
                  <span>Breakfast & Dairy</span>
                </Link>
              </li>
              <li
                className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
                <Link className="flex items-center gap-[8px]" to='/categories'>
                  <img className="w-[25px]" src={biscuits} alt=""/>
                  <span>Biscuits & Snacks</span>
                </Link>
              </li>
              <li
                className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
                <Link className="flex items-center gap-[8px]" to='/categories'>
                  <img className="w-[25px]" src={beverages} alt=""/>
                  <span>Beverages</span>
                </Link>
              </li>
              <li
                className="p-3 border-b border-gray-100 txtHover text-gray-600 flex items-center gap-[8px]">
                <Link className="flex items-center gap-[8px]" to='/categories'>
                  <img className="w-[25px]" src={grocery} alt=""/>
                  <span>Grocery</span>
                </Link>
              </li>
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
