import React, { useState, useEffect } from "react";
import axios from "axios";
import author from "../images/author-photo.png";
import thumb5 from "../images/recipeThumb-05.jpg";
import thumb9 from "../images/recipeThumb-09.jpg";
import pp from '../img/user.png';


function Sidebar() {
  const [meals, setMeals] = useState([]);

  let userSession = sessionStorage.getItem("user");
  userSession = JSON.parse(userSession);

  useEffect(() => {
    fetchMealsData();
  }, []);

  const fetchMealsData = async () => {
    try {
      const token = localStorage.getItem("token"); // Retrieve the token from storage

      const response = await axios.get("http://localhost:8080/meals/all-meals", {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request headers
        },
      });

      setMeals(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="four columns">

      {/* Author Box */}
      <div className="widget mt-4">
        <a href="/profile">
          <div className="author-box row">
            <div className="col-8">
              <span className="title">Profile</span>
              <span className="name">
              {userSession.name}
              </span>
              <span className="contact">
                <a href="mailto:sasha@gmail.com">{userSession.email}</a>
              </span>
            </div>
            <div className="col-4">
              <img src={pp} alt="" />
            </div>
          </div>
        </a>
      </div>

      {/* Status Order */}
      <div className="widget">
        <h4 className="headline">Orders</h4>
        <span className="line margin-bottom-20"></span>
        <div className="clearfix"></div>

        <ul className="categories mb-2">
          <li>
            <a href="/MyOrder">Make Order</a>
          </li>
        </ul>

        <ul className="categories">
          <li>
            <a href="/MyOrder">My Orders</a>
          </li>
        </ul>
      </div>

      
    </div>
  );
}

export default Sidebar;
