module.exports = {
  siteMetadata: {
    title: "Aktivstall Pfaffenwinkel",
    siteUrl: "https://aktivstall-pfaffenwinkel.de",
    description: `Moderner Aktivstall zwischen Peiting und Steingaden im Herzen des Pfaffenwinkels. Eine tolle Anlage für Mensch und Pferd.`,
  },
  plugins: [
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.jpg",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-postcss",
  ],
}
