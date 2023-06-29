import thumb1 from "../images/recipeThumb-01.jpg";
import thumb2 from "../images/recipeThumb-02.jpg";
import thumb3 from "../images/recipeThumb-03.jpg";
import thumb4 from "../images/recipeThumb-04.jpg";
import thumb5 from "../images/recipeThumb-05.jpg";
import thumb6 from "../images/recipeThumb-06.jpg";
import thumb7 from "../images/recipeThumb-07.jpg";
import thumb8 from "../images/recipeThumb-08.jpg";
import thumb9 from "../images/recipeThumb-09.jpg";
import author from "../images/author-photo.png";

import React from "react";
import { NavLink } from "react-router-dom";

function MemberContent() {
  return (
    <div class='container'>
      {/*  Masonry */}
      <div class='twelve columns'>
        {/*  Headline */}
        <h3 class='headline'>Meals Menu</h3>
        <span class='line rb margin-bottom-35'></span>
        <div class='clearfix'></div>

        {/*  Isotope */}
        <div class='isotope'>
          {/*  Recipe #1 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/detail'>
                <img src={thumb1} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/detail'>
                  Mexican Grilled <br /> Corn Recipe
                </a>
              </h3>

              <div class='recipe-meta'>
                <i class='fa fa-check-circle'></i> Available
              </div>

              <div class='clearfix'></div>
            </div>
          </div>

          {/*  Recipe #2 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/detail'>
                <img src={thumb2} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/detail'>Choclate Cake With Green Tea Cream</a>
              </h3>

              <div class='recipe-meta'>
                <i class='fa fa-check-circle'></i> Available
              </div>

              <div class='clearfix'></div>
            </div>
          </div>

          {/*  Recipe #3 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/detail'>
                <img src={thumb3} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/detail'>Thai Yellow Curry Chicken</a>
              </h3>

              <div class='recipe-meta'>
                <i class='fa fa-check-circle'></i> Available
              </div>

              <div class='clearfix'></div>
            </div>
          </div>

          {/*  Recipe #4 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/detail'>
                <img src={thumb4} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/detail'>Avocado Melon Salad With Lime Vinaigrette</a>
              </h3>

              <div class='recipe-meta'>
                <i class='fa fa-check-circle'></i> Available
              </div>

              <div class='clearfix'></div>
            </div>
          </div>

          {/*  Recipe #5 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/detail'>
                <img src={thumb5} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/detail'>Pollo Borracho With Homemade Tortillas</a>
              </h3>

              <div class='recipe-meta'>
                <i class='fa fa-check-circle'></i> Available
              </div>

              <div class='clearfix'></div>
            </div>
          </div>

          {/*  Recipe #6 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/detail'>
                <img src={thumb6} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/detail'>Sweet Chilli and Lime Chicken Wings</a>
              </h3>

              <div class='recipe-meta'>
                <i class='fa fa-check-circle'></i> Available
              </div>

              <div class='clearfix'></div>
            </div>
          </div>

          {/*  Recipe #7 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/detail'>
                <img src={thumb7} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/detail'>Roast Chicken With Lemon Gravy</a>
              </h3>

              <div class='recipe-meta'>
                <i class='fa fa-check-circle'></i> Available
              </div>

              <div class='clearfix'></div>
            </div>
          </div>

          {/*  Recipe #8 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/detail'>
                <img src={thumb8} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/detail'>Farmhouse Vegetable And Barley Soup</a>
              </h3>

              <div class='recipe-meta'>
                <i class='fa fa-check-circle'></i> Available
              </div>

              <div class='clearfix'></div>
            </div>
          </div>

          {/*  Recipe #9 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/detail'>
                <img src={thumb9} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/detail'>Chunky Beef Stew</a>
              </h3>

              <div class='recipe-meta'>
                <i class='fa fa-check-circle'></i> Available
              </div>

              <div class='clearfix'></div>
            </div>
          </div>
        </div>
        <div class='clearfix'></div>

        {/*  Pagination */}
        <div class='pagination-container masonry'>
          <nav class='pagination'>
            <ul>
              <li>
                <a href='#' class='current-page'>
                  1
                </a>
              </li>
              <li>
                <a href='#'>2</a>
              </li>
              <li>
                <a href='#'>3</a>
              </li>
            </ul>
          </nav>

          <nav class='pagination-next-prev'>
            <ul>
              <li>
                <a href='#' class='prev'></a>
              </li>
              <li>
                <a href='#' class='next'></a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/*  Sidebar
================================================== */}
      <div class='four columns'>
        {/*  Search Form */}
        <div class='widget search-form'>
          <nav class='search'>
            <form action='#' method='get'>
              <button>
                <i class='fa fa-search'></i>
              </button>
              <input
                class='search-field'
                type='text'
                placeholder='Search for meals'
                value=''
              />
            </form>
          </nav>
          <div class='clearfix'></div>
        </div>

        {/*  Author Box */}
        <div class='widget'>
          <div class='author-box'>
            <span class='title'>Profile</span>
            <span class='name'>
              Sandra <br /> Fortin
            </span>
            <span class='contact'>
              <a href='mailto:sandra@chow.com'>sandra@chow.com</a>
            </span>
            <img src={author} alt='' />
          </div>
        </div>

        {/*  Popular Recipes */}
        <div class='widget'>
          <h4 class='headline'>Popular Meals</h4>
          <span class='line margin-bottom-30'></span>
          <div class='clearfix'></div>

          {/*  Recipe #1 */}
          <a href='/detail' class='featured-recipe'>
            <img src={thumb5} alt='' />

            <div class='featured-recipe-content'>
              <h4>Choclate Cake With Green Tea Cream</h4>
            </div>
            <div class='post-icon'></div>
          </a>

          {/*  Recipe #2 */}
          <a href='/detail' class='featured-recipe'>
            <img src={thumb9} alt='' />

            <div class='featured-recipe-content'>
              <h4>Mexican Grilled Corn Recipe</h4>
            </div>
            <div class='post-icon'></div>
          </a>

          {/*  Recipe #3 */}
          <a href='/detail' class='featured-recipe'>
            <img src='images/featuredRecipe-03.jpg' alt='' />

            <div class='featured-recipe-content'>
              <h4>Pollo Borracho With Homemade Tortillas</h4>
            </div>
            <div class='post-icon'></div>
          </a>

          <div class='clearfix'></div>
        </div>
      </div>
    </div>
  );
}
export default MemberContent;
