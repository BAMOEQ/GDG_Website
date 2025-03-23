import React from "react";
import './Collab.css';
import BannerImage from '../../assets/collab_banner.jpg'

function Collab(){
    return(
        <div>
            <div className="header">
                <img src={BannerImage} className="gdg-banner" alt="Banner" />

                
                <h1 style = {{color: '#333', marginBottom: '0px'}}>Fall 2025 Applications</h1>
                <p style = {{color: '#555', font: '10px', marginTop: '5px'}}>Applications close [date]</p>
                    <a href="https://forms.gle/Yz2Eh9UidniU8kFk7" class ="button collab_application" > Apply To Collab</a>
                

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

            </div>

            <div className="projects">
                <h1 style={{color: '#333',fontSize: '30px'}}> Our Projects</h1>
            </div>
        </div>
    );
}

export default Collab;