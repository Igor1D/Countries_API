import React from "react";
import { useThemeContext } from "../Utils/ThemeProvider";
import "./Layout.css";


function Layout({ children }) {

  const { darkTheme, setDarkTheme } = useThemeContext();

  function handleClick() {
    setDarkTheme(!darkTheme);
    console.log("clciked");
  }


  return (
    <>
    <header>
      <div className="header-title-div">
        <p className="header-title">Where in the world?</p>
      </div>
      <div className="header-theme-div">
        {/* <img src="../assets/moon-solid.svg" alt="" className="fa-moon" /> */}
        <span className="header-theme" onClick={()=>{handleClick()}}> <img src="/public/moon_dark.svg" alt="moon_dark" className="moon-icon" /> Dark Mode</span>
       
      </div>
    </header>
    {children}
    </>
  );
}

export default Layout;
