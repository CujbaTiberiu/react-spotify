import { SET_SEARCH_WORD } from "../actions";

const initialState = {
    word: "",
};

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_WORD:
            return action.payload;
        default:
            return state;
    }

}

export default inputReducer;