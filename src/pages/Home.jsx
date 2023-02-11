import React from "react";
import BestSales from "../components/screen/BestSales";
import FeatureProduct from "../components/screen/FeatureProduct";
import FoodCategory from "../components/screen/FoodCategory";
import Hero from "../components/screen/Hero";
import OfferTimerBanner from "../components/screen/OfferTimerBanner";
import PosterOffer from "../components/screen/PosterOffer";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureProduct />
      <PosterOffer />
      <BestSales />
      <OfferTimerBanner />
      <FoodCategory/>
    </div>
  );
};

export default Home;
