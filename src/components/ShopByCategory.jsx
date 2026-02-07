import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../store/productSlice";
import { MdOutlineWaterDrop } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { FaSpa } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";

const CategoryCard = ({ icon, name, category }) => {
  const dispatch = useDispatch();

  const handleCategoryClick = () => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <Link
      to="/products"
      onClick={handleCategoryClick}
      className="group cursor-pointer flex flex-col items-center gap-4 p-8 rounded-xl bg-white border border-gray-100 hover:border-primary transition-all shadow-sm"
    >
      <div className="w-20 h-20 rounded-full bg-beige-light flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-base font-bold text-charcoal">{name}</h3>
    </Link>
  );
};

const ShopByCategory = () => {
  const categories = [
    {
      icon: <MdOutlineWaterDrop size={32} />,
      name: "Cleansers",
      category: "Cleansers",
    },
    {
      icon: <MdOutlineScience size={32} />,
      name: "Serums",
      category: "Serums",
    },
    {
      icon: <FaSpa size={32} />,
      name: "Moisturizers",
      category: "Moisturizers",
    },
    { icon: <MdLightMode size={32} />, name: "Sun Care", category: "Sun Care" },
  ];

  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8 px-4">
        <h2 className="text-2xl font-bold tracking-tight text-charcoal">
          Shop by Category
        </h2>
        <Link
          to="/products"
          className="text-sm font-bold border-b-2 border-primary text-charcoal hover:text-primary transition-colors"
        >
          View All
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
