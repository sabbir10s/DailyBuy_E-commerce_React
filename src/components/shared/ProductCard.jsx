import React, {useState} from "react";
import {SecondaryButton} from "../theme/Button";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/feature/cartSlice";
import {useNavigate} from "react-router-dom";
import ReactStars from "react-stars";

const ProductCard = ({product}) => {
  const [wishlist,
    setWishlist] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const {_id,discount,main_img_url,del_price,rating } = product
  const navigate = useNavigate()
  const handleProductDetails = () => {
    navigate(`/product/${_id}`)
  }
  return (
    <div
    onClick={()=>handleProductDetails(_id)}
      className="shadow-custom relative rounded-lg bg-gray-50 p-3 w-full cursor-pointer hover:bg-white duration-300 transition ease-in border border-gray-200/60 overflow-hidden">
      <div>
        <div>
          <div
            className="bg-secondary-300 inline-block py-2 px-3 rounded-tl-2xl rounded-br-2xl text-white absolute top-3 left-3">
            <p>{discount}% OFF</p>
          </div>
          <div
            onClick={() => setWishlist(!wishlist)}
            className="bg-white hidden md:inline-block p-2 border border-gray-100 rounded-[50%] text-white absolute top-3 right-3 hover:scale-110 duration-300 transition">
            {!wishlist && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-gray-500">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
              </svg>
            )}{" "} {wishlist && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FF5555"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-[#FF5555]">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
              </svg>
            )}
          </div>
          <div className="w-[300px] mx-auto h-[250px]">
            <img
              src={main_img_url}
              className="w-full h-full object-center object-fill"
              alt=""/>
          </div>
          <div className="space-y-3 lg:mt-1">
            <h3 className="text-black font-semibold text-[12px] md:text-[18px]">{product
                ?.nickname}</h3>
            <div className="flex justify-between items-center">
              <p className="space-x-2">
                <span className="text-primary-600 text-[12px] md:text-[18px] font-semibold">${product
                    ?.price}</span>
                <span className="text-gray-500 text-base text-[11px] md:text-[18px]">
                  <del>${del_price}</del>
                </span>
              </p>
              <div className="flex space-x-1 items-center">
                <div className="flex items-center">
                <ReactStars
                    count={5}
                    size={15}
                    value={rating}
                    edit={false}
                ></ReactStars>
                </div>
                <p className="text-gray-500 text-[12px] md:text-[18px]">({rating})</p>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <SecondaryButton
              handleAddToCart={handleAddToCart}
              product={product}
              title="Add to cart"
              w="full"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
