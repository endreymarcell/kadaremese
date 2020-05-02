const path = require("path")

exports.createPages = async ({graphql, actions}) => {
  const {createPage, createRedirect} = actions
  const {
    data: {
      allContentfulArtworkCategory: {nodes: categories},
      allContentfulArtworkPage: {nodes: pages},
    },
  } = await graphql(`
    query {
      allContentfulArtworkCategory(filter: {name: {nin: "null"}}, sort: {fields: orderInNavMenu}) {
        nodes {
          slug
          name
        }
      }
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
  pages.forEach((node) => {
    createPage({
      path: `/${node.category.slug}/${node.slug}`,
      component: path.resolve(`./src/templates/artworkPage.js`),
      context: {
        slug: node.slug,
      },
    })
  })
  categories.forEach(({slug}) => {
    const firstMatchingPageSlug = pages.find((page) => page.category.slug === slug).slug
    createRedirect({
      fromPath: "/" + slug,
      toPath: `/${slug}/${firstMatchingPageSlug}`,
    })
  })
}
