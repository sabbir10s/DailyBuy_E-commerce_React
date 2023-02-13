import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MenuBar from "../components/shared/MenuBar";
import BreadCamp from "../components/theme/BreadCamp";
import bigImg from "../assets/product-details/cup/big_product1.png";
import SmallProductImg from "../components/screen/SmallProductImg";

const ProductDetails = () => {
  const { id } = useParams();
  const [activeImg, setActiveImg] = useState(bigImg);
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
              <h2 className=" text-3xl lg:text-4xl font-semibold ">Nestle Original Coffee-Mate Coffee Creamer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
