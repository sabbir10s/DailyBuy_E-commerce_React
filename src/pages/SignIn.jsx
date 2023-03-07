import React from "react";
import {Link} from "react-router-dom";
import error from "../assets/auth/login.png";

const SignIn = ({setPath}) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center h-[75vh] lg:h-full w-full  overflow-y-auto">
        <div className="hidden md:block">
          <img className="w-full lg:w-[450px] lg:rounded-l-[10px]" src={error} alt=""/>
        </div>
        <div className="p-6 w-full flex justify-center items-center">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-center mb-8 ">Login</h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              action="#"
              className="space-y-5">
              <div className="text-center">
                <input
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                  type="email"
                  placeholder="Email"/>
              </div>
              <div className=" text-center">
                <input
                  className="px-4 py-3  rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                  type="password"
                  placeholder="Password"/>
              </div>
              <div className="text-end  lg:w-5/6 mx-auto">
                <Link
                  to="/forgotPassword"
                  className="inline-block text-secondary-600 font-semibold cursor-pointer hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="text-center pb-10">
                <button
                  type="submit"
                  className="px-5  w-full text-xl lg:w-5/6 py-2.5 relative rounded group font-medium text-white inline-block">
                  <span
                    className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-primary-600 to-primary-500"></span>
                  <span
                    className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-primary-600 to-primary-500"></span>
                  <span
                    className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-primary-600 to-primary-500"></span>
                  <span
                    className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-primary-600 from-primary-500"></span>
                  <span className="relative">Login</span>
                </button>
                <div className="mt-8">
                  <span>
                    Have on account yet?</span>{" "}
                  <span>
                    <button onClick={()=>setPath("signUp")} className="text-primary-600 font-semibold hover:underline">
                      Create Account
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
