import Sidebar from "./Sidebar";

import thumb1 from "../images/recipeThumb-01.jpg";
import thumb2 from "../images/recipeThumb-02.jpg";

function MyOrder() {
  return (
    <div class='container'>
      <div class='twelve columns '>
        {/*  Headline */}
        <h3 class='headline'>Latest Recipes</h3>
        <span class='line rb margin-bottom-35'></span>
        <div class='clearfix'></div>

        {/*  Isotope */}
        <div class='list-style'>
          {/*  Recipe #1 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/about'>
                <img src={thumb1} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/about'>Mexican Grilled Corn Recipe</a>
              </h3>

              <p>
                Maecenas in massa eget urna ullamcorper pharetra. Curabitur
                laoreet scelerisque bibendum. Aenean ullamcorper neque ac
                tristique semper. Phasellus enim mauris, mollis vulputate
                blandit in, ornare sed leo.
              </p>

              <div class='meta-alignment'>
                <div class='recipe-meta'>
                  <i class='fa fa-clock-o'></i> PROCESSED
                </div>
              </div>

              <div class='clearfix'></div>
            </div>
          </div>

          {/*  Recipe #2 */}
          <div class='four recipe-box columns'>
            {/*  Thumbnail */}
            <div class='thumbnail-holder'>
              <a href='/about'>
                <img src={thumb2} alt='' />
                <div class='hover-cover'></div>
                <div class='hover-icon'>View Recipe</div>
              </a>
            </div>

            {/*  Content */}
            <div class='recipe-box-content'>
              <h3>
                <a href='/about'>Choclate Cake With Green Tea Cream</a>
              </h3>

              <p>
                Maecenas in massa eget urna ullamcorper pharetra. Curabitur
                laoreet scelerisque bibendum. Aenean ullamcorper neque ac
                tristique semper. Phasellus enim mauris, mollis vulputate
                blandit in, ornare sed leo.
              </p>

              <div class='meta-alignment'>
                <div class='recipe-meta'>
                  <i class='fa fa-check-circle'></i> COMPLETE
                </div>
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
      <Sidebar></Sidebar>
    </div>
  );
}
export default MyOrder;
