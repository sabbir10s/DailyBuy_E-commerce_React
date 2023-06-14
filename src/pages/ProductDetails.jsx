import React, { useEffect, useState } from "react";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import { useParams } from "react-router-dom";

import axios from "axios";
import { Helmet } from "react-helmet";
import ThemeSuspense from "../components/theme/ThemeSuspense";
import TopSection from "../components/screen/ProductDetails/TopSection";
import ProductDescription from "../components/screen/ProductDetails/ProductDescription";
import RelatedProduct from "../components/screen/ProductDetails/RelatedProduct";

const ProductDetails = () => {
  const [productData, setProductData] = useState([]);

  const { itemId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productInfo = productData.find((product) => product._id === parseInt(itemId));

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

  if (!productInfo) {
    return <ThemeSuspense />;
  }

  return (
    <div className="mt-20 lg:mt-0">
      <Helmet>
        <title>DailyBuy - Product Details</title>
        <meta charSet="utf-8" name="description" content="DailyBuy Product Details Page" />
      </Helmet>
      <div className="container mt-0 md:mt-[30px]">
        <TopSection productInfo={productInfo}/>

        <ProductDescription productInfo={productInfo}/>
      </div>

      {/* Related Product */}
      <RelatedProduct productData={productData}/>
      <ProcessingSteps />
    </div>
  );
};

export default ProductDetails;
