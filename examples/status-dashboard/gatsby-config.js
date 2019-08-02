require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteUrl: process.env.SITE_URL || `https://status.lekoarts.de`,
    siteName: process.env.SITE_TITLE || `Status Dashboard - LekoArts`,
    siteDescription: process.env.SITE_DESCRIPTION || `Showing the statuses of my Netlify deploys & CircleCI tests.`,
  },
  plugins: [
    `@lekoarts/gatsby-theme-status-dashboard`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.SITE_URL,
        short_name: `Status`,
        description: process.env.SITE_DESCRIPTION,
        start_url: `/`,
        background_color: `#f0f2fd`,
        theme_color: `#3490dc`,
        display: `standalone`,
        icon: `assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
