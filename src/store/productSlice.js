import { createSlice } from "@reduxjs/toolkit";
import products from "../data/productContent";

const initialState = {
  items: products,
  filteredItems: products,
  searchTerm: "",
  selectedCategory: "All",
};

const filterProducts = (state) => {
  return state.items.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(state.searchTerm.toLowerCase());
    const matchCategory =
      state.selectedCategory === "All" ||
      product.category === state.selectedCategory;
    return matchSearch && matchCategory;
  });
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProducts(state);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProducts(state);
    },
  },
});

export const { setSearchTerm, setSelectedCategory } = productSlice.actions;
export default productSlice.reducer;
