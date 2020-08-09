import React, {useEffect, useState} from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {Layout} from "../components/layout"
import style from "./index.module.css"

export default ({data}) => {
  const images = data.contentfulHomepage.slideshowImages
  const [index, setIndex] = useState(0)
  const newIndex = (index + 1) % images.length
  useEffect(() => {
    setTimeout(() => {
      setIndex(newIndex)
    }, 5000)
  }, [newIndex])
  return (
    <Layout>
      {images.map((image, i) => (
        <div
          className={style.imageContainer}
          style={index !== i ? {display: "none"} : {}}
          key={`homepage-slideshow-${i}`}
        >
          <Img
            fluid={image.fluid}
            alt={image.title} // only use section of the file extension with the filename
          />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query IndexSlideshowQuery {
    contentfulHomepage {
      slideshowImages {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
