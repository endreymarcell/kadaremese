import React from "react"

import {Sidebar} from "./sidebar"
import style from "./layout.module.css"

export const Layout = ({children}) => (
  <div className={style.layout}>
    <Sidebar />
    <div className={style.mainContent}>{children}</div>
  </div>
)
