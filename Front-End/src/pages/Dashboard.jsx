import React, { useEffect, useState } from "react";
import StickyHeader from "../components/header";
import AdminDashboard from "../components/dashboard-admin";
import PartnerDashboard from "../components/dashboard-partner";
import CaregiverDashboard from "../components/dashboard-caregiver";
import MemberDashboard from "../components/dashboard-member";
import DonorDashboard from "../components/dashboard-donor";
import VolunteerDashboard from "../components/dashboard-volunteer";

function Dashboard() {
  const [userRoleId, setUserRoleId] = useState("");

  // const roleDashboard

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const user = sessionStorage.getItem("user");
        console.log("User object:", user); // Check the user object in the console
        if (user) {
          const { roleId } = JSON.parse(user).roleId; // Access roleId property from the nested object
          console.log("User roleId:", roleId); // Check the roleId in the console
          setUserRoleId(roleId);
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
      }
    };
  
    fetchUserRole();
  }, []);
  
  
  let DashboardComponent;

  // Determine the appropriate dashboard component based on the user's role
  switch (userRoleId) {
    case 1:
      DashboardComponent = AdminDashboard;
      break;
    case 4:
      DashboardComponent = PartnerDashboard;
      break;
    case 3:
      DashboardComponent = CaregiverDashboard;
      break;
    case 2:
      DashboardComponent = MemberDashboard;
      break;
    case 5:
      DashboardComponent = DonorDashboard;
      break;
    case 6:
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
