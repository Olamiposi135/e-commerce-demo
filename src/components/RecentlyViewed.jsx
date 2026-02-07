import React from "react";
import { Link } from "react-router-dom";
import products from "../data/productContent";
import { MdAddShoppingCart } from "react-icons/md";

const recentlyViewedProducts = products.slice(0, 5);

const RecentlyViewed = () => {
  return (
    <section className="bg-white py-16 px-10 border-t border-[#f0f4f4]">
      <div className="max-w-360 mx-auto">
        <h2 className="text-3xl font-serif text-text-main mb-10 tracking-tight">
          Recently Viewed
        </h2>
        <div className="relative group">
          <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar scroll-smooth snap-x">
            {recentlyViewedProducts.map((product) => (
              <div key={product.id} className="flex-none w-64 snap-start">
                <div className="group/item flex flex-col gap-3">
                  <Link to={`/products/${product.id}`}>
                    <div className="aspect-square bg-[#f0f4f4] rounded-lg overflow-hidden relative cursor-pointer">
                      <img
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                        src={product.image}
                      />
                      <button className="absolute bottom-3 right-3 size-9 bg-white rounded-full shadow-sm flex items-center justify-center text-text-main hover:bg-primary hover:text-text-main transition-all">
                        <MdAddShoppingCart className="text-xl" />
                      </button>
                    </div>
                  </Link>

                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-sm font-bold text-text-main">
                      {product.name}
                    </h4>
                    <p className="text-sm text-text-muted">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
