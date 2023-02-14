import React, { useState } from "react";
// import { Link, useParams } from "react-router-dom";
import MenuBar from "../components/shared/MenuBar";
import BreadCamp from "../components/theme/BreadCamp";
import bigImg from "../assets/product-details/cup/big_product1.png";
import SmallProductImg from "../components/screen/SmallProductImg";
import { PrimaryButton, SecondaryButton } from "../components/theme/Button";
import ProcessingSteps from "../components/screen/ProcessingSteps";

const ProductDetails = () => {
  // const { id } = useParams();
  const [activeImg, setActiveImg] = useState(bigImg);
  const [wishlist, setWishlist] = useState(false);
  const [active, setActive] = useState("desc");
  return (
    <div className="mt-20 lg:mt-0">
      <MenuBar />
      <div className="container mt-0 lg:mt-5">
        <BreadCamp />
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:w-5/6 lg:mx-auto">
          <div className="space-y-4 cursor-pointer">
            <div className=" w-full h-full lg:h-[400px]">
              <img className="w-full h-full object-center object-fill rounded-2xl" src={activeImg} alt="" />
            </div>
            <SmallProductImg setActiveImg={setActiveImg} />
          </div>
          <div className=" mt-24 lg:mt-0">
            <div>
              <h2 className=" text-3xl lg:text-4xl font-semibold">Nestle Original Coffee-Mate Coffee Creamer</h2>
              {/* rating section */}
              <div className="flex items-center justify-between lg:justify-start lg:space-x-8 mt-5 flex-wrap">
                <div className="flex space-x-2 items-center ">
                  <p className="text-black ">4.0</p>
                  <div className="-mt-1">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FECA38"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-54 h-5 inline-block text-[#FECA38]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#D3D3D3"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-54 h-5 inline-block text-[#D3D3D3]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500">(225)</p>
                </div>
                <div className="lg:border-l text-gray-500 lg:px-5 flex lg:space-x-2 items-center">
                  <div onClick={() => setWishlist(!wishlist)} className="cursor-pointer">
                    {!wishlist && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 text-gray-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    )}{" "}
                    {wishlist && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#FF5555"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 text-[#FF5555]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                      </svg>
                    )}
                  </div>
                  <div>
                    <button onClick={() => setWishlist(!wishlist)} className="text-primary-600 font-bold">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
              {/* price section */}
              <div className="flex items-center space-x-5 mt-8">
                <p className="text-5xl text-primary-600 font-bold">$10.00</p>
                <div>
                  <p className="text-secondary-300 uppercase text-sm font-bold">20% off</p>
                  <p className="text-gray-500 text-2xl">
                    <del>$12.00</del>
                  </p>
                </div>
              </div>
              {/* sort desc */}
              <div className="mt-6">
                <p className="flex space-x-4 items-center">
                  <span>
                    <b>SKU:</b> 12314
                  </span>
                  <span className="text-gray-600">✅ In Stock</span>
                </p>
                <p className="mt-3 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam
                </p>
                <ul className="mt-3 text-gray-700">
                  <li className="list-disc list-inside"> Direct Full Array</li>
                  <li className="list-disc list-inside">Quantum Dot Technology</li>
                  <li className="list-disc list-inside">Ambient Mode</li>
                  <li className="list-disc list-inside">One Remote Control</li>
                </ul>
              </div>
              {/* quantity section */}
              <div className="flex mt-6 items-center justify-between flex-wrap space-y-4 lg:space-y-0 ">
                <div className="flex items-center space-x-4">
                  <label htmlFor="Quantity" className="">
                    {" "}
                    Quantity:
                  </label>

                  <div className="flex items-center border border-gray-50 p-1 rounded-lg">
                    <button type="button" className="w-10 h-10 text-xl bg-gray-50 rounded-[50%] leading-10 text-gray-600 transition hover:opacity-75">
                      &minus;
                    </button>

                    <span className="px-6 font-semibold">1</span>

                    <button type="button" className="w-10 h-10 text-xl bg-gray-50 rounded-[50%] leading-10 text-gray-600 transition hover:opacity-75">
                      &#43;
                    </button>
                  </div>
                </div>
                <div>
                  <PrimaryButton title="Add to cart" />
                </div>{" "}
                <div>
                  <SecondaryButton title="Buy Now" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* description */}
        <div className="mt-8  px-8 py-10 border border-gray-100 rounded-2xl">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setActive("desc")}
              className={` border outline-none border-gray-100 rounded-3xl py-2 px-8 shadow-custom  font-semibold  duration-300 transition ease-in-out text-sm ${
                active === "desc" ? "bg-primary-600 text-white" : "text-gray-600 bg-white"
              } `}
            >
              Description
            </button>
            <button
              onClick={() => setActive("review")}
              className={` border outline-none border-gray-100 rounded-3xl py-2 px-8 shadow-custom  font-semibold  duration-300 transition ease-in-out text-sm ${
                active === "review" ? "bg-primary-600 text-white" : "text-gray-600 bg-white"
              } `}
            >
              Reviews
            </button>
          </div>
          <div className="mt-8">
            {active === "desc" && (
              <div>
                {" "}
                <p className="text-sm leading-relaxed">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
                  ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore
                  et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
                  laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                  nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
                <div>
                  <h3 className="text-2xl font-semibold mt-5 mb-3"> Packaging & Delivery</h3>
                  <p className="text-sm leading-relaxed">
                    {" "}
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                    animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                  </p>{" "}
                </div>{" "}
                <div>
                  <h3 className="text-2xl font-semibold mt-5 mb-3"> Other Ingredients</h3>
                  <p className="text-sm leading-relaxed">
                    {" "}
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
                    dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                    animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                  </p>{" "}
                </div>
              </div>
            )}
            {active === "review" && (
              <div>
                <h3 className="text-2xl font-semibold">Review (3)</h3>
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="p-3 rounded-2xl mt-5 border ">
                    <p className="space-x-2">
                      <span className="font-medium">Mohin Uddin</span>
                      <span className="text-gray-500">On</span>
                      <span className="text-gray-700 font-medium">21 Jan 2023</span>
                    </p>
                    {/* rating section */}
                    <div className="">
                      <div className="flex space-x-2 items-center ">
                        <div className="-mt-1">
                          {Array.from({ length: 4 }).map((_, idx) => (
                            <svg
                              key={idx}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="#FECA38"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-4 h-4 inline-block text-[#FECA38]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                              />
                            </svg>
                          ))}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#D3D3D3"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-4 inline-block text-[#D3D3D3]"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h2 className="text-xl uppercase font-semibold text-gray-600">PRODUCT IS GOOD QUALITY</h2>
                      <p className="text-gray-600 text-sm mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <ProcessingSteps />
    </div>
  );
};

export default ProductDetails;
