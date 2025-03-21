import React, {useEffect, useState} from "react"; // import react
import './OurTeam.css'; // import styling
import backcard from '../../assets/back_card.png';
import headshot from '../../assets/head_shot.png';
import axios from 'axios';

const OurTeam = () => {
    const [groupedOfficers, setGroupedOfficers] = useState({});

    useEffect (() => {
        axios.get ('http://127.0.0.1:5000/api/officers')
            .then(response => {
                const officers = response.data;
                const grouped = officers.reduce((acc, officer) => {
                    if (!acc[officer.team]) {
                        acc[officer.team] = [];
                    }
                    acc[officer.team].push(officer);
                    return acc;
                }, {});
                setGroupedOfficers(grouped);
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

            {Object.keys(groupedOfficers).map(team => (
                <div key = {team} className = "team-section">
                    <h3 className = "team-name">{team}</h3>
                    <div className="card-container">
                        {groupedOfficers[team].map((officer) => (
                            <div className="card" key = {officer.id}>
                                <img src={backcard} alt="Member's Card" className="backcard"/>
                                <img 
                                    src={officer.image ? officer.image : "/images/default.png"} 
                                    alt={`${officer.name}'s Headshot`} 
                                    className="headshot"
                                    onError={(e) => { 
                                        e.target.onerror = null; 
                                        e.target.src = "/images/default.png";
                                    }} 
                                />
                                <h3 className="member-name">{officer.name}</h3>
                                <p className="member-title">{officer.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default OurTeam;