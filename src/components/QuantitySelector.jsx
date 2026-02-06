import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";

const QuantitySelector = ({
  quantity,
  onIncrease,
  onDecrease,
  min = 0,
  max = 10,
  showLabel = true,
  size = "md", // sm, md, lg
  className = "",
}) => {
  const sizeClasses = {
    sm: {
      button: "p-1",
      icon: "text-sm",
      text: "text-sm",
    },
    md: {
      button: "p-1.5",
      icon: "text-base",
      text: "text-base",
    },
    lg: {
      button: "p-2",
      icon: "text-lg",
      text: "text-lg",
    },
  };

  const sizes = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        className={`${sizes.button} bg-gray-50 rounded-sm hover:text-primary  transition-colors flex items-center justify-center text-text-main`}
        onClick={onDecrease}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <BiMinus className={sizes.icon} />
      </button>
      {showLabel && (
        <span className={`${sizes.text} font-medium min-w-[2ch] text-center`}>
          {quantity}
        </span>
      )}
      <button
        className={`${sizes.button} bg-gray-50 rounded-sm hover:text-primary transition-colors flex items-center justify-center text-text-main`}
        onClick={onIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <BiPlus className={sizes.icon} />
      </button>
    </div>
  );
};

export default QuantitySelector;
