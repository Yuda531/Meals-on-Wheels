import "./App.css";
import "./CSS/style.css";
import "./CSS/base.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HeroMember from "./component/HeroMember";
import MemberDashboard from "./pages/MemberDashboard";
import MemberDetailMeals from "./component/MemberDetailMeals";
import Footer from "./component/Footer";
import MyOrder from "./component/MyOrder";
import Profile from "./component/Profile";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<MemberDashboard />} />
        <Route path='/detail' element={<MemberDetailMeals />} />
        <Route path='/myorder' element={<MyOrder />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
