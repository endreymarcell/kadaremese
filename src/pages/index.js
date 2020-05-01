import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {Layout} from "../components/layout"

export default ({data}) => (
  <Layout>
    <Img fluid={data.file.childImageSharp.fluid} alt="Őrlődés" />
  </Layout>
)

export const query = graphql`
  query IndexCarouselQuery {
    file(relativePath: {eq: "index/carousel-1.webp"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
