import React from "react";
import style from "./Card.module.scss";
import Test from "../../.../../../../asssets/images/somestuff/card/test.png";
import {ReactComponent as Arrow} from "../../.../../../../asssets/images/somestuff/mini/array_right.svg";
const Card = () => {
  return (
    <div className={style.Card}>
      <img src={Test} alt="" />
      <div className={style.text}>
        <span className={style.MainText}>Ревизионные люки</span>
        <span className={style.SecText}>на пол, стену, потолок</span>
      </div>
      <div className={style.circle}>
        <Arrow/>
      </div>
    </div>
  );
};

export default Card;
