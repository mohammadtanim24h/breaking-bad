import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./CharacterDetails.css";

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`https://breakingbadapi.com/api/characters/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCharacter(data[0]);
                setLoading(false);
            });
    }, [id]);
    console.log(character);
    return (
        <>
            {loading ? (
                <Loading></Loading>
            ) : (
                <div>
                    <Link to="/characters">
                        <button className="btn btn-success rounded-0">
                            Return to Characters
                        </button>
                    </Link>
                    <div className="mx-auto w-50">
                        <div className="d-flex justify-content-center">
                            <img
                                className="img-fluid w-50"
                                src={character.img}
                                alt={character.name}
                            />
                        </div>
                        <div className="text-center my-2">
                            <h3>{character.name}</h3>
                            <h4>Portrayed By {character.portrayed}</h4>
                            <h5>Category: {character.category}</h5>
                            <h6>Status: {character.status}</h6>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CharacterDetails;
