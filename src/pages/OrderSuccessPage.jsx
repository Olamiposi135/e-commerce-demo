import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

const OrderSuccessPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const cartItems = useSelector((state) => state.cart.items);
  const [orderData, setOrderData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasClearedCart = useRef(false);

  useEffect(() => {
    const loadOrderData = async () => {
      // Prevent double clearing
      if (hasClearedCart.current) {
        setIsLoading(false);
        return;
      }

      // Get order data from URL params first, then sessionStorage as backup
      const email =
        searchParams.get("email") || sessionStorage.getItem("orderEmail") || "";
      const firstName =
        searchParams.get("firstName") ||
        sessionStorage.getItem("orderFirstName") ||
        "";
      const lastName =
        searchParams.get("lastName") ||
        sessionStorage.getItem("orderLastName") ||
        "";
      const address =
        searchParams.get("address") ||
        sessionStorage.getItem("orderAddress") ||
        "";
      const apartment =
        searchParams.get("apartment") ||
        sessionStorage.getItem("orderApartment") ||
        "";
      const city =
        searchParams.get("city") || sessionStorage.getItem("orderCity") || "";
      const postalCode =
        searchParams.get("postalCode") ||
        sessionStorage.getItem("orderPostalCode") ||
        "";

      // Calculate totals from cart items
      let subtotal = 0;
      let itemsLength = cartItems.length;

      if (itemsLength > 0) {
        subtotal = cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
        // Clear cart via Redux
        dispatch(clearCart());
        // Also clear localStorage
        localStorage.setItem("cart", JSON.stringify({ items: [] }));
        hasClearedCart.current = true;
      } else {
        // Try to get from sessionStorage
        subtotal = parseFloat(sessionStorage.getItem("orderSubtotal") || "0");
      }

      const taxes = subtotal * 0.08;
      const total = subtotal + taxes;

      // Generate random order number
      const orderNumber = `SKIN-${Math.floor(10000 + Math.random() * 90000)}`;

      setOrderData({
        orderNumber,
        email: email || "customer@example.com",
        firstName: firstName || "Customer",
        lastName: lastName || "",
        address: address || "",
        apartment: apartment || "",
        city: city || "",
        postalCode: postalCode || "",
        subtotal,
        taxes,
        total,
        hasItems: itemsLength > 0,
      });

      // Save subtotal to sessionStorage if not already cleared
      if (itemsLength > 0) {
        sessionStorage.setItem("orderSubtotal", subtotal.toString());
      }

      // Clear order-related sessionStorage
      if (email) {
        sessionStorage.removeItem("orderEmail");
        sessionStorage.removeItem("orderFirstName");
        sessionStorage.removeItem("orderLastName");
        sessionStorage.removeItem("orderAddress");
        sessionStorage.removeItem("orderApartment");
        sessionStorage.removeItem("orderCity");
        sessionStorage.removeItem("orderPostalCode");
      }

      setIsLoading(false);
    };

    // Small delay to ensure data is loaded
    const timer = setTimeout(loadOrderData, 100);

    return () => clearTimeout(timer);
  }, [searchParams, cartItems, dispatch]);

  if (isLoading) {
    return (
      <main className="max-w-[960px] mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4">
            <span className="material-symbols-outlined text-primary text-3xl animate-spin">
              sync
            </span>
          </div>
          <p className="text-lg text-[#896861]">Loading order details...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-[960px] mx-auto px-4 sm:px-6 py-8 lg:py-12">
      {/* Success Hero */}
      <div className="text-center mb-10 lg:mb-16">
        <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/10 mb-4 sm:mb-6">
          <span className="material-symbols-outlined text-green-500 text-3xl sm:text-4xl">
            check_circle
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-3 sm:mb-4 text-[#181211] dark:text-white">
          Thank you for your order, {orderData.firstName}!
        </h1>
        <p className="text-base sm:text-lg text-[#896861] dark:text-[#c4a9a4] mb-2">
          Order{" "}
          <span className="text-primary font-bold">
            #{orderData.orderNumber}
          </span>
        </p>
        <p className="text-sm sm:text-base text-[#896861] dark:text-[#c4a9a4]">
          A confirmation email has been sent to{" "}
          <span className="font-medium text-blue-500 hover:underline">
            {orderData.email}
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Order Details */}
        <div className="lg:col-span-7 space-y-8 lg:space-y-10">
          {/* Tracking Status */}
          <section className="bg-white dark:bg-[#2d1b18] p-5 sm:p-6 lg:p-8 rounded-xl border border-[#e6dddb] dark:border-[#3d2a27] shadow-sm">
            <h3 className="text-lg sm:text-xl font-display font-bold mb-6 lg:mb-8">
              Your glow is on the way
            </h3>
            <div className="relative mb-6 lg:mb-8">
              <div className="flex items-center justify-between relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white mb-2">
                    <span className="material-symbols-outlined text-xs sm:text-sm">
                      inventory_2
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    Placed
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-xs sm:text-sm">
                      auto_fix_high
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#896861]">
                    Preparing
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-[#896861] mb-2">
                    <span className="material-symbols-outlined text-xs sm:text-sm">
                      local_shipping
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#896861]">
                    Shipped
                  </span>
                </div>
              </div>
              <div className="absolute top-4 sm:top-5 left-0 w-full h-0.5 bg-primary/10 -z-0">
                <div className="h-full bg-primary w-[25%] transition-all duration-1000"></div>
              </div>
            </div>
            <div className="bg-[#fcfaf9] dark:bg-[#35211d] p-3 sm:p-4 rounded-lg flex items-start gap-3">
              <span className="material-symbols-outlined text-primary flex-shrink-0">
                info
              </span>
              <div>
                <p className="text-xs sm:text-sm font-medium">
                  Estimated Delivery
                </p>
                <p className="text-xs sm:text-sm text-[#896861] dark:text-[#c4a9a4]">
                  Wednesday, October 25th - Friday, October 27th
                </p>
              </div>
            </div>
          </section>

          {/* What's Next */}
          <section>
            <h3 className="text-lg sm:text-xl font-display font-bold mb-4 sm:mb-6">
              What's Next?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex gap-3 sm:gap-4 p-4 border border-[#e6dddb] dark:border-[#3d2a27] rounded-lg">
                <span className="material-symbols-outlined text-primary flex-shrink-0">
                  mail
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold mb-1">
                    Stay updated
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#896861] dark:text-[#c4a9a4]">
                    We'll email you a tracking link as soon as your package
                    ships.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4 p-4 border border-[#e6dddb] dark:border-[#3d2a27] rounded-lg">
                <span className="material-symbols-outlined text-primary flex-shrink-0">
                  support_agent
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold mb-1">
                    Skin Concierge
                  </h4>
                  <p className="text-[10px] sm:text-xs text-[#896861] dark:text-[#c4a9a4]">
                    Have questions about your routine? Our experts are here to
                    help.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-[#2d1b18] rounded-xl border border-[#e6dddb] dark:border-[#3d2a27] shadow-sm lg:sticky lg:top-28 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-[#e6dddb] dark:border-[#3d2a27] flex justify-between items-center">
              <h3 className="font-display font-bold text-base sm:text-lg">
                Order Summary
              </h3>
              <button className="flex items-center gap-1 text-[10px] sm:text-xs font-bold text-[#896861] hover:text-primary uppercase tracking-tighter">
                <span className="material-symbols-outlined text-xs sm:text-sm">
                  print
                </span>
                <span className="hidden sm:inline">Print Receipt</span>
                <span className="sm:hidden">Print</span>
              </button>
            </div>
            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              {/* Cart Items - show from sessionStorage if cart is empty */}
              {orderData.hasItems ? (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3 sm:gap-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded:bg-[#35211d] overflow-hidden flex-shrink-0 relative bg-background-light">
                      <div
                        className="w-full h-full bg-center bg-cover"
                        data-alt={item.name}
                        style={{ backgroundImage: `url("${item.image}")` }}
                      />
                      <span className="absolute -top-1 -right-1 bg-[#181211] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold leading-tight mb-1 line-clamp-2">
                        {item.name}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-[#896861] dark:text-[#c4a9a4]">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-[#896861] text-center py-4">
                  Order completed successfully
                </p>
              )}

              <div className="pt-4 sm:pt-6 border-t border-[#e6dddb] dark:border-[#3d2a27] space-y-2 sm:space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#896861] dark:text-[#c4a9a4]">
                    Subtotal
                  </span>
                  <span className="font-medium">
                    ${orderData.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-[#008a00] font-medium">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#896861] dark:text-[#c4a9a4]">
                    Taxes
                  </span>
                  <span className="font-medium">
                    ${orderData.taxes.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-end pt-2">
                  <span className="font-display font-bold text-base sm:text-xl">
                    Total
                  </span>
                  <span className="font-display font-bold text-lg sm:text-2xl text-primary">
                    ${orderData.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-[#fcfaf9] dark:bg-[#35211d] border-t border-[#e6dddb] dark:border-[#3d2a27]">
              <p className="text-[10px] sm:text-xs font-bold text-[#896861] dark:text-[#c4a9a4] uppercase mb-2">
                Shipping Address
              </p>
              <p className="text-xs sm:text-sm text-[#181211] dark:text-white leading-relaxed">
                {orderData.firstName} {orderData.lastName}
                {orderData.address && (
                  <>
                    <br />
                    {orderData.apartment && (
                      <>
                        {orderData.apartment}
                        <br />
                      </>
                    )}
                    {orderData.city} {orderData.postalCode}
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-[#e6dddb] dark:border-[#3d2a27] text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            to="/products"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            Continue Shopping
          </Link>
          <Link
            to="/"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 border-2 border-primary text-primary font-bold uppercase tracking-widest text-xs sm:text-sm rounded-lg hover:bg-primary/5 transition-colors"
          >
            View Your Account
          </Link>
        </div>
        <p className="mt-8 sm:mt-12 text-[#896861] text-xs sm:text-sm italic">
          "Your skin is 90% of your selfie. Handle with care."
        </p>
      </div>
    </main>
  );
};

export default OrderSuccessPage;
