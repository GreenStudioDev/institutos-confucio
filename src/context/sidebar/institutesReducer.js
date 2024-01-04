

export const institutesReducer = (state, action) => {
  switch (action.type) {
    case "getInstitutes":
      return {
        ...state,
        isLoading: false,
        institutes: action.payload,
      };
    // case "setInstitutes":
    //   return {
    //     ...state,
    //     isLoading: false,
    //     institutes: action.payload,
    //   };
    default:
      return state;
  }
};
