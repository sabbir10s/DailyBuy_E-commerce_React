import React, { useState } from "react";
import { SecondaryButton } from "../theme/Button";
import productImg from "../../assets/products/product.png";
import { Link } from "react-router-dom";
import { HiStar } from 'react-icons/hi';
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai';

const Products = () => {
  const [wishlist, setWishlist] = useState(false);
  const id = 4;
  return (
    <div className="shadow-custom relative rounded-lg bg-gray-50 group p-3 w-full cursor-pointer hover:bg-white duration-300 transition ease-in border border-gray-200/60 overflow-hidden">
      <div>
        <div className="bg-secondary-300 inline-block py-1 md:py-2 px-2 md:px-3 rounded-tl-lg md:rounded-tl-2xl rounded-br-lg md:rounded-br-2xl text-white absolute top-3 left-3 text-[8px] md:text-[14px]">
          <p>-20% OFF</p>
        </div>

      <div className="hidden md:block">
         <div
            onClick={() => setWishlist(!wishlist)}
            className="bg-white  inline-block p-2 border border-gray-100 rounded-[50%] text-white absolute top-3 right-3 hover:scale-110 duration-300 transition"
          >
            {!wishlist && (
              <AiOutlineHeart className="text-[#999999]/40 text-xl"/>
            )}{" "}
            {wishlist && (
              <AiFillHeart className="text-[#FF5555] text-xl"/>
            )}
          </div>
      </div>
        <div className=" w-[250px] md:w-[300px] mx-auto h-[150px] md:h-[250px]">
          <img src={productImg} className=" w-[200px] lg:w-full max-h-full object-center object-fill" alt="" />
        </div>
        <div className="space-y-3 lg:mt-1">
          <h3 className="text-black font-semibold text-[12px] md:text-[18px]">Healthy Cashew Nuts</h3>
          <div className="flex justify-between items-center">
            <p className="space-x-2">
              <span className="text-primary-600 text-[12px] md:text-[18px] font-semibold">$10</span>
              <span className="text-gray-500 text-base text-[11px] md:text-[18px]">
                <del>$12</del>
              </span>
            </p>
            <div className="flex space-x-1 items-center">
              <div className="flex items-center">
                {Array.from({ length: 4 }).map((_, idx) => (
                 <HiStar className="text-[#FECA38] text-[10px] md:text-lg"/>
                ))}
                <HiStar className="text-[#D3D3D3] text-[10px] md:text-lg"/>
              </div>
              <p className="text-gray-500 text-[12px] md:text-[18px]">(4.5)</p>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <Link to={`/product/${id}`}>
            {" "}
            <SecondaryButton title="Add to cart" w="full" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
