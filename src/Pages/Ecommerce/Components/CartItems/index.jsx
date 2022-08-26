import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

export const CartItems = () => {
  const { cartItems } = useSelector((state) => state.EcommerceReducer);

  const total = cartItems?.reduce((acc, cur) => acc + cur.listPrice, 0);

  console.log(total);

  return (
    <div>
      {cartItems.length !== 0 ? (
        <>
          {cartItems.map((eachItem) => (
            <div className="cartitems__container br-2 margin-16">
              <div className="cartimage__container br-2">
                <img
                  src={eachItem.productImage}
                  alt={eachItem.title}
                  className="image"
                />
              </div>
              <div className="cartItems__details">
                <h3>{eachItem.productTitle}</h3>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          <h2>Please add some items</h2>
        </>
      )}
    </div>
  );
};
