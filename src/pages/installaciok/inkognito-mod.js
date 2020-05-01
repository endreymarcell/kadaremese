import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {Layout} from "../../components/layout"
import {ArticleLayout} from "../../components/articleLayout"
import style from "../../components/articleLayout.module.css"

export default ({data}) => (
  <Layout>
    <ArticleLayout>
      <div>
        {data.allFile.edges.map((image) => (
          <div className={style.imgContainer}>
            <Img
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
            />
          </div>
        ))}
      </div>
      <div className={style.articleContainer}>
        <h1 className={style.articleTitle}>Inkognito mód</h1> <h2 className={style.articleSubtitle}>2017</h2>
        <h3 className={style.articleTitleSecondLine}>Vegyes technika</h3>
        <p className={style.article}>
          Az üvegcsében tömörülő formák apró, 1cm x1cm nagyságú, különböző kézjeleket mutató gipszöntvények. Örvénylő
          rendszerüket már a legkisebb beavatkozás is megbolygatja.Legyen az egy tömegükbe hatoló idegen kéz, vagy akár
          csak egy erősebb rezdülés,a kezecskék egymással összeütközve, surlódva porlani, formálódni kezdenek. A világ
          egy részének bemutató ujj letörik, az ígéret megkopik, az irányok megfordulnak. A lassú, állandó változást
          generáló folyamat végére minden amit valaha gondoltunk és éreztünk egy közös porlanyós masszaként jelzi
          mindazt, ami valaha valaki volt.
        </p>
      </div>
    </ArticleLayout>
  </Layout>
)

export const query = graphql`
  query ArticleQueryInkognitoMod {
    allFile(filter: {relativeDirectory: {eq: "installaciok/inkognito-mod"}}, sort: {fields: base}) {
      edges {
        node {
          base
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
