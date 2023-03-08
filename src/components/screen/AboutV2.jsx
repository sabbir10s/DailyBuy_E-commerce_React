import React from "react";
import ProcessingSteps from "./ProcessingSteps";
import bannerImg from "../../assets/about/about_img_one.png";
import qualityAndFresh from "../../assets/icon/qualityAndFresh.png";
import organic from "../../assets/icon/organic.png";
import bestSuppliers from "../../assets/icon/bestSuppliers.png";
import bottomBannerImg from "../../assets/about/bottom banner V2.png";
import bottomMobileBanner from "../../assets/about/bottom banner mobile V2.png";

const AboutV2 = () => {
  return (
    <>
      <div className="mt-[80px] lg:mt-[20px] flex flex-col gap-[30px] md:gap-[40px] lg:gap-[80px]">
        <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-7 lg:gap-10 container">
          <img className="w-full lg:w-[450px] rounded-[10px]" src={bannerImg} alt="" />
          <div>
            <h1 className="text-2xl lg:text-4xl text-[#383838] font-bold">A wonderful serenity has by taken possession, </h1>
            <p className="text-sm lg:text-lg text-[#626463] mt-[16px] lg:mt-[32px]">
              {" "}
              <span className=" font-semibold">A wonderful serenity has taken possession of my entire soul, like these sweet mornings</span>
              <br /> <br /> of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created
              for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I
              neglect my talents. I should be incapable of drawing a single stroke
            </p>
          </div>
        </div>

        <div className="bg-primary-500 text-white py-[64px]">
          <div className="container flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-14 lg:gap-0">
            <div className="lg:w-[275px] flex flex-col justify-center items-center">
              <div className="bg-white w-[80px] h-[80px] rounded-full flex items-center justify-center">
                <img src={qualityAndFresh} alt="" />
              </div>
              <h2 className="text-center text-[20px] font-bold mt-[16px] mb-[8px]">Quality & Fresh products</h2>
              <p className="text-center text-[14px] text-[#E6F6F3]">
                Morbi ornare augue mauris, vel pretium justo vulputate quis. Morbi lacinia porta mauris et auctor. Suspendisse potenti
              </p>
            </div>
            <div className="lg:w-[275px] flex flex-col justify-center items-center">
              <div className="bg-white w-[80px] h-[80px] rounded-full flex items-center justify-center">
                <img src={organic} alt="" />
              </div>
              <h2 className="text-center text-[20px] font-bold mt-[16px] mb-[8px]">Ecological and organic</h2>
              <p className="text-center text-[14px] text-[#E6F6F3]">
                Morbi ornare augue mauris, vel pretium justo vulputate quis. Morbi lacinia porta mauris et auctor. Suspendisse potenti
              </p>
            </div>
            <div className="lg:w-[275px] flex flex-col justify-center items-center">
              <div className="bg-white w-[80px] h-[80px] rounded-full flex items-center justify-center">
                <img src={bestSuppliers} alt="" />
              </div>
              <h2 className="text-center text-[20px] font-bold mt-[16px] mb-[8px]">QThe Best Suppliers</h2>
              <p className="text-center text-[14px] text-[#E6F6F3]">
                Morbi ornare augue mauris, vel pretium justo vulputate quis. Morbi lacinia porta mauris et auctor. Suspendisse potenti
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex items-center justify-center">
            <div className="hidden md:block">
              <div className="relative">
                <div className="w-full h-full bg-white/40 absolute flex items-center justify-center">
                  <button className="bg-white text-primary-500 font-bold py-[20px] px-[65px] rounded-[10px] group">
                    <span>@username</span>
                    <div className="bg-primary-500 w-2/3 group-hover:w-full duration-300 h-[2px]"></div>
                  </button>
                </div>
                <img src={bottomBannerImg} alt="" />
              </div>
            </div>
            <div className="block md:hidden">
              <div className="relative">
                <div className="w-full h-full bg-white/40 absolute flex items-center justify-center">
                  <button className="bg-white text-primary-500 font-bold py-[20px] px-[65px] rounded-[10px] group">
                    <span>@username</span>
                    <div className="bg-primary-500 w-2/3 group-hover:w-full duration-300 h-[2px]"></div>
                  </button>
                </div>
                <img src={bottomMobileBanner} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProcessingSteps />
    </>
  );
};

export default AboutV2;
