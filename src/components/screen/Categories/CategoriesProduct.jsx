import axios from "axios";
import React, { useEffect, useState } from "react";
import { CiFilter } from 'react-icons/ci';
import { HiOutlineChartBar } from 'react-icons/hi';
import ProductCard from "../../shared/ProductCard";

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
      <div className=" grid grid-cols-2 text-[16px] lg:hidden">
        <button className=" flex items-center gap-1 justify-center py-3 w-full border-r focus:bg-primary-600 focus:text-white text-xl">
          <CiFilter className="text-gray-400 text-2xl"/>
          <span className="text-gray-900">Filter</span>
        </button>
        <button className="flex items-center justify-center gap-1 py-3 w-full   focus:bg-primary-600 focus:text-white text-xl">
          <HiOutlineChartBar className="text-gray-400 text-2xl"/>
          <span className="text-gray-900">Sort</span>
        </button>
      </div>
      {/* products */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[10px] lg:gap-[11px] mt-8">
        {productData.map((product, idx) => (
          <ProductCard product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesProduct;
