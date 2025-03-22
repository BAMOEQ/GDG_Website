import React from "react";
import './Collab.css';
import BannerImage from '../../assets/collab_banner.jpg'

function Collab(){
    return(
        <div>
            <div className="header">
                <img src={BannerImage} className="gdg-banner" alt="Banner" />
            </div>
            
            <div className="about-container">
                <h1 style={{ fontSize: '30px' }}>
                    <span style={{ color: '#555' }}>About</span> 
                    <span style={{ color: '#faab00' }}> Col(l)ab</span>
                </h1>

            <div className='about-card'>
                <p>
                    Col(l)ab is an intensive 8 week program where students gain hands-on technical 
                    skills and experience by working on real-world projects under mentorship
                    of the E-Board and established professionals within the tech industry. 
                    This program provides a space for participants to hone their technical skills, 
                    network with our community, and gain further insight into pursuing a career in tech. 
                </p>
            </div>
            </div>
        </div>
    );
}

export default Collab;