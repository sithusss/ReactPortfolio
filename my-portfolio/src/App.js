import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './pages/Login';
import './styles/Navbar.css';

const App = () => {
  return (
    <div>
      <Router>
        
          <Nav />
          <Routes>
            
            <Route path="/login" element={<Login />} />
          </Routes>
        
      </Router>
    </div>
  );
};

export default App;