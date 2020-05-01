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
        <h1 className={style.articleTitle}>Privát horizont</h1> <h2 className={style.articleSubtitle}>2017</h2>
        <br />
        <p className={style.article}>
          Ez a szemüveg nem látásunk korrigálását vagy védését hivatott szolgálni. Viselése nem opcionális, jelenléte
          mindenhová elkísér. Velünk született, halvány derengéssel töri meg a látványt.Illúziónak tűnik csupán, mégis
          ott van, még akkor is, ha nem látjuk. Nem csoda, hiszen ez a látásunk határa, a látóhatárunk. Érzete
          befolyásol,zavarba ejt, korlátoz.
        </p>
      </div>
    </ArticleLayout>
  </Layout>
)

export const query = graphql`
  query ArticleQueryPrivatHorizont {
    allFile(filter: {relativeDirectory: {eq: "installaciok/privat-horizont"}}, sort: {fields: base}) {
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
