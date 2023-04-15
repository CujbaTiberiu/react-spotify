import { DELETE_SONG, SAVE_SONG, UNSAVE_SONG } from "../actions";

const initialState = {
    savedSongs: [],
};

const toggleFavSong = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SONG:
            return {
                ...state,
                savedSongs: [...state.savedSongs, action.payload],
            };
        case DELETE_SONG:
            return {
                ...state,
                savedSongs: state.savedSongs.filter((songId) => songId !== action.payload),
            };
        default:
            return state;
    }
};

export default toggleFavSong;