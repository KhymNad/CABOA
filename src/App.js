import React from 'react';
import './App.css';
import { Home, Resources, Events } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, NavBar } from './components';

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <NavBar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
