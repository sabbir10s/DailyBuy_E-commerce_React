import React from "react";
import { useParams } from "react-router-dom";
import BlogDetailsArea from "../components/screen/Blog/BlogDetailsArea";
import RecentBlog from "../components/screen/Blog/RecentBlog";
import ProcessingSteps from "../components/screen/ProcessingSteps";
import MenuBar from "../components/shared/MenuBar";

const BlogDetails = () => {
  const { blogId } = useParams();
  return (
    <>
      <MenuBar />
      <BlogDetailsArea blogId={blogId} />
      <RecentBlog blogId={blogId} />
      <ProcessingSteps />
    </>
  );
};

export default BlogDetails;
