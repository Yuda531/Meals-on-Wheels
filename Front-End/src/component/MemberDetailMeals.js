import recipe1 from "../images/recipePhoto-01.jpg";
import thumb1 from "../images/recipeThumb-01.jpg";
import thumb2 from "../images/recipeThumb-02.jpg";
import thumb3 from "../images/recipeThumb-03.jpg";
import author from "../images/author-photo.png";
import recipebg from "../images/recipeBackground.jpg";
import Sidebar from "./Sidebar";
import StickyHeader from "../components/Navbar";

import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function MemberDetailMeals() {
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    // Mengambil ID makanan dari URL
    const mealsId = window.location.pathname.split('/').pop();
  
    // Membuat API call untuk mengambil data makanan berdasarkan ID
    axios
      .get(`http://localhost:8080/admin/${mealsId}`)
      .then((response) => {
        setMeal(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(meal && meal.meals_name);

  return (
    <div>
      <StickyHeader/>
      <div class='recipeBackground'>
        <img src={recipebg} alt='' />
      </div>
      <div class='container acumalaka' itemscope itemtype='http://schema.org/Recipe'>
        {/*  Recipe */}
        <div class='twelve columns'>
          <div class='alignment'>
            {/*  Header */}
            <section class='recipe-header'>
              <div class='title-alignment'>
                <h2>{meal && meal.meals_name}</h2>
              </div>
            </section>

            {/*  Slider */}
            <div class='recipeSlider rsDefault'>
              <img itemprop='image' style={{height: '300px'}} class='rsImg' src={recipe1} alt='' />
              <img
                itemprop='image'
                class='rsImg'
                src='images/recipePhoto-02.jpg'
                alt=''
              />
            </div>

            {/*  Details */}
            <section class='recipe-details' itemprop='nutrition'>
              <ul>
                <li>
                  Status: <strong itemprop='recipeYield'>Available</strong>
                </li>
                <li>
                  Calories: <strong itemprop='calories'>632 kcal</strong>
                </li>
              </ul>
              <a href='#' class='print'>
                <i class='fa fa-cutlery'></i> Order
              </a>
              <div class='clearfix'></div>
            </section>

            {/*  Text */}
            <div className="my-3">
              <h3 className="fw-bold">Description</h3>
              <h4>
              {meal && meal.meals_description}
              </h4>
            </div>


          </div>
        </div>

        {/*  Sidebar
================================================== */}
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}
export default MemberDetailMeals;
