import React, { useEffect, useState } from 'react';
import NavbarAdmin from './NavbarAdmin';
import StickyHeader from './Navbar'


const Header  = () => {

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

  let NavbarComponent;

  // Determine the appropriate navbar component based on the user's role
  switch (userRoleId) {
    case 1:
      NavbarComponent = NavbarAdmin;
      break;
    default:
      NavbarComponent = StickyHeader;
  }

  return (
    <>
      {NavbarComponent && <NavbarComponent />}
    </>
  );
};

export default Header;
