import React from 'react'
import Style from "./eclipse.module.scss"
import Fruit from "../../Assets/images/fruit.png"

export const Eclipse = () => {
  return (
    <div className={Style.eclipse}>
        <div className={Style.einnerdiv}>
        <img src={Fruit}></img>
        </div>
    </div>
  )
}
