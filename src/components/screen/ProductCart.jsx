import React from "react";
import MenuBar from "../shared/MenuBar";
import ProcessingSteps from "./ProcessingSteps";
import cartImg from "../../assets/products/product.png";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const name = "Nestle Original Coffee-Mate Coffee Creamer";
  return (
    <>
      <MenuBar />
      <div className="container">
        <h2 className=" text-2xl lg:text-5xl font-semibold mt-4 ">Your Cart</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3  lg:px-3 lg:shadow-custom lg:bg-[#F9FAFB] lg:rounded-lg">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="grid grid-cols-3 lg:hidden gap-2 mt-3 items-center border-b border-gray-100 pb-2">
                <div className="flex space-x-2 items-center col-span-2">
                  <div className="w-[80px] h-[80px] bg-gray-50  rounded-2xl">
                    <img src={cartImg} className="w-full h-full object-center object-fill" alt="product-img" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{name.slice(0, 18)}...</p>
                    <p className="text-gray-600">$10.00</p>
                    <div className="flex items-center justify-between">
                      <p className="text-primary-600 font-semibold">$20.00</p>
                      <div className="text-end">
                        <button className="">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 inline-block text-secondary-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <button
                      type="button"
                      className="w-8 h-8 text-xl font-semibold border border-primary-600  bg-gray-50 rounded-[50%] text-primary-600 transition hover:opacity-75"
                    >
                      &minus;
                    </button>

                    <span className="px-4 text-xl">1</span>

                    <button
                      type="button"
                      className="w-8 h-8 text-xl font-semibold border border-primary-600  bg-gray-50 rounded-[50%] text-primary-600 transition hover:opacity-75"
                    >
                      &#43;
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="hidden lg:grid grid-cols-7 gap-4">
              <h1 className=" col-span-3  font-semibold py-5 uppercase">Product</h1>
              <h1 className="font-semibold py-5 uppercase text-center">Unite Price</h1>
              <h1 className="font-semibold py-5 uppercase text-center">Quantity</h1>
              <h1 className="font-semibold py-5 uppercase text-center">Total</h1>
              <h1 className="font-semibold py-5 uppercase text-center">Remove</h1>
            </div>
            {/* every product  cart details*/}
            {Array.from({ length: 2 }).map((_, idx) => (
              <div key={idx} className="hidden lg:grid grid-cols-7 gap-4  bg-white p-3 mb-3 rounded items-center">
                <div className="col-span-3 ">
                  <div className="flex space-x-2 items-center">
                    <div className="w-[120px] h-[120px] bg-gray-50  rounded-2xl">
                      <img src={cartImg} className="w-full h-full object-center object-fill" alt="product-img" />
                    </div>
                    <p className="font-semibold text-base">Nestle Original Coffee-Mate Coffee Creamer</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 text-center">$10.00</p>
                </div>
                <div>
                  <div className="flex items-center justify-center">
                    <button type="button" className="w-10 h-10 text-xl bg-gray-50 rounded-[50%] leading-10 text-gray-600 transition hover:opacity-75">
                      &minus;
                    </button>

                    <span className="px-4 font-semibold">1</span>

                    <button type="button" className="w-10 h-10 text-xl bg-gray-50 rounded-[50%] leading-10 text-gray-600 transition hover:opacity-75">
                      &#43;
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-primary-600 font-semibold text-center pl-4">$20.00</p>
                </div>
                <div className="text-center">
                  <button className="">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-gray-500 inline-block hover:text-primary-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="relative">
            <div className="lg:absolute space-y-5 top-0 left-0 w-full h-auto  lg:py-3 lg:px-4 lg:shadow-custom lg:border lg:rounded-lg">
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-base">Subtotal:</p>
                <p className="text-gray-700 font-semibold text-xl">$40.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-base">Tax:</p>
                <p className="text-gray-700 font-semibold text-xl">$0.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-base">Shipping:</p>
                <p className="text-gray-700 font-semibold text-xl">$3.00</p>
              </div>
              <hr className="" />
              <div className="flex justify-between items-center">
                <p className="text-black font-medium text-base">Total:</p>
                <p className="text-primary-600 font-bold text-xl">$43.00</p>
              </div>
              <button className="px-5 w-full py-2.5 relative rounded group font-medium text-white  inline-block">
                {" "}
                <Link to="/checkout">
                  {" "}
                  <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-primary-600 to-primary-500"></span>
                  <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-primary-600 to-primary-500"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-primary-600 to-primary-500"></span>
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-primary-600 from-primary-500"></span>
                  <span className="relative">Check out</span>
                </Link>{" "}
              </button>
            </div>
          </div>
        </div>
        {/* shipping button */}
        <div className="mt-14">
          {" "}
          <button className="px-5  py-2.5 relative rounded group font-medium text-white hidden  lg:inline-block">
            <Link to="/categories">
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-primary-600 to-primary-500"></span>
              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-primary-600 to-primary-500"></span>
              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-primary-600 to-primary-500"></span>
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-primary-600 from-primary-500"></span>
              <span className="relative">Continue Shipping</span>
            </Link>
          </button>
        </div>
      </div>

      <ProcessingSteps />
    </>
  );
};

export default ProductCart;
