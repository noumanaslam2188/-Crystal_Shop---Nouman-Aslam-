import React from 'react'
import Style from "./button.module.scss"

export const Button = ({customStyle,title,onClick}) => {
  return (
    <div>
        <button onClick={onClick} className={customStyle ? customStyle : Style.button}>{title?title:"Shop Now"}</button>
    </div>
  )
}
