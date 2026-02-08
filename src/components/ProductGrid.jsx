import React from "react";
import ProductCardFull from "./ProductCardFull";
import { useSelector } from "react-redux";
import { selectFilteredItems } from "../store/productSlice";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const ProductGrid = () => {
  const products = useSelector(selectFilteredItems);

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="flex items-baseline sm:item-center justify-between mb-12 px-4 gap-4">
        <h2
          className="text-xl md:text-3xl font-bold tracking-tight text-charcoal"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
        >
          All Products
        </h2>
        <div className="max-w-30 flex flex-col md:flex-row items-start gap-2 text-sm font-medium">
          <span className="text-gray-500">Sort by:</span>
          <select className="w-fit p-1 bg-transparent border border-transparent focus-within:border-primary focus:outline-none cursor-pointer font-bold text-charcoal">
            <option className="text-charcoal">Newest</option>
            <option className="text-charcoal">Price: Low to High</option>
            <option className="text-charcoal">Price: High to Low</option>
            <option className="text-charcoal">Most Popular</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {products.map((product, index) => (
          <ProductCardFull key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:border-primary transition-colors text-charcoal">
          <span className="text-lg">
            <MdOutlineKeyboardArrowLeft />
          </span>
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-charcoal font-bold">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:border-gray-200 transition-colors text-charcoal">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:border-gray-200 transition-colors text-charcoal">
          3
        </button>
        <span className="px-1 text-gray-400">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-transparent hover:border-gray-200 transition-colors text-charcoal">
          8
        </button>
        <button className="px-4 h-10 flex items-center justify-center rounded-lg border border-gray-200 hover:border-primary transition-colors text-sm font-bold text-charcoal">
          Next
          <span className="ml-1 text-lg">
            <MdOutlineKeyboardArrowRight />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
