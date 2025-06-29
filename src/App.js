import React from 'react';
import './App.css';
import { Home } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';  // Import the NavBar
import About from './pages/About'; // Import About component

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
