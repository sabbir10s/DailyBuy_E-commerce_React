import React from "react";
import Products from "../shared/Products";
import { FiArrowRight } from 'react-icons/fi';

const FeatureProduct = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center mt-[25px] md:mt-[35px] lg:mt-[50px] mb-[16px] lg:mb-[29px]">
        <h2 className="text-sm md:text-2xl lg:text-4xl font-semibold text-center lg:text-left">
          Featured Product
        </h2>
        <button className="text-gray-500 text-[10px] md:text-base uppercase flex items-center gap-1 hover:text-primary-600 duration-300">
          <span>View More</span>
          <FiArrowRight/>
        </button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[10px] md:gap-[20px]">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Products key={idx} />
          ))}
        </div>
    </div>
  );
};

export default FeatureProduct;
