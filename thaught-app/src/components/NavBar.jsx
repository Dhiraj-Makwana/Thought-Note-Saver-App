import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return(
        <div className="container">
            <NavLink
            to="/" >
                Home
            </NavLink>
            <NavLink
            to="/thought" >
                Thoughts
            </NavLink>
        </div>
    )
}

export default NavBar;