import React, {useState} from "react"
import {graphql, Link, useStaticQuery} from "gatsby"
import style from "./sidebar.module.css"

const SubNav = ({category}) => (
  <div>
    {category.artworkPages.map((page) => (
      <div key={page.slug}>
        <Link to={`/${category.slug}/${page.slug}`} activeClassName="current-page">
          {page.title}
        </Link>
      </div>
    ))}
  </div>
)

export const Sidebar = () => {
  const data = useStaticQuery(
    graphql`
      query SidebarQuery {
        contentfulHomepage {
          artworkCategoryLinks {
            name
            slug
            artworkPages {
              slug
              title
            }
          }
        }
      }
    `
  )
  const {
    contentfulHomepage: {artworkCategoryLinks: categories},
  } = data
  const [activeCategorySlug, setActiveCategorySlug] = useState(null)
  const activeCategory = categories.find((category) => category.slug === activeCategorySlug)
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
                to={`/${category.slug}/${category.artworkPages[0].slug}`}
                activeClassName="current-page"
                onMouseEnter={() => setActiveCategorySlug(category.slug)}
                onClick={() => setActiveCategorySlug(category.slug)}
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
        {activeCategory ? (
          <div>
            <SubNav category={activeCategory} />{" "}
          </div>
        ) : null}
      </div>
      <div />
    </div>
  )
}
