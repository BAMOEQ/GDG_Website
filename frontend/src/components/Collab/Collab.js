import React from "react";
import './Collab.css';
import BannerImage from '../../assets/collab_banner.png'

function Collab(){
    return(
        <div>
            <div className="header">
                <img src={BannerImage} className="gdg-banner" alt="Banner" />
            </div>
        </div>
    );
}

export default Collab;