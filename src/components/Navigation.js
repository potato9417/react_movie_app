import React from "react";
import {Link} from "react-router-dom";
import "./Navigation.css"

function Navigation(){
    return <div className="naviContainer">
        <h1 id="logo">Ranked Moives</h1>
        <Link to="/" className="link home">Home</Link>
        <Link to="/about" className="link about">About</Link>
    </div>
}

export default Navigation;