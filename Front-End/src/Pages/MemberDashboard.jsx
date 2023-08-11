import HeroMember from "../component/HeroMember";
import MemberContent from "../component/MemberContent";
import React, { useEffect, useState } from "react";
import NotFound from "./404NotFound";

function MemberDashboard(params) {
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
  return(
    <div>
    {User && User.roleId.roleName === "MEMBER" && (
    <MemberContent></MemberContent>
    )}
    {User && User.roleId.roleName !== "MEMBER" && (
    <NotFound />
    )}
    </div>
  ) 
}
export default MemberDashboard;
