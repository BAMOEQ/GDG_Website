import React, {useEffect, useState} from "react";
import './Collab.css';
import BannerImage from '../../assets/collab_banner.jpg'
import axios from 'axios';

const Collab = () =>{

    const [groupedCollab, setGroupedCollab] = useState({});
    
    useEffect (() => {
        axios.get ('http://127.0.0.1:5001/api/collab')
            .then(response => {
                const collab = response.data;
                const grouped = collab.reduce((acc, collab) => {
                    if (!acc[collab.year]) {
                        acc[collab.year] = [];
                    }
                    acc[collab.year].push(collab);
                    return acc;
                }, {});
                setGroupedCollab(grouped);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
            });
    }, []);
    
    return(
        <div>
            <div className="header">
                <img src={BannerImage} className="gdg-banner" alt="Banner" />

                
                <h1 style = {{color: '#333', marginBottom: '0px'}}>Fall 2025 Applications</h1>
                <p style = {{color: '#555', font: '10px', marginTop: '5px'}}>Applications close [date]</p>
                    <a href="https://forms.gle/Yz2Eh9UidniU8kFk7" className ="button collab_application" > <b>Apply to Collab</b></a>
                

                <div className='about-card'>

                    <h2 style={{ fontSize: '30px' }}>
                        <span style={{ color: '#333' }}>About</span> 
                        <span style={{ color: '#faab00' }}> Col(l)ab</span>
                    </h2>

                    <p style = {{color: "black", fontSize: '17px'}}> 
                        Col(l)ab is an intensive 8 week collaborative program where students gain hands-on technical 
                        skills and experience by working on real-world projects under mentorship
                        of our E-Board  and established professionals within the tech industry. 
                        Col(l)ab opens up a space for participants to experiment and create alongside their peers. 
                        Our program is an excellent opportunity for participants to hone in on their technical skills, 
                        network with our community, and gain further insight into pursuing a career in tech. 
                    </p>
                </div>
                <div className="projects-container">
                    <div className="project-header">
                        <h3>Check Out Our Projects!</h3>
                    </div>

                    {Object.keys(groupedCollab).map(year => (
                        <div key={year} className="project-section">
                            <h3 className="project-name">{year}</h3>
                            <div className="project-container">
                                {groupedCollab[year].map((collab) => (
                                    <div className="project-card" key={collab.id}>
                                        {console.log(collab)}
                                        <img
                                            src={collab.image ? collab.image : "/images/default.png"}
                                            alt={`${collab.name}'s Project`}
                                            className="headshot"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = "/images/default.png";
                                            }}
                                        />
                                        <h3 className="collab-name">{collab.name}</h3>
                                        <p className="collab-title">{collab.members}</p>
                                        <p className="collab-about">{collab.about || "No description available."}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Collab;