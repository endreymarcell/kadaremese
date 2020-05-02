const path = require("path")

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const result = await graphql(`
    query Query {
      allContentfulArtworkPage(filter: {category: {eq: "installáció"}, title: {nin: "null"}}) {
        nodes {
          slug
          title
        }
      }
    }
  `)
  result.data.allContentfulArtworkPage.nodes.forEach((node) => {
    createPage({
      path: `/installaciok/${node.slug}`,
      component: path.resolve(`./src/templates/artwork-page.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
