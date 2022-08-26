import {
  imagesData,
  modalToggle,
  postDetailsReducer,
} from "../../Actions/InstagramApp";

const intialState = {
  data: {},
  boolean: false,
  currentPost: {},
};

export const instagramReducer = (state = intialState, action) => {
  switch (action.type) {
    case imagesData:
      return action.payload;

    case postDetailsReducer:
      return action.payload;

    case modalToggle:
      return action.payload;

    default:
      return state;
  }
};
