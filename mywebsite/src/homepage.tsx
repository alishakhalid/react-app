import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/homepage.css";

export default function Homepage() {
  return (
    <div>
      <h1>Anu used this proj...</h1>
      <Card>
        <Card.Img
          className="card-img-top"
          src="https://i.pinimg.com/originals/39/a5/86/39a586df6f64c9c87098c3108e134eba.jpg"
        />
        <Card.Body>
          <Card.Title>Donuts</Card.Title>
          <Card.Text>Delicious Donuts mady by ANUUU!</Card.Text>
          <Button variant="primary">Surprise</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
