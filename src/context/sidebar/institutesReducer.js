
// import { institutesState } from "../index ";
// import { useGeoInstitutes } from "../../helpers/getGeoInstitutes";
// import { getInstitutes } from "../../api/index"
// const Institutes = ()=> {
//   useGeoInstitutes();
// }


// const InstitutesAction = { type: 'getInstitutes', payload: {},}

export const institutesReducer = (state, action) => {
  switch (action.type) {
    case "getInstitutes":
      return {
        ...state,
        isLoading: false,
        institutes: action.payload,
      };
    default:
      return state;
  }
};
