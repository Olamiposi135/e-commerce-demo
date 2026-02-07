import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  removeFromCart,
  updateQuantity,
  addToCart,
} from "../features/cart/cartSlice";
import { RiDeleteBinLine } from "react-icons/ri";

const recommendedProducts = [
  {
    id: 9,
    name: "Vitamin C Brightening Mask",
    price: 42.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBui_UAzOIiRee7m4QyYCr2PcE7CvD6IfLV2CmAHKC_rztqqvwav_NXqRIhIb1gaLHZjWIFInhW38u671Q70qjZtLq8DuvVLk9CxAY17gpayo7-jw4a3rbjuXy8GlZuqx3RVvl-EVuOpTGColIvArh4f8SwHjFVvcgJ6R72QTRWsLbVwU-d1ZRl_eEE96oZ2Wv_yAEZvZ5nmJdnZ33YdzQyxjW91UFrvBlKVlcMXbMsy9wzrmv0_2tDYV1wXo9TmxWt9Rinf44iJEBY",
  },
  {
    id: 10,
    name: "Rosewater Balance Mist",
    price: 28.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCoQI-3MzXOG4o1mIAhZU-TyPPwZI9sXrBYVyKdWrloRUEVG5J3rTPTfqC3sMLNUB1cMfRtbVdXDIYAWi7SwWK2LF3WZ2XL8tB2RlNRam_XVYUMYkD3NfryexSLcA9SLTu_L-ital9dDWlHfRx7r9Q3BE3_0yHkifEJHfDjXaI9GJg5IRmZgZsFOD5q06vQ8ZRe1mJupIsYV-NZUqf50kfXtxWU03GLl9eowmG2TRhRIuM5l8MwEqszcYqfXmbzLsT-m-gYEqj4aNzD",
  },
  {
    id: 11,
    name: "Night Repair Facial Oil",
    price: 58.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC2y6vYmKlYJrj7FodumbERXnTQO9VhV32oumKnL0O_lGg6iM-wK0isNAQLyupgeqEl3ubDfOWmJQxSbkv1gLla6tuIcLfnV8_q-KFBq8HsKu7Fo0UxtHLJQ3yMaHBK5xN1IUkgmj6A0x3lLr7IKg6ijMkH2C1zHnpTCcIu59gDbXbXUezudxFHNhjQGSWEdrDk7LS-74n_pAlt5CSwyxyCRupzUZ76EqkDoPK8igudXVSwacBO8Yw44RVlaC6EGUXSwgH_yQqms1cr",
  },
  {
    id: 12,
    name: "Gentle AHA Toner",
    price: 34.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBKEkdtFXDbSqSXRqb09bpEIhU0MtzyEhaPSl03o78YGufyFNuFTKARpIu2tehUGT-pJ9MbRnvyE-wDfA5Bw2eH1GR5aMiBNyz70dCW-a4CXd_RvZt7d0_jnCALRI4snEq-MHt6zsaY1kYW_Sm3dueYs04F5EK22FPkbNgGoJwsiCvsQw1UKQkODhTJ8Zb-kXSAj7WFh3w9ttaRK1pT0_T-BsCcQSPNcVvI5mVXpO_OSl25zSvjgnyBoSGROQSyO-C-jtGU7DnMEH9t",
  },
];

const RecommendedProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleQuickAdd = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-xl aspect-square bg-white border border-border-light">
        <Link to={`/products/${product.id}`}>
          <div
            className="absolute inset-0 bg-center bg-cover transition-transform group-hover:scale-105"
            data-alt={product.name}
            style={{ backgroundImage: `url("${product.image}")` }}
          />
        </Link>
        <button
          onClick={handleQuickAdd}
          className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-[#111818] py-2 rounded-lg font-bold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all text-sm"
        >
          Quick Add
        </button>
      </div>
      <div className="mt-2">
        <Link to={`/products/${product.id}`}>
          <h4 className="font-bold text-xs sm:text-sm text-text-main hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h4>
        </Link>
        <p className="text-primary font-bold text-sm sm:text-base">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 0;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <main className="max-w-360 mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center py-12 sm:py-20">
          <span className="material-symbols-outlined text-5xl sm:text-6xl text-gray-300 mb-4">
            shopping_bag
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-text-main mb-3 sm:mb-4">
            Your Cart is Empty
          </h2>
          <p className="text-text-muted text-sm sm:text-base mb-6">
            Add Some Products to Your Cart to proceed
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-primary text-text-main font-bold rounded-lg hover:brightness-105 transition-all text-sm sm:text-base"
          >
            Continue Shopping
            <span className="material-symbols-outlined text-sm sm:text-base">
              arrow_forward
            </span>
          </Link>
        </div>

        {/* Recommended Section for Empty Cart */}
        <div className="mt-10 sm:mt-16">
          <h3 className="text-lg sm:text-2xl font-bold text-text-main mb-4 sm:mb-6 px-1">
            Recommended for You
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {recommendedProducts.map((product) => (
              <RecommendedProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-360 mx-auto px-4 sm:px-6 py-5 sm:py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-text-main">
          Shopping Cart
        </h1>
        <Link
          to="/products"
          className="text-primary font-bold hover:underline flex items-center gap-1 text-sm sm:text-base"
        >
          Continue Shopping
          <span className="material-symbols-outlined text-sm sm:text-base">
            arrow_forward
          </span>
        </Link>
      </div>

      <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
        {/* Cart Items Table */}
        <div className="flex-1 order-2 xl:order-1">
          <div className="overflow-x-auto">
            <table className="w-full border border-border-light rounded-xl overflow-hidden">
              {/* Head */}
              <thead className="bg-gray-50 hidden md:table-header-group">
                <tr>
                  <th className="text-left px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#638888]">
                    Product
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#638888]">
                    Quantity
                  </th>
                  <th className="text-right px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#638888]">
                    Total
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody className="divide-y divide-border-light">
                {cartItems.map((item) => (
                  <tr
                    key={item.id}
                    className="
              flex flex-col md:table-row
              p-4 md:p-0
              gap-4 md:gap-0
            "
                  >
                    {/* Product */}
                    <td className="px-0 md:px-6 py-0 md:py-6">
                      <div className="flex items-center gap-4">
                        <Link to={`/products/${item.id}`}>
                          <div
                            className="size-20 sm:size-24 bg-center bg-cover rounded-lg"
                            style={{ backgroundImage: `url("${item.image}")` }}
                          />
                        </Link>

                        <div className="flex flex-col">
                          <Link
                            to={`/products/${item.id}`}
                            className="font-bold text-base sm:text-lg hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>

                          <span className="text-sm text-[#638888]">
                            ${item.price.toFixed(2)}
                          </span>

                          {/*  remove button */}
                          <button
                            onClick={() => dispatch(removeFromCart(item.id))}
                            className="flex gap-1 items-center text-sm sm:text-md text-red-500 mt-2 font-medium  w-fit"
                          >
                            <RiDeleteBinLine className="inline-block mr-1" />{" "}
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>

                    {/* Quantity */}
                    <td className="md:text-center">
                      <div className="flex md:justify-center items-center gap-3">
                        <span className="md:hidden text-sm font-semibold text-[#638888]">
                          Quantity:
                        </span>

                        <div className="flex items-center border border-border-light rounded-lg">
                          <button
                            className="px-3 py-1.5 hover:bg-gray-100 transition"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity: Math.max(1, item.quantity - 1),
                                }),
                              )
                            }
                          >
                            -
                          </button>

                          <span className="px-4 py-1.5 font-medium border-x">
                            {item.quantity}
                          </span>

                          <button
                            className="px-3 py-1.5 hover:bg-gray-100 transition"
                            onClick={() =>
                              dispatch(
                                updateQuantity({
                                  id: item.id,
                                  quantity: item.quantity + 1,
                                }),
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </td>

                    {/* Total */}
                    <td className="md:text-right md:px-6">
                      <div className="flex md:flex-col md:items-end justify-between items-center">
                        <span className="font-bold text-base sm:text-lg">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Recommended Section */}{" "}
          <div className="mt-8 sm:mt-12">
            {" "}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
              {" "}
              <h2 className="text-lg sm:text-2xl font-bold text-text-main">
                {" "}
                You May Also Like{" "}
              </h2>{" "}
              <Link
                to="/products"
                className="text-primary font-bold hover:underline flex items-center gap-1 text-sm sm:text-base"
              >
                {" "}
                View All{" "}
                <span className="material-symbols-outlined text-sm sm:text-base">
                  {" "}
                  arrow_forward{" "}
                </span>{" "}
              </Link>{" "}
            </div>{" "}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {" "}
              {recommendedProducts.map((product) => (
                <RecommendedProduct key={product.id} product={product} />
              ))}{" "}
            </div>{" "}
          </div>
        </div>

        {/* Order Summary */}
        <div className="xl:w-[360px] 2xl:w-[400px] order-1 xl:order-2 flex-shrink-0">
          <div className="bg-white border border-[#f0f4f4] rounded-xl p-4 sm:p-6 sticky top-4 xl:top-24">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main mb-4 sm:mb-6">
              Order Summary
            </h2>
            <div className="space-y-3 sm:space-y-4.5 mb-4 sm:mb-6">
              <div className="flex justify-between text-sm sm:text-base text-text-muted">
                <span>Subtotal</span>
                <span className="text-text-main font-medium">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm sm:text-base text-text-muted">
                <span>Shipping</span>
                <span className="text-text-main font-medium">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="border-t border-[#f0f4f4] pt-2.5 sm:pt-3 flex justify-between">
                <span className="font-bold text-text-main text-lg sm:text-xl">
                  Total
                </span>
                <span className="font-bold text-text-main text-base sm:text-lg">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
            <button
              onClick={() => navigate("/checkout")}
              className="w-full bg-primary text-text-main font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:brightness-105 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm sm:text-base">
                lock
              </span>
              Proceed to Checkout
            </button>
            {/* <!-- Trust Badges --> */}
            <div className="mt-8 pt-6 border-t border-border-light dark:border-border-dark space-y-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  verified_user
                </span>
                <div>
                  <p class="text-sm font-bold">Secure Checkout</p>
                  <p class="text-xs text-[#638888]">
                    SSL Encrypted Payment System
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">
                  local_shipping
                </span>
                <div>
                  <p class="text-sm font-bold">Free Shipping</p>
                  <p class="text-xs text-[#638888]">On all orders over $50</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <span class="material-symbols-outlined text-primary">
                  replay
                </span>
                <div>
                  <p class="text-sm font-bold">30-Day Returns</p>
                  <p class="text-xs text-[#638888]">
                    Money back guarantee policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;
