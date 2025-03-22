import React from "react";
import './Collab.css';
import BannerImage from '../../assets/collab_banner.jpg'

function Collab(){
    return(
        <div>
            <div className="header">
                <img src={BannerImage} className="gdg-banner" alt="Banner" />

                
                <h1 style = {{color: '#333', marginBottom: '0px'}}>Fall 2025 Applications</h1>
                <p style = {{color: '#555', font: '10px', marginTop: '0px'}}>Applications close on [date]</p>
                <div className='button collab_application'>Collab Application</div>

                <div className='about-card'>
                    <h2 style={{ fontSize: '30px' }}>
                        <span style={{ color: '#333' }}>About</span> 
                        <span style={{ color: '#faab00' }}> Col(l)ab</span>
                    </h2>
                    <p style = {{color: "black", fontSize: '17px'}}> 
                        Col(l)ab is an intensive 8 week program where students gain hands-on technical 
                        skills and experience by working on real-world projects under mentorship
                        of the E-Board and established professionals within the tech industry. 
                        This program provides a space for participants to hone their technical skills, 
                        network with our community, and gain further insight into pursuing a career in tech. 
                        No experience is required, but passion and interest is!
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