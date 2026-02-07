import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import QuantitySelector from "../components/QuantitySelector";
import BackButton from "../components/BackButton";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mainImage, setMainImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [purchaseType, setPurchaseType] = useState("onetime"); // 'onetime' or 'subscribe'

  const product = useSelector((state) =>
    state.products.items.find((p) => p.id === parseInt(id)),
  );

  const pairedProducts = useSelector((state) =>
    state.products.items
      .filter((p) => p.category === product?.category && p.id !== product?.id)
      .slice(0, 4),
  );

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Return home
          </Link>
        </div>
      </div>
    );
  }

  const price =
    purchaseType === "subscribe" ? product.price * 0.85 : product.price;

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <main className="max-w-360 mx-auto px-10 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <BackButton label="Back" variant="pill" />
      </div>

      {/* Breadcrumb */}
      <nav className="flex flex-wrap gap-2 mb-6">
        <Link
          to="/"
          className="text-text-muted text-sm font-medium hover:text-primary transition-colors"
        >
          Home
        </Link>
        <span className="text-text-muted text-sm font-medium">/</span>
        <Link
          to="/products"
          className="text-text-muted text-sm font-medium hover:text-primary transition-colors"
        >
          {product.category}
        </Link>
        <span className="text-text-muted text-sm font-medium">/</span>
        <span className="text-text-main text-sm font-medium">
          {product.name}
        </span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Image Gallery */}
        <div className="lg:col-span-7">
          <div className="flex flex-col gap-4">
            <div
              className="w-full bg-center bg-no-repeat aspect-4/5 bg-cover rounded-xl shadow-sm cursor-pointer"
              style={{ backgroundImage: `url("${product.images[mainImage]}")` }}
            />
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <div
                  key={index}
                  className={`aspect-square bg-cover rounded-lg cursor-pointer transition-all ${
                    index === mainImage
                      ? "border-2 border-primary opacity-100"
                      : "hover:opacity-80 opacity-70 border-2 border-transparent"
                  }`}
                  style={{ backgroundImage: `url("${img}")` }}
                  onClick={() => setMainImage(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-text-main mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined">star_half</span>
              </div>
              <span className="text-text-muted text-sm font-semibold">
                4.9 (240 reviews)
              </span>
            </div>
            <p className="mt-4 text-text-muted text-base leading-relaxed">
              {product.fullDescription || product.description}
            </p>
          </div>

          <div className="text-3xl font-bold text-text-main">
            ${price.toFixed(2)}
            {purchaseType === "subscribe" && (
              <span className="text-sm text-primary ml-2 font-medium">
                (Save 15%)
              </span>
            )}
          </div>

          {/* Purchase Options */}
          <div className="flex flex-col gap-3">
            <label className="group cursor-pointer flex items-center justify-between p-4 rounded-xl border-2 border-[#f0f4f4] hover:border-primary transition-all">
              <div className="flex items-center gap-3">
                <input
                  checked={purchaseType === "onetime"}
                  onChange={() => setPurchaseType("onetime")}
                  className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                  name="purchase"
                  type="radio"
                />
                <span className="font-bold text-text-main">
                  One-time purchase
                </span>
              </div>
              <span className="text-text-main font-bold">
                ${product.price.toFixed(2)}
              </span>
            </label>
            <label className="group cursor-pointer flex items-center justify-between p-4 rounded-xl border-2 border-primary bg-primary/5 transition-all">
              <div className="flex items-center gap-3">
                <input
                  checked={purchaseType === "subscribe"}
                  onChange={() => setPurchaseType("subscribe")}
                  className="w-5 h-5 text-primary focus:ring-primary border-gray-300"
                  name="purchase"
                  type="radio"
                />
                <div>
                  <span className="font-bold text-text-main">
                    Subscribe & Save (15%)
                  </span>
                  <p className="text-xs text-text-muted">
                    Ships every 30 days. Cancel anytime.
                  </p>
                </div>
              </div>
              <span className="text-text-main font-bold">
                ${(product.price * 0.85).toFixed(2)}
              </span>
            </label>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <QuantitySelector
                quantity={quantity}
                onIncrease={() => handleQuantityChange(quantity + 1)}
                onDecrease={() =>
                  handleQuantityChange(Math.max(0, quantity - 1))
                }
                min={0}
                size="md"
              />
              <span className="text-xs text-text-muted font-medium uppercase tracking-wider">
                Quantity
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className="flex-1 border-2 border-background-dark text-background-dark font-bold py-4 px-6 rounded-lg hover:bg-background-dark hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...product,
                      quantity: quantity > 0 ? quantity : 1,
                    }),
                  )
                }
              >
                <span className="material-symbols-outlined">
                  add_shopping_cart
                </span>
                Add to Cart
              </button>
              <button
                className="flex-1 bg-primary text-text-main font-bold py-4 px-6 rounded-lg hover:brightness-105 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                onClick={() => {
                  dispatch(
                    addToCart({
                      ...product,
                      quantity: quantity > 0 ? quantity : 1,
                    }),
                  );
                  navigate("/cart");
                }}
              >
                <span className="material-symbols-outlined">bolt</span>
                Buy Now
              </button>
            </div>
          </div>

          {/* Features */}
          <div className="flex items-center gap-4 text-xs text-text-muted py-2">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                local_shipping
              </span>
              Free Shipping
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">
                verified
              </span>
              Eco-friendly Packaging
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">science</span>
              Paraben Free
            </div>
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      {product.howToUse && (
        <div className="mt-20 border-t border-[#f0f4f4] pt-12">
          <h2 className="text-2xl font-bold mb-8 text-text-main">How to Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.howToUse.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-xl bg-white shadow-sm border border-[#f0f4f4]"
              >
                <div className="size-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined">{step.icon}</span>
                </div>
                <h3 className="font-bold mb-2 text-text-main">
                  {step.step}. {step.title || step.step}
                </h3>
                <p className="text-sm text-text-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Formulation Details */}
      <div className="mt-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-text-main">
          Formulation Details
        </h2>
        <div className="space-y-4">
          <details className="group bg-white rounded-xl overflow-hidden border border-[#f0f4f4]">
            <summary className="flex justify-between items-center p-5 cursor-pointer font-bold list-none text-text-main">
              <span>Key Ingredients & Scientific Benefits</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="p-5 pt-0 text-text-muted leading-relaxed border-t border-[#f0f4f4]">
              <ul className="space-y-4 pt-4">
                <li>
                  <strong className="text-text-main">
                    10% Stabilized Vitamin C:
                  </strong>{" "}
                  Powerful antioxidant that brightens tone and boosts collagen
                  synthesis.
                </li>
                <li>
                  <strong className="text-text-main">
                    Biomimetic Peptides:
                  </strong>{" "}
                  Laboratory-engineered chains that mimic skin proteins to
                  repair the barrier.
                </li>
                <li>
                  <strong className="text-text-main">
                    Hyaluronic Acid (Triple-Weight):
                  </strong>{" "}
                  Penetrates multiple skin layers for intense, long-lasting
                  hydration.
                </li>
              </ul>
            </div>
          </details>
          <details className="group bg-white rounded-xl overflow-hidden border border-[#f0f4f4]">
            <summary className="flex justify-between items-center p-5 cursor-pointer font-bold list-none text-text-main">
              <span>Full Ingredient List</span>
              <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                expand_more
              </span>
            </summary>
            <div className="p-5 pt-0 text-xs text-text-muted leading-relaxed border-t border-[#f0f4f4]">
              <div className="pt-4">
                {product.ingredients ||
                  "Aqua, Glycerin, Ascorbyl Glucoside, Niacinamide, Pentylene Glycol, Sodium Hyaluronate, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Carbomer, Polysorbate 20, Phenoxyethanol, Ethylhexylglycerin, Sodium Hydroxide."}
              </div>
            </div>
          </details>
        </div>
      </div>

      {/* Perfectly Paired Section */}
      <div className="mt-24 mb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-text-main">
              Perfectly Paired
            </h2>
            <p className="text-text-muted">
              Elevate your routine with these complementary essentials.
            </p>
          </div>
          <button className="text-primary font-bold hover:underline flex items-center gap-1">
            Add all to cart{" "}
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pairedProducts.length > 0 ? (
            pairedProducts.map((pairedProduct) => (
              <div key={pairedProduct.id} className="group flex flex-col gap-3">
                <div
                  className="aspect-3/4 bg-cover rounded-xl relative overflow-hidden"
                  style={{ backgroundImage: `url("${pairedProduct.image}")` }}
                >
                  <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full text-text-main opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-text-main">
                    {pairedProduct.name}
                  </h4>
                  <p className="text-text-muted text-xs">
                    ${pairedProduct.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="group flex flex-col gap-3">
                <div
                  className="aspect-3/4 bg-cover rounded-xl relative overflow-hidden"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBSNIzKzkU6s49gKRjssT9s2wLz7C1hONQko18OZ-x97NlzsQEm5f0a2-ZuORGAHvH1m6t-vLjpfoUQeNXXCPDcxdAJnGqqWTCDPGkkGjKhgqzzxZDEUGoE7cxK0vlrCJ-3ugHZD6UIGUPjZIHd-ZEV-1N2IwmI1xY4U0ZBariKoqVTvy_NQSdUziZquihuXIZlfCBxP3vZ2QjLlQh8Cb0rAHJIb31Nmkc-vhinLhjcKpclGWs75CJAnEtJrsI0sVSdEedy_BcNAcUa")',
                  }}
                >
                  <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full text-[#111818] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Gentle Amino Cleanser</h4>
                  <p className="text-[#638888] text-xs">$32.00</p>
                </div>
              </div>
              <div className="group flex flex-col gap-3">
                <div
                  className="aspect-3/4 bg-cover rounded-xl relative overflow-hidden"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBWXajin30Oo1QAwZ6AlidoVt1ZKilZJ_faH_jtJYT66ZUXJRi_AathJxvMxHAupfQKb3VhmEWDXDVqLjM6i_CQYcBXwbg7Px3Vi4XHLrYKXpnJmgnCoeRLhqAmvWrEeQbt-0ZStB_rxpW072d9w9JLnbD6RZedqjkbhXV_0_wbicNP4ou42ptYhvlE-mhXSnYVX3g1QRr-DQdmaESmUUSWVbzBJqT2Z2LNw6Tdk03ten84dIZlsJvu6o-LTe4Cqqx0f3rBs-6UcMdE")',
                  }}
                >
                  <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full text-[#111818] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Ceramide Barrier Balm</h4>
                  <p className="text-[#638888] text-xs">$58.00</p>
                </div>
              </div>
              <div className="group flex flex-col gap-3">
                <div
                  className="aspect-3/4 bg-cover rounded-xl relative overflow-hidden"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5HJ2Jinun0I5JGlnhOJx6rKDFh0vsw8035ZUrv_K5W_OzawQX1pgY8QuEBXBl9rIgWP3XSgD8rEej-dYEDY4Ph12hTlhc3n2rA6DLBjtQLoTZDRczd8latv9R02fbtQ0KZqYyw-nuXLWdleJfEXf6WzwWK8VprOfLjAFXZ9Us0Ik5WQ0RXtmtEDFOgkKRWHomHXF53rkD5gdmL5cp7YmqkIhATblfpw6mqzgdNasjMaUvPDHEz1s0ht1EmceLjIBfPbhBrU6yy8Ts")',
                  }}
                >
                  <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full text-[#111818] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Eye Revival Elixir</h4>
                  <p className="text-[#638888] text-xs">$45.00</p>
                </div>
              </div>
              <div className="group flex flex-col gap-3">
                <div
                  className="aspect-3/4 bg-cover rounded-xl relative overflow-hidden"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDg9wzzKLV1Wafn_AhkByWP6k1Ds73SjKB2dx90FNHLTh0Oh7ei0VRFusK29ear0ph4Rt77yfaQfFXUz2pmt2l1LlPgZuqagkXTvNiR-OnTwKNeISE888Xds2aa2QmCXAhsBSNN7ooxaFpujyeH2zDhMF09JfOVsfncmCEhl0j99RQ1svqpf1NT2eQNi8jhCd8j_9_R3dH-AkcuryKoZmat1HXjTVvFCZ4m2O5P6q5_vEAZdwTeqhRIg6vz0t_W1sHJWOVsg6MUMojq")',
                  }}
                >
                  <button className="absolute bottom-3 right-3 p-2 bg-white/90 rounded-full text-[#111818] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Solar Shield SPF 50</h4>
                  <p className="text-[#638888] text-xs">$38.00</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
