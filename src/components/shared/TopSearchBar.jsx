import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/big_logo.png";

const TopSearchBar = () => {
  return (
    <div className="container">
      <div className="flex justify-between py-5 items-center">
        <div className="w-[140px] h-10 -ml-1">
          <Link to="/">
            {" "}
            <img className="w-full h-full cursor-pointer" src={logo} alt="" />
          </Link>
        </div>
        <div className="w-[778px] relative">
          <input
            placeholder="I'm looking for..."
            type="text"
            className="py-3 px-5 border border-gray-200/80 w-[92%] focus:outline-primary-600 rounded-l-md bg-gray-50"
          />
          <button className="bg-primary-600 text-white p-3 w-[8%] rounded-r-md absolute top-0 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <div className="space-x-8">
          <Link className="txtHover text-base" to="/singIn">
            Cart
          </Link>{" "}
          <Link className="txtHover text-base" to="/singIn">
            Sign in
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default TopSearchBar;
