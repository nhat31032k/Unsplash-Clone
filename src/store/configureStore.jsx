import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import searchSlice, { updateSearch, updateSuggestions, updateShowSuggestions } from './searchSlice';
import appSlice from "./appSlice";
const reducer = combineReducers({
    // form: searchSlice,
    global:appSlice,

})

const store = configureStore({
    reducer
})
export default store;