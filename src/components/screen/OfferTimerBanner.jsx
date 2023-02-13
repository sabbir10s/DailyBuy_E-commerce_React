import React from "react";
import { Link } from "react-router-dom";
import imgOffer from "../../assets/offer/offer_banner.png";
const OfferTimerBanner = () => {
  return (
    <div className="bg-primary-50 mt-8 lg:mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className=" mt-16 lg:mt-0 mx-auto lg:mx-0">
            <h2 className="text-[#454F5B] text-4xl lg:text-6xl text-center lg:text-left font-bold">Get -60% from</h2>
            <h2 className="text-[#454F5B] text-4xl lg:text-6xl text-center lg:text-left font-bold mt-4">summer deal</h2>
            <div className="mt-12 space-x-8 ">
              <div className="text-center inline-block">
                <p className=" bg-white text-primary-500 rounded-lg shadow-custom w-12 h-12 lg:w-20 lg:h-[72px] pt-2  lg:pt-[18px] font-bold text-2xl lg:text-3xl">
                  07
                </p>
                <p className="font-semibold mt-2">Day</p>
              </div>
              <div className="text-center inline-block">
                <p className=" bg-white text-primary-500 rounded-lg shadow-custom w-12 h-12 lg:w-20 lg:h-[72px] pt-2  lg:pt-[18px] font-bold text-2xl lg:text-3xl">
                  11
                </p>
                <p className="font-semibold mt-2">Hours</p>
              </div>
              <div className="text-center inline-block">
                <p className=" bg-white text-primary-500 rounded-lg shadow-custom w-12 h-12 lg:w-20 lg:h-[72px] pt-2  lg:pt-[18px] font-bold text-2xl lg:text-3xl">
                  25
                </p>
                <p className="font-semibold mt-2">Minutes</p>
              </div>
              <div className="text-center inline-block">
                <p className=" bg-white text-primary-500 rounded-lg shadow-custom w-12 h-12 lg:w-20 lg:h-[72px] pt-2  lg:pt-[18px] font-bold text-2xl lg:text-3xl">
                  06
                </p>
                <p className="font-semibold mt-2">Seconds</p>
              </div>
            </div>
            <div className="mt-16 text-center lg:text-left">
              <Link to="/categories">
                {" "}
                <button className="bg-primary-600 hover:bg-primary-700 duration-300 transition hover:shadow-custom hover:scale-105 space-x-2 text-white px-12 font-semibold py-5 rounded-md uppercase ease-in-out">
                  <span>Shop Now</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 inline-block -mt-1"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className=" h-full lg:h-[700px]">
              <img className="w-full h-full object-center object-fill" src={imgOffer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferTimerBanner;
