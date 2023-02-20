import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../shared/Products";

const FeatureProduct = () => {
  const [productData, setProductData] = useState([]);
  // console.log(data);
  const fetchData = () => {
    axios
      .get("products.json")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className=" mt-8 lg:mt-16">
      <div className="flex justify-center lg:justify-between items-center mb-8 container">
        <h2 className="text-4xl font-semibold text-center lg:text-left mt-8 lg:mt-0 ">
          Featured <br className="block lg:hidden" /> Product
        </h2>
        <button className="text-gray-500 uppercase txtHover hidden lg:block">
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
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {productData.slice(0, 4).map((product, idx) => (
            <Products product={product} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
