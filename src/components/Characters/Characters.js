import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Character from "../Character/Character";
import Loading from "../Loading/Loading";
import "./Characters.css";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch("https://breakingbadapi.com/api/characters")
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.slice(0, 20))
                setLoading(false)
            });
    }, []);

    return (
        <>
            {loading ? <Loading></Loading> : <Container fluid>
            <Row sm="1" md="2" lg="3" className="characters-container g-4 mt-2">
                {characters.map((character) => (
                    <Character
                        key={character.char_id}
                        character={character}
                    ></Character>
                ))}
            </Row>
        </Container>}
        </>
    );
};

export default Characters;
