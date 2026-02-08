import React from "react";
import ProductCard from "./ProductCard";

const FeaturedEssentials = () => {
  const products = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAz_AhAfPD-io4ZSPyij1-wxnd0DJhGlOlwY2-m8koG0ycHLK2FchiUR7SyBEjc7uTC4UgSse-k4420RtSh80-mS02rMwTznvoEFIRdan-mrOttwXQQGAWZzXxMjynUZkc5vKLBCQQQxDsSBqae2_rRisN8z0sfVacxgoOUMIKSXZa3w7VCwBEG9s29Ap63f7-fq-duYH25P9lOR0dvMyK4S0O5-NWKVTAknDJJ7UJnz7Oqp2pTU5Z1H5MWIRjdASC8FCTOul8ttOn5",
      alt: "Minimalist serum bottle with clinical labeling",
      badge: true,
      badgeText: "Best Seller",
      price: "$64",
      title: "Hyper-Active Vitamin C",
      description: "Brightening & Protective Antioxidant",
      quickAddPrice: "$64",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBumkcL1R_fZMaZeUpC48q3OL-dkQSe_43RoWKBa36qLQyldgS_r-_7_1JTThl6G1j4n1WeyjYh-JTgoigId3CoNdJ3TXtE-wa3zPc-jmBb6qNlCJ9TnJ3HIeMhVbX-tNpKl9HzxriMtSDVG5Ob3JC5s4K2FbeUC-dI4BefxGsTFNvX_EcqXrZgWW1L_qry9Qae8tdjgBwF70EmgRbrHb4ud5igLckBRJ_tBhsEQP5W2sc6hil_OIvCoVxS9m2_qaQI_udZbfrrNRK1",
      alt: "Frosted glass cream jar with a wooden lid",
      badge: false,
      price: "$58",
      title: "Barrier Reset Cream",
      description: "Deep Hydration & Repair Ritual",
      quickAddPrice: "$58",
    },
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDgkluNFJ4LW755yzGIVfbNTiYLxCxxNrDmJkF7sKgExPaSmb0s4e7TK-2qgSeYiECVNCxSWSZ-mLs4Ao0Abnva8Va3ZX3OYz8K1XVNHLecYG8V5LFIVx0uQP215sIclpSMxd6plcWsyqNDsDwjvrMWy-N8plRoGSoqnLHS_sG8gCEUMbZabEj0UDHAeWGa9gzX49F0zWt495lznRN_UWfoMEJL9CMgKiSuXVJPLPMFL9OUwwqpjDAuqneK0ayy6Sw0pM-T-ljklCEm",
      alt: "White cleanser tube on a reflective clean surface",
      badge: false,
      price: "$32",
      title: "Gentle Amino Cleanser",
      description: "Ph-Balanced Daily Purifier",
      quickAddPrice: "$32",
    },
  ];

  return (
    <section className="py-16">
      <h2
        className="text-2xl md:text-3xl font-bold tracking-tight mb-12 px-4"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-once="true"
      >
        Featured Essentials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} isFeatured />
        ))}
      </div>
    </section>
  );
};

export default FeaturedEssentials;
