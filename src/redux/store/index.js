import { configureStore } from "@reduxjs/toolkit";
import selectedSongReducer from "../reducers/selectedSongReducer";


const store = configureStore({
    reducer: selectedSongReducer
})

export default store