import React, { useState } from "react";
import Style from "./slider.module.scss";
import Fruit from "../../Assets/images/fruit.png";
import Vector from "../../Assets/images/Cleaning.png";
import LeftArrow from "../../Assets/images/arrowleft.png";
import RightArrow from "../../Assets/images/arrowright.png";

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const images = [
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "- 18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "- 18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "- 18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "- 18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "- 18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "- 18.99$",
    },
  ];
  const totalImages = images.length;
  const next = () => {
    setIndex((next) => (next + 1) % totalImages);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0? totalImages-1 : prev-1) % totalImages);
  };
  return (
    <div>
      <div className={Style.slider}>
        <div className={Style.outerdiv}>
          {images.map((image, i) => (
            <div key={i} style={{ display: i === index ? "block" : "none" }}>
                <div className={Style.sliderdiv}>
              <p className={Style.newlot}>{image.p}</p>
              <img
                className={Style.imgsetting}
                src={Object.values(image)[0]}
                alt={`Image ${i + 1}`}
              />
              </div>
              <div className={Style.pr}>
                <p>{image.text}</p>
                <span>{image.price}</span>
              </div>
            </div>
          ))}
        </div>


        <div className={Style.slidercontroller}>
          <div className={Style.leftarrow}>
            <img onClick={prev} src={LeftArrow}></img>
          </div>

          <div className={Style.dotscontainer}>
            {[...Array(totalImages)].map((_, doti) => (
              <div
                key={doti}
                className={`${Style.dot} ${
                  doti === index ? Style.activedot : ""
                }`}
                onClick={() => {
                  setIndex(doti);
                }}
              ></div>
            ))}
          </div>

          <div className={Style.rightarrow}>
            <img onClick={next} src={RightArrow}></img>
          </div>
        </div>



      </div>
    </div>
  );
};
