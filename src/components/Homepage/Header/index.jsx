import React from "react";
import style from "./Header.module.scss";
import NavBar from "./NavBar";
import logo from "../../../asssets/images/logo.png";

const Header = () => {
  return (
    <div className={style.Homepage}>
      <img src={logo} alt="logo" />
      <div>
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
