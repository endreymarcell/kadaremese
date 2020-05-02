const path = require("path")

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions
  const result = await graphql(`
    query {
      allContentfulArtworkPage(filter: {title: {nin: "null"}}) {
        nodes {
          slug
          title
          category {
            slug
          }
        }
      }
    }
  `)
  result.data.allContentfulArtworkPage.nodes.forEach((node) => {
    createPage({
      path: `/${node.category.slug}/${node.slug}`,
      component: path.resolve(`./src/templates/artworkPage.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
