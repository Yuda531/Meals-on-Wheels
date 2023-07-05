import "./App.css";
import "./CSS/style.css";
import "./CSS/base.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/footer'
import Donor from './Pages/Donor';
import RegisOrLoginPage from './Pages/RegisOrLoginPage';
import AboutUs from './Pages/AboutUs';
import ContactUs from './Pages/ContactUs';
import Dashboard from './Pages/Dashboard';
import RegisSuccess from './Pages/RegisSuccess';
import LandingPage from './Pages/Landing';
import header from './components/header'
import MyOrder from "./component/MyOrder";
import MemberDashboard from "./Pages/MemberDashboard";
import MemberDetailMeals from "./component/MemberDetailMeals";

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
        <Route path='memberdashboard' element={<MemberDashboard />} />
        <Route path='/detail' element={<MemberDetailMeals />} />
        <Route path='/myorder' element={<MyOrder />} />
      <Route path='/donor' element={<Donor />} />
      </Routes>
    </Router>

    <Footer /> 
    
    </>
   
  );
}

export default App;
