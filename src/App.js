import React from 'react';
import './App.css';
import { Home, Resources, Events, Contact } from './pages';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, NavBar, ScrollToTop } from './components';

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <ScrollToTop />
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
