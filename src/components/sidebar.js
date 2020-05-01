import React from "react"
import {Link} from "gatsby"
import style from "./sidebar.module.css"

export const Sidebar = () => (
  <div className={style.sidebar}>
    <div>
      <div className={style.mainNav}>
        <div>
          <Link to="/cv" activeClassName="current-page">
            Rólam
          </Link>
        </div>
        <div>
          <Link to="/installaciok/betonpixelek" activeClassName="current-page">
            Installációk
          </Link>
        </div>
        <div>
          <Link to="/festmenyek" activeClassName="current-page">
            Festmények
          </Link>
        </div>
      </div>
    </div>
    <div>
      <Link to="/" className={style.siteTitle}>
        Kádár Emese
      </Link>
    </div>
  </div>
)
