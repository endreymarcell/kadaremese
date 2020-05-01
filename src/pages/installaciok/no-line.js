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
        <h1 className={style.articleTitle}>No-line</h1> <h2 className={style.articleSubtitle}>2017 - 2018</h2>
        <br />
        <p className={style.article}>
          A No-line című sorozatot kézzel szőtt kárpitok alkotják. A szőttesek képek, amelyek köztereket ábrázolnak.
          Helyeket, ahol alap esetben semmin sem akad meg a szemünk. Itt hétköznapiságukból mégis kibillennek, olyan
          történések által, amik egy hajszállal lépnek csak túl a megszokotton. Az itt történtek a figyelemreméltó és a
          szokványos, az ismeretlen és az ismerős határán egyensúlyozó események. Nem elég érdekesek ahhoz, hogy a média
          magyarázatot keressen rájuk, de lesznek, akik megállnak mellettük. Az információhiány vetítővászonként
          szolgál, a figyelmes szemlélő asszociálni kezd. Kérdések vetődnek fel benne, amelyek megválaszolatlanul
          maradnak. Egy lyuk, egy űr képződik, ami az információ szövetében keletkezett.
        </p>
        <p className={style.article}>
          A szövések alapja egy-egy digitális rajz. Erről árulkodik többek között a videojátékokra jellemző perspektíva,
          valamint a pixelgrafikákra jellemző leegyszerűsített ábrázolásmód. A képpontokban való gondolkodás, valamint a
          sematizálás ezt a két, időben egymástól messze álló technikát lényegükben köti össze. A digitális
          adatfolyamban felbukkanó glitchek, a JPEG-formátum torzulásai egyszerre mutatkoznak információhiányként, és új
          jelentések képzőiként - itt a textilen keletkező lyukként jelennek meg, egy árokként, aminek nem leshetünk az
          aljára, amin keresztül maximum egy másik kíváncsi tekintettel nézhetünk szembe.
        </p>
        <p className={style.article}>
          A single player videojáték lényege, hogy a befektetett idő ellenében mindig egy jutalommal, vagy epikus
          zárlattal kecsegtet. A történet-ív végén várható megoldással, ami a siker élményébe fordítja a feszültséget.
          Itt azonban nincs szó a feszültség effajta feloldásáról, a képek rejtetten önismétlőek, összekapcsolhatók, így
          önmagukba zárulnak.
        </p>
      </div>
    </ArticleLayout>
  </Layout>
)

export const query = graphql`
  query ArticleQueryNoLine {
    allFile(filter: {relativeDirectory: {eq: "installaciok/no-line"}}, sort: {fields: base}) {
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
