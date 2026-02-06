import React from "react";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";

const ProductCardFull = ({ product }) => {
  const {
    id,
    image,
    alt,
    badge,

    price,
    name,
    description,
    priceClass = "text-primary",
  } = product;

  return (
    <div className="flex flex-col gap-5 p-4 rounded-2xl bg-white border border-transparent hover:border-gray-100 transition-all group">
      <Link to={`/products/${id}`}>
        <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-beige-light/30">
          <div
            className="absolute inset-0 bg-center bg-cover"
            data-alt={alt}
            style={{ backgroundImage: `url("${image}")` }}
          />
          {badge && (
            <div className="absolute top-3 left-3">
              <span className="bg-charcoal text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                {badge}
              </span>
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-bold text-lg leading-tight text-charcoal">
            {name}
          </h4>
          <span className={`font-black ${priceClass}`}>${price}</span>
        </div>
        <p className="text-sm text-gray-500 mb-6 line-clamp-2">{description}</p>
        <div className="mt-auto space-y-3">
          <div className="flex items-center justify-between border border-gray-200 rounded-lg p-1.5 bg-beige-light/10">
            <button className="w-8 h-8 flex items-center justify-center hover:bg-beige-light rounded transition-colors text-charcoal">
              <span className="material-symbols-outlined text-sm">remove</span>
            </button>
            <span className="text-sm font-bold w-8 text-center text-charcoal">
              1
            </span>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-beige-light rounded transition-colors text-charcoal">
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <CartButton
                product={product}
                className="bg-charcoal text-white"
              />
            </div>
            <button className="w-full py-2 px-4 border border-gray-200 text-gray-600 font-bold rounded-lg text-xs hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-base">bolt</span>
              Quick Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardFull;
