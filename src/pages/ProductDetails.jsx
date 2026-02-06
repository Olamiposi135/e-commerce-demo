import React from "react";
import { Link, useParams } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import QuantitySelector from "../components/QuantitySelector";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id)),
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center  ">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link
            to="/"
            className="text-blue-600 bg-gray-300 px-4 py-2 font-semibold rounded  hover:text-blue-700  mx-auto flex w-fit items-center gap-2 whitespace-nowrap"
          >
            <FaArrowLeft />
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div>
        <Link
          to="/"
          className=" mb-8 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 flex w-fit items-center gap-2"
        >
          <FaArrowLeft />
          Back to Products
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="shadow-md p-4 rounded max-w-150">
          <img src={product.image} alt="" />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description} </p>
          <div className="mb-6">
            <span className="text-3xl font-bold">{`$${product.price}`} </span>
          </div>
          <div className="mb-6">
            <h3 className="font-bold mb-2">Category</h3>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm">
              {product.category}{" "}
            </span>
          </div>
          <div className="my-1">
            <QuantitySelector
              quantity={1}
              onIncrease={() =>
                dispatch(
                  updateQuantity({
                    id: product.id,
                    quantity: 1 + 1,
                  }),
                )
              }
              onDecrease={() =>
                dispatch(
                  updateQuantity({
                    id: product.id,
                    quantity: Math.max(0, 1 - 1),
                  }),
                )
              }
              min={0}
            />
          </div>

          <button
            className="w-full md:w-auto bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300"
            onClick={() => dispatch(addToCart(product))}
          >
            <PiShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
