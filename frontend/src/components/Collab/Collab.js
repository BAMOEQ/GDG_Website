import React from "react";
import './Collab.css';
import BannerImage from '../../assets/collab_banner.jpg'

function Collab(){
    return(
        <div>
            <div className="header">
                <img src={BannerImage} className="gdg-banner" alt="Banner" />
                <header className="header-container">
                    <h1 className="gdg-title">Check out our projects!</h1>
                </header>
            </div>
        </div>
    );
}

export default Collab;