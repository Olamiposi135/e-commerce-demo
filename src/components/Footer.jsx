import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-solid border-t-[#f0f4f4] py-12 px-10">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary">
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
            <h2 className="text-text-main text-lg font-bold">GLOW</h2>
          </div>
          <p className="text-text-muted text-sm leading-relaxed">
            Advanced skincare science meets botanical purity. Cruelty-free,
            sustainable, and proven by clinical research.
          </p>
        </div>
        <div>
          <h4 className="text-text-main text-sm font-bold mb-4">Shop</h4>
          <ul className="flex flex-col gap-2 text-sm text-text-muted">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Cleansers
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Serums
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Moisturizers
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Sun Protection
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-text-main text-sm font-bold mb-4">Support</h4>
          <ul className="flex flex-col gap-2 text-sm text-text-muted">
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Shipping Policy
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="#">
                FAQs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-text-main text-sm font-bold mb-4">Newsletter</h4>
          <p className="text-text-muted text-xs mb-4">
            Join for skincare tips and exclusive offers.
          </p>
          <div className="flex gap-2">
            <input
              className="form-input flex-1 bg-[#f0f4f4] border-none rounded-lg text-sm focus:ring-primary"
              placeholder="Email"
              type="email"
            />
            <button className="bg-primary px-4 py-2 rounded-lg text-text-main font-bold text-xs">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-solid border-t-[#f0f4f4] flex flex-wrap justify-between items-center gap-4">
        <p className="text-text-muted text-xs">
          © 2024 Lumina Skin. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="material-symbols-outlined text-text-muted cursor-pointer hover:text-primary">
            social_leaderboard
          </span>
          <span className="material-symbols-outlined text-text-muted cursor-pointer hover:text-primary">
            camera
          </span>
          <span className="material-symbols-outlined text-text-muted cursor-pointer hover:text-primary">
            share
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
