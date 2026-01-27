import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-harvest-green">
            🌱 HarvestPilot
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="/#features"
                className="text-gray-700 hover:text-harvest-green transition font-medium"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="/#how-it-works"
                className="text-gray-700 hover:text-harvest-green transition font-medium"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="/#pricing"
                className="text-gray-700 hover:text-harvest-green transition font-medium"
              >
                Pricing
              </a>
            </li>
            <li>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-harvest-green transition font-medium"
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="/#faq"
                className="text-gray-700 hover:text-harvest-green transition font-medium"
              >
                FAQ
              </a>
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-4">
            <button className="px-4 py-2 text-harvest-green border-2 border-harvest-green rounded-lg hover:bg-harvest-light transition font-semibold">
              Sign In
            </button>
            <button className="px-4 py-2 bg-harvest-green text-white rounded-lg hover:bg-emerald-700 transition font-semibold">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a href="/#features" className="block text-gray-700 hover:text-harvest-green">
              Features
            </a>
            <a href="/#how-it-works" className="block text-gray-700 hover:text-harvest-green">
              How It Works
            </a>
            <a href="/#pricing" className="block text-gray-700 hover:text-harvest-green">
              Pricing
            </a>
            <Link to="/blog" className="block text-gray-700 hover:text-harvest-green">
              Blog
            </Link>
            <a href="/#faq" className="block text-gray-700 hover:text-harvest-green">
              FAQ
            </a>
            <button className="w-full px-4 py-2 text-harvest-green border-2 border-harvest-green rounded-lg font-semibold">
              Sign In
            </button>
            <button className="w-full px-4 py-2 bg-harvest-green text-white rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
