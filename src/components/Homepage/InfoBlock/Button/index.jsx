import React from "react";
import style from "./Button.module.scss";
import { ReactComponent as Arrow } from "../../../../asssets/images/somestuff/mini/array_right.svg";

const Button = () => {
  return (
    <a href="/#" className={style.text}>
      <p>Купить</p>
      <p style={{display: "flex"}}><Arrow/></p>
    </a>
  );
};

export default Button;
