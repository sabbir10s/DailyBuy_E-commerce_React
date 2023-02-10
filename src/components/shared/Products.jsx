import React from "react";
import { SecondaryButton } from "../theme/Button";
import productImg from "../../assets/products/product.png";
import { Link } from "react-router-dom";

const Products = () => {
  const id = 4;
  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div
            key={idx}
            className="shadow-custom relative rounded-lg bg-gray-50 group p-3 w-full cursor-pointer hover:bg-white duration-300 transition ease-in"
          >
            <div>
              <div className="w-[300px] mx-auto h-[250px]">
                <img src={productImg} className="w-full h-full object-center object-fill" alt="" />
              </div>
              <div className="space-y-3">
                <h3 className="text-black font-semibold text-[18px]">Healthy Cashew Nuts</h3>
                <div className="flex justify-between items-center">
                  <p className="space-x-2">
                    <span className="text-primary-600 text-xl font-semibold">$10</span>
                    <span className="text-gray-500 text-base">
                      <del>$12</del>
                    </span>
                  </p>
                  <div className="flex space-x-2 items-center">
                    <div>
                      {Array.from({ length: 4 }).map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#FECA38"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-54 h-5 inline-block text-[#FECA38]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                          />
                        </svg>
                      ))}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#D3D3D3"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-54 h-5 inline-block text-[#D3D3D3]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500">(4.5)</p>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Link to={`/product/${id}`}>
                  {" "}
                  <SecondaryButton title="Add to cart" w="full" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
