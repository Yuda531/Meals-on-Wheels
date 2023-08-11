import OrderManage from "../../components/Admin/OrderManage";
import React, { useEffect, useState } from "react";
import NotAuthorized from "../401NotAuthorized";

const MangeOrders = () => {
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
            <OrderManage/>
            )}
            {User && User.roleId.roleName !== "ADMIN" && (
            <NotAuthorized />
            )}
        </div>
     );
}
 
export default MangeOrders;