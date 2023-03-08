import React from "react";
import style from "./NavBar.module.scss";
import { ReactComponent as Basket } from "../../../../asssets/images/somestuff/basket.svg";
const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <nav className={style.menu}>
        <ul className={style.menu_list}>
          <li className={style.menu_item}>
            <a href="/#">Main</a>
          </li>
          <li className={style.menu_item}>
            <a href="/#">Payment</a>
          </li>
          <li className={style.menu_item}>
            <a href="/#">Delivery</a>
          </li>
          <li className={style.menu_item}>
            <a href="/#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className={style.header_btn}>
        <a href="/#" className={style.login}>
          Login
        </a>
        <a href="/#" className={style.trash}>
          <Basket />
        </a>
      </div>
      <div className={style.menu__btn}>
        <span></span>
      </div>
    </div>
  );
};

export default NavBar;
