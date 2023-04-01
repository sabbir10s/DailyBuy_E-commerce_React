import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar/Navbar";


const Layout = () => {
  return (
    <div>
      <header>
        {/* <TopBar /> */}
        <Navbar />
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
