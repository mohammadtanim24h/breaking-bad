import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Character from "../Character/Character";
import "./Characters.css";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch("https://breakingbadapi.com/api/characters")
            .then((res) => res.json())
            .then((data) => setCharacters(data.slice(0, 20)));
    }, []);

    return (
        <Container fluid>
            <Row sm="1" md="2" lg="3" className="characters-container g-4 mt-2">
                {characters.map((character) => (
                    <Character
                        key={character.char_id}
                        character={character}
                    ></Character>
                ))}
            </Row>
        </Container>
    );
};

export default Characters;
