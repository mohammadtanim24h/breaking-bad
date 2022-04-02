import React from "react";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
    return (
        <nav className="nav-bar">
            <div className="title-div">
                <h4 className="title">Breaking Bad</h4>
            </div>
            <div className="links">
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/characters">Characters</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;
