const path = require(`path`);
const slug = require(`slug`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.fields.slug,
          },
        });
      });
      resolve();
    });
  });
};

exports.onCreateWebpackConfig = function onCreateWebpackConfig({ actions, stage, loaders }) {
  if (stage === 'develop') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-loader/,
            use: [
              loaders.js()
            ]
          }
        ]
      }
    })
  }
}
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                categories
                tags
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
      let tags = [];
      let categories = [];

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        tags = Array.from(new Set([...tags, ...node.frontmatter.tags]));

        categories = Array.from(
          new Set([...categories, ...node.frontmatter.categories])
        );

        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries
            // as GraphQL variables.
            slug: node.fields.slug,
          },
        });
      });

      categories.forEach((category) => {
        createPage({
          path: `/category/${slug(category).toLowerCase()}/`,
          component: path.resolve(`./src/templates/categories.js`),
          context: {
            // Data passed to context is available in page queries
            // as GraphQL variables.
            category,
          },
        });
      });

      tags.forEach((tag) => {
        createPage({
          path: `/tag/${slug(tag).toLowerCase()}/`,
          component: path.resolve(`./src/templates/tags.js`),
          context: {
            // Data passed to context is available in page queries
            // as GraphQL variables.
            tag,
          },
        });
      });

      resolve();
    });
  });
};