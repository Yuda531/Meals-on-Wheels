import React, { useEffect, useState } from "react";
import StickyHeader from "../components/header";
import DashboardAdmin from "./Admin/DashboardAdmin";
import Partner from "./Partner";
import MemberDashboard from "./MemberDashboard";
import Donor from "./Donor";


function Dashboard() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const { role } = JSON.parse(user);
      setUserRole(role);
    }
  }, []);

  let DashboardComponent;

  // Determine the appropriate dashboard component based on the user's role
  switch (userRole) {
    case "ADMIN":
      DashboardComponent = DashboardAdmin;
      break;
    case "PARTNER":
      DashboardComponent = Partner;
      break;
    case "CAREGIVER":
    //   DashboardComponent = CaregiverDashboard;
      break;
    case "MEMBER":
      DashboardComponent = MemberDashboard;
      break;
    case "DONOR":
      DashboardComponent = Donor;
      break;
    case "VOLUNTEER":
    //   DashboardComponent = VolunteerDashboard;
      break;
    default:
      DashboardComponent = null;
  }

  return (
    <>
      <StickyHeader activePage="dashboard" />
      {DashboardComponent && <DashboardComponent />}
    </>
  );
}

export default Dashboard;
