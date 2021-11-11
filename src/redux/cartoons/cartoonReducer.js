import { cartoonActionType } from "./actionTypes";

const initialState = {
  info: {},
  characters: [],
};

export const cartoonReducer = (state = initialState, action) => {
  switch (action.type) {
    case cartoonActionType.load:
      return {
        ...state,
        characters: [...action.characters.results],
        info: { ...action.characters.info },
      };

    default:
      return state;
  }
};
