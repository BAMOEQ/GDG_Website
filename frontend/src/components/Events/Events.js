import './Events.css';
import React, { useEffect, useState } from 'react';

function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => { 
    fetch('http://127.0.0.1:5000/api/events')
    .then(response => {
      if(response.ok) {
        return response.json();
      }
      else {
        console.log("Error fetching data about events");
      }

    })
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
