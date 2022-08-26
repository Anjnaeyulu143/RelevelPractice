export const addProductList = "ADD_PRODUCT_LIST";
export const cartItem = "CART__ITEM";
export const removeItem = "REMOVE_ITEM";

export const fetchingProductList = (productsData) => (dispatch, getState) => {
  const { EcommerceReducer } = getState();

  dispatch({
    type: addProductList,
    payload: {
      ...EcommerceReducer,
      productsList: productsData?.products,
    },
  });
};

export const addToCart = (productDetails) => (dispatch, getState) => {
  const { EcommerceReducer } = getState();

  const hasCart = EcommerceReducer?.cartItems.find(
    (eachItem) => productDetails.id === eachItem.id
  );

  if (!hasCart) {
    dispatch({
      type: cartItem,
      payload: {
        ...EcommerceReducer,
        cartItems: [...EcommerceReducer.cartItems, productDetails],
      },
    });
  }
};

export const removeFromCart = (removeProduct) => (dispatch, getState) => {
  const { EcommerceReducer } = getState();

  const { cartItems } = EcommerceReducer;

  const filteredList = cartItems?.filter(
    (eachItem) => eachItem.id !== removeProduct.id
  );

  dispatch({
    type: removeItem,
    payload: {
      ...EcommerceReducer,
      cartItems: filteredList,
    },
  });
};
