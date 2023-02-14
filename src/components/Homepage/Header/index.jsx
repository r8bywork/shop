import React from "react";
import style from "./Header.module.scss";
import NavBar from "./NavBar";
import logo from "../../../asssets/images/logo.png";
import Contact from "./Contact";


const Header = () => {
  return (
    <div className={style.Homepage}>
      <img src={logo} alt="logo" />
      <div className={style.right}>
        <Contact/>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
