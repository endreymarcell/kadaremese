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
        <h1 className={style.articleTitle}>1. Száradás</h1> <h2 className={style.articleSubtitle}>2014-15</h2>
        <h3 className={style.articleTitleSecondLine}>Olaj, farost</h3>
        <h3 className={style.articleTitleSecondLine}>300x100 cm</h3>
        <p className={style.article}>
          A triptichonon szereplő, szárítókötélen lógó ruhák első ránézésre unalmas, hétköznapi jelentéktelenségükben
          tetszelgő darabok. Ha viszont egy szerettét nemrég elvesztett személy otthonában pillantjuk meg őket, könnyen
          mély érzelmekkel töltődhet fel látványuk. Ebben az esetben nem csupán az elmúlt egy-két hét időjárását
          olvashatjuk ki belőlük, szimbólumértékük tagadhatatlan. Felvett és levetett lelki nehézségek Idővonalaként
          mutatják a gyászmunka folyamatát, fázisait. A skála a legáttetszőbb feketétől egészen a sűrű szövésű anyagokig
          terjed, változatos sorrendben takarva ki a napsütötte valóságot.A végeláthatatlannak tűnő érzet- és
          gondolathullámzás skálája ez, ami a hétköznapi történések szűrőjévé válik: minden csupán ehhez képest létezik
          a gyászoló szívében.
        </p>
        <h1 className={style.articleTitle}>2. Fekete Lyuk</h1> <h2 className={style.articleSubtitle}>2015</h2>
        <h3 className={style.articleTitleSecondLine}>Olaj, vászon</h3>
        <h3 className={style.articleTitleSecondLine}>80x80 cm</h3>
        <br />
        <h1 className={style.articleTitle}>3. Száradás</h1> <h2 className={style.articleSubtitle}>2015</h2>
        <h3 className={style.articleTitleSecondLine}>Olaj, vászon</h3>
        <h3 className={style.articleTitleSecondLine}>80x80 cm</h3>
      </div>
    </ArticleLayout>
  </Layout>
)

export const query = graphql`
  query ArticleQueryRuhak {
    allFile(filter: {relativeDirectory: {eq: "festmenyek/ruhak"}}, sort: {fields: base}) {
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
