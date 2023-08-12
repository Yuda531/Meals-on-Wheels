import axios from "axios";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

import thumb1 from "../images/recipeThumb-01.jpg";
import thumb2 from "../images/recipeThumb-02.jpg";
import thumb3 from "../images/recipeThumb-03.jpg";
import thumb4 from "../images/recipeThumb-04.jpg";
import thumb5 from "../images/recipeThumb-05.jpg";
import thumb6 from "../images/recipeThumb-06.jpg";
import thumb7 from "../images/recipeThumb-07.jpg";
import thumb8 from "../images/recipeThumb-08.jpg";
import thumb9 from "../images/recipeThumb-09.jpg";

function MemberContent() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // Make an API call to fetch the meals data from the backend
    axios
      .get("http://localhost:8080/admin/all-meals")
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const thumbImages = [
    thumb1,
    thumb2,
    thumb3,
    thumb4,
    thumb5,
    thumb6,
    thumb7,
    thumb8,
    thumb9
  ];

  return (
    <div className="container acumalaka" style={{ marginTop: "100px" }}>
      {/*  Masonry */}
      <div className="twelve columns">
        {/*  Headline */}
        <h3 className="headline">Meals Menu</h3>
        <span className="line rb margin-bottom-35"></span>
        <div className="clearfix"></div>

        {/*  Isotope */}
        <div className="isotope">
          {meals.map((meal, index) => (
            <div className="four recipe-box columns" key={meal.meals_id}>
              {/*  Thumbnail */}
              <div className="thumbnail-holder">
                <a href={`/detail/${meal.meals_id}`}>
                  <img src={thumbImages[index % thumbImages.length]} alt="" />
                  <div className="hover-cover"></div>
                  <div className="hover-icon">View Meals</div>
                </a>
              </div>

              {/*  Content */}
              <div className="recipe-box-content">
                <h3>
                <a href={`/detail/${meal.meals_id}`}>
                {meal.meals_name}</a>
                </h3>

                <div className="recipe-meta">
                  <i className="fa fa-check-circle"></i> Available
                </div>

                <div className="clearfix"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="clearfix"></div>
      </div>

      {/*  Sidebar
================================================== */}
      <Sidebar></Sidebar>
    </div>
  );
}

export default MemberContent;
