import { combineReducers, configureStore } from "@reduxjs/toolkit";
import selectedSongReducer from "../reducers/selectedSongReducer";
import toggleFavSong from "../reducers/toggleFavSong";


const comboReducers = combineReducers({
    favs: toggleFavSong,
    selSong: selectedSongReducer
})

const store = configureStore({
    reducer: comboReducers
})

export default store