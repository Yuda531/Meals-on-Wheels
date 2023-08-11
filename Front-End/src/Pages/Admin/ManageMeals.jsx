import MealsManage from "../../components/Admin/MealsManage";
import React, { useEffect, useState } from "react";
import NotAuthorized from "../401NotAuthorized";


const ManageMeals = () => {
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
            <MealsManage />
            )}
            {User && User.roleId.roleName !== "ADMIN" && (
            <NotAuthorized />
            )}
        </div>
     );
}
 
export default ManageMeals;