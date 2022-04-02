import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/br-logo.png';
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
    return (
        <nav className="nav-bar">
            <div className="title-div">
                <h4 className="title">Breaking Bad</h4>
            </div>
            <div className="links">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/characters">Characters</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;
