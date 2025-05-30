import React from 'react';
import './HomePage.css';
import GdgVideo from '../../assets/GDG23_Intro_05.mp4'

function HomePage() {
  return (
    <div className="hero-page">
    {/* Hero Section */}
    <section className="hero-header">
        <div className="video-container">
            <div className="video">
            <video src={GdgVideo} className="gdg-video" autoPlay muted loop></video>
            </div>
            <div className="hero-content">
                <h1>Welcome to Google Developers Group @ NYU</h1>
                <p>Connecting developers, designers, and tech enthusiasts at NYU to grow, learn, and innovate together.</p>
                <div className="hero-buttons">
                    <button className="hero-button">
                        <a href="/about">Learn More</a>
                    </button>
                    <button className="hero-button">
                        <a href="/events">Our Events</a>
                    </button>
                    <button className="hero-button">
                        <a href="/contact">Join Us</a>
                    </button>
                </div>
            </div>
        </div>
    </section>
</div>

  );
}

export default HomePage;