import React from "react";
import { Link } from "react-router-dom";

const OrderTrack = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <div className="container ">
        <Link to="/" className="cursor-pointer">
          {" "}
          <div className="text-primary-600 font-semibold flex space-x-1 py-8 w-full lg:w-5/6 mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <h4 className="text-sm">Back to Home</h4>
          </div>
        </Link>

        {/* section started */}
        <div className=" w-full lg:w-5/6 mx-auto rounded-md border">
          <div className="lg:py-4 lg:px-8 flex justify-between bg-[#F7F8FA] p-5">
            <div className="flex flex-col lg:flex-row items-center font-semibold lg:space-x-3 space-y-4 lg:space-y-0">
              <h2 className=" text-[10px] lg:text-base">Order Status :</h2>
              <h2 className="text-white bg-secondary-600 rounded-3xl py-1 px-2 lg:px-3 text-[10px] lg:text-base">Order Processing</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center font-semibold lg:space-x-3 space-y-4 lg:space-y-0">
              <h2 className=" text-[10px] lg:text-base">Payment Status :</h2>
              <h2 className="text-white bg-primary-600 rounded-3xl py-1 px-2 lg:px-3 text-[10px] lg:text-base">Cash on Delivery</h2>
            </div>
          </div>
          <div className="text-center m-5 block md:hidden lg:hidden">
            <button className="bg-primary-600 cursor-pointer rounded-md text-white py-2 px-5 w-full">Pay Now</button>
          </div>
          <div className="bg-white lg:py-4 lg:px-8 p-5">
            {/* order details box */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8 mb-32">
              <div className="p-5 border rounded-xl">
                <h2 className="text-base font-medium">Oder Number</h2>
                <p className="text-gray-700 text-sm">334983046149</p>
              </div>
              <div className="p-5 border rounded-xl">
                <h2 className="font-medium text-base">Date</h2>
                <p className="text-gray-700 text-sm">March 2 , 2023</p>
              </div>
              <div className="p-5 border rounded-xl">
                <h2 className="font-medium text-base">Total</h2>
                <p className="text-gray-700 text-sm">$55.00</p>
              </div>
              <div className="p-5 border rounded-xl">
                <h2 className="font-medium text-base">Payment Method</h2>
                <p className="text-gray-700 text-sm">CASH_ON_DELIVERY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTrack;
