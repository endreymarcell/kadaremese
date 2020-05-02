import React, {useState} from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import style from "./sidebar.module.css"

const SubNav = ({categorySlug, pages}) => {
  return (
    <div>
      {pages
        .filter((page) => page.category.slug === categorySlug)
        .map((page) => (
          <div key={page.slug}>
            <Link to={`/${categorySlug}/${page.slug}`} activeClassName="current-page">
              {page.title}
            </Link>
          </div>
        ))}
    </div>
  )
}

export const Sidebar = () => {
  const {
    allContentfulArtworkCategory: {nodes: categories},
    allContentfulArtworkPage: {nodes: pages},
  } = useStaticQuery(
    graphql`
      query {
        allContentfulArtworkCategory(filter: {name: {nin: "null"}}, sort: {fields: orderInNavMenu}) {
          nodes {
            slug
            name
          }
        }
        allContentfulArtworkPage(filter: {title: {nin: "null"}}) {
          nodes {
            slug
            title
            category {
              slug
            }
          }
        }
      }
    `
  )
  const [activeCategorySlug, setActiveCategorySlug] = useState(null)
  return (
    // Hiding the subnavigation when leaving the sidebar is not an "interaction", so the role is not helpful here
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={style.sidebar} onMouseLeave={() => setActiveCategorySlug(null)}>
      <div>
        <div className={style.mainNav}>
          <div>
            <Link to="/cv" activeClassName="current-page" onMouseEnter={() => setActiveCategorySlug(null)}>
              Rólam
            </Link>
          </div>
          {categories.map((category) => (
            <div key={category.slug}>
              <Link
                to={`/${category.slug}/${pages.filter((page) => page.category.slug === category.slug)[0].slug}`}
                activeClassName="current-page"
                onMouseEnter={() => setActiveCategorySlug(category.slug)}
              >
                {category.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Link to="/" className={style.siteTitle}>
          Kádár Emese
        </Link>
        <div>
          <SubNav categorySlug={activeCategorySlug} pages={pages} />{" "}
        </div>
      </div>
      <div />
    </div>
  )
}
