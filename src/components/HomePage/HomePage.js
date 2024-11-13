import React from 'react';
import './HomePage.css';
import GdgVideo from '../../assets/GDG23_Intro_05.mp4'

function HomePage() {
  return (
    <div className="hero-page">
    {/* Header Section */}
    <header className="hero-header">
        <h1>Google Developers Group @ NYU </h1>
        <video src={GdgVideo} alt="GDG Vid" className="gdg-video" autoPlay="true" muted="true"/>
        <p></p>
    </header>

    {/* Button Section */}
      <div className="hero-buttons">
        <button className="hero-button">Learn More</button>
        <button className="hero-button">Our Events</button>
        <button className="hero-button">Join Us</button>
      </div>
    </div>
  );
}

export default HomePage;