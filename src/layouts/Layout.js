import React from "react";
import { Outlet } from "react-router-dom";
// import BottomBar from "../components/shared/BottomBar";
import Footer from "../components/shared/Footer";
// import MenuBar from "../components/shared/MenuBar";
import MyNav from "../components/shared/Nav/MyNav";
// import TopBar from "../components/shared/TopBar";
// import TopSearchBar from "../components/shared/TopSearchBar";

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
