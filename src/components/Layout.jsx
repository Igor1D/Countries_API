import React from "react";
import "./Layout.css";


function Layout({ children }) {
  return (
    <>
    <header>
      <div className="header-title-div">
        <p className="header-title">Where in the world?</p>
      </div>
      <div className="header-theme-div">
        {/* <img src="../assets/moon-solid.svg" alt="" className="fa-moon" /> */}
        <p className="header-theme">Dark Mode</p>
      </div>
    </header>
    {children}
    </>
  );
}

export default Layout;
