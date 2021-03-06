module.exports = {
  siteMetadata: {
    title: 'BJJ Lifestyle Academy',
    author: 'Michael Rethmeyer',
    description:
      'BJJ Lifestlye Academy provinding Belleville, IL and St. Louis, MO with premier Brazilian Jiu-Jitsu schools. Coached by Professor Brazilian Mike Rethmeyer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/bjjla-logo.jpeg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
