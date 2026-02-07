import React from "react";
import { Link } from "react-router-dom";
import { MdSearchOff } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";

const NotFoundPage = () => {
  return (
    <main className="flex-1 flex flex-col mx-auto w-full max-w-360 px-10 py-8">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="mb-8">
          <span className="text-5xl text-primary/40">
            <MdSearchOff />
          </span>
        </div>
        <h1 className="text-5xl font-black text-text-main mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl font-bold text-text-main mb-4">
          Page Not Found
        </h2>
        <p className="text-text-muted text-base max-w-md mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-text-main font-bold rounded-lg hover:brightness-105 transition-all"
          >
            <IoHomeOutline className="text-lg" />
            Back to Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-border-light text-text-main font-bold rounded-lg hover:border-primary hover:text-primary transition-all"
          >
            <RiShoppingBag4Line className="text-lg" />
            Shop Products
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
