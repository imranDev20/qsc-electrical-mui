/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `QSC Electrical`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      gatsbyRemarkPlugins: [
        {
          options: {
            maxWidth: 1920,
          },
          resolve: "gatsby-remark-images",
        },
      ],
      options: {
        extensions: [".mdx", ".md", ".markdown"],
      },
      resolve: "gatsby-plugin-mdx",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      options: {
        defaults: {
          formats: ["auto", "avif", "webp"],
          placeholder: "blurred",
          quality: 70,
        },
      },
      resolve: "gatsby-plugin-sharp",
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-loadable-components-ssr",

    /*
     Loading Files
     */

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      options: {
        name: "services",
        path: `${__dirname}/src/contents/services`,
      },
      resolve: "gatsby-source-filesystem",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hero`,
        path: `${__dirname}/src/contents/hero`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `reviews`,
        path: `${__dirname}/src/contents/reviews`,
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },

    /*
     Loading Files Ends
     */

    // {
    //   options: {
    //     path: `${__dirname}/src/contents/services`,
    //   },
    //   resolve: "gatsby-plugin-page-creator",
    // },
    {
      resolve: "@slixites/gatsby-plugin-google-fonts",
      options: {
        fonts: ["jost:100,200,300,400,500,600,700,800,900"],
        display: "swap",
        preconnect: true,
        attributes: {
          rel: "stylesheet preload prefetch",
          as: "style",
        },
      },
    },
    {
      resolve: "gatsby-background-image",
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: "/:",
      },
    },
  ],
};
