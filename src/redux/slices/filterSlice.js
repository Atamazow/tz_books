import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export type Sort = {
    label: string,
    value: string
}

export interface FilterSliceState {
    categoryId: number,
    searchValue: string,
    currentPage: number,
    sort: Sort,
    subject: string
}

const initialState:FilterSliceState = {
    searchValue: '*',
    subject: 'all',
    categoryId: 0,
    currentPage: 1,
    sort: { label: "Актуальные", value: "relevance" },
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setCurrentPage: (state) => {
            state.currentPage += 1;
        },
        setSubject: (state, action: PayloadAction<string>) => {
            state.subject = action.payload;
        },
        setSort: (state, action: PayloadAction<{ label: string; value: string }>) => {
            state.sort = action.payload;
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload;
        },
        // setCategory: (state, action: PayloadAction<string[]>) => {
        //     state.categories = action.payload;
        // },
    },
});

export const {   setCurrentPage, setSubject, setSort, setSearchValue } =
    filterSlice.actions;

export const selectFilter = (state: RootState) => state.filterSlice;

export const selectSubject = (state: RootState) => state.filterSlice.subject;

export const selectSort = (state: RootState) => state.filterSlice.sort;

export default filterSlice.reducer;
