import React from "react";
import Products from "../../shared/Products";

const CategoriesProduct = () => {
  return (
    <div className="mt-8 lg:mt-16">
      <div className="flex justify-between items-center">
        <p>
          <small className="space-x-4">
            {" "}
            <span>
              <b> Showing 1 - 20</b>
            </span>{" "}
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
      {/* products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {Array.from({ length: 15 }).map((_, idx) => (
            <Products key={idx} />
          ))}
        </div>
    </div>
  );
};

export default CategoriesProduct;
