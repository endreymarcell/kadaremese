import React from "react"

import {Sidebar} from "./sidebar"
import style from "./layout.module.css"

export const Layout = ({children, leftSidebarRender}) => (
  <div className={style.layout}>
    <div>{leftSidebarRender || null}</div>
    <div>{children}</div>
    <div />
    <Sidebar />
    <div />
  </div>
)
