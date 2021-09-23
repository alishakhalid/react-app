import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/homepage.css";

export default function Homepage() {
  return (
    <div>
      <h1>Anu used this proj...</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/e4/4f/38/e44f3858bbcfe009df4c7fbad1f68edc.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
