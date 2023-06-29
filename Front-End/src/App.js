import "./App.css";
import "./CSS/style.css";
import "./CSS/base.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import HeroMember from "./component/HeroMember";
import MemberDashboard from "./pages/MemberDashboard";
import MemberDetailMeals from "./component/MemberDetailMeals";
import Footer from "./component/Footer";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<MemberDashboard />} />
        <Route path='/detail' element={<MemberDetailMeals />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
