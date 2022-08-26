import React from "react";
import "./index.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../../Store/Actions/EcommerceActions";

export const SingleProduct = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  };

  const removeFromTheCart = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };

  const { cartItems } = useSelector((state) => state.EcommerceReducer);

  return (
    <div className="singleproduct__container">
      <div className="singleproduct-img-container">
        <img src={product.productImage} alt={product.brand} className="image" />
      </div>
      <div className="singleproduct-details flow-top">
        {cartItems.find((e) => e.id === product.id) ? (
          <Button
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            color="error"
            onClick={() => removeFromTheCart(product)}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            variant="outlined"
            startIcon={<AddShoppingCartIcon />}
            onClick={() => addItemToCart(product)}
          >
            Add to Cart
          </Button>
        )}

        <div className="singleproduct__title-price">
          <h3 className="title-n product_title">{product.productTitle}</h3>
          <h3 className="title-n product_price">{product.listPrice}</h3>
        </div>
      </div>
    </div>
  );
};
