import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <nav className="nav-bar">
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/">Characters</Link>
                <Link to="/">About</Link>
            </div>
        </nav>
    );
};

export default Header;
