import React from "react";
import style from "./Header.module.scss";
import NavBar from "./NavBar";
import logo from "../../../asssets/images/logo1.png";
import Contact from "./Contact";


const Header = () => {
  return (
    <div className={style.Homepage}>
      <img src={logo} alt="logo" style={{width:125}}/>
      <div className={style.right}>
        <Contact/> 
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
