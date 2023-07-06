import React, { useEffect, useState } from "react";
import StickyHeader from "../components/header";
import AdminDashboard from "../components/dashboard-admin";
import PartnerDashboard from "../components/dashboard-partner";
import CaregiverDashboard from "../components/dashboard-caregiver";
import MemberDashboard from "../components/dashboard-member";
import DonorDashboard from "../components/dashboard-donor";
import VolunteerDashboard from "../components/dashboard-volunteer";

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
      DashboardComponent = AdminDashboard;
      break;
    case "PARTNER":
      DashboardComponent = PartnerDashboard;
      break;
    case "CAREGIVER":
      DashboardComponent = CaregiverDashboard;
      break;
    case "MEMBER":
      DashboardComponent = MemberDashboard;
      break;
    case "DONOR":
      DashboardComponent = DonorDashboard;
      break;
    case "VOLUNTEER":
      DashboardComponent = VolunteerDashboard;
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
