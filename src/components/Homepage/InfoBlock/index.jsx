import style from "./InfoBlock.module.scss";
import Button from "./Button";
import Info1 from "../../../asssets/images/somestuff/info/1.png";

const InfoBlock = () => {
  return (
    <div className={style.InfoBlock}>
      <div className={style.info}>
        <p className={style.percent}>-20%</p>
        <div className={style.disc_price}>
          <span className={style.old_price}>5567 грн</span>
          <span className={style.new_price}>4567 грн</span>
        </div>
        <h1>Название товара</h1>
      </div>
      <div className={style.photo}>
        <img src={Info1} alt="info_block" />
      </div>
    </div>
  );
};

export default InfoBlock;
