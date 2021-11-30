require('dotenv').config();

module.exports = {
  plugins: [
    'gatsby-theme-material-ui',
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
  ],
};
