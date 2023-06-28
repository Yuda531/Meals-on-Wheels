import "./App.css";
import "./CSS/style.css";
import "./CSS/base.css";

import Navbar from "./component/Navbar";
import HeroMember from "./component/HeroMember";
import MemberDashboard from "./pages/MemberDashboard";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <MemberDashboard></MemberDashboard>
    </div>
  );
}

export default App;
