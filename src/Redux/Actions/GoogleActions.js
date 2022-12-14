import { GOOGLE_LOGIN } from "./Containts";

export const ggAuth = (ggRes) => {
  return (dispatch) => {
    if (typeof ggRes === "undefined") {
      ggRes = [];
      console.log("Sign in");
    }
    dispatch({
      type: GOOGLE_LOGIN,
      payload: ggRes,
    });
  };
};
