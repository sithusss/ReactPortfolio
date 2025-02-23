import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Login from './pages/Login';
import Intro from './pages/Intro';
import './styles/Navbar.css';

const App = () => {
  return (
    <div>
      <Router>
        
          <Nav />
          <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Intro />} />

          </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;