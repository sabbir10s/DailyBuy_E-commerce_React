import React from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../components/shared/TopBar";

const Layout = () => {
  return (
    <div>
      <header>
        <TopBar />
      </header>

      {/* main */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <footer>footer</footer>
    </div>
  );
};

export default Layout;
