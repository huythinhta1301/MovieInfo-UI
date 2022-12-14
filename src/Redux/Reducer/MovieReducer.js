import { FETCH_MOVIE, SET_MOVIE } from "../Actions/Containts";

const initialState = {
  movie: [],
};

export const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE:
      return {
        ...state,
        movie: payload,
      };
    case SET_MOVIE:
      return {
        ...state,
        movie: payload,
      };
    default:
      return state;
  }
};
