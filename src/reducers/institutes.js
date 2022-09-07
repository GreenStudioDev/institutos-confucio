import { SET_INSTITUTES } from "../actions/types";

const initialState = {
  institutes: [],
};

export const institutesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INSTITUTES:
      return {...state, institutes: action.payload };
    default:
      return state;
  }
};
