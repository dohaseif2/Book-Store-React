import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "../store/bookStore";

export const myStore=configureStore({
    reducer:{
        bookSlice:bookReducer
    }
})