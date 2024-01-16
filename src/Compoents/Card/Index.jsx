import React, { useState } from "react";
import Style from "./card.module.scss";
import Fruit from "../../Assets/images/fruit.png";
import { Button } from "../Button/Index";
export const Card = ({ title, price }) => {
  const images = [
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "18.99$",
    },
    {
      fruit: Fruit,
      p: "New lot",
      text: "Crystal Agate Phone Grip",
      price: "18.99$",
    },
  ];

  const [index, setIndex] = useState(0);
  return (
    <div className={Style.cards}>

        {images.map((image, i) => (
          <div key={i} className={Style.card}>
            <img src={image.fruit}></img>
            <p className={Style.title}>{image.text}</p>
            <p className={Style.price}>{image.price}</p>
            {console.log(index)}
            <Button onClick={()=>setIndex(i)} customStyle={Style.custombutton} title={"Buy Now"}></Button>

          </div>
        ))}

    </div>
  );
};
