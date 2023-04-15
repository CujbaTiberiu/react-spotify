import { SELECT_SONG } from "../actions";

const initialState = {
  selectedSong: ""
};

const selectedSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        selectedSong: action.payload
      };
    default:
      return state;
  }
};

export default selectedSongReducer;
