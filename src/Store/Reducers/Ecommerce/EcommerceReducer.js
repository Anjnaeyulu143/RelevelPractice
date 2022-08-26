import {
  addProductList,
  cartItem,
  removeItem,
} from "../../Actions/EcommerceActions";

const initialState = {
  productsList: [],
  cartItems: [],
};

export const EcommerceReducer = (state = initialState, action) => {
  switch (action.type) {
    case addProductList:
      return action.payload;

    case cartItem:
      return action.payload;

    case removeItem:
      return action.payload;

    default:
      return state;
  }
};
