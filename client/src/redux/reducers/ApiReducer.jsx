import { GET_DATA, SET_ERROR, SET_LOADING } from "./../type.jsx";

const initialState = {
  data: [],
  loading: false,
  error: "",
};
export const ApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return (state = {
        data: action.payload,
        loading: false,
        error: "",
      });
    case SET_LOADING:
      return (state = {
        ...state,
        loading: true,
        error: "",
      });
    case SET_ERROR:
      return (state = {
        ...state,
        error: action.payload,
      });
    default:
      return state;
  }
};
