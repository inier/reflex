const withDefaults = require("./theme-options")

module.exports = (themeOptions) => {
  const { contentPath } = withDefaults(themeOptions)

  return {
    plugins: [
      `@reflexjs/gatsby-theme-core`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `Styleguide`,
          path: contentPath,
        },
      },
    ],
  }
}
