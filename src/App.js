import React from 'react';
import './App.css';
import { Home } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';  // Import the NavBar
import About from './components/About'; // Import About component

function App() {
  return (
    <Router>
      <NavBar /> {/* Use NavBar component here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes here */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
