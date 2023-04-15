import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectedSongReducer from "../reducers/selectedSongReducer";
import toggleFavSong from "../reducers/toggleFavSong";
import inputReducer from "../reducers/inputReducer";


const comboReducers = combineReducers({
    favs: toggleFavSong,
    selSong: selectedSongReducer,
    search: inputReducer
})

const store = configureStore({
    reducer: comboReducers
})

export default store