import PartnerDash from '../components/PartnerDash';
import React, { useEffect, useState } from "react";
import NotFound from './404NotFound';

const Partner = () => {
  let User = sessionStorage.getItem("user");
  User = JSON.parse(User);

  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserEmail(parsedUser.name);
    }
  }, []);
  return (
    <div>
  {User && User.roleId.roleName === "MEMBER" && (
      <PartnerDash />
     )}
  {User && User.roleId.roleName !== "MEMBER" && (
     <NotFound />
  )}
    </div>



  );
}

export default Partner;