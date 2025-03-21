import React, {useEffect, useState} from "react"; // import react
import './OurTeam.css'; // import styling
import backcard from '../../assets/back_card.png';
import headshot from '../../assets/head_shot.png';
import axios from 'axios';

const OurTeam = () => {
    const [officers, setOfficers] = useState([]);

    useEffect (() => {
        axios.get ('http://127.0.0.1:5000/api/officers')
            .then(response => {
                setOfficers(response.data);
            })
            .catch(error => {
                console.error("Error fetching officers:", error);
            });
    }, []);

    return (
        <div className="ourteam-container">
            <div className="greet">
                <h2>Meet the Team</h2>
            </div>
            <div className="card-container">
            {officers.map((officer) => (
                    <div className="card" key = {officer.id}>
                        <img src={backcard} alt="Member's Card" className="backcard"/>
                        <img src={headshot} alt="Headshot" className="headshot"/>
                        <h3 className="member-name">{officer.name}</h3>
                        <p className="member-title">{officer.position}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurTeam;