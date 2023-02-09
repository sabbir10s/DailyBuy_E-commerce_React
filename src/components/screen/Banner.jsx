import React from "react";
import { Link } from "react-router-dom";
import "../../styles/banner.css";
import { PrimaryButton } from "../theme/Button";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div className="bg-gray-50 py-[35px] px-8 slider_bg">
        <p className="bg-primary-100 px-4 py-2 rounded mb-5 text-primary-600 inline-block font-semibold text-sm">SUMMER SALE UPTO 60%</p>
        <div className="space-y-3 text-black/75">
          <h2 className="font-bold text-4xl">Make your life</h2>
          <h2 className="font-bold text-4xl">easy with us</h2>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit
          </p>
        </div>
        <div className="mt-10">
          <Link to="/products">
            <PrimaryButton title="Shop Now" />
          </Link>
        </div>
      </div>
      <div className="space-y-8">
        <div className="bg-gray-50  py-[31px] px-8 group_bg1">
          <div className="space-y-2 text-black/75">
            <h2 className="font-bold text-2xl">Fresh Grocery</h2>
            <p className="text-base text-gray-500">Weekend discount up to 35%</p>
          </div>
          <div className="mt-5">
            <Link to="/products">
              <PrimaryButton title="Shop Now" />
            </Link>
          </div>
        </div>
        <div className="bg-gray-50  py-[31px] px-8 group_bg2">
          <div className="space-y-2 text-black/75">
            <h2 className="font-bold text-2xl">Breakfast & Dairy </h2>
            <p className="text-base text-gray-500">Weekend discount up to 40%</p>
          </div>
          <div className="mt-5">
            <Link to="/products">
              <PrimaryButton title="Shop Now" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
