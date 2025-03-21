import React from "react";
import './About.css';

function About() {
    
    return (
        <div className="about-container">

            <h1 style={{ color: '#4285f4' , fontSize: '50px'}}> GDG @ NYU</h1>

            <h2><em>A community for everyone and anyone passionate about tech </em></h2>
        
            <div className='about-card'>
            <p>
            We're a vibrant and innovative tech community, bringing together students from diverse backgrounds who share a 
            common passion for technology. Here, your enthusiasm for tech is at the forefront, and our commitment is unwavering 
            in nurturing your growth every step of the way. We wholeheartedly embrace the strength of diversity, innovation, 
            and collective collaboration, fostering a transformative environment that empowers each individual to make a 
            meaningful impact.
            </p>
            </div>
        </div>

    );

}

export default About;