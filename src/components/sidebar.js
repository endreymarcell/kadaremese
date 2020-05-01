import React, {useState} from "react"
import {Link} from "gatsby"
import style from "./sidebar.module.css"

const SubNavInstallaciok = () => {
  return (
    <div>
      <div>
        <Link to="/installaciok/betonpixelek" activeClassName="current-page">
          Betonpixelek
        </Link>
      </div>
      <div>
        <Link to="/installaciok/privat-horizont" activeClassName="current-page">
          Privát horizont
        </Link>
      </div>
      <div>
        <Link to="/installaciok/orlodes" activeClassName="current-page">
          Őrlődés
        </Link>
      </div>
      <div>
        <Link to="/installaciok/inkognito-mod" activeClassName="current-page">
          Inkognito mód
        </Link>
      </div>
      <div>
        <Link to="/installaciok/no-line" activeClassName="current-page">
          No-line
        </Link>
      </div>
    </div>
  )
}

const SubNavFestmenyek = () => {
  return (
    <div>
      <div>
        <Link to="/festmenyek/ruhak" activeClassName="current-page">
          2014-15 Ruhák
        </Link>
      </div>
      <div>
        <Link to="/festmenyek/hungarikumok" activeClassName="current-page">
          2015 Hungarikumok
        </Link>
      </div>
    </div>
  )
}

const getSubNav = (subNav) => {
  switch (subNav) {
    case "installaciok":
      return () => <SubNavInstallaciok />
    case "festmenyek":
      return () => <SubNavFestmenyek />
    default:
      return () => <div />
  }
}

export const Sidebar = () => {
  const [subNavState, setSubNavState] = useState(null)
  const SubNavElement = getSubNav(subNavState)
  return (
    // Hiding the subnavigation when leaving the sidebar is not an "interaction", so the role is not helpful here
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={style.sidebar} onMouseLeave={() => setSubNavState(null)}>
      <div>
        <div className={style.mainNav}>
          <div>
            <Link to="/cv" activeClassName="current-page" onMouseEnter={() => setSubNavState(null)}>
              Rólam
            </Link>
          </div>
          <div>
            <Link
              to="/installaciok/betonpixelek"
              activeClassName="current-page"
              onMouseEnter={() => setSubNavState("installaciok")}
            >
              Installációk
            </Link>
          </div>
          <div>
            <Link
              to="/festmenyek/ruhak"
              activeClassName="current-page"
              onMouseEnter={() => setSubNavState("festmenyek")}
            >
              Festmények
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Link to="/" className={style.siteTitle}>
          Kádár Emese
        </Link>
        <div>
          <SubNavElement />
        </div>
      </div>
      <div />
    </div>
  )
}
