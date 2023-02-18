import React from "react";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import MenuBar from "../components/shared/MenuBar";

const Checkout = () => {
  return (
    <>
      <MenuBar />

      <div className="container">
        <h2 className=" text-2xl lg:text-5xl font-semibold mt-4 ">Checkout</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div className="p-3 ">
            <form action="#">
              <div>
                <h3 className="text-xl mb-5 font-semibold">1. Contact Information</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="tel"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>{" "}
              <div>
                <h3 className="text-xl mb-5 font-semibold">2. Shipping Address</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <textarea
                      rows={1}
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="tel"
                      placeholder="Phone"
                    />
                  </div>
                  <div>
                    <input
                      className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="p-20 border rounded-xl">2</div>
        </div>
      </div>
      <ProcessingSteps />
    </>
  );
};

export default Checkout;
