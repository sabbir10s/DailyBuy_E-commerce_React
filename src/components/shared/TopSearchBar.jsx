import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/big_logo.png";
import smallLogo from "../../assets/logo/logo.png";
import Modal from "./Modal";

const TopSearchBar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <div className="border border-gray-100/60 fixed lg:static top-0 z-50 bg-white w-full">
        <div className="container ">
          <div className="flex gap-4 justify-between items-center py-5 ">
            <Link to="/">
              <img className=" hidden lg:block w-[180px]" src={logo} alt="" />
              <img className="block lg:hidden w-[80px] md:w-[130px] cursor-pointer" src={smallLogo} alt="" />
            </Link>
            <div className=" w-2/3 md:w-1/2  lg:w-[550px] xl:w-[778px] relative">
              <input
                placeholder="I'm looking for..."
                type="text"
                className=" py-1.5 md:py-3 px-2 md:px-5 border border-gray-200/80 w-[80%] md:w-[86%] lg:w-[92%] focus:outline-primary-600 rounded-l-md bg-white"
              />
              <button className="bg-primary-600 text-white p-2 md:p-3 w-[20%] md:w-[14%] lg:w-[8%] h-full rounded-r-md absolute top-0 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
            </div>
            <div className="bg-secondary-50 w-[10] md:w-12 h-[10] md:h-12 rounded-[50%] flex items-center justify-center">
              <Link to="/cart">
                <button type="button" className=" rounded-full mt-1">
                  {" "}
                  <div className="bg-secondary-50 inline-block w-14 h-14 rounded-[50%] relative">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 inline-block text-secondary-600 absolute top-4 left-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>
                    </span>
                    <span className="w-5 h-5 text-sm inline-block rounded-[50%] bg-secondary-600 text-white text-center font-semibold absolute top-2  right-1">
                      {cartItems.length}
                    </span>
                  </div>
                </button>
              </Link>
            </div>
            <button onClick={() => setShowModal(true)}>
              <div className="flex items-center space-x-2">
                <div className="bg-[#F8F8F8]  w-[10] md:w-12 h-[10] md:h-12 rounded-[50%] flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 lg:w-6 h-5 lg:h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                </div>
                <div className="leading-4 hidden md:block">
                  <span className="text-gray-400">Hello</span>
                  <p className="text-base">Sign in</p>
                </div>
              </div>
            </button>{" "}
          </div>
        </div>
      </div>
      <Modal onClose={handleOnClose} visible={showModal} />
    </div>
  );
};

export default TopSearchBar;
