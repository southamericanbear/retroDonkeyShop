import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Carrousel = () => {
  return (
    <Carousel style={{ width: "100%" }}>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://via.placeholder.com/610x300"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://via.placeholder.com/610x300"
          alt=""
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100%" }}
          src="https://via.placeholder.com/610x300"
          alt=""
        />
      </Carousel.Item>
    </Carousel>
  );
};
