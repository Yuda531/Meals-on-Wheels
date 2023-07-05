import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './pages/Landing';
import Footer from './components/footer';
import RegisOrLoginPage from './pages/RegisOrLoginPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Dashboard from './pages/Dashboard';
import RegisSuccess from './pages/RegisSuccess';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/getStarted" element={<RegisOrLoginPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/login" element={<RegisSuccess />} /> 


      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
