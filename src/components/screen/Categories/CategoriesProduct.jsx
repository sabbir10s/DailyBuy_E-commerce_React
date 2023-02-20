import axios from "axios";
import React, { useEffect, useState } from "react";
import Products from "../../shared/Products";

const CategoriesProduct = () => {
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
    <div className="mt-8 lg:mt-16">
      <div className="hidden lg:flex justify-between items-center">
        <p>
          <small className="space-x-0 lg:space-x-4">
            {" "}
            <span>
              <b> Showing 1 - 20</b>
            </span>{" "}
            <br className="lg:hidden" />
            <span>out of 356 Products</span>
          </small>
        </p>
        <div className="flex text-gray-600 text-sm">
          <p>Sort By :</p>{" "}
          <select name="sort" id="sort" className="bg-transparent focus:outline-none px-3 font-semibold text-black">
            <option className="p-3" value="New Arrivals">
              New Arrivals
            </option>
            <option className="p-3" value="Top Rated">
              Top Rated
            </option>
            <option className="p-3" value="New Selling">
              New Selling
            </option>
          </select>
        </div>
      </div>
      {/* button */}
      <div className=" flex justify-around items-center lg:hidden border-b border-gray-100 ">
        <button className="py-3 w-full border-r focus:bg-primary-600 focus:text-white text-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline-block mr-2 -mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
              />
            </svg>
          </span>
          <span>Filter</span>
        </button>
        <button className="py-3 w-full   focus:bg-primary-600 focus:text-white text-xl">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline-block mr-2 -mt-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
          </span>
          <span>Sort</span>
        </button>
      </div>
      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-8">
        {productData.map((product, idx) => (
          <Products product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesProduct;
