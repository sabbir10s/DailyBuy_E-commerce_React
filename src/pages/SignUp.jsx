import React from "react";
import Checkbox from "../components/theme/Checkbox";
import '.././styles/SignSignUp.css'
const SignUp = ({setPath}) => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center w-full">
        <div className=" w-[400px] lg:w-[470px] h-full hidden md:block bgImg">
        </div>
        <div className="w-full p-4">
          <h2 className="text-2xl font-semibold text-center mb-10">SignUp</h2>
          <form onSubmit={(e) => e.preventDefault()} action="#" className="space-y-5">
            <div className="text-center">
              <input
                className="px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                type="text"
                placeholder="Full Name"
              />
            </div>{" "}
            <div className="text-center">
              <input
                className="px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className=" text-center">
              <input
                className="px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                type="password"
                placeholder="Password"
              />
            </div>{" "}
            <div className=" text-center">
              <input
                className="px-4 py-3 rounded-lg w-full focus:border-primary-600 outline-none border lg:w-5/6"
                type="password"
                placeholder="Confirm Password"
              />
            </div>{" "}
            <div className="flex items-center lg:w-5/6 mx-auto">
              <span className="-mt-2">
                {" "}
                <Checkbox />
              </span>
              <div className="flex items-center gap-1">
                <p>I agree to{" "}</p>
                <button onClick={()=>setPath('terms')} className="text-primary-600 font-bold hover:underline cursor-pointer">
                  terms and condition
                </button>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="px-5  w-full text-xl lg:w-5/6 py-2.5 relative rounded group font-medium text-white inline-block">
                <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-primary-600 to-primary-500"></span>
                <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-primary-600 to-primary-500"></span>
                <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-primary-600 to-primary-500"></span>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-primary-600 from-primary-500"></span>
                <span className="relative">Create Account</span>
              </button>
              <div className="mt-6">
                <span>Already have account?</span>{" "}
                <span>
                  <button onClick={()=>setPath('signIn')} className="text-primary-600 font-semibold hover:underline">
                    Login
                  </button>
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
