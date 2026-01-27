import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import PricingNew from "../components/PricingNew";
import Blog from "../components/Blog";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Head from "../components/Head";
import "../styles/global.css";

const IndexPage: React.FC = () => {
  return (
    <>
      <Head />
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <PricingNew />
      <Blog />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
};

export default IndexPage;
