import React from "react";
import Products from "../shared/Products";

const FeatureProduct = () => {
  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-8 container">
        <h2 className="text-4xl font-semibold">Featured Product</h2>
        <button className="text-gray-500 uppercase txtHover">
          <span>View More</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline-block -mt-1 ml-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </button>
      </div>
      <Products />
    </div>
  );
};

export default FeatureProduct;
