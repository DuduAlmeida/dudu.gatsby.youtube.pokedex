/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Pokédex Gatsby`,
    description: `Site para aprendizado do framework Gatsby e integração com uma API, a PokéApi`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
        sassOptions: {
          includePaths: [
            "./src/styles/components", 
            "./src/styles/pages", 
            "./src/styles/theme",
          ],
        }
      },
    },
  ],
}
