import React from "react";

const CategoryCard = ({ icon, name }) => {
  return (
    <div className="group cursor-pointer flex flex-col items-center gap-4 p-8 rounded-xl bg-white border border-gray-100 hover:border-primary transition-all shadow-sm">
      <div className="w-20 h-20 rounded-full bg-beige-light flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <span className=" text-4xl">{icon}</span>
      </div>
      <h3 className="text-base font-bold text-charcoal">{name}</h3>
    </div>
  );
};

export default CategoryCard;
