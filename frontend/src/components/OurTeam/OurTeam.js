import React from "react"; // import react
import './OurTeam.css'; // import styling
import back_card from '../../assets/back_card';
import headshot from '../../assests/head_shot';

// Consider making name, title, and image later the dynamic part later
const ourteam = () => {
    return (
        <div className="ourteam-container">
            <div classname="greet">
                <h2>Meet the Team</h2>
            </div>
            <div classname="card">
                <img src={back_card} alt="Member's Card" classname="backcard"/>
                <img src={headshot} alt="Headshot" className="headshot"/>
                <h3 className="member-name">Member's Name</h3>
                <p className="member-title">{"GDG Member"}</p>
            </div>
        </div>
    )
}

export default ourteam;