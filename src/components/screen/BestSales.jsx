import React from "react";
import { Link } from "react-router-dom";
import Products from "../shared/Products";
import { FiArrowRight } from 'react-icons/fi';

const BestSales = () => {
  return (
    <div className=" mt-8 lg:mt-16 container">
      <div className="flex justify-between items-center mt-[25px] md:mt-[35px] lg:mt-[50px] mb-[16px] lg:mb-[29px]">
        <h2 className="text-sm md:text-2xl lg:text-4xl font-semibold text-center lg:text-left">
          Best Seller
        </h2>
        <button className="text-gray-500 text-[10px] md:text-base uppercase flex items-center gap-1 hover:text-primary-600 duration-300">
          <span>View More</span>
          <FiArrowRight/>
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Products key={idx} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/categories">
            {" "}
            <button className="bg-primary-600 hover:bg-primary-500 duration-300 transition hover:shadow-custom hover:scale-110 space-x-2 text-white px-8 font-semibold py-4 rounded-md uppercase ease-in-out">
              <span>Shop Now</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 inline-block -mt-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </span>
            </button>
          </Link>
        </div>
    </div>
  );
};

export default BestSales;
