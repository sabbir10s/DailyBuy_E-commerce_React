import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mt-2">
      <div className="grid grid-cols-4 lg:grid-cols-5 gap-8">
        <div className="shadow-custom_secondary hidden lg:block rounded-b-md">
          <ul>
            <h2 className="uppercase text-xl py-3  text-center bg-primary-600 text-white rounded-t-md cursor-pointer space-x-2 font-semibold">
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
              {/*  <span className="lg:hidden xl:inline">
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
              </span> */}
            </h2>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">Fruits & Vegetable</li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">Meats & Fish</li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">Breads & Bakery</li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">Frozen Foods</li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">Breakfast & Dairy</li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">Biscuits & Snacks</li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">Beverages</li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">Grocery</li>
            <li className="p-3 border-b border-gray-100 txtHover text-gray-600">Clothes & Shoes</li>
          </ul>
        </div>
        <div className="col-span-4">
          <Navbar />
          <Banner />
        </div>
      </div>
    </div>
  );
};

export default Hero;
