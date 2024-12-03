import './Events.css';
import React from 'react';
import BannerImage from '../../assets/gdg_banner_red.jpg'
import PhotoGrid from "./PhotoGrid";

function Events() {
  const eventFlyers = [
    { src: '../../images/flyer1.jpg', alt: 'Flyer 1' },
    { src: '../../images/flyer2.jpg', alt: 'Flyer 2' },
    { src: '../../images/flyer3.jpg', alt: 'Flyer 3' },
    { src: '../../images/flyer4.jpg', alt: 'Flyer 4' },
    {},
    { },
    {  },
    { },
    {  },
  ];

  return (
    <div>
      
      <div className="header">
       <img src={BannerImage} className="gdg-banner" alt="Banner" />
       <header className="header-container">
          <h1 className="gdg-title">Check out our events!</h1>
       </header>
     </div>



      <div className="photo-grid-section">
        
        <PhotoGrid photos={eventFlyers} />
      </div>
    </div>
  );
}

export default Events;
