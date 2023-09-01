import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_KEY = "AIzaSyA6J9O1E0sVpApek8NbAifcJ8VDXDNiSNg";

export const fetchBooks = createAsyncThunk(
  "books/fetchBooks",
  async ({ value, currentPage, sort, subject }) => {
    try {
      const startIndex = (currentPage - 1) * 30;
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes`,
        {
          params: {
            q: value,
            orderBy: sort.sortProperty || "relevance",
            startIndex,
            subject,
            maxResults: 30,
            key: API_KEY,
          },
        },
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
);

const initialState = {
  books: [],
  status: "loading",
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    clearBooks(state) {
      state.books = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.books.length > 0) {
          state.books.push(...action.payload.items);
        } else {
          state.books = action.payload.items || [];
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "rejected";
        state.books = [];
      });
  },
});

// не понятный момент Ваха
export const selectBooks = (state) => state.booksSlice;
export const { clearBooks } = booksSlice.actions;
export default booksSlice.reducer;
