import React from "react";
import BestSales from "../components/screen/BestSales";
import FeatureProduct from "../components/screen/FeatureProduct";
import Hero from "../components/screen/Hero";
import PosterOffer from "../components/screen/PosterOffer";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureProduct />
      <PosterOffer />
      <BestSales />
    </div>
  );
};

export default Home;
