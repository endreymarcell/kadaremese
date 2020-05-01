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
    <div>CV comes here</div>
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
