import React from "react";
import { Link } from "react-router-dom";
import error from "../assets/auth/login.png";
import Checkbox from "../components/theme/Checkbox";

const SignUp = () => {
  return (
    <div className="pt-20 px-3 lg:mb-10">
      <div className="lg:w-[970px] lg:h-[600px] mx-auto rounded-lg shadow-custom grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="w-full h-full">
          <img className="w-full h-full rounded-t-lg lg:rounded-l-lg" src={error} alt="" />
        </div>
        <div className="pr-3">
          <h2 className="text-2xl font-semibold text-center mb-10">SignUp</h2>
          <form action="#" className="space-y-5 pl-2 lg:pl-0 lg:px-2">
            <div className="text-center">
              <input
                className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                type="text"
                placeholder="Full Name"
              />
            </div>{" "}
            <div className="text-center">
              <input
                className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className=" text-center">
              <input
                className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                type="password"
                placeholder="Password"
              />
            </div>{" "}
            <div className=" text-center">
              <input
                className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                type="password"
                placeholder="Confirm Password"
              />
            </div>{" "}
            <p className="flex items-center lg:w-5/6 mx-auto">
              <span className="-mt-2">
                {" "}
                <Checkbox />
              </span>
              <span>
                I agree to <b className="text-primary-600 hover:underline cursor-pointer">terms and condition</b>
              </span>
            </p>
            <div className="text-center pb-10">
              <button type="submit" className="px-5  w-full text-xl lg:w-5/6 py-2.5 relative rounded group font-medium text-white inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-primary-600 to-primary-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-primary-600 to-primary-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-primary-600 to-primary-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-primary-600 from-primary-500"></span>
                <span className="relative">Create Account</span>
              </button>
              <div className="mt-8">
                <span>Already have account?</span>{" "}
                <span>
                  <Link to="/signIn" className="text-primary-600 font-semibold hover:underline">
                    Login
                  </Link>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
