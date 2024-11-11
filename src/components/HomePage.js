import React from 'react'
import './HomePageCode.css';
function HomePageCode() {
  return (
    <div className="hero-page">
      {/* Header Section */}
      <header className="hero-header">
        <h1>GDG Website </h1>
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

export default HomePageCode