import {configureStore} from "@reduxjs/toolkit";
import booksSlice from './slices/booksSlice'
import filterSlice from "./slices/filterSlice";
export const store = configureStore({
    reducer: {
        booksSlice,
        filterSlice
    }
})

export type RootState = ReturnType<typeof  store.getState>