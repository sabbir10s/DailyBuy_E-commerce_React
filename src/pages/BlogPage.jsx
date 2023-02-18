import React from "react";
import Blogs from "../components/screen/Blog/Blogs";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import MenuBar from "../components/shared/MenuBar";

const BlogPage = () => {
  return (
    <>
      <MenuBar />
      <Blogs />
      <ProcessingSteps />
    </>
  );
};
export default BlogPage;
