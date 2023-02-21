import React from "react";
import { Link } from "react-router-dom";
import imgOffer from "../../assets/offer/offer_banner.png";
import { FiArrowRight } from 'react-icons/fi';
const OfferTimerBanner = () => {
  return (
    <div className="bg-primary-50 pt-6 md:pt-0 mt-8 lg:mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="mx-auto lg:mx-0">
            <h2 className="text-[#454F5B] text-center lg:text-left font-bold text-[20px] md:text-[40px] lg:text-[64px] md:leading-[45px] lg:leading-[80px]">Get -60% from <br />summer deal</h2>
            <div className=" my-6 md:my-10 lg:my-12 space-x-8 ">
              <div className="text-center inline-block">
                <p className=" bg-white text-primary-500 shadow-custom p-4 h-[23px] md:h-[50px] lg:h-[72px] w-[26px] md:w-[52px] lg:w-[82px] rounded-[6px] lg:rounded-[8px] flex items-center justify-center font-bold text-[10px] md:text-[25px] lg:text-[32px]">
                  07
                </p>
                <p className="text-primary-900 text-[6px] md:text-[14px] lg:text-[18px] mt-2">Day</p>
              </div>
              <div className="text-center inline-block">
                <p className=" bg-white text-primary-500 shadow-custom p-4 h-[23px] md:h-[50px] lg:h-[72px] w-[26px] md:w-[52px] lg:w-[82px] rounded-[6px] lg:rounded-[8px] flex items-center justify-center font-bold text-[10px] md:text-[25px] lg:text-[32px]">
                  11
                </p>
                <p className="text-primary-900 text-[6px] md:text-[14px] lg:text-[18px] mt-2">Hours</p>
              </div>
              <div className="text-center inline-block">
                <p className=" bg-white text-primary-500 shadow-custom p-4 h-[23px] md:h-[50px] lg:h-[72px] w-[26px] md:w-[52px] lg:w-[82px] rounded-[6px] lg:rounded-[8px] flex items-center justify-center font-bold text-[10px] md:text-[25px] lg:text-[32px]">
                  25
                </p>
                <p className="text-primary-900 text-[6px] md:text-[14px] lg:text-[18px] mt-2">Minutes</p>
              </div>
              <div className="text-center inline-block">
                <p className=" bg-white text-primary-500 shadow-custom p-4 h-[23px] md:h-[50px] lg:h-[72px] w-[26px] md:w-[52px] lg:w-[82px] rounded-[6px] lg:rounded-[8px] flex items-center justify-center font-bold text-[10px] md:text-[25px] lg:text-[32px]">
                  06
                </p>
                <p className="text-primary-900 text-[6px] md:text-[14px] lg:text-[18px] mt-2">Seconds</p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Link to="/categories">
                {" "}
                <button className="bg-primary-600 hover:bg-primary-700 duration-300 transition hover:shadow-custom hover:scale-105 space-x-2 text-white font-semibold  uppercase ease-in-out flex items-center text-[10px] md:text-[14px] lg:text-[18px] py-[5px] md:py-[18px] lg:py-[28px] px-[12px] md:px-[40px] lg:px-[65px] rounded-[5px] lg:rounded-[10px]">
                  <span>Shop Now</span>
                  <FiArrowRight className="text-xl"/>
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
