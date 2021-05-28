import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import addToCart from "../../hooks/AddToCart";

export const ProductCard = ({ Title, Price, id, img }) => {
  const handleClick = () => {
    addToCart(id);
  };
  return (
    <Card
      className="animate__animated animate__fadeIn"
      style={{ width: "18rem" }}
    >
      <Card.Img
        variant="top"
        src={img}
        style={{ width: "100%", height: "180px" }}
      />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
          <Link to={`/products/${id}`}>See more details...</Link>
        </Card.Text>
        <span>${Price}</span>
        <br />
        <Button onClick={handleClick} className="add-to-cart-btn">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};
