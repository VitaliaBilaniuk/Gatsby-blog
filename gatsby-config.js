module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CF_SPACE || '41wvf5jqgovv',
        accessToken: process.env.CF_TOKEN || '6453106393cb6603894cd4ab0d6567abe647c3ae1a02c76d5a75547cfcee3226'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`
  ],
}
