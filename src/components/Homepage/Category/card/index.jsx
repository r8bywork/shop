import React from "react";
import style from "./Card.module.scss";
import Test from "../../.../../../../asssets/images/somestuff/card/test.png";
const Card = () => {
  return (
    <div className={style.Card}>
      <img src={Test} alt="" />
      <div className={style.text}>
        <span className={style.MainText}>Ревизионные люки</span>
        <span className={style.SecText}>на пол, стену, потолок</span>
      </div>
    </div>
  );
};

export default Card;
