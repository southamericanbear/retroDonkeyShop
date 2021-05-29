import React from "react";

export const CartProduct = ({ FreeShipping, Price, Title, img }) => {
  return (
    <div className="cart_product">
      <div className="cart_product_details">
        {" "}
        <img src={img} alt={Title} />
        <div>
          {" "}
          <h5 className="cart_product_h5">{Title}</h5>
          {!FreeShipping ? (
            <span className="cart_product_shipping">Free Shipping</span>
          ) : (
            ""
          )}
        </div>
      </div>
      <span className="cart_product_price">${Price}</span>
    </div>
  );
};
