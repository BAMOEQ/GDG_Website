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

// TODO: Update the Events file to be dynamic
{/*
  import './Events.css';
  import React, { useEffect, useState } from 'react';
  
  function Events() {
    // using the useState hook to store the events data
    const [events, setEvents] = useState([]);
    // in the useEffect hook, we fetch the data from the backend
    useEffect(() => { 
      fetch('http://127.0.0.1:5000/api/events')
      // check if the response we received from the server is ok
      .then(response => {
        // if it is, send it to the next function in a json format
        if(response.ok) {
          return response.json();
        }
        else {
          console.log("Error fetching data about events");
        }
  
      })
      // then, set the events array to the data we received from the server
      .then(data => {
        setEvents(data);
      })
      .catch(error => {
        console.log(error);
    });
  }, []);
    return (
      <div>
        <header>
          <h1>Events</h1>
          <ul>
            {events.map((event) => {
              return (
                <li key={event.id}> 
                  <h2>{event.title}</h2>
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </li>
              )
            })}
          </ul>
            
          
        </header>
      </div>
    );
  }
  
  export default Events;
  */}