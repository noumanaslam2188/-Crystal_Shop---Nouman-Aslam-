import React from "react";
import Style from "./header.module.scss";
import Frame from "../../Assets/images/frame.png";
import Circle from "../../Assets/images/circle.png";
import Basket from "../../Assets/images/basket.png";

export const Header = () => {
  return (
    <div className={Style.main}>
      <div className={Style.logo}>
        <img src={Frame}></img>
        <p>Pop Rock Crystal</p>
      </div>

      <div className={Style.navbar}>
        <a className={Style.name}>Home</a>
        <a className={Style.name}>Shop</a>
        <a className={Style.name}>About Us</a>
        <a className={Style.name}>Help</a>
      </div>

      <div className={Style.basket}>
        <div className={Style.circle}>
          <div className={Style.zero}>00</div>
        </div>
        <img className={Style.basketsetting} src={Basket}></img>
      </div>
    </div>
  );
};
