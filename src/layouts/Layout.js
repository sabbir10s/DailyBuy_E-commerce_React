import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import MyNav from "../components/shared/Nav/MyNav";

const Layout = () => {
  // const location = useLocation();
  return (
    <div>
      <header>
        {/* <TopBar /> */}
        {/* <TopSearchBar /> */}
        <MyNav />
        {/* {location.pathname !== "/" && <MenuBar />} */}
      </header>

      {/* main */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <footer>
        {/* <BottomBar /> */}
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
