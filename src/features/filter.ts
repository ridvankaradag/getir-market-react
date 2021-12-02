import { createSlice } from "@reduxjs/toolkit";
import { FilterState } from "../@types/filter";

const initialState: FilterState = {
  isLoading: false,
  error: false,
  brands: [],
  tags: [],
  itemTypes: [],
  sorts: [
    { name: "Price low to high", value: "_sort=added&_order=asc" },
    { name: "Price high to low", value: "_sort=added&_order=asc" },
    { name: "New to old", value: "_sort=added&_order=asc" },
    { name: "Old to new", value: "_sort=added&_order=asc" },
    { name: "Default", value: "" },
  ],
  selectedSort: "",
  selectedBrands: [],
  selectedTags: [],
  selectedItemType: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getFiltersSuccess(state, action) {
      state.isLoading = false;
      const { brands, tags, itemTypes } = action.payload;
      state.brands = brands;
      state.tags = tags;
      state.itemTypes = itemTypes;
      state.selectedBrands = [brands[0]];
      state.selectedTags = [tags[0]];
    },
    changeSort(state, action) {
      state.selectedSort = action.payload;
    },
    addBrands(state, action) {
      state.selectedBrands.push(action.payload);
      if (action.payload.name === "All") {
        state.selectedBrands = [state.brands[0]];
      } else {
        state.selectedBrands = state.selectedBrands.filter(
          (brand) => brand.name !== "All"
        );
      }
    },
    removeBrands(state, action) {
      state.selectedBrands = state.selectedBrands.filter(
        (brand) => brand.name !== action.payload.name
      );

      if (state.selectedBrands.length === 0) {
        state.selectedBrands = [state.brands[0]];
      }
    },
    addTags(state, action) {
      state.selectedTags.push(action.payload);
      if (action.payload.name === "All") {
        state.selectedTags = [state.tags[0]];
      } else {
        state.selectedTags = state.selectedTags.filter(
          (tag) => tag.name !== "All"
        );
      }
    },
    removeTags(state, action) {
      state.selectedTags = state.selectedTags.filter(
        (brand) => brand.name !== action.payload.name
      );
      if (state.selectedTags.length === 0) {
        state.selectedTags = [state.tags[0]];
      }
    },
    changeItemType(state, action) {
      if (state.selectedItemType === action.payload) {
        state.selectedItemType = "";
      } else {
        state.selectedItemType = action.payload;
      }
    },
  },
});

export default filterSlice.reducer;

export const {
  startLoading,
  hasError,
  getFiltersSuccess,
  changeSort,
  addBrands,
  removeBrands,
  addTags,
  removeTags,
  changeItemType,
} = filterSlice.actions;
