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
        <h1 className={style.articleTitle}>1. A pulikutya elrontja a trompe l'oeil hatást</h1>{" "}
        <h2 className={style.articleSubtitle}>2015</h2>
        <h3 className={style.articleTitleSecondLine}>Olaj, farost</h3>
        <h3 className={style.articleTitleSecondLine}>40x50 cm</h3>
        <br />
        <h1 className={style.articleTitle}>2. Hullámos vászonra nem lehet alföldet rajzolni</h1>{" "}
        <h2 className={style.articleSubtitle}>2015</h2>
        <h3 className={style.articleTitleSecondLine}>Olaj, farost</h3>
        <h3 className={style.articleTitleSecondLine}>40x50 cm</h3>
        <br />
        <h1 className={style.articleTitle}>3. A szürkemarha megeszi a vásznat</h1>{" "}
        <h2 className={style.articleSubtitle}>2015</h2>
        <h3 className={style.articleTitleSecondLine}>Olaj, farost</h3>
        <h3 className={style.articleTitleSecondLine}>40x50 cm</h3>
        <br />
        <h1 className={style.articleTitle}>4. A délibáb horitontot téveszt</h1>{" "}
        <h2 className={style.articleSubtitle}>2015</h2>
        <h3 className={style.articleTitleSecondLine}>Olaj, farost</h3>
        <h3 className={style.articleTitleSecondLine}>40x50 cm</h3>
        <br />
        <h1 className={style.articleTitle}>5. A matyó hímzés megmenti a vásznat</h1>{" "}
        <h2 className={style.articleSubtitle}>2015</h2>
        <h3 className={style.articleTitleSecondLine}>Olaj, farost</h3>
        <h3 className={style.articleTitleSecondLine}>40x50 cm</h3>
        <br />
        <h1 className={style.articleTitle}>6. Az akác kihajt a keret és a kép közül</h1>{" "}
        <h2 className={style.articleSubtitle}>2015</h2>
        <h3 className={style.articleTitleSecondLine}>Olaj, farost</h3>
        <h3 className={style.articleTitleSecondLine}>40x50 cm</h3>
      </div>
    </ArticleLayout>
  </Layout>
)

export const query = graphql`
  query ArticleQueryHungarikumok {
    allFile(filter: {relativeDirectory: {eq: "festmenyek/hungarikumok"}}, sort: {fields: base}) {
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
