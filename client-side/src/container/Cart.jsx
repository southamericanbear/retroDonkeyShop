import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { AuthContext } from "../auth/AuthContext";
import { CartProduct } from "../components/ui/CartProduct";
import { Paypal } from "../components/ui/Paypal";
import "../styles/cart.css";

const Cart = () => {
  const { products } = useContext(AuthContext);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let getProducts = localStorage.getItem("products");

    if (getProducts.length > 0) {
      let productsArr = getProducts.split(",");
      let select = [];
      for (let i of productsArr) {
        for (let prod of products) {
          if (prod.id === i) {
            select.push(prod);
          } else {
          }
        }
      }
      setCart(select);
    }
  }, [products]);

  let pricesArr = cart.map((i) => parseInt(i.Price));
  let total = 39;

  pricesArr.forEach((price) => {
    total += price;
  });

  return (
    <div className="cart-container">
      <Tabs defaultActiveKey="cart" id="uncontrolled-tab-example">
        <Tab eventKey="cart" title={`Cart(${cart.length})`}>
          {cart.length > 0 ? (
            <>
              <div className="cart-element-body">
                {cart.map((product, i) => (
                  <CartProduct key={i} {...product} />
                ))}
              </div>
              <div className="total">
                <div className="total_shipping">
                  <span>Shipping</span>
                  <span>$39</span>
                </div>
                <div className="total_final">
                  <span>Total With Shipping</span>
                  <span>${total}</span>
                </div>
                <Paypal total={total} />
              </div>
            </>
          ) : (
            <h6 style={{ textAlign: "center", padding: "10%" }}>
              Your shopping cart is empty
            </h6>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default Cart;
