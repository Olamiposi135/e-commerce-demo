import React from "react";

const ProductCard = ({
  image,
  alt,
  badge,
  badgeText,
  price,
  title,
  description,
  quickAddPrice,
  isFeatured = false,
}) => {
  return (
    <div
      className={`flex flex-col gap-4 group ${isFeatured ? "" : "p-4 rounded-2xl bg-white border border-transparent hover:border-gray-100 transition-all"}`}
    >
      <div
        className={`relative ${isFeatured ? "aspect-square" : "aspect-3/4"} rounded-xl overflow-hidden bg-gray-100`}
      >
        <div
          className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
          data-alt={alt}
          style={{ backgroundImage: `url("${image}")` }}
        />
        {badge && (
          <div className="absolute top-4 left-4">
            <span
              className={`${isFeatured ? "bg-primary" : "bg-charcoal"} text-white text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded`}
            >
              {badgeText}
            </span>
          </div>
        )}
        <button className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-charcoal py-3 rounded-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
          Quick Add - {quickAddPrice || price}
        </button>
      </div>
      <div>
        <h4 className="font-bold text-lg text-charcoal">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
