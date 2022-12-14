import movieApi from "../../Api/movieApi";
import { FETCH_MOVIE, SET_MOVIE } from "./Containts";

export const fetchMovie = () => async (dispatch) => {
  const res = await movieApi.get(
    `/popular?api_key=${process.env.REACT_APP_MOVIE_ID}`
  );
  dispatch({ type: FETCH_MOVIE, payload: res.data });
};

export const setMovie = (movie) => {
  return {
    type: SET_MOVIE,
    payload: movie,
  };
};
