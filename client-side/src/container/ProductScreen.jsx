import React, { useMemo, useState } from "react";
import "../styles/productScreen.css";
import { Redirect, useParams, Link } from "react-router-dom";
import { getProductById } from "../api";
import { Button, Tabs, Tab } from "react-bootstrap";
import addToCart from "../hooks/AddToCart";

export const ProductScreen = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  const productPromise = useMemo(() => getProductById(productId), [productId]);

  if (!productPromise) {
    return <Redirect to="/404" />;
  }

  productPromise
    .then((product) => setProduct(product))
    .catch((error) => console.log(error));

  const handleClick = () => {
    addToCart(product.id);
  };

  return (
    <div>
      <Link to="/products" className="go-back">
        Go back
      </Link>
      <div className="product-screen-container">
        {" "}
        <div className="top">
          {" "}
          <div className="left">
            <img
              src={`https://retro-games-shop.herokuapp.com${product.img[0].formats.medium.url}`}
              alt="product.Title"
            />
          </div>
          <div className="right">
            <div className="info">
              <h1>{product.Title}</h1>
              <h3>${product.Price}</h3>
              <h4>Only {product.Stock} in stock!</h4>
              <h5>Condition: {product.Condition}</h5>
              {product.FreeShipping === false ? null : (
                <h6>Free Shipping Available</h6>
              )}
              <div className="btn-container">
                <Link to="/cart" className="add-to-cart-btn buy-now-btn">
                  Buy now
                </Link>
                <Button onClick={handleClick} className="add-to-cart-btn">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="description">
            <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
              <Tab
                style={{ color: "pink !important" }}
                eventKey="description"
                title="Description"
              >
                <p className="tab-item">{product.Details}</p>
              </Tab>
              <Tab
                style={{ color: "pink !important" }}
                eventKey="details"
                title="Prodcut Detail"
              >
                <span className="tab-item">Condition: {product.Condition}</span>
              </Tab>
              <Tab
                className="tab-color"
                eventKey="warranty"
                title="Warranty Information"
              >
                <span className="tab-item"> 120 Day Warranty</span>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};
