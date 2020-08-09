# Kádár Emese

Professional website for Emese Kádár

# Usage

## Content creation

The content for this site is stored at [contentful.com](https://contentful.com/) in the [content space called "kadaremese"](https://app.contentful.com/spaces/2ai1vktc54fu/). You need access to this content space to edit the contents. Once logged in, navigate to the _Content_ menu item.

To change the homepage, select _Homepage contents_ from the list of shared views in the sidebar, then edit the only entry (called `unique-homepage`). You can change the images that appear in the slideshow, the speed of the slideshow, and the order of the artwork categories in the main menu.

To edit the CV page, select _CV page contents_ from the list of shared views in the sidebar, then edit the only entry (called `cv-page`). You can change the image to be displayed as well as the text. Don't worry if the text looks different than how it should appear on the page - just make sure you use the right headings and styles and the app will take care of the rest.

To edit artworks, select the corresponding view in the sidebar. Note that every artwork belongs to an artwork page, but one page can hold multiple artworks. If you want to create a new artwork that lives on its own page, you need to create a new entry both for the page and for the artwork. If you want to add an artwork to an existing page, you only need to create an entry for the artwork.

Anything content you create or change needs to be published using the _Publish_ button. With the current setup, after publishing, the new contents will appear on the webpage in a couple of minutes.

## Local development

To set up the local development:

```bash
git clone https://github.com/endreymarcell/kadaremese.git
cd kadaremese
yarn
```

To be able to access the contents from Contentful locally, you need to have a content delivery API token set locally. You can grab one from the [settings/API keys](https://app.contentful.com/spaces/2ai1vktc54fu/api/keys) page of Contentful. Then export it like this:

```bash
export CONTENTFUL_ACCESS_TOKEN=access-token-comes-here
```

Now you can start the development server with:

```bash
yarn start
```

The page will be served on http://localhost:8000/ and Gatsby's GraphQL explorer on http://localhost:8000/___graphql

The code will be auto-formatted with [Prettier](https://prettier.io/). Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) format.

You need to be a contributor of this repository to be able to push to it, but you could also just fork it if you wanted. With the current setup, after pushing changes to the GitHub repo, Netlify will rebuild and deploy the site.

## Deployment

The site is hosted by [Netlify](http://netlify.com/) under the name of [kadaremese](https://app.netlify.com/sites/kadaremese). You need to be a team member for this Netlify app to be able to make changes to it.

When setting up a new Netlify app from this repo, the [build command](https://app.netlify.com/sites/kadaremese/settings/deploys#build-settings) needs to be set to `gatsby build` and the publish directory to `public/` (although Netlify probably auto-detects these).  
To be able to access the contents from Contentful, you need to have a content delivery API token set for this app. You can grab one from the [settings/API keys](https://app.contentful.com/spaces/2ai1vktc54fu/api/keys) page of Contentful. Then set it as an [environment variable](https://app.netlify.com/sites/kadaremese/settings/deploys#build-settings) under the name of `CONTENTFUL_ACCESS_TOKEN`.

To make Netlify automatically rebuild and redeploy your site when your content changes, create a [build hook](https://app.netlify.com/sites/kadaremese/settings/deploys#build-hooks) for the app, and then set it on the [settings/webhooks](https://app.contentful.com/spaces/2ai1vktc54fu/settings/webhooks) page of Contentful.

# License

[Commons Clause](LICENSE)
