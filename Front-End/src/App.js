import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/style.css";
import "./css/colors/green.css";
import Navbar from "./components/Navbar";
import NotFound from "./pages/404NotFound";
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import ManageMeals from "./pages/Admin/ManageMeals";
import Donations from "./pages/Admin/Donations";
import ManageMembers from "./pages/Admin/ManageMembers";
import MangeOrders from "./pages/Admin/ManageOrders";
import ManagePartner from "./pages/Admin/ManageParners";
import ManageDriver from "./pages/Admin/ManageDrivers";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin_meals" element={<ManageMeals />} />
          <Route path="/admin_donations" element={<Donations />} />
          <Route path="/admin_members" element={<ManageMembers />} />
          <Route path="/admin_orders" element={<MangeOrders />} />
          <Route path="/admin_drivers" element={<ManageDriver />} />
          <Route path="/admin_partners" element={<ManagePartner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
