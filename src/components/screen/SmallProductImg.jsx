import React from "react";
import Slider from "react-slick";
import small1 from "../../assets/product-details/cup/small_product (1).png";
import small2 from "../../assets/product-details/cup/small_product (2).png";
import small3 from "../../assets/product-details/cup/small_product (3).png";
import small4 from "../../assets/product-details/cup/small_product (4).png";

const SmallProductImg = ({ setActiveImg }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    /* responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        ], */
  };
  return (
    <div>
      <Slider {...settings}>
        <div className=" px-2">
          <img onClick={() => setActiveImg(small1)} className="w-full h-full object-center object-fill rounded-2xl" src={small1} alt="" />
        </div>{" "}
        <div className=" px-2">
          <img onClick={() => setActiveImg(small2)} className="w-full h-full object-center object-fill rounded-2xl" src={small2} alt="" />
        </div>{" "}
        <div className=" px-2">
          <img onClick={() => setActiveImg(small2)} className="w-full h-full object-center object-fill rounded-2xl" src={small2} alt="" />
        </div>{" "}
        <div className=" px-2">
          <img onClick={() => setActiveImg(small3)} className="w-full h-full object-center object-fill rounded-2xl" src={small3} alt="" />
        </div>{" "}
        <div className=" px-2">
          <img onClick={() => setActiveImg(small4)} className="w-full h-full object-center object-fill rounded-2xl" src={small4} alt="" />
        </div>{" "}
        <div className=" px-2">
          <img onClick={() => setActiveImg(small4)} className="w-full h-full object-center object-fill rounded-2xl" src={small4} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SmallProductImg;
