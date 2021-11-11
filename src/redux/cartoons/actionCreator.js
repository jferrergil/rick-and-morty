import { cartoonActionType } from "./actionTypes";
import * as http from "../../services/http-rick-and-morty";

export const loadCartoon = (url) => {
  return (dispatch) => {
    http.getCartoon(url).then((characterList) => {
      dispatch({
        type: cartoonActionType.load,
        characters: characterList,
      });
    });
  };
};
