import React from "react";
import CategoriesBanner from "../components/screen/Categories/CategoriesBanner";
import CategoriesFilter from "../components/screen/Categories/CategoriesFilter";
import CategoriesProduct from "../components/screen/Categories/CategoriesProduct";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import MenuBar from "../components/shared/MenuBar";

const Categories = () => {
  return (
    <div>
      <MenuBar />
      {/* categories main section */}
      <section className="grid grid-cols-4 lg:grid-cols-5 gap-8 container mt-8">
        <div className="">
          <CategoriesFilter />
        </div>
        <div className="col-span-4 ml-4">
          <CategoriesBanner />
          <CategoriesProduct />
        </div>
      </section>
      <ProcessingSteps />
    </div>
  );
};

export default Categories;
