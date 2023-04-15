export const SELECT_SONG = "SELECT_SONG";
export const SAVE_SONG = "SAVE_SONG"
export const DELETE_SONG = "DELETE_SONG"

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