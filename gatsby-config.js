/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-114030019-1",
      },
    },
  ],
  siteMetadata: {
    title:
      "VOM - DJ - Animation, Sonorisation, Éclairage - Anniversaire, Mariage, Soirée Étudiante, Soirée de Rallye - Ile de France, Seine et Marne 77, Paris 75, Fontainebleau",
    description:
      "DJ, vous faire danser, c'est mon métier. Soirée privée, soirée d'entreprise, soirée de rallye, clubbing ? Disco, Pop, Hip Hop, House ? Il en faut pour tous les goûts. Disponible autour de Paris, Fontainebleau, Melun, Seine et Marne 77, Ile de France",
    siteUrl: "https://www.vommusic.fr/",
  },
}
