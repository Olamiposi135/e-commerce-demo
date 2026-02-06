import React from "react";

import Hero from "../components/Hero";
import ShopByCategory from "../components/ShopByCategory";
import FeaturedEssentials from "../components/FeaturedEssentials";
import ProductGrid from "../components/ProductGrid";
import Features from "../components/Features";
import BeforeAfter from "../components/BeforeAfter";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <main className="bg-background-light text-charcoal \ mx-auto px-4 md:px-10 ">
        <div className="max-w-7xl mx-auto">
          <Hero />
          <ShopByCategory />
          <FeaturedEssentials />
          <ProductGrid />
          <Features />
          <BeforeAfter />
        </div>
      </main>
    </>
  );
};

export default HomePage;
