import React from "react";
import { Link } from "react-router-dom";
import "../../styles/poster.css";
import { PrimaryButton } from "../theme/Button";

const PosterOffer = () => {
  return (
    <div className="container mt-8 lg:mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="group_bg3 p-10 bg-gray-200 grid grid-cols-2">
          <div></div>
          <div>
            <div className="space-y-2 text-black/75">
              <h2 className="font-bold text-3xl">Breakfast & Dairy</h2>
              <p className="text-base text-gray-500">Weekend discount upto 40%</p>
            </div>
            <div className="mt-5">
              <Link to="/products">
                <PrimaryButton title="Shop Now" />
              </Link>
            </div>
          </div>
        </div>
        <div className="group_bg4 p-10 bg-gray-200 grid grid-cols-2">
          <div></div>
          <div>
            <div className="space-y-2 text-black/75">
              <h2 className="font-bold text-3xl">Milk & Coffee</h2>
              <p className="text-base text-gray-500">Weekend discount upto 40%</p>
            </div>
            <div className="mt-5">
              <Link to="/products">
                <PrimaryButton title="Shop Now" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosterOffer;
