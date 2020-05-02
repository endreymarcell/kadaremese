import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {Layout} from "../../components/layout"
import {ArticleLayout} from "../../components/articleLayout"
import style from "../../components/articleLayout.module.css"
import {flatten} from "../../utils"

export default ({data}) => {
  const {
    contentfulArtworkPage: {artworks},
  } = data
  const allImages = flatten(artworks.map((artwork) => artwork.images))
  return (
    <Layout>
      <ArticleLayout>
        <div>
          {allImages.map((image) => (
            <div className={style.imgContainer} key={image.title}>
              <Img fluid={image.fluid} alt={image.title} />
            </div>
          ))}
        </div>
        <div className={style.articleContainer}>
          {artworks.map((artwork) => (
            <React.Fragment key={artwork.title}>
              <h1 className={style.articleTitle}>{artwork.title}</h1>{" "}
              <h2 className={style.articleSubtitle}>{artwork.date}</h2>
              <br />
              <div className={style.article}>
                {documentToReactComponents(artwork.childContentfulArtworkDescriptionRichTextNode.json)}
              </div>
            </React.Fragment>
          ))}
        </div>
        d
      </ArticleLayout>
    </Layout>
  )
}

export const query = graphql`
  query BetonpixelekQuery {
    contentfulArtworkPage(title: {eq: "Betonpixelek"}) {
      artworks {
        title
        date
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
