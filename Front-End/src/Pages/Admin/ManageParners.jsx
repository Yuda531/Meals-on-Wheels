import PartnerManage from "../../components/Admin/PartnerManage";
import React, { useEffect, useState } from "react";
import NotAuthorized from "../401NotAuthorized";

const ManagePartner = () => {
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
            {User && User.roleId.roleName === "ADMIN" && (
            <PartnerManage />
            )}
            {User && User.roleId.roleName !== "ADMIN" && (
            <NotAuthorized />
            )}
        </div>
     );
}
 
export default ManagePartner;