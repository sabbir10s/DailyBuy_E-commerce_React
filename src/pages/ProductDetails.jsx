import React, {useState} from "react";
import MenuBar from "../components/shared/MenuBar";
import BreadCamp from "../components/theme/BreadCamp";
import bigImg from "../assets/product-details/cup/big_product1.png";
import SmallProductImg from "../components/screen/SmallProductImg";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import {Link} from "react-router-dom";
import {HiStar} from 'react-icons/hi';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import Quantity from "../components/shared/Quantity";
import ReviewCard from "../components/screen/Review/ReviewCard";
import AddReview from "../components/screen/Review/AddReview";

const ProductDetails = () => {
  const [activeImg,
    setActiveImg] = useState(bigImg);
  const [wishlist,
    setWishlist] = useState(false);
  const [active,
    setActive] = useState("desc");

  const demoText = "   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum aperiam venia" +
      "m est beatae fugiat at, quod quis doloremque voluptates non tenetur nihil volupt" +
      "atum quibusdam a voluptas omnis velit, ut sint necessitatibus, eos placeat accus" +
      "antium quidem! Accusantium nulla officia voluptatibus nisi repellat neque. Fugit" +
      " perspiciatis id voluptatem alias mollitia placeat cumque dolore exercitationem." +
      " Odit mollitia alias error repudiandae minima laborum quaerat perspiciatis ipsam" +
      " soluta eius cupiditate voluptas eum exercitationem voluptate earum quia molesti" +
      "as accusantium fuga laboriosam maxime officiis."
  return (
    <div className="mt-20 lg:mt-0">
      <MenuBar/>
      <div className="container mt-0 md:mt-[30px]">
        <BreadCamp/>
        <div className="md:mt-[32px] grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <div className="space-y-4 cursor-pointer col-span-1">
            <div className=" w-full h-full lg:h-[400px]">
              <img
                className="w-full h-full object-center object-fill rounded-[24px]"
                src={activeImg}
                alt=""/>
            </div>
            <div className="hidden lg:block">
              <SmallProductImg setActiveImg={setActiveImg}/>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div>
              <h2 className=" text-[20px] md:text-[32px] font-semibold">Nestle Original Coffee-Mate Coffee Creamer</h2>
              {/* rating section */}
              <div
                className="flex items-center justify-between lg:justify-start lg:space-x-8 mt-5 flex-wrap">
                <div className="flex space-x-2 items-center ">
                  <p className="text-black ">4.0</p>
                  <div className="-mt-1 flex items-center">
                    {Array
                      .from({length: 4})
                      .map((_, idx) => (<HiStar className="text-[#FECA38] text-xl"/>))}
                    <HiStar className="text-[#D3D3D3] text-xl"/>
                  </div>
                  <p className="text-gray-500">(225)</p>
                </div>
                <div className="lg:border-l text-gray-500 lg:px-5 flex md:gap-2 items-center">
                  <div onClick={() => setWishlist(!wishlist)} className="cursor-pointer">
                    {!wishlist && (<AiOutlineHeart className="text-[#999999]/40 text-3xl"/>)}{" "} {wishlist && (<AiFillHeart className="text-[#FF5555] text-3xl"/>)}
                  </div>
                  <div>
                    <button
                      onClick={() => setWishlist(!wishlist)}
                      className="text-primary-600 font-bold hidden md:block">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
              {/* price section */}

              <div
                className="flex items-center justify-between lg:justify-start md:gap-10 mt-8">
                <div className="flex items-center space-x-5 ">
                  <p className="text-[32px] md:text-[48px] text-primary-600 font-bold">$10.00</p>
                  <div>
                    <p className="text-[12px] text-secondary-300 uppercase font-bold">20% off</p>
                    <p className="text-[16px] md:text-[20px] text-gray-500">
                      <del>$12.00</del>
                    </p>
                  </div>
                </div>

                <div className="block lg:hidden">
                  <Quantity/>
                </div>
              </div>

              <div className="flex flex-col">
                {/*==========================
              =========sort desc============
              ==============================*/}
                <div className="mt-10 lg:mt-6 order-2 lg:order-1">
                  <p className="flex space-x-4 items-center">
                    <span>
                      <b>SKU:</b>
                      12314
                    </span>
                    <span className="text-gray-600">✅ In Stock</span>
                  </p>
                  <p className="mt-3 text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </p>
                  <ul className="mt-3 text-gray-700">
                    <li className="list-disc list-inside">
                      Direct Full Array</li>
                    <li className="list-disc list-inside">Quantum Dot Technology</li>
                    <li className="list-disc list-inside">Ambient Mode</li>
                    <li className="list-disc list-inside">One Remote Control</li>
                  </ul>
                </div>
                {/*============================
              =========quantity section======
              ==============================*/}
                <div
                  className=" mt-8 lg:mt-6 flex flex-col lg:flex-row lg:items-center gap-[32px] order-1 lg:order-2">
                  <div className="hidden lg:block">
                    <Quantity/>
                  </div>
                  <div className="flex items-center justify-between md:justify-start gap-[32px]">
                    <div>
                      <Link to="/cart">
                        {" "}
                        <button
                          className="bg-primary-600 hover:bg-primary-500 text-white border duration-300 py-[10px] lg:py-[13px] px-[30px] lg:px-[40px] rounded-[5px]">Add to cart</button>
                      </Link>
                    </div>{" "}
                    <div>
                      <Link to="/cart">
                        <button
                          className="text-primary-600 hover:text-primary-900 bg-white hover:bg-primary-50 border border-primary-600 hover:border-primary-900 duration-300 py-[10px] lg:py-[13px] px-[30px] lg:px-[40px] rounded-[5px]">Buy Now</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/*==================================
              =========description Start=========
              ==================================*/}

        <div
          className="mt-8 lg:mt-[99px] p-6 lg:p-10 border border-gray-100 rounded-2xl">
          <div
            className="flex items-center justify-between md:justify-start md:space-x-8">
            <button
              onClick={() => setActive("desc")}
              className={` border outline-none border-gray-100 rounded-3xl py-2 px-8 shadow-custom font-semibold duration-300 transition ease-in-out text-sm ${active === "desc"
              ? "bg-primary-600 text-white"
              : "text-gray-600 bg-white"} `}>
              Description
            </button>
            <button
              onClick={() => setActive("review")}
              className={` border outline-none border-gray-100 rounded-3xl py-2 px-8 shadow-custom font-semibold duration-300 transition ease-in-out text-sm ${active === "review"
              ? "bg-primary-600 text-white"
              : "text-gray-600 bg-white"} `}>
              Reviews
            </button>
          </div>
          <div className="mt-8">
            {active === "desc" && (
              <div>
                {" "}
                <div className="text-sm leading-relaxed">
                  <p className="hidden lg:block">{demoText}</p>
                  <div>
                    <p>{demoText.slice(0, 300)}...
                      <span className="text-primary-600 font-semibold">More</span>
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <h3 className="text-2xl font-semibold mt-5 mb-3">
                    Packaging & Delivery</h3>
                  <p className="text-sm leading-relaxed">
                    {" "}
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita
                  </p>{" "}
                </div>{" "}
                <div className="hidden lg:block">
                  <h3 className="text-2xl font-semibold mt-5 mb-3">
                    Other Ingredients</h3>
                  <p className="text-sm leading-relaxed">
                    {" "}
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                    praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                    excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                    officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                    rerum facilis est et expedita
                  </p>{" "}
                </div>
              </div>
            )}
            {active === "review" && (
              <div>
                <h3 className="text-2xl font-semibold hidden lg:block">Review (3)</h3>
                <div className="hidden lg:block">
                  {Array
                    .from({length: 3})
                    .map((_, idx) => (<ReviewCard key={idx}/>))}
                </div>
                <div className="block lg:hidden">
                  {Array
                    .from({length: 2})
                    .map((_, idx) => (<ReviewCard key={idx}/>))}
                </div>
              </div>
            )}
          </div>
          <div className="hidden lg:block mt-[40px]">
            <h2 className=" pt-[24px] text-[24px] font-semibold border-t border-#DFE3E">Add Review</h2>
            <AddReview/>
          </div>

        </div>
        {/*==================================
              =========description End=========
              ==================================*/}
      </div>
      <ProcessingSteps/>
    </div>
  );
};

export default ProductDetails;
