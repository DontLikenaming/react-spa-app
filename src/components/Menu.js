import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
    <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Events">Events</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Contect">Contect</Link>
    </nav>
    );
}

export default Menu;