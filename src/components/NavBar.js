// imports: 

import React from "react"; // import react
import './Navbar.css'; // import styling

// Navbar function
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo"> {/* add homepage destination. */}
                    <img src="/" alt="GDG Logo (delete after adding location)." classname = "logo-image" />
                </a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/">About Us</a>{/* add "About Us" page destination. */}
                    </li>
                    <li>
                        <a href="/">Events</a>{/* add "Events" page destination. */}
                    </li>
                    <li>
                        <a href="/">Projects</a>{/* add "Projects" page destination. */}
                    </li>
                    <li>
                        <a href="/">Contact</a>{/* add "Contact" destination. */}
                    </li>
                    {/* Think of more NavBar pages to include.*/}
                </ul>
            </div>
        </nav>
    )
}

// export
export default Navbar;