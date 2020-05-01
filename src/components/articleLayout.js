import React from "react"
import style from "./articleLayout.module.css"

export const ArticleLayout = ({children}) => (
  <div className={style.layout}>
    <div />
    <div>{children[0]}</div>
    <div className={style.rightColumn}>{children[1]}</div>
  </div>
)
