import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import "./Character.css";

const Character = ({ character }) => {
    console.log(character);
    const { name, img, portrayed } = character;
    return (
        <Col className="d-flex justify-content-center character">
            <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center fs-5">{name}</Card.Title>
                    <Card.Text className="mb-3 text-center">{portrayed}</Card.Text>
                    <Button className="details-btn">More Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Character;
