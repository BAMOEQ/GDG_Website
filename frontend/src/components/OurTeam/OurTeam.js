import React from "react"; // import react
import './OurTeam.css'; // import styling
//import back_card from '../../assets/back_card';

// ourteam function with dynamic name, title, and image
// deal with the dynamic part later
const ourteam = (name, title, image) => {
    return (
        <nav className="ourteam">
            <div className="card">
                {/*Should it be an individual page or inside about us */}
                <a href="/ourteam" className="logo">
                    <img src={image} alt={`${name}'s Card`} />
                        <h3>{name}</h3>
                    <p>{title}</p>
                </a>
            </div>
        </nav>
    )
}

// export: needed if individual page
export default NavBar;