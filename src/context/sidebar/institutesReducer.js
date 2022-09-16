export const institutesReducer = (state, action) => {
  switch (action.type) {
    case "GET_INSTITUTES":
      return {
        ...state,
        isloading: false,
        institutes: action.payload,
      };
    default:
      return state;
  }
};
