import React, {useEffect, useState} from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {Layout} from "../components/layout"
import style from "./index.module.css"

export default ({data}) => {
  const [index, setIndex] = useState(0)
  const newIndex = (index + 1) % data.allFile.edges.length
  useEffect(() => {
    setTimeout(() => {
      setIndex(newIndex)
    }, 5000)
  }, [index])
  const image = data.allFile.edges[index]
  return (
    <Layout>
      <div className={style.imageContainer}>
        <Img
          fluid={image.node.childImageSharp.fluid}
          alt={image.node.base.split(".")[0]} // only use section of the file extension with the filename
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query IndexCarouselQuery {
    allFile(filter: {relativeDirectory: {eq: "index"}}) {
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
