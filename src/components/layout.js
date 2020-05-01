import React from "react"
import {Helmet} from "react-helmet"

import {Sidebar} from "./sidebar"
import style from "./layout.module.css"

export const Layout = ({children}) => (
  <div className={style.layout}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Kádár Emese</title>
    </Helmet>
    <Sidebar />
    <div className={style.mainContent}>{children}</div>
  </div>
)
