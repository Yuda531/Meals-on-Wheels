import React, { useState, useEffect } from "react";
import axios from "axios";
import author from "../images/author-photo.png";
import thumb5 from "../images/recipeThumb-05.jpg";
import thumb9 from "../images/recipeThumb-09.jpg";

function Sidebar() {
  const [meals, setMeals] = useState([]);

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
      {/* Search Form */}
      <div className="widget search-form">
        <nav className="search">
          <form action="#" method="get">
            <button>
              <i className="fa fa-search"></i>
            </button>
            <input
              className="search-field"
              type="text"
              placeholder="Search for meals"
              value=""
            />
          </form>
        </nav>
        <div className="clearfix"></div>
      </div>

      {/* Author Box */}
      <div className="widget">
        <a href="/Dashboard">
          <div className="author-box">
            <span className="title">Profile</span>
            <span className="name">
              Sasha <br /> Maria
            </span>
            <span className="contact">
              <a href="mailto:sasha@gmail.com">sasha@gmail.com</a>
            </span>
            <img src={author} alt="" />
          </div>
        </a>
      </div>

      {/* Status Order */}
      <div className="widget">
        <h4 className="headline">Order Status</h4>
        <span className="line margin-bottom-20"></span>
        <div className="clearfix"></div>

        <ul className="categories">
          <li>
            <a href="/MyOrder">My Order</a>
          </li>
        </ul>
      </div>

      
    </div>
  );
}

export default Sidebar;
