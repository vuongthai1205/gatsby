module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
  },
   plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};