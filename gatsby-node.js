const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/blog-post.tsx`);
  
  // Import the blog posts data
  const { blogPosts } = require(path.resolve(`./src/data/blogPosts.js`));

  // Create pages for each blog post
  blogPosts.forEach((post) => {
    createPage({
      path: `/blog/${post.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.slug,
        post: post,
      },
    });
  });
};
