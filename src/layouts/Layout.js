import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import BottomBar from "../components/shared/BottomBar";
import Footer from "../components/shared/Footer";
import MenuBar from "../components/shared/MenuBar";
import MobileNavbar from "../components/shared/MobileNavbar";
import TopBar from "../components/shared/TopBar";
import TopSearchBar from "../components/shared/TopSearchBar";

const Layout = () => {
  const location = useLocation()
  console.log(location);
  return (
    <div>
      <header>
        <MobileNavbar />
        <TopBar />
        <TopSearchBar />
        {
          location.pathname !== "/" && <MenuBar />
        }
      </header>

      {/* main */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <footer>
        <BottomBar />
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
