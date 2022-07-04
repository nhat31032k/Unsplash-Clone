import { createSlice } from "@reduxjs/toolkit";
const appSlice = createSlice({
    name: "app",
    initialState: {
        query: "Girl",
        photos: [],
        isLoading: true,
        page: 1,
        total: "", 
    },
    reducers: {
        updateQuery: (state, { payload }) =>
        { 
            return {
                ...state,
                query: payload
            }
        },
        updatePhotos: (state, { payload }) =>
        { 
            return {
                ...state,
                photos: payload
            }
        },
        updateLoading: (state, { payload }) =>
        { 
            return {
                ...state,
                isLoading: payload
            }
        },
        updatePage: (state, { payload }) =>
        { 
            return {
                ...state,
                page: payload
            }
        },
        updateTotal: (state, { payload }) =>
        { 
            return {
                ...state,
                total: payload
            }
        }
    }
})
export const { updateQuery ,updatePhotos, updateLoading, updatePage, updateTotal } = appSlice.actions;
export default appSlice.reducer