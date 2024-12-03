import './Events.css';
import React from 'react';
import BannerImage from '../../assets/gdg_banner_red.jpg'

function Events() {
  return (
    <div 
    className="header" 
    >
      <img src={BannerImage} className="gdg-banner"></img>
      <header className="headerContainer">
        
        <p>
          Check out our events!
        </p>
      </header>
    </div>
  );
}

export default Events;
