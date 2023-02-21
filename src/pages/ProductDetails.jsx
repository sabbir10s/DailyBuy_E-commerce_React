import React, { useEffect, useState } from "react";
import MenuBar from "../components/shared/MenuBar";
import BreadCamp from "../components/theme/BreadCamp";
import bigImg from "../assets/product-details/cup/big_product1.png";
import SmallProductImg from "../components/screen/SmallProductImg";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import { Link, useParams } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";
import { ImWarning } from "react-icons/im";
import Quantity from "../components/shared/Quantity";
import ReviewCard from "../components/screen/Review/ReviewCard";
import AddReview from "../components/screen/Review/AddReview";
import ProductCard from "../components/shared/ProductCard";
import axios from "axios";
import ReactStars from "react-stars";

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);
  const {itemId} = useParams()
  const fetchData = () => {
    axios
      .get("/products.json")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [itemId]);

  const productInfo = productData.find(product=>product._id === parseInt(itemId))
  
  const [activeImg, setActiveImg] = useState(bigImg);
  const [wishlist, setWishlist] = useState(false);
  const [active, setActive] = useState("desc");

    if(!productInfo){
      return <>Loading</>
    }
    const {product_name, price, rating,review,discount,stock,desc,details_benefit,full_description, packaging_and_delivery,other_things_of_product} = productInfo
  return (
    <div className="mt-20 lg:mt-0">
      <MenuBar />
      <div className="container mt-0 md:mt-[30px]">
        <BreadCamp />
        <div className="md:mt-[32px] grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          <div className="space-y-4 cursor-pointer col-span-1">
            <div className=" w-full h-full lg:h-[400px]">
              <img className="w-full h-full object-center object-fill rounded-[24px]" src={activeImg} alt="" />
            </div>
            <div className="hidden lg:block">
              <SmallProductImg setActiveImg={setActiveImg} />
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <div>
              <h2 className=" text-[20px] md:text-[32px] font-semibold">{product_name}</h2>
              {/* rating section */}
              <div className="flex items-center justify-between lg:justify-start lg:space-x-8 mt-5 flex-wrap">
                <div className="flex space-x-2 items-center ">
                  <p className="font-semibold text-[18px]">{rating}</p>
                  <div className="flex items-center">
                  <ReactStars
                    count={5}
                    size={25}
                    value={rating}
                    edit={false}
                ></ReactStars>
                  </div>
                  <p className="text-gray-500">({review})</p>
                </div>
                <div className="lg:border-l text-gray-500 lg:px-5 flex md:gap-2 items-center">
                  <div onClick={() => setWishlist(!wishlist)} className="cursor-pointer">
                    {!wishlist && <AiOutlineHeart className="text-[#999999]/40 text-3xl" />}{" "}
                    {wishlist && <AiFillHeart className="text-[#FF5555] text-3xl" />}
                  </div>
                  <div>
                    <button onClick={() => setWishlist(!wishlist)} className="text-primary-600 font-bold hidden md:block">
                      Add to wishlist
                    </button>
                  </div>
                </div>
              </div>
              {/* price section */}

              <div className="flex items-center justify-between lg:justify-start md:gap-10 mt-8">
                <div className="flex items-center space-x-5 ">
                  <p className="text-[32px] md:text-[48px] text-primary-600 font-bold">${price}</p>
                  <div>
                    <p className="text-[12px] text-secondary-300 uppercase font-bold">{price*discount/100}% off</p>
                    <p className="text-[16px] md:text-[20px] text-gray-500">
                      <del>{discount}</del>
                    </p>
                  </div>
                </div>

                <div className="block lg:hidden">
                  <Quantity />
                </div>
              </div>

              <div className="flex flex-col">
                {/*==========================
              =========sort desc============
              ==============================*/}
                <div className="mt-10 lg:mt-6 order-2 lg:order-1">
                  <div className="flex space-x-4 items-center">
                    <span>
                      <b>SKU:</b>
                      12314
                    </span>
                    {
                      stock && <span className="text-gray-600">✅ In Stock</span>
                    }
                    {
                      !stock && <p className="text-gray-600 flex items-center gap-1"><ImWarning className="text-[#FF5555]"/> <span>Not Available</span></p>
                    }
                    
                  </div>
                  <p className="mt-3 text-gray-700">
                    {desc}
                  </p>
                  <ul className="mt-3 text-gray-700">
                    {
                      details_benefit.map((d, index)=><li key={index} className="list-disc list-inside">{d}</li>)
                    }
                  </ul>
                </div>
                {/*============================
              =========quantity section======
              ==============================*/}
                <div className=" mt-8 lg:mt-6 flex flex-col lg:flex-row lg:items-center gap-[32px] order-1 lg:order-2">
                  <div className="hidden lg:block">
                    <Quantity />
                  </div>
                  <div className="flex items-center justify-between md:justify-start gap-[32px]">
                    <div>
                      <Link to="/cart">
                        {" "}
                        <button className="bg-primary-600 hover:bg-primary-500 text-white border duration-300 py-[10px] lg:py-[13px] px-[30px] lg:px-[40px] rounded-[5px]">
                          Add to cart
                        </button>
                      </Link>
                    </div>{" "}
                    <div>
                      <Link to="/cart">
                        <button className="text-primary-600 hover:text-primary-900 bg-white hover:bg-primary-50 border border-primary-600 hover:border-primary-900 duration-300 py-[10px] lg:py-[13px] px-[30px] lg:px-[40px] rounded-[5px]">
                          Buy Now
                        </button>
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

        <div className="mt-8 lg:mt-[99px] p-6 lg:p-10 border border-gray-100 rounded-2xl">
          <div className="flex items-center justify-between md:justify-start md:space-x-8">
            <button
              onClick={() => setActive("desc")}
              className={` border outline-none border-gray-100 rounded-3xl py-2 px-8 shadow-custom font-semibold duration-300 transition ease-in-out text-sm ${
                active === "desc" ? "bg-primary-600 text-white" : "text-gray-600 bg-white"
              } `}
            >
              Description
            </button>
            <button
              onClick={() => setActive("review")}
              className={` border outline-none border-gray-100 rounded-3xl py-2 px-8 shadow-custom font-semibold duration-300 transition ease-in-out text-sm ${
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
                <div className="text-sm leading-relaxed">
                  <p className="hidden lg:block">{full_description}</p>
                  <p className="block lg:hidden">
                    {full_description.slice(0, 300)}...
                      <span className="text-primary-600 font-semibold">More</span>
                    </p>
                </div>
                <div className="hidden lg:block">
                  <h3 className="text-2xl font-semibold mt-5 mb-3">Packaging & Delivery</h3>
                  <p className="text-sm leading-relaxed">
                    {packaging_and_delivery}
                  </p>{" "}
                </div>{" "}
                <div className="hidden lg:block">
                  <h3 className="text-2xl font-semibold mt-5 mb-3">Other Ingredients</h3>
                  <p className="text-sm leading-relaxed">
                    {other_things_of_product}
                  </p>{" "}
                </div>
              </div>
            )}
            {active === "review" && (
              <div>
                <h3 className="text-2xl font-semibold hidden lg:block">Review (3)</h3>
                <div className="hidden lg:block">
                  {Array.from({ length: 3 }).map((_, idx) => (
                    <ReviewCard key={idx} />
                  ))}
                </div>
                <div className="block lg:hidden">
                  {Array.from({ length: 2 }).map((_, idx) => (
                    <ReviewCard key={idx} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Add Review */}

          <div className="hidden lg:block mt-[40px]">
            <h2 className=" pt-[24px] text-[24px] font-semibold border-t border-#DFE3E">Add Review</h2>
            <AddReview />
          </div>
        </div>
        {/*==================================
          =========description End=========
          ==================================*/}
      </div>

      {/* Related Product */}
      <div className="hidden md:block">
        <div className="container flex justify-between items-center mt-[25px] md:mt-[35px] lg:mt-[50px] mb-[16px] lg:mb-[29px]">
          <h2 className="text-sm md:text-2xl lg:text-4xl font-semibold text-center lg:text-left">Related Product</h2>
          <button className="text-gray-500 text-[10px] md:text-base uppercase flex items-center gap-1 hover:text-primary-600 duration-300">
            <span>View More</span>
            <FiArrowRight />
          </button>
        </div>
        <div className="container grid grid-cols-2 lg:grid-cols-4 gap-[10px] md:gap-[20px]">
          {productData.slice(0, 4).map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
      </div>
      <ProcessingSteps />
    </div>
  );
};

export default ProductDetails;
