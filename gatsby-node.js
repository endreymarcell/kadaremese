const path = require("path")

exports.createPages = async ({graphql, actions}) => {
  const {createPage, createRedirect} = actions
  const {
    data: {
      contentfulHomepage: {artworkCategoryLinks: categories},
    },
  } = await graphql(`
    query PageHierarchyQuery {
      contentfulHomepage {
        artworkCategoryLinks {
          name
          slug
          artworkPages {
            slug
            title
          }
        }
      }
    }
  `)

  categories
    .filter((category) => category.artworkPages != null && category.artworkPages.length > 0)
    .forEach((category) => {
      const firstPageInCategory = category.artworkPages[0]
      createRedirect({
        fromPath: "/" + category.slug,
        toPath: `/${category.slug}/${firstPageInCategory.slug}`,
      })
      category.artworkPages.forEach((page) => {
        createPage({
          path: `/${category.slug}/${page.slug}`,
          component: path.resolve(`./src/templates/artworkPage.js`),
          context: {
            slug: page.slug,
          },
        })
      })
    })
}
