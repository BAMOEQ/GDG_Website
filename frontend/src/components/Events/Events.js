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
