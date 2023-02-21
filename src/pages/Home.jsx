import React from "react";
import BestSales from "../components/screen/BestSales";
import FeatureProduct from "../components/screen/FeatureProduct";
import FoodCategory from "../components/screen/FoodCategory";
import Hero from "../components/screen/Hero";
import OfferTimerBanner from "../components/screen/OfferTimerBanner";
import PosterOffer from "../components/screen/PosterOffer";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import ScrollBottom from "../components/shared/ScrollBottom";
import ScrollCart from "../components/shared/ScrollCart";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureProduct />
      <PosterOffer />
      <BestSales />
      <OfferTimerBanner />
      <FoodCategory />
      <ProcessingSteps />
      <ScrollBottom />
      <ScrollCart />
    </div>
  );
};

export default Home;
