import React from "react";
import { useSelector } from "react-redux";
import { SingleProduct } from "../SingleProduct";
import "./index.css";

export const ProductList = () => {
  const { productsList } = useSelector((state) => state.EcommerceReducer);

  // const EcommerceReducer = useSelector((state) => state);

  // console.log(EcommerceReducer);

  return (
    <div className="productlist__container br-2 ">
      {productsList?.map((eachProduct, index) => {
        const productObject = {
          id: eachProduct.id,
          brand: eachProduct.brand,
          productTitle: eachProduct.product_title,
          discount: eachProduct.discount,
          listPrice: eachProduct.list_price,
          productImage: eachProduct.p_image,
          packSize: eachProduct.pack_size,
          stock: eachProduct.stock,
        };

        return (
          <div>
            <SingleProduct key={index} product={productObject} />
          </div>
        );
      })}
    </div>
  );
};
