import React, { useState } from "react";
import CartButton from "./CartButton";
import QuantitySelector from "./QuantitySelector";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductCardFull = ({ product }) => {
  const dispatch = useDispatch();
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

  const [quantity, setQuantity] = useState(0);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(Math.max(0, quantity - 1));

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart({ ...product, quantity }));
    } else {
      // If quantity is 0, add 1 by default
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleQuickAdd = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div
      className="flex flex-col gap-5 p-4 rounded-2xl bg-white border border-transparent hover:border-gray-100 transition-all group relative"
      onMouseEnter={() => setShowQuickAdd(true)}
      onMouseLeave={() => setShowQuickAdd(false)}
    >
      <Link to={`/products/${id}`}>
        <div className="relative aspect-3/4 rounded-xl overflow-hidden bg-beige-light/30">
          <div
            className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
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
          {/* Quick Add Button on Hover */}
          <button
            onClick={(e) => {
              e.preventDefault();
              handleQuickAdd();
            }}
            className={`absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm text-[#111818] py-2 rounded-lg font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all ${
              showQuickAdd ? "opacity-100 translate-y-0" : ""
            }`}
          >
            Quick Add
          </button>
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
          <QuantitySelector
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            min={0}
            size="sm"
            className="justify-start"
          />
          <div className="flex flex-col gap-2">
            <div>
              <CartButton
                product={{ ...product, quantity: quantity > 0 ? quantity : 1 }}
                className="bg-charcoal text-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardFull;
