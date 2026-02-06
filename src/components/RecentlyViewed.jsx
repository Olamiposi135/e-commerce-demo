import React from "react";

const recentlyViewedProducts = [
  {
    id: 1,
    name: "Hydra-Glow Mist",
    price: 32.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgbwxb2RKu83npes5tyOyqJh22SDnCFld9JvKGC__7uaG_mItAiOkbduwRlgakblqVIaZFwez2ZgHQBiG64XFEFpN5Q4obC5vTnUtkYTKrMQhHuiZzeiAOrZUHF35IfESSYDWwfIVmm7Zw9qXIAQL02b_Q3pp7LSSZJ7HWvL-u7-qAETO9mC5vKI7mmz0dPTZdbPl0pDCqTg8trAPMbZ1LOxXxNasBJdlqvbS6z4raQgXCvsHGp9oEgNBvUmXrvCqM-Js9SPeZrnk_",
  },
  {
    id: 2,
    name: "Resurfacing Mask",
    price: 58.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC_fDwA9_-VMPGHHWCpmPTFjS6387om4SKFoCJUZon9OxY2Mrh-J36RbbVb_3Xuw9-lkbl_-r1s1weYDpc_LGQ2gKEVkzdNa2NGO480fdIIUqyOQ0_1sVle0S5miZMXDp5vmnK_SePewF7fDdgKNjGBf4xptKawRjOdGD8t1ZvWTFBQgaKik3z7AyLHw5DlNIjq1M_l0SFALIEWBkJACaA8HS2PbG9DD1ZHxs3ONqpdXD_Kzaq3ROksr-Dz65SpIRp2Y5dU7zo9Q8cP",
  },
  {
    id: 3,
    name: "Calming Serum",
    price: 45.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnICIy-icCWnAIcFoHOZ5pckf3_fNM8WF6suaUPwVCpZinBpt3zj5_xc25rT9LKrVt0qzAkGkqA-3jIjqPfSN6SzbIytRgK-cnjCH1AM85cCjMMjHwsplRI7NTV1D-wFXBVqjiJOZkCtDVG6Ll2RWK3f1WZr4Kuw6sd4voKFcbE06qvVfZk-pTvFgHhkdHrXV-zkW45ADKWfdZDfEoKotyzxSIrSf-DZZjsPq0_VP3sZRxCpRnhzuf4cOsrZgDfrb3M4IBv-r4F3bp",
  },
  {
    id: 4,
    name: "Daily Defense SPF",
    price: 38.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFb397UWHzUCkAHRo-kTtUXl0w-wqcRnFyLfXzevkScFoMHETAn9xIx5sYX5OuJeEF_DiURsEyjj8fsex0jmM4_liQ3rDFfvWHZ8HEU9wqCkeY77uC1UyioyC3N720pCRtxhCKytq-F4yzdRdReJSXXyx6klk_3Nv3TyDHe5NlBZ5UXArBhpHoBdes_P8m8yeqCRj23KjzivDYLpsrB7lXT7b-ziiLP_95HrubqF2B0iLIDA7Lv9dsJRnzTCCOfytqOFpthzaj3j3a",
  },
  {
    id: 5,
    name: "Balancing Toner",
    price: 28.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBq7HHnwqyOAcSRBa-_Jh4NW2q-U04HThuhLhviSN1Koz7527vgH-N_mthsZ-5bHbNdGmTolqV2a4dUYsn4QjEI0JQv1VU9glF02AyVh5ASW-HWInDdUbcBcu1iJrEXLGaTldic3s1ySfND6OGcM7Y8SHFmeVB0OchMcgG7vj0iDAz753dgQHCDOwjSvYDzxnDssAeTQ3P3k0lH8FZbPEu4tEVqderPBzVp48puMVGffYBo36pVQNgtXK_YA8C1cbJhvirH1nDo2VlZ",
  },
];

const RecentlyViewed = () => {
  return (
    <section className="bg-white py-16 px-10 border-t border-[#f0f4f4]">
      <div className="max-w-[1440px] mx-auto">
        <h2 className="text-3xl font-serif text-text-main mb-10 tracking-tight">
          Recently Viewed
        </h2>
        <div className="relative group">
          <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar scroll-smooth snap-x">
            {recentlyViewedProducts.map((product) => (
              <div key={product.id} className="flex-none w-64 snap-start">
                <div className="group/item flex flex-col gap-3">
                  <div className="aspect-square bg-[#f0f4f4] rounded-lg overflow-hidden relative cursor-pointer">
                    <img
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                      src={product.image}
                    />
                    <button className="absolute bottom-3 right-3 size-9 bg-white rounded-full shadow-sm flex items-center justify-center text-text-main hover:bg-primary hover:text-text-main transition-all">
                      <span className="material-symbols-outlined text-xl">
                        add_shopping_cart
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h4 className="text-sm font-bold text-text-main">
                      {product.name}
                    </h4>
                    <p className="text-sm text-text-muted">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
