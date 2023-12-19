import React from "react";
import { NavLink } from "react-router-dom";
import '../App.css';

function NavBar() {
    return (
        <div className="navbar">
            <NavLink to="/" >Home </NavLink>
            <NavLink to="/about" > About </NavLink>
            <NavLink to="/contact" > Contact </NavLink>
            <NavLink to="/blog" > Blog </NavLink>
        </div>
    );
}

export default NavBar; 

{/* <Link to="/" >Home </Link>
<Link to="/about" > About </Link>
<Link to="/contact" > Contact </Link>
<Link to="/blog" > Blog </Link> */}

{/* <Link to="/" >Home </Link>
<Link to="/about" > About </Link>
<Link to="/contact" > Contact </Link>
<Link to="/blog" > Blog </Link> */}