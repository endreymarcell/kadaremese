import React from "react"
import {graphql} from "gatsby"
import Img from "gatsby-image"
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import {BLOCKS} from "@contentful/rich-text-types"
import {Layout} from "../components/layout"
import style from "./cv.module.css"

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <h1 className={style.sectionHeader}>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className={style.subsectionHeader}>{children}</h2>,
  },
}

export default ({data}) => (
  <Layout>
    <div className={style.layout}>
      <div className={style.profilePictureContainer}>
        <Img className={style.circularCutout} fluid={data.contentfulAsset.fluid} alt="Kádár Emese profile picture" />
      </div>
      <div className={style.cvContainer}>
        {documentToReactComponents(data.contentfulCvPageBodyRichTextNode.json, options)}
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query ProfilePictureQuery {
    contentfulAsset(title: {eq: "cv-image"}) {
      fluid {
        ...GatsbyContentfulFluid
      }
    }
    contentfulCvPageBodyRichTextNode {
      json
    }
  }
`
