import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Layout = lazy(() => import("../layouts/Layout"));
const Home = lazy(() => import("../pages/Home"));
const Error = lazy(() => import("../pages/Error"));

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
    ],
  },
]);

export default router;
