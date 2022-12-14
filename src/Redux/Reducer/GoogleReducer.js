import { GOOGLE_LOGIN } from "../Actions/Containts";

const initialValues = [
  {
    isSigned: false,
    payload: null,
  },
];
export const googleReducer = (state = initialValues, action) => {
  switch (action.type) {
    case GOOGLE_LOGIN:
      return action.payload;
    default:
      return state;
  }
};
