import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Character.css";

const Character = ({ character }) => {
    const navigate = useNavigate();
    const { name, img, portrayed, char_id } = character;
    return (
        <Col className="d-flex justify-content-center character">
            <Card style={{ width: "22rem" }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center fs-5">{name}</Card.Title>
                    <Card.Text className="mb-3 text-center">{portrayed}</Card.Text>
                    <Button onClick={() => navigate(`/character/${char_id}`)} className="details-btn">More Details</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Character;
