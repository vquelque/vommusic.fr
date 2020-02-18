/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
    `gatsby-plugin-recaptcha`,
  ],
  siteMetadata: {
    title: "VOM - DJ Club & Discomobile - Animation, Sonorisation, Éclairage",
    description:
      "DJ, vous faire danser, c'est mon métier. Soirée privée, soirée d'entreprise, rallye, clubbing ? Disco, Pop, Hip Hop, House ? Il en faut pour tous les goûts. Disponible autour de Paris, en Seine et Marne 77, Fontainebleau, Melun.",
    siteUrl: "http://www.vommusic.fr/",
  },
}
