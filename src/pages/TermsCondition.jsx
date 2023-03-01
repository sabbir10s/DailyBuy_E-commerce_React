import React from "react";
import { Helmet } from "react-helmet";
import TermsComponents from "../components/screen/TermsComponents";

const TermsCondition = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>DailyBuy - Terms & Condition</title>
        <meta charSet="utf-8" name="description" content="DailyBuy Terms & Condition Page" />
      </Helmet>
      <TermsComponents />
    </>
  );
};

export default TermsCondition;
