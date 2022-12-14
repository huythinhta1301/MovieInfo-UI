import { combineReducers } from "redux";
import { googleReducer } from "../Reducer/GoogleReducer";
import { movieReducer } from "../Reducer/MovieReducer";

export const rootReducer = combineReducers({
  authGoogle: googleReducer,
  movie: movieReducer,
});
