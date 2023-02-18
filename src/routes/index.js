import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/Checkout"));
const ForgotPassword = lazy(() => import("../pages/ForgotPassword"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;
