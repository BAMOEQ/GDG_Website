import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About/About';
import Navbar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Events from './components/Events/Events';
import Contact from './components/Contact/Contact';
import OurTeam from './components/OurTeam/OurTeam';

import './App.css';

const App = () => {
  return (
      <Router>
          <div className="app">
              <Navbar />
              <div className="content">
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/events" element={<Events />} />                      
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/ourteam" element={<OurTeam />} />
                  </Routes>
              </div>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;