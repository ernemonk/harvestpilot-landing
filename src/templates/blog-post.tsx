import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { getPostBySlug, blogPosts } from "../data/blogPosts";
import "../styles/global.css";

interface BlogPostTemplateProps {
  pageContext: {
    slug: string;
    post: any;
  };
}

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({ pageContext }) => {
  const post = pageContext?.post || getPostBySlug(pageContext?.slug || "");

  if (!post) {
    return (
      <>
        <Head title="Post Not Found" />
        <Navbar />
        <section className="min-h-screen pt-32 pb-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-harvest-dark mb-4">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-block px-8 py-3 bg-harvest-green text-white rounded-lg hover:bg-emerald-600 transition font-semibold"
            >
              Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <Head title={`${post.title} - HarvestPilot Blog`} />
      <Navbar />

      {/* Hero Section with Image */}
      <section 
        className="pt-32 pb-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="bg-black bg-opacity-40 pt-32 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sm font-semibold uppercase text-white bg-harvest-green px-3 py-1 rounded">
                {post.category}
              </span>
              <span className="text-sm text-gray-200">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-white">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none">
            {post.content.split('\n\n').map((paragraph: string, index: number) => {
              if (paragraph.startsWith('#')) {
                if (paragraph.startsWith('##')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-harvest-dark mt-8 mb-4">
                      {paragraph.replace(/^#+\s/, '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('###')) {
                  return (
                    <h3 key={index} className="text-2xl font-bold text-harvest-dark mt-6 mb-3">
                      {paragraph.replace(/^#+\s/, '')}
                    </h3>
                  );
                } else {
                  return (
                    <h1 key={index} className="text-4xl font-bold text-harvest-dark mt-8 mb-4">
                      {paragraph.replace(/^#+\s/, '')}
                    </h1>
                  );
                }
              } else if (paragraph.startsWith('-')) {
                // Handle bullet points
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 my-4">
                    {paragraph.split('\n').map((item: string, i: number) => (
                      <li key={i} className="ml-4">
                        {item.replace(/^-\s/, '')}
                      </li>
                    ))}
                  </ul>
                );
              } else if (paragraph.startsWith('---')) {
                return (
                  <hr key={index} className="my-8 border-t-2 border-gray-300" />
                );
              } else if (paragraph.trim() === '') {
                return null;
              } else {
                return (
                  <p key={index} className="text-gray-700 leading-relaxed my-4">
                    {paragraph}
                  </p>
                );
              }
            })}
          </article>

          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t-2 border-gray-300">
            <h3 className="text-xl font-bold text-harvest-dark mb-3">About the Author</h3>
            <p className="text-gray-700">
              <strong>{post.author}</strong> is a specialist in {post.category.toLowerCase()} 
              with extensive experience helping farmers optimize their operations. 
              Follow their insights to improve your farm's productivity and profitability.
            </p>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-harvest-light rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-harvest-dark mb-4">
              Ready to grow your farm?
            </h3>
            <p className="text-gray-700 mb-6">
              Join thousands of farmers using HarvestPilot to optimize their specialty crop operations.
            </p>
            <a
              href="/#pricing"
              className="inline-block px-8 py-3 bg-harvest-green text-white rounded-lg hover:bg-emerald-600 transition font-semibold"
            >
              See Our Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-harvest-dark mb-12">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost: any) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition transform hover:scale-105">
                    <div
                      className="h-40 bg-cover bg-center"
                      style={{ backgroundImage: `url(${relatedPost.image})` }}
                    />
                    <div className="p-6">
                      <span className="text-xs font-semibold uppercase text-harvest-green bg-harvest-light px-3 py-1 rounded">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-lg font-bold text-harvest-dark mt-3 mb-2 group-hover:text-harvest-green transition">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{relatedPost.date}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog Link */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="text-harvest-green font-semibold hover:underline"
          >
            ← Back to All Articles
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPostTemplate;
