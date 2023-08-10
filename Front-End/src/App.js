import "./App.css";
import "./CSS/style.css";
import "./CSS/base.css";

import "./CSS/colors/green.css";

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
import MemberDashboard from "./Pages/MemberDashboard";
import MemberDetailMeals from "./component/MemberDetailMeals";

import NotFound from "./Pages/404NotFound";
import DashboardAdmin from "./Pages/Admin/DashboardAdmin";
import ManageMeals from "./Pages/Admin/ManageMeals";
import Donations from "./Pages/Admin/Donations";
import ManageMembers from "./Pages/Admin/ManageMembers";
import MangeOrders from "./Pages/Admin/ManageOrders";
import ManagePartner from "./Pages/Admin/ManageParners";
import ManageDriver from "./Pages/Admin/ManageDrivers";

import VolunteerSelection from "./Pages/VolunteerSelection";

import Partner from './Pages/Partner';
import ThankyouDonor from "./Pages/ThankyouDonor";
import TermsAndCondition from "./Pages/TermsAndConditions";
import PrivacyAndPolicy from "./Pages/PrivacyPolicy";
import UserProfile from "./Pages/UserProfile";
import HistoryOrder from "./Pages/HistoryOrder";
import OrderPage from "./Pages/OrderPage";



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
        <Route path="/thanksdonor" element={<ThankyouDonor />} /> 
        <Route path="/terms" element={<TermsAndCondition />} /> 
        <Route path="/privacy" element={<PrivacyAndPolicy />} /> 
        <Route path="/order" element={<OrderPage />} /> 
        <Route path='memberdashboard' element={<MemberDashboard />} />
        <Route path='/detail/:id' element={<MemberDetailMeals />} />
        <Route path='/myorder' element={<HistoryOrder />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path="/admin_dashboard" element={<DashboardAdmin />} />
        <Route path="/admin_meals" element={<ManageMeals />} />
        <Route path="/admin_donations" element={<Donations />} />
        <Route path="/admin_members" element={<ManageMembers />} />
        <Route path="/admin_orders" element={<MangeOrders />} />
        <Route path="/admin_drivers" element={<ManageDriver />} />
        <Route path="/admin_partners" element={<ManagePartner />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Partner" element={<Partner />} />
        <Route path="/volunteerSelection" element={<VolunteerSelection />} /> 
        <Route path='/donor' element={<Donor />} />
      </Routes>
    </Router>

    <Footer /> 
    
    </>
   
  );
}

export default App;
