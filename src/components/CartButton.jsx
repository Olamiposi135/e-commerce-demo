import React from "react";
import { FaCartPlus } from "react-icons/fa6";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const CartButton = ({ product, className = "" }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={` w-full py-3 px-4  font-bold rounded-lg text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer ${className}`}
      onClick={() => dispatch(addToCart(product))}
    >
      <FaCartPlus />
      Add to Cart
    </div>
  );
};

export default CartButton;
