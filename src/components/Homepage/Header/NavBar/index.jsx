import React from "react";
import style from "./NavBar.module.scss";
import { ReactComponent as Basket } from "../../../../asssets/images/somestuff/basket.svg";
const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <nav className={style.menu}>
        <ul className={style.menu_list}>
          <li className={style.menu_item}>
            <a href="/#">Главная</a>
          </li>
          <li className={style.menu_item}>
            <a href="/#">Оплата</a>
          </li>
          <li className={style.menu_item}>
            <a href="/#">Доставка</a>
          </li>
          <li className={style.menu_item}>
            <a href="/#">Контакты</a>
          </li>
        </ul>
      </nav>
      <div className={style.header_btn}>
        <a href="/#" className={style.login}>
          Войти
        </a>
        <a href="/#" className={style.trash}>
          <Basket />
        </a>
      </div>
      <div class={style.menu__btn}>
        <span></span>
      </div>
    </div>
  );
};

export default NavBar;
