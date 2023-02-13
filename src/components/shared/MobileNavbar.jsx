/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/big_logo.png";
const MobileNavbar = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <header aria-label="Site Header" className="border-b border-gray-100 block lg:hidden fixed top-0 z-50 bg-white w-full">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
          <div className="flex items-center">
            <button onClick={() => setActive(true)} type="button" className="p-2 sm:mr-4 lg:hidden">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            <div className="w-[150px] h-10 ml-1">
              <Link to="/">
                {" "}
                <img className="w-full h-full cursor-pointer" src={logo} alt="" />
              </Link>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-end">
            <div className="ml-8 flex items-center">
              <div className="flex items-center divide-x divide-gray-100 border-x border-gray-100">
                <span>
                  <Link to="/cart" className="block relative border-b-4 border-transparent p-6 hover:border-red-700">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="bg-primary-600 text-white w-4 text-[12px] font-bold h-4 top-3 right-2 rounded-[50%] absolute text-center">
                      5
                    </span>
                    <span className="sr-only">Cart</span>
                  </Link>
                </span>

                <span>
                  <Link to="/account" className="block border-b-4 border-transparent p-6 hover:border-red-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="sr-only"> Account </span>
                  </Link>
                </span>

                <span className="hidden sm:block">
                  <a href="/search" className="block border-b-4 border-transparent p-6 hover:border-red-700">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>

                    <span className="sr-only"> Search </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {active && (
        <section className="fixed inset-y-0 right-0 z-50 flex">
          <div className="w-screen max-w-sm">
            <div className="flex h-full flex-col divide-y divide-gray-200 bg-gray-50">
              <div className="overflow-y-scroll">
                <header className="flex h-16 items-center justify-between pl-6">
                  <span className="text-sm font-medium uppercase tracking-widest">Menu</span>

                  <button onClick={() => setActive(false)} aria-label="Close menu" className="h-16 w-16 border-l border-gray-200" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </header>

                <nav className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200 text-sm font-medium text-gray-500">
                  <Link to="/" className="px-6 py-3">
                    {" "}
                    Home{" "}
                  </Link>
                  <Link to="/about" className="px-6 py-3">
                    {" "}
                    About us{" "}
                  </Link>
                  <Link to="/categories" className="flex items-center justify-between px-6 py-3">
                    Products
                  </Link>

                  <Link to="/contact" className="px-6 py-3">
                    {" "}
                    Contact us{" "}
                  </Link>
                  <Link to="/support" className="flex items-center justify-between px-6 py-3">
                    Support Center
                  </Link>
                  <Link to="/account" className="flex items-center px-6 py-3">
                    Account
                  </Link>
                  <Link to="/career" className="flex items-center px-6 py-3">
                    Careers
                  </Link>
                  <Link to="/faq" className="px-6 py-3">
                    {" "}
                    FAQs{" "}
                  </Link>
                  <Link to="/privacy" className="px-6 py-3">
                    {" "}
                    Privacy Policy{" "}
                  </Link>
                  <Link to="/terms" className="px-6 py-3">
                    {" "}
                    Terms Conditions{" "}
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MobileNavbar;
