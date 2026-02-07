import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSearchTerm,
  setSelectedCategory,
  selectFilteredItems,
} from "../store/productSlice";
import RecentlyViewed from "../components/RecentlyViewed";
import CartButton from "../components/CartButton";
import QuantitySelector from "../components/QuantitySelector";
import { Link } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";

const categories = [
  "All",
  "Cleansers",
  "Serums",
  "Moisturizers",
  "Sun Care",
  "Eye Care",
];

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(Math.max(0, quantity - 1));

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart({ ...product, quantity }));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  return (
    <div className="product-card group flex flex-col gap-4 relative">
      <Link to={`/products/${product.id}`} className="block">
        <div className="aspect-4/5 bg-[#f0f4f4] rounded-xl overflow-hidden relative cursor-pointer">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            data-alt={product.name}
            style={{ backgroundImage: `url("${product.image}")` }}
          />
          {product.badge && (
            <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 rounded text-[10px] font-bold tracking-widest text-text-main uppercase">
              {product.badge}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-base filled">
              star
            </span>
            <span className="text-xs font-bold text-text-main">4.9</span>
            <span className="text-xs text-text-muted">(124)</span>
          </div>
          <h3 className="text-text-main text-base font-bold">{product.name}</h3>
          <p className="text-text-muted text-xs">{product.description}</p>
          <p className="text-text-main font-bold mt-1">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Link>
      <div className="flex flex-col gap-3 mt-1">
        <QuantitySelector
          quantity={quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          min={0}
          size="md"
          className="justify-around border border-border-light hover:border-primary rounded-lg p-2"
        />
        <div className="flex flex-col xl:flex-row gap-2">
          <div>
            <CartButton
              product={{ ...product, quantity: quantity > 0 ? quantity : 1 }}
              className="flex-1 uppercase border border-border-light text-text-main hover:border-primary hover:text-primary transition-all"
            />
          </div>
          <button className="flex-1 py-2 h-10 bg-primary text-text-main text-xs font-bold uppercase tracking-wider rounded-lg hover:brightness-105 transition-all flex items-center justify-center">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterSidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 hidden lg:block">
      <div className="sticky top-24 flex flex-col gap-8">
        <div>
          <h3 className="text-text-main text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">tune</span>
            Filters
          </h3>
          <div className="mb-6">
            <p className="text-text-main text-sm font-semibold mb-2">
              Skin Type
            </p>
            <div className="flex flex-col">
              {["Oily", "Dry", "Sensitive", "Combination"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-x-3 py-2 cursor-pointer group"
                >
                  <input
                    className="h-4 w-4 rounded border-border-light bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0"
                    type="checkbox"
                  />
                  <span className="text-text-main text-sm group-hover:text-primary transition-colors">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <div className="mb-6">
            <p className="text-text-main text-sm font-semibold mb-2">
              Concerns
            </p>
            <div className="flex flex-col">
              {["Anti-aging", "Acne & Blemish", "Hydration", "Dark Spots"].map(
                (concern) => (
                  <label
                    key={concern}
                    className="flex items-center gap-x-3 py-2 cursor-pointer group"
                  >
                    <input
                      className="h-4 w-4 rounded border-border-light bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0"
                      type="checkbox"
                    />
                    <span className="text-text-main text-sm group-hover:text-primary transition-colors">
                      {concern}
                    </span>
                  </label>
                ),
              )}
            </div>
          </div>
          <div className="mb-8">
            <p className="text-text-main text-sm font-semibold mb-4">
              Price Range
            </p>
            <div className="px-2">
              <input
                className="w-full h-1 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-primary"
                max="200"
                min="0"
                step="5"
                type="range"
              />
              <div className="flex justify-between mt-2 text-xs text-text-muted">
                <span>$0</span>
                <span>$200+</span>
              </div>
            </div>
          </div>
        </div>
        <button className="flex w-full cursor-pointer items-center justify-center rounded-lg h-11 px-4 bg-primary text-text-main text-sm font-bold tracking-tight hover:brightness-110 transition-all">
          Apply Filters
        </button>
        <button className="text-text-muted text-xs font-medium hover:text-text-main transition-colors">
          Clear All Filters
        </button>
      </div>
    </aside>
  );
};

const AllProducts = () => {
  const dispatch = useDispatch();
  const { searchTerm, selectedCategory } = useSelector(
    (state) => state.products,
  );
  const filteredItems = useSelector(selectFilteredItems);
  const [localSearch, setLocalSearch] = useState(searchTerm);

  const handleSearchChange = (e) => {
    setLocalSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch(setSearchTerm(localSearch));
  };

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <>
      <main className="flex-1 flex flex-col mx-auto w-full max-w-[1440px] px-10 py-6">
        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 py-4">
          <a
            className="text-text-muted text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Home
          </a>
          <span className="text-text-muted text-sm font-medium">/</span>
          <span className="text-text-muted text-sm font-medium">Shop</span>
          <span className="text-text-muted text-sm font-medium">/</span>
          <span className="text-text-main text-sm font-bold">All Skincare</span>
        </div>

        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-3 pb-8 pt-4 border-b border-[#f0f4f4]">
          <div className="flex min-w-72 flex-col gap-2">
            <h1 className="text-text-main text-4xl font-black leading-tight tracking-[-0.033em]">
              All Skincare
            </h1>
            <p className="text-text-muted text-base font-normal leading-normal max-w-xl">
              Dermatologist-approved formulas crafted with clinical-strength
              actives for radiant, lasting results.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-text-muted text-sm">
              Showing {filteredItems.length} products
            </p>
            <select className="form-select bg-white border-border-light rounded-lg text-sm text-text-main focus:border-primary focus:ring-primary min-w-[160px]">
              <option>Sort by: Featured</option>
              <option>Newest Arrivals</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Best Rating</option>
            </select>
          </div>
        </div>

        <div className="flex gap-10 pt-8">
          {/* Filters Sidebar */}
          <FilterSidebar />

          {/* Products Grid */}
          <div className="flex-1">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-text-main"
                      : "bg-white border border-border-light text-text-muted hover:border-primary hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="mb-8">
              <label className="flex flex-col min-w-40 h-10 max-w-64">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
                  <div className="text-text-muted flex bg-[#f0f4f4] items-center justify-center pl-4">
                    <span className="material-symbols-outlined text-xl">
                      search
                    </span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 border-none bg-[#f0f4f4] focus:ring-0 text-text-main placeholder:text-text-muted px-4 pl-2 text-sm font-normal"
                    placeholder="Search products..."
                    value={localSearch}
                    onChange={handleSearchChange}
                    onBlur={handleSearchSubmit}
                  />
                </div>
              </label>
            </div>

            {/* Products */}
            {filteredItems.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                  {filteredItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-16 mb-20">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-lg border border-border-light hover:bg-primary/10 transition-colors">
                      <span className="material-symbols-outlined">
                        chevron_left
                      </span>
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-primary text-text-main font-bold text-sm">
                      1
                    </button>
                    <button className="w-10 h-10 rounded-lg hover:bg-primary/10 text-sm transition-colors text-text-main">
                      2
                    </button>
                    <button className="w-10 h-10 rounded-lg hover:bg-primary/10 text-sm transition-colors text-text-main">
                      3
                    </button>
                    <span className="px-2 text-text-muted">...</span>
                    <button className="w-10 h-10 rounded-lg hover:bg-primary/10 text-sm transition-colors text-text-main">
                      8
                    </button>
                    <button className="p-2 rounded-lg border border-border-light hover:bg-primary/10 transition-colors text-text-main">
                      <span className="material-symbols-outlined">
                        chevron_right
                      </span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">
                  search_off
                </span>
                <h3 className="text-xl font-bold text-text-main mb-2">
                  No products found
                </h3>
                <p className="text-text-muted mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    dispatch(setSearchTerm(""));
                    dispatch(setSelectedCategory("All"));
                    setLocalSearch("");
                  }}
                  className="px-6 py-3 bg-primary text-text-main font-bold rounded-lg hover:brightness-105 transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <RecentlyViewed />
    </>
  );
};

export default AllProducts;
