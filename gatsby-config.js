require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-plugin-image',
    'gatsby-theme-material-ui',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-baserow',
      options: {
        apiKey: process.env.BASEROW_TOKEN,
        tables: [
          {
            tableId: '38444',
            tableName: 'Items',
          },
          {
            tableId: '38445',
            tableName: 'Tags',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-redux',
      options: {
        pathToCreateStoreModule: './src/createStore.js',
      },
    },
  ],
};
