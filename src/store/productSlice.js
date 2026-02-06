import { createSlice, createSelector } from "@reduxjs/toolkit";
import products from "../data/productContent";

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
  selectedCategory: "All",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      const matchSearch = (item) =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase());
      const matchCategory = (item) =>
        state.selectedCategory === "All" ||
        item.category === state.selectedCategory;
      state.filteredItems = state.items.filter(
        (item) => matchSearch(item) && matchCategory(item),
      );
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      const matchSearch = (item) =>
        item.name.toLowerCase().includes(state.searchTerm.toLowerCase());
      const matchCategory = (item) =>
        state.selectedCategory === "All" ||
        item.category === state.selectedCategory;
      state.filteredItems = state.items.filter(
        (item) => matchSearch(item) && matchCategory(item),
      );
    },
  },
});

// Memoized selector for all items (returns same reference if items haven't changed)
export const selectAllItems = createSelector(
  [(state) => state.products.items],
  (items) => items,
);

// Memoized selector for filtered items
export const selectFilteredItems = createSelector(
  [(state) => state.products.items, (state) => state.products.filteredItems],
  (items, filteredItems) => filteredItems,
);

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
