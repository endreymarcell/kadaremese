import React from "react"
import style from "./sidebar.module.css"

export const Sidebar = () => (
  <div className={style.sidebar}>
    <div>
      <div className={style.mainNav}>
        <div>Rólam</div>
        <div>Installációk</div>
        <div>Festmények</div>
      </div>
    </div>
    <div>
      <div className={style.siteTitle}>Kádár Emese</div>
    </div>
  </div>
)
