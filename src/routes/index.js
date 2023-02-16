import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import AboutUsV2 from "../pages/AboutUsV2";
import ContactUs from "../pages/ContactUs";
const Categories = lazy(() => import("../pages/Categories"));
const Layout = lazy(() => import("../layouts/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Error = lazy(() => import("../pages/Error"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/aboutV2",
        element: <AboutUsV2 />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
