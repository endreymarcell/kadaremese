import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {Layout} from "../components/layout"
import style from "./artworkPage.module.css"
import {flatten} from "../utils"

export default ({data}) => {
  const {
    contentfulArtworkPage: {artworks},
  } = data
  const allImages = flatten(artworks.map((artwork) => artwork.images))
  return (
    <Layout>
      <div className={style.layout}>
        <div />
        <div className={style.leftColumn}>
          {allImages.map((image) => (
            <div className={style.imgContainer} key={image.title}>
              <Img fluid={image.fluid} alt={image.title} />
            </div>
          ))}
        </div>
        <div className={style.rightColumn}>
          <div className={style.articleContainer}>
            {artworks.map((artwork) => (
              <React.Fragment key={artwork.title}>
                <h1 className={style.articleTitle}>{artwork.title}</h1>{" "}
                <h2 className={style.articleSubtitle}>{artwork.date}</h2>
                {artwork.technique ? <h2 className={style.articleTitleSecondLine}>{artwork.technique}</h2> : null}
                {artwork.dimensions ? <h2 className={style.articleTitleSecondLine}>{artwork.dimensions}</h2> : null}
                <br />
                {artwork.childContentfulArtworkDescriptionRichTextNode ? (
                  <div className={style.article}>
                    {documentToReactComponents(artwork.childContentfulArtworkDescriptionRichTextNode.json)}
                    <br />
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulArtworkPage(slug: {eq: $slug}) {
      artworks {
        title
        date
        technique
        dimensions
        childContentfulArtworkDescriptionRichTextNode {
          json
        }
        images {
          title
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
