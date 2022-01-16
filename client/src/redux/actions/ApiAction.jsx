import { GET_DATA } from "./../type";
export const ApiAction = (payload) => {
  return {
    type: GET_DATA,
    payload,
  };
};
