// imports:

import React from "react"; // import react
import './NavBar.css'; // import styling
import logoImage from '../../assets/gdg_logo.png';

// Navbar function
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    <img src={logoImage} alt="GDG Logo" classname = "logo-image" />
                </a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/ourteam">Our Team</a>
                    </li>
                    <li>
                        <a href="/events">Events</a>
                    </li>
                    {/*<li>
                        <a href="/projects">Projects</a>
                    </li> */}
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;