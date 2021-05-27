import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./ProductCard";
import { Button } from "react-bootstrap";
import "../../styles/ProductsGrid.css";
import { AuthContext } from "../../auth/AuthContext";

export const ProductsGrid = () => {
  const { products } = useContext(AuthContext);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="products-grid">
        {products.map((product, i) => (
          <ProductCard key={i} {...product} />
        ))}
      </div>
      <Button variant="dark" style={{ alignSelf: "center", width: "110px" }}>
        <Link className="all-products" to="/products">
          See more...
        </Link>
      </Button>
    </div>
  );
};
