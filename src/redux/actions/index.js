export const SELECT_SONG = "SELECT_SONG";
export const SAVE_SONG = "SAVE_SONG"
export const DELETE_SONG = "DELETE_SONG"
export const SET_SEARCH_WORD = "SET_SEARCH_WORD"

export const setSearchWord = (word) => {
    return {
        type: SET_SEARCH_WORD,
        payload: word
    };
};

export const selectSong = (song) => {
    return {
        type: SELECT_SONG,
        payload: song
    };
};

export const saveSong = (songId) => ({
    type: SAVE_SONG,
    payload: songId,
});

export const deleteSong = (songId) => ({
    type: DELETE_SONG,
    payload: songId,
});

