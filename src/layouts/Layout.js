import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header>Header</header>

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
