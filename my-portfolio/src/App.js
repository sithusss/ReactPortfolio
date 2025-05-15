import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login';
import Intro from './pages/Intro';
import Admin from './pages/Admin';
import Education from './pages/Education'; 
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import AdminProjecPanel from './components/AdminProjectPanel';

import './styles/Navbar.css';

const App = () => {
  return (
    <div>
      <Router>
        
          <Nav />
          <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Intro />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin-project-panel" element={<AdminProjecPanel />} />

          </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;