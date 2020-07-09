module.exports = {
  siteMetadata: {
    title: `Santa Contabilidade`,
    description: `Página de Materiais`,
    siteUrl: `https://pagina-de-materiais.netlify.app/`,
    home: {
      title: `Santa Contabilidade`,
      description: `Página de Materiais.`,
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Santa Contabilidade. Página de Materiais.`,
        short_name: `santacontabilidade-pagina-de-materiais`,
        start_url: `/`,
        background_color: `rgb(127, 246, 27`,
        theme_color: `#06606B`,
        display: `minimal-ui`,
        icon: `static/assets/logo-branco.png`,
      }
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-000",
        head: true,
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-dark-mode'
  ],
}
