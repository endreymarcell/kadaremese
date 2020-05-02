import React, {useState} from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import style from "./sidebar.module.css"

const SubNavInstallaciok = ({pages}) => {
  return (
    <div>
      {pages.map((page) => (
        <div>
          <Link to={`/installaciok/${page.slug}`} activeClassName="current-page" key={page.slug}>
            {page.title}
          </Link>
        </div>
      ))}
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

const getSubNav = (subNav, pages) => {
  switch (subNav) {
    case "installaciok":
      return () => <SubNavInstallaciok pages={pages} />
    case "festmenyek":
      return () => <SubNavFestmenyek />
    default:
      return () => <div />
  }
}

export const Sidebar = () => {
  const {
    allContentfulArtworkPage: {nodes: pages},
  } = useStaticQuery(
    graphql`
      query Query {
        allContentfulArtworkPage(filter: {category: {eq: "installáció"}, title: {nin: "null"}}) {
          nodes {
            slug
            title
          }
        }
      }
    `
  )
  const [subNavState, setSubNavState] = useState(null)
  const SubNavElement = getSubNav(subNavState, pages)
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
              to={`/installaciok/${pages[0].slug}`}
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
