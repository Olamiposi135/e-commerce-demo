import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    postalCode: "",
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const taxes = subtotal * 0.08; // 8% tax estimate
  const total = subtotal + taxes;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContinueToShipping = (e) => {
    e.preventDefault();
    // Save form data to sessionStorage for order success page
    sessionStorage.setItem("orderEmail", formData.email);
    sessionStorage.setItem("orderFirstName", formData.firstName);
    sessionStorage.setItem("orderLastName", formData.lastName);
    sessionStorage.setItem("orderAddress", formData.address);
    sessionStorage.setItem("orderApartment", formData.apartment);
    sessionStorage.setItem("orderCity", formData.city);
    sessionStorage.setItem("orderPostalCode", formData.postalCode);

    // Build URL with query params as backup
    const params = new URLSearchParams({
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      apartment: formData.apartment,
      city: formData.city,
      postalCode: formData.postalCode,
    });

    // Navigate to order success page
    navigate(`/order-success?${params.toString()}`);
  };

  return (
    <main className="flex-grow max-w-300 mx-auto w-full px-4 sm:px-6 py-6 sm:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Column: Checkout Process */}
        <div className="flex-1 space-y-6 sm:space-y-10">
          {/* Progress Bar Component */}
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 sm:gap-6 justify-between items-end">
              <p className="text-[#111818] dark:text-white text-base sm:text-lg font-bold leading-normal">
                Information
              </p>
              <p className="text-[#111818] dark:text-gray-400 text-xs sm:text-sm font-normal leading-normal uppercase tracking-widest">
                Step 1 of 3
              </p>
            </div>
            <div className="rounded-full bg-[#dce5e5] dark:bg-white/10 h-1.5 sm:h-1.5 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: "33%" }}
              ></div>
            </div>
          </div>

          {/* Express Checkout Section */}
          <section>
            <h2 className="text-[#111818] dark:text-white text-xs sm:text-sm font-bold uppercase tracking-wider mb-3 sm:mb-4 opacity-70">
              Express Checkout
            </h2>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <button className="flex-1 min-w-[140px] sm:min-w-[160px] h-12 sm:h-14 flex items-center justify-center rounded-xl bg-black text-white hover:bg-gray-900 transition-all font-bold text-sm sm:text-lg gap-2">
                <span className="material-symbols-outlined text-sm sm:text-base">
                  ios
                </span>
                Apple Pay
              </button>
              <button className="flex-1 min-w-35 sm:min-w-40 h-12 sm:h-14 flex items-center justify-center rounded-xl bg-white border border-border-light text-black hover:bg-gray-50 transition-all font-bold text-sm sm:text-lg gap-2">
                <span className="material-symbols-outlined text-sm sm:text-base">
                  google
                </span>
                Google Pay
              </button>
            </div>
            <div className="relative my-6 sm:my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#dce5e5] dark:border-white/10"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm uppercase">
                <span className="bg-background-light dark:bg-background-dark px-3 sm:px-4 text-[#638888]">
                  Or checkout as guest
                </span>
              </div>
            </div>
          </section>

          {/* Contact Information Form */}
          <section className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2">
              <h3 className="text-[#111818] dark:text-white text-lg sm:text-xl font-bold leading-tight">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm">
                Already have an account?{" "}
                <Link
                  to="/cart"
                  className="text-primary font-bold underline decoration-primary/30 hover:text-primary"
                >
                  Log in
                </Link>
              </p>
            </div>

            <form
              onSubmit={handleContinueToShipping}
              className="shadow-lg rounded-xl py-6 px-3 sm:px-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-full">
                  <label className="block text-xs sm:text-sm font-bold text-[#111818] dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    className="inputForm"
                    name="email"
                    placeholder="email@example.com"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  <div className="mt-2 flex items-center gap-2">
                    <input
                      className="rounded text-primary focus:ring-primary"
                      id="newsletter"
                      type="checkbox"
                    />
                    <label
                      className="text-xs sm:text-sm text-[#638888]"
                      htmlFor="newsletter"
                    >
                      Email me with news and offers
                    </label>
                  </div>
                </div>

                <div className="col-span-full mt-4 sm:mt-6">
                  <h3 className="text-[#111818] dark:text-white text-lg sm:text-xl font-bold leading-tight mb-3 sm:mb-4">
                    Shipping Address
                  </h3>
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-xs sm:text-sm font-bold text-[#111818] dark:text-gray-300 mb-2">
                    First Name
                  </label>
                  <input
                    className="inputForm"
                    name="firstName"
                    placeholder="John"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs sm:text-sm font-bold text-[#111818] dark:text-gray-300 mb-2">
                    Last Name
                  </label>
                  <input
                    className="inputForm"
                    name="lastName"
                    placeholder="Doe"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block text-xs sm:text-sm font-bold text-[#111818] dark:text-gray-300 mb-2">
                    Address
                  </label>
                  <input
                    className="inputForm"
                    name="address"
                    placeholder="Street name and number"
                    type="text"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="col-span-full">
                  <label className="block text-xs sm:text-sm font-bold text-[#111818] dark:text-gray-300 mb-2">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    className="inputForm"
                    name="apartment"
                    placeholder="Apt 4B"
                    type="text"
                    value={formData.apartment}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs sm:text-sm font-bold text-[#111818] dark:text-gray-300 mb-2">
                    City
                  </label>
                  <input
                    className="inputForm"
                    name="city"
                    placeholder="New York"
                    type="text"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs sm:text-sm font-bold text-[#111818] dark:text-gray-300 mb-2">
                    Postal Code
                  </label>
                  <input
                    className="inputForm"
                    name="postalCode"
                    placeholder="10001"
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <Link
                  to="/cart"
                  className="flex items-center gap-1 sm:gap-2 text-[#638888] hover:text-primary transition-colors font-medium text-sm sm:text-base"
                >
                  <span className="material-symbols-outlined text-sm sm:text-base">
                    chevron_left
                  </span>
                  Return to cart
                </Link>
                <button
                  type="submit"
                  className="bg-primary text-[#112121] px-6 sm:px-10 h-11 sm:h-14 rounded-xl font-extrabold text-sm sm:text-base tracking-wide hover:shadow-lg hover:shadow-primary/20 transition-all uppercase"
                >
                  Continue to Shipping
                </button>
              </div>
            </form>
          </section>

          {/* Subtle Footer Links */}
          <footer className="pt-8 sm:pt-12 border-t border-[#dce5e5] dark:border-white/10 flex flex-wrap gap-3 sm:gap-6 text-[10px] sm:text-[12px] uppercase tracking-widest text-[#638888]">
            <Link to="#" className="hover:text-primary transition-colors">
              Refund Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Shipping Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </footer>
        </div>

        {/* Right Column: Order Summary */}
        <aside className="w-full lg:w-[360px] xl:w-[400px] order-first lg:order-last">
          <div className="bg-white dark:bg-white/5 border border-[#dce5e5] dark:border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:sticky lg:top-24">
            <h3 className="text-base sm:text-lg font-bold mb-4 sm:mb-6">
              Order Summary
            </h3>

            {/* Product List */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-3 sm:gap-4">
                  <div className=" w-14 h-14 sm:w-16 sm:h-16 rounded:bg-[#35211d] overflow-hidden flex-shrink-0 relative bg-background-light">
                    <div
                      className="w-full h-full bg-center bg-cover rounded-lg"
                      data-alt={item.name}
                      style={{ backgroundImage: `url("${item.image}")` }}
                    />
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#111818] text-white text-[10px] flex items-center justify-center rounded-full z-10">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-xs sm:text-sm font-bold line-clamp-1">
                      {item.name}
                    </p>
                    <p className="text-[10px] sm:text-[12px] text-[#638888]">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            {/* Discount Code */}
            <div className="flex gap-2 mb-6 sm:mb-8">
              <input
                className="flex-grow h-10 sm:h-12 px-3 sm:px-4 rounded-lg border-[#dce5e5] dark:border-white/10 dark:bg-white/5 focus:ring-primary focus:border-primary text-sm"
                placeholder="Discount code"
                type="text"
              />
              <button className="px-4 sm:px-6 h-10 sm:h-12 rounded-lg bg-[#dce5e5] dark:bg-white/10 font-bold text-sm hover:bg-[#c8d4d4] transition-all">
                Apply
              </button>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2 sm:space-y-3 pt-4 sm:pt-6 border-t border-[#dce5e5] dark:border-white/10 text-sm">
              <div className="flex justify-between">
                <span className="text-[#638888]">Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#638888]">Shipping</span>
                <span className="text-[#638888]">Calculated at next step</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#638888]">Taxes</span>
                <span className="font-bold">${taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base sm:text-lg pt-3 sm:pt-4 border-t border-[#dce5e5] dark:border-white/10">
                <span className="font-bold">Total</span>
                <div className="text-right">
                  <span className="text-[10px] sm:text-[12px] text-[#638888] mr-2">
                    USD
                  </span>
                  <span className="font-extrabold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-6 opacity-60">
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  verified_user
                </span>
                <span className="text-[10px] sm:text-[10px] uppercase font-bold">
                  Secure
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  spa
                </span>
                <span className="text-[10px] sm:text-[10px] uppercase font-bold">
                  Vegan
                </span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-lg sm:text-xl">
                  eco
                </span>
                <span className="text-[10px] sm:text-[10px] uppercase font-bold">
                  Eco
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default CheckoutPage;
