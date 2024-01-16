import React from "react";
import { Header } from "../../Compoents/Header/Index";
import Vector1 from "../../Assets/images/vector1.png";
import Mouse from "../../Assets/images/uil_mouse-alt.png";
import Arrow from "../../Assets/images/arrow.png";
import Vector2 from "../../Assets/images/Vector 2.png";
import Style from "./home.module.scss";
import { Button } from "../../Compoents/Button/Index";
import { Slider } from "../../Compoents/Slider/Index";
import { Card } from "../../Compoents/Card/Index";
import { Eclipse } from "../../Compoents/Eclipse/Index";
import { Footer } from "../../Compoents/Footer/Index";

export const Home = () => {
  const cardItrations = 8;
  return (
    <div className={Style.home}>
      <Header />
      <img className={Style.vector} src={Vector1} alt="Vector 1" />


                                                   {/* BLOCK1 */}
      <div className={Style.block1}>
        <div className={Style.block1left}>
          <div className={Style.content}>
            <h5>Welcome to</h5>
            <h1>Pop Rock Crystal Shop!</h1>
            <div className={Style.text}>
              <p>
                Here you will find unique phone accessories, crystals, jewelry
                and more. Free shipping inside the U.S. and our phone grips come
                with a limited warranty. Enjoy!
              </p>
            </div>
            <div className={Style.buttons}>
              <Button></Button>
              <Button
                customStyle={Style.aboutusbutton}
                title={"about us"}
              ></Button>
            </div>
          </div>
        </div>
        <div className={Style.block1right}>
          <Slider></Slider>
        </div>
      </div>
      <div className={Style.mouse}>
        <img src={Mouse}></img>
        <p>Scroll down</p>
      </div>
      <img className={Style.arrowdown} src={Arrow}></img>

                                                         {/* BLOCK2 */}

      <div className={Style.block2}>
        <h1>All Products</h1>
        {/* <div className={Style.card}>
          {[...Array(cardItrations)].map((_, index) => (
            <Card key={index}></Card>
          ))}
        </div> */}
        <Card></Card>
        <Button customStyle={Style.custombutton} title={"View All"}></Button>

      </div>

      {/* BLOCK 3 */}

      <div className={Style.block3}>

        <img className={Style.vector2} src={Vector2}></img>


        <div className={Style.block3main}>

          <div className={Style.block3left}>
            <div className={Style.block3content}>
            <h4>BEST PRICE</h4>
            <h1>Agate Phone Grip</h1>
            <div className={Style.prices}>
            <h5>44.50$</h5>
            <h2>19.50$</h2>
            </div>
            <p>
              These Pop Rock Crystal grip tops can be swapped with other tops
              depending on your mood, outfit, nails, phone case, holiday, etc.!
              Just gently squeeze the sides to remove and swap out with another
              color or design!
            </p>
            <Button customStyle={Style.block3button} title={"Buy Now"}></Button>
          </div>
          </div>
          <div className={Style.block3right}>
            <Eclipse></Eclipse>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
