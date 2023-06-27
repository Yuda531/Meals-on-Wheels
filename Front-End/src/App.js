import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
import "./css/colors/green.css";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404NotFound";
import DashboardAdmin from "./pages/DashboardAdmin";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
