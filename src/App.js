import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import About from './components/About/About';
import Navbar from './components/NavBar/NavBar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
=======
import About from './components/About';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
//import Footer from './components/Footer';
>>>>>>> 96fd03e5183cf96c34f150eff145a8602122a50e
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
                      {/*<Route path="/contact" element={<Contact />} />*/}
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App;