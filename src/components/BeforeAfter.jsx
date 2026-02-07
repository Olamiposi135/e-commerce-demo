import React from "react";
import { MdOutlineUnfoldMoreDouble } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";

const BeforeAfter = () => {
  return (
    <section className="py-20 flex flex-col lg:flex-row items-center gap-16">
      <div className="w-full lg:w-1/2">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
          <div className="grid grid-cols-2">
            <div
              className="h-100 bg-center bg-cover grayscale"
              data-alt="Before image of skin with texture issues"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHpmIIyTF-ftdZtPfXYFN--aJow04nBTbKkJh-1aH5M4pJ7k7KL7JnjdaAh3qvHrazULhBYYvLQMku1Qb41xM-nXO7jjeFYZuYDwukPbvrR7fblKYr_B1RkDUmEpTRiHyBloDi5Dax7HOVonjSTmBN9WxXWVDg7YkhmJtTkr5KRBxR-keRwX75wROtzPsCDQfrwPorOtBg03qkqo1iSheCyYUNo0uSBqm0671Ig7xfLSjcO-BinLQy485XS0xUNLr0s6ncxl8fOR67")',
              }}
            >
              <div className="absolute top-4 left-4 bg-charcoal/50 text-white text-xs px-2 py-1 rounded">
                Week 0
              </div>
            </div>
            <div
              className="h-100 bg-center bg-cover"
              data-alt="After image of clear glowing skin"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDJ6-frVcYbK3knVqWUO4paLeQo2fTQDZSHstmxjTWDj7nzNe0zm3VBuRxEnCdSggeudYm-sqRdgqdG5tya6Bs5yWuTigmhL4A-0AjUssMU_NJPQ6lEEmVpvDdabNpfuM64r1rluaH0s_eqhVikvNzKLyc1f_sD232JYstXBzXCrPt2mpbxmFLt8tQoT1phwUQwLfFn9Gf_WYiesBVJMDugJG1r7rFAKbvj63VsGBe43jm4xHttlWuuHsoxAfffFJGcclAKAxrnLU07")',
              }}
            >
              <div className="absolute top-4 right-4 bg-primary text-charcoal text-xs px-2 py-1 rounded">
                Week 4
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white cursor-ew-resize">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <MdOutlineUnfoldMoreDouble className="text-gray-400 text-sm" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-8">
        <div className="flex gap-1 text-primary">
          <IoIosStarOutline className="text-xl" />
          <IoIosStarOutline className="text-xl" />
          <IoIosStarOutline className="text-xl" />
          <IoIosStarOutline className="text-xl" />
          <IoIosStarOutline className="text-xl" />
        </div>
        <h2 className="text-3xl font-black leading-tight italic text-charcoal">
          "The only products that have actually fixed my skin barrier. The glow
          is undeniable."
        </h2>
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
            S.M
          </div>
          <div>
            <p className="font-bold text-charcoal">Sarah Miller</p>
            <p className="text-xs text-gray-500">
              Verified Buyer • 6 Months User
            </p>
          </div>
        </div>
        <button className="text-charcoal font-bold flex items-center gap-2 border-b-2 border-primary py-1">
          See More Real Results
          <MdOpenInNew className="text-lg" />
        </button>
      </div>
    </section>
  );
};

export default BeforeAfter;
