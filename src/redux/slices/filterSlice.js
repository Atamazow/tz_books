import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "*",
  subject: "all",
  categoryId: 0,
  currentPage: 1,
  totalItems: 0,
  limit: 10,
  sort: { label: "Актуальные", value: "relevance" },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCurrentPage(state) {
      state.currentPage += 1;
    },
    setSubject(state, action) {
      state.subject = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setCategory(state, action) {
      state.categories = action.payload;
    },
  },
});

export const {
  setCurrentPage,
  setSubject,
  setSort,
  setSearchValue,
  setCategory,
} = filterSlice.actions;

export const selectFilter = (state) => state.filterSlice;
export const selectSubject = (state) => state.filterSlice.subject;
export const selectSort = (state) => state.filterSlice.sort;

export default filterSlice.reducer;
