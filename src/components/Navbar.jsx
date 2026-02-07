import React from "react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { GoSearch } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  // cart functions

  const cartItems = useSelector((state) => state.cart.items);
  const itemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-border-light dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <div className="flex items-center gap-12">
          <Link to="/">
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="size-8 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-extrabold tracking-tighter uppercase">
                OLB
              </h2>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-sm font-semibold tracking-wide hover:text-primary transition-colors"
              href="#"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-semibold tracking-wide hover:text-primary transition-colors"
            >
              All Products
            </Link>
            <a
              className="text-sm font-semibold tracking-wide hover:text-primary transition-colors"
              href="#"
            >
              New Arrivals
            </a>
            <a
              className="text-sm font-semibold tracking-wide hover:text-primary transition-colors"
              href="#"
            >
              About
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1.5 border border-transparent focus-within:border-primary transition-all">
            <GoSearch className="text-gray-500" />
            <input
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-sm w-48 p-1 placeholder:text-gray-400"
              placeholder="Search products..."
              type="text"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
              <IoPersonOutline size={20} className="text-gray-500" />
            </button>
            <div className="relative hover:bg-primary/10 rounded-full transition-colors ">
              <Link to="/cart">
                <BsCart3 size={36} className="p-2  " />
                {itemsCount > 0 && (
                  <span className="shadow-md text-sm p-2 absolute -top-2 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center ">
                    {itemsCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
