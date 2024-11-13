// imports:

import React from "react"; // import react
import './NavBar.css'; // import styling
import logoImage from '../../assets/gdg_logo.png';

// Navbar function
const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo"> {/* add homepage destination. */}
                    <img src={logoImage} alt="GDG Logo" classname = "logo-image" />
                </a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/contact">Our Team</a>{/* add "Contact" destination. */}
                    </li>
                    <li>
                        <a href="/events">Events</a>{/* add "Events" page destination. */}
                    </li>
                    <li>
                        <a href="/projects">Projects</a>{/* add "Projects" page destination. */}
                    </li>
                    <li>
                        <a href="/contact">Contact</a>{/* add "Contact" destination. */}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

// export
export default NavBar;