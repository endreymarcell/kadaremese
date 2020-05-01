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
        <h1 className={style.articleTitle}>Betonpixelek</h1> <h2 className={style.articleSubtitle}>2016</h2>
        <br />
        <p className={style.article}>
          Az öntudatlan játék, és az azon keresztül megnyilvánuló élet-tervezés gyermeki állapota szolgált inspirációs
          forrásként a Betonpixelek című munkámhoz. A kialakult koncepcióban vegyül a sóvárgás az elmúlt kellemes
          tudatlanság felé, korosztályom jelen elképzeléseinek – vagy azok hiányának – terhével. A gyermekévek
          elmúltával ez az ábrándozás egyre összetettebbé és terheltebbé válik. A készlet pedig lényegében ugyanaz
          marad: sablonok közül válogatunk, az elődeinktől ellesett mintákat a jelen elvárásaihoz igazítjuk. A munka
          összekapcsolható, 14 x 14 cm-es elemekből állóinstalláció. Az elemek különbözőek, de azonos alapformára
          épülnek. Az elsődleges cél az volt, hogy bármelyik elem bármelyikhez illeszthető legyen. A forma kitalálásakor
          figyelembe vettem többek között azt is, hogy az egyaránt emlékeztessen az ilyen elven működő gyermekjátékokra
          (mint például a puzzle vagy a Lego), de az anyagválasztáson keresztül megidézze az építkezési elemek
          kialakítását is. Hogy a munka igazán működhessen, ahhoz a látogató részvétele szükséges. A játéktérbe tévedő
          kedve szerint válogathat 42 elem közül. Ezek segítségével alkothatja meg az általa preferált jövőkép
          kinézetét, struktúráját. A felhasználható mennyiség azonban véges, maximum egy 4x4 db elemből álló kép rakható
          ki. A korlátozott terep, mint ahogy a variálhatóság és a súlyosság is, a koncepció lényegi része. A 63 x 63
          cm-es asztal azt a keretet szimbolizálja, amit felnőttként a jövőnkről alkotott elképzeléseinknek adunk. A
          keret összetevői között szerepel a hátralevő feltételezett időnk, a korábbi tapasztalataink, az önmagunkról
          alkotott képünk, a környezetünk vélt és valós elvárásai, stb. Ebbe a keretbe kirakott képet megváltoztatni,
          újragondolni hasonló vesződés árán lehetséges, mint amivel odahelyeztük azt.
        </p>
      </div>
    </ArticleLayout>
  </Layout>
)

export const query = graphql`
  query ArticleQuery {
    allFile(filter: {relativeDirectory: {eq: "installaciok/betonpixelek"}}, sort: {fields: base}) {
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
