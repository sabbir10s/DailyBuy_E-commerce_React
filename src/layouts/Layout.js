import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import MobileNavbar from "../components/shared/MobileNavbar";
import TopBar from "../components/shared/TopBar";
import TopSearchBar from "../components/shared/TopSearchBar";

const Layout = () => {
  return (
    <div>
      <header>
        <MobileNavbar />
        <TopBar />
        <TopSearchBar />
      </header>

      {/* main */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
