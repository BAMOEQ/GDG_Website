import React from "react"; // import react
import './OurTeam.css'; // import styling
import backcard from '../../assets/back_card.png';
import headshot from '../../assets/head_shot.png';

// TODO: Consider making name, title, and image later the dynamic part later
const OurTeam = () => {
    return (
        <div className="ourteam-container">
            <div className="greet">
                <h2>Meet the Team</h2>
            </div>
            <div className="card-container">
                <div className="card">
                    <img src={backcard} alt="Member's Card" className="backcard"/>
                    <img src={headshot} alt="Headshot" className="headshot"/>
                    <h3 className="member-name">Member's Name</h3>
                    <p className="member-title">{"GDG Member"}</p>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;