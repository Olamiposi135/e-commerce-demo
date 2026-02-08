import React from "react";
import { Link } from "react-router-dom";
import { IoArrowForwardOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="w-full lg:w-1/2 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          <div
            className="relative aspect-4/5 w-full bg-center bg-cover rounded-xl shadow-2xl overflow-hidden"
            data-alt="Elegant woman with glowing healthy skin in warm lighting"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDccvcdv9Tg9IGABtw_jB5qO5dB9KOoOmsqNu74xhDm2a2hQ4k2HGcuk97si8-vq3YdlCbrwAKK-1tVD1gs17wCpRpQw8pjroeTmXdpxYDeKtAXFwHz19u0fbCHY2Y5TPmq5wRy6FPVSSb-1UvoQeXUIzXZoI6byFfZLrTbDpMBB7KU1llP-KtVg7akm6_5VkDSiWx5vjOWk6N2cGT0RAScyZESPFdHIK73Ir-54cB5Tug4jX6yRWYKsLZ0OnbbISJF_fl2_D8xjCLa")',
            }}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase px-3 py-1 bg-primary/10 rounded-full">
              Dermatologist Developed
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-charcoal">
              Science-backed beauty for your healthiest skin.
            </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Experience the intersection of clinical efficacy and clean
              ingredients. Our formulas are engineered to transform your skin at
              a cellular level.
            </p>
          </div>
          <div
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <Link to="/products" className="w-full sm:w-auto">
              <button className="bg-primary hover:brightness-105 text-charcoal font-bold py-4 px-10 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
                Shop the Collection
                <IoArrowForwardOutline size={20} />
              </button>
            </Link>
            <button className="bg-white border border-gray-200 hover:border-primary py-4 px-10 rounded-lg font-bold transition-all text-charcoal">
              Take Skin Quiz
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
