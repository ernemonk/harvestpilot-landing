import React, { useState } from "react";
import { Link } from "gatsby";
import Navbar from "../components/Navbar";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { blogPosts, getCategories } from "../data/blogPosts";
import "../styles/global.css";

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = getCategories();

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Head title="Blog - HarvestPilot" />
      <Navbar />

      <section className="pt-32 pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-harvest-dark mb-4">
              Farm & Business Insights
            </h1>
            <p className="text-xl text-gray-600">
              Learn from expert farmers and agricultural specialists. Tips, strategies, 
              and insights to help you grow your specialty crop business.
            </p>
          </div>

          {/* Search Bar */}
          <div className="mb-12">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-harvest-green"
            />
          </div>

          {/* Categories Filter */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-harvest-dark mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-semibold transition ${
                  selectedCategory === null
                    ? "bg-harvest-green text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedCategory === category
                      ? "bg-harvest-green text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition transform hover:scale-105"
                >
                  <div
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold uppercase text-harvest-green bg-harvest-light px-3 py-1 rounded">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-harvest-dark mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        <p className="font-semibold">By {post.author}</p>
                        <p>{post.readTime} min read</p>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-harvest-green font-semibold hover:underline"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                No articles found matching your criteria. Try adjusting your search or filters.
              </p>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-12 text-center text-gray-600">
            <p>Showing {filteredPosts.length} of {blogPosts.length} articles</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogPage;
