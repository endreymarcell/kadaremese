import React, {useEffect, useState} from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {Layout} from "../components/layout"
import style from "./index.module.css"
import {shouldStartSlideshow} from "../utils"

export default ({data}) => {
  const {
    contentfulHomepage: {slideshowImages: images, slideshowInterval: interval},
  } = data
  const [index, setIndex] = useState(0)
  const newIndex = (index + 1) % images.length
  useEffect(() => {
    if (shouldStartSlideshow()) {
      setTimeout(() => {
        setIndex(newIndex)
      }, interval * 1000)
    }
  }, [newIndex, interval])
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
      slideshowInterval
    }
  }
`
