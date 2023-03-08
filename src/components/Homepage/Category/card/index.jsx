import React from "react";
import style from "./Card.module.scss";
import shoes from "../../../../asssets/images/somestuff/card/shoes.png";

const Card = () => {
	return (
		<div className={style.Card}>
			<a href="/">
				<div className={style.ShopBack}>
					<img src={shoes} alt="shoes" className={style.Image} />
				</div>
			</a>
			<div className={style.cardText}>
				<a href="/">
					<p className={style.title}>New 2022 from zpunet</p>
				</a>
				<div className={style.rating}>Rating and views</div>
				<h3 className={style.title}>$300</h3>
			</div>
		</div>
	);
};

export default Card;
