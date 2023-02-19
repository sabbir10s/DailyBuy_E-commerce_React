import React from "react";
import Products from "../shared/Products";
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

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
        <div className="mt-12 flex justify-center">
            <button className="bg-primary-600 hover:bg-primary-500 duration-300 transition hover:shadow-custom hover:scale-110 text-white font-semibold rounded-md uppercase ease-in-out px-[20px] py-[9px] flex items-center gap-1 text-[14px] md:text-[14px]">
            <span>Shop Now</span>
            <FiChevronDown className="text-xl"/>
            </button>
        </div>
    </div>
  );
};

export default BestSales;
