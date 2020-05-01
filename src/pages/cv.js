import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {Layout} from "../components/layout"
import style from "./cv.module.css"

const ProfilePicture = ({data}) => (
  <Img className={style.circularCutout} fluid={data.file.childImageSharp.fluid} alt="Kádár Emese profile picture" />
)

export default ({data}) => (
  <Layout leftSidebarRender={<ProfilePicture data={data} />}>
    <div className={style.cvContainer}>
      <h1 className={style.sectionHeader}>TANULMÁNYOK:</h1>
      2013- Magyar Képzőművészeti Egyetem, festőművész szak
      <br />
      2017 Akademia Sztuk Pięknych w Warszawie, festőművész szak
      <br />
      {/* ------------------------ */}
      <h1 className={style.sectionHeader}>CSOPORTOS KIÁLLÍTÁSOK:</h1>
      <h2 className={style.subsectionHeader}>2013</h2>
      Műterem Galéria, Debrecen- Feminin – Maszkulin
      <br />
      <h2 className={style.subsectionHeader}>2014</h2>
      MKE, Budapest Nyitott műtermek délutánja
      <br />
      Könyvtár Galéria, Nyíregyháza – Porta Incognita
      <br />
      <h2 className={style.subsectionHeader}>2015</h2>
      Galéria FX, Besztercebánya
      <br />
      MKE, Budapest - OMDK, Budapest
      <br />
      MKE, Budapest – Amadeus pályázati kiállítás
      <br />
      H2O Galéria, Debrecen -Víztükör
      <br />
      Labor,Budapest - Tükrök
      <br />
      Latarka, Budapest – Terítve
      <br />
      <h2 className={style.subsectionHeader}>2016</h2>
      MKE, Budapest Barcsay pályázat díjazottjainak kiállítása
      <br />
      Galerii Radost, Havířov
      <br />
      Tiszaújváros, Derkovits Kulturális Központ
      <br />
      Klauzál téri Vásárcsarnok, Budapest, - Godot Pop-up
      <br />
      <h2 className={style.subsectionHeader}>2017</h2>
      Akademia Sztuk Pięknych w Warszawie, Varsó - Hybrydy Noc Muzeów ASP
      <br />
      Bałtycka Galeria Sztuki Współczesnej, Ustka
      <br />
      Akademia Sztuk Pięknych w Warszawie, Varsó - Akademia Otwarta 2017
      <br />
      <h2 className={style.subsectionHeader}>2018</h2>
      2b galéria, Budapest - _ _ _ _ _ fotókiállítás
      <br />
      Art Market Budapest, Budapest
      <br />
      {/* ------------------------ */}
      <h1 className={style.sectionHeader}>ÖNÁLLÓ KIÁLLÍTÁSOK:</h1>
      <strong>2017</strong> Labor, Budapest - Betonpixelek
      <br />
      <strong>2019</strong> PINCE, Budapest - No-line 2019
      <br />
      {/* ------------------------ */}
      <h1 className={style.sectionHeader}>DÍJAK:</h1>
      <strong>2015</strong> Kiss József és Neje Alapítvány díja
      <br />
      <strong>2016/17</strong> Erasmus ösztöndíj
      <br />
      {/* ------------------------ */}
      <h1 className={style.sectionHeader}>PUBLIKÁCIÓK</h1>
      <a href="https://www.youtube.com/watch?v=BQso3JkxWvc">https://www.youtube.com/watch?v=BQso3JkxWvc</a>
      <br />
      <a href="http://mozgovilag.hu/2019/02/22/gardonyi-laszlo-esztetikum-es-koncept/">
        http://mozgovilag.hu/2019/02/22/gardonyi-laszlo-esztetikum-es-koncept/
      </a>
      <br />
    </div>
  </Layout>
)

export const query = graphql`
  query ProfilePictureQuery {
    file(relativePath: {eq: "cv/profile.webp"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
