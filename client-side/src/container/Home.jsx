import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { AuthContext } from "../auth/AuthContext";
import { Carrousel } from "../components/ui/Carrousel";
import { ProductsGrid } from "../components/ui/ProductsGrid";

export const Home = () => {
  const { products } = useContext(AuthContext);

  return (
    <main>
      <div className="presentation">
        <div className="carru">
          {" "}
          <Carrousel />
        </div>
        <div className="title">
          <h1>retroDonkey the place where the oldies lives!</h1>
          <p>
            Buy used video games, original game systems and old school gaming
            accessories for sale at the largest family run retro video game
            online store. Shop all our vintage 100% authentic products, with a
            free 120 day warranty and free domestic shipping on orders over $10.
          </p>
          <div>
            {" "}
            <span>Original Retro Games & Consoles </span>
            <Link to="/products">SHOP NOW!</Link>
          </div>
        </div>
      </div>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {products.length > 0 ? (
          <ProductsGrid />
        ) : (
          <div
            className="img-div"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {" "}
            <img
              style={{ justifySelf: "center", width: "50%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
              alt="loading gif"
            />
          </div>
        )}
      </section>
    </main>
  );
};
