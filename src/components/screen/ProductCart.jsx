import React from "react";
import MenuBar from "../shared/MenuBar";
import ProcessingSteps from "./ProcessingSteps";

const ProductCart = () => {
  return (
    <>
      <MenuBar />
      <div className="container">
        <h2 className=" text-2xl lg:text-5xl font-semibold mt-4 ">Your Cart</h2>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8">
          <div className="lg:col-span-3  px-3 shadow-custom bg-[#F9FAFB] rounded-lg">
            <div className="grid grid-cols-7 gap-4">
              <h1 className=" col-span-3  font-semibold py-5 uppercase">Product</h1>
              <h1 className="font-semibold py-5 uppercase ">Unite Price</h1>
              <h1 className="font-semibold py-5 uppercase ">Quantity</h1>
              <h1 className="font-semibold py-5 uppercase ">Total</h1>
              <h1 className="font-semibold py-5 uppercase ">Remove</h1>
            </div>
            {/* every product  cart details*/}
            <div className="grid grid-cols-7 gap-4  bg-white py-3 mb-3 rounded">
              <div className="col-span-3 ">
                <div className="flex space-x-2 items-center">
                  <div>
                    <img src="" alt="product-img" />
                  </div>
                  <p className="font-semibold text-base">Nestle Original Coffee-Mate Coffee Creamer</p>
                </div>
              </div>
              <div>
                <p className="text-gray-600 pl-6">$10.00</p>
              </div>
              <div>
              <div className="flex items-center border border-gray-50 p-1 rounded-lg">
                    <button type="button" className="w-10 h-10 text-xl bg-gray-50 rounded-[50%] leading-10 text-gray-600 transition hover:opacity-75">
                      &minus;
                    </button>

                    <span className="px-6 font-semibold">1</span>

                    <button type="button" className="w-10 h-10 text-xl bg-gray-50 rounded-[50%] leading-10 text-gray-600 transition hover:opacity-75">
                      &#43;
                    </button>
                  </div>
              </div>
              <div>4</div>
              <div>5</div>
            </div>
          </div>
          <div className=" p-3 shadow-custom rounded-lg"></div>
        </div>
      </div>
      <ProcessingSteps />
    </>
  );
};

export default ProductCart;
