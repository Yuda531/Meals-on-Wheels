import slide1 from "../images/sliderA_01.jpg";
function HeroMember() {
  return (
    <div id='homeSlider' class='royalSlider rsDefaultInv'>
      {/*  Slide #1 */}
      <div class='rsContent'>
        <a class='rsImg' href={slide1}></a>
        <i class='rsTmb'>
          Mexican Grilled <br /> Corn Recipe
        </i>

        {/*  Slide Caption */}
        <div class='SlideTitleContainer rsABlock'>
          <div class='CaptionAlignment'>
            <div class='rsSlideTitle tags'>
              <ul>
                <li>Baking</li>
              </ul>
              <div class='clearfix'></div>
            </div>

            <h2 class='rsSlideTitle title'>
              <a href='recipe-page-1.html'>Mexican Grilled Corn Recipe</a>
            </h2>

            <div class='rsSlideTitle details'>
              <ul>
                <li>
                  <i class='fa fa-cutlery'></i> 4 Servings
                </li>
                <li>
                  <i class='fa fa-clock-o'></i> 30 Min
                </li>
                <li>
                  <i class='fa fa-user'></i> by <a href='#'>Sandra Fortin</a>
                </li>
              </ul>
            </div>

            <a href='recipe-page-1.html' class='rsSlideTitle button'>
              View Recipe
            </a>
          </div>
        </div>
      </div>

      {/*  Slide #2 */}
      <div class='rsContent'>
        <a class='rsImg' href='images/sliderA_02.jpg'></a>
        <i class='rsTmb'>
          Roast Chicken <br />
          With Lemon Gravy
        </i>

        {/*  Slide Caption */}
        <div class='SlideTitleContainer rsABlock'>
          <div class='CaptionAlignment'>
            <div class='rsSlideTitle tags'>
              <ul>
                <li>Curry</li>
              </ul>
              <div class='clearfix'></div>
            </div>

            <h2 class='rsSlideTitle title'>
              <a href='recipe-page-1.html'>
                Roast Chicken <br />
                With Lemon Gravy
              </a>
            </h2>

            <div class='rsSlideTitle details'>
              <ul>
                <li>
                  <i class='fa fa-cutlery'></i> 4 Servings
                </li>
                <li>
                  <i class='fa fa-clock-o'></i> 1 Hr 20 Min
                </li>
                <li>
                  <i class='fa fa-user'></i> by <a href='#'>Sandra Fortin</a>
                </li>
              </ul>
            </div>

            <a href='recipe-page-1.html' class='rsSlideTitle button'>
              View Recipe
            </a>
          </div>
        </div>
      </div>

      {/*  Slide #3 */}
      <div class='rsContent'>
        <a class='rsImg' href='images/sliderA_03.jpg'></a>
        <i class='rsTmb'>
          Avocado Melon Salad <br /> With Lime Vinaigrette{" "}
        </i>

        {/*  Slide Caption */}
        <div class='SlideTitleContainer rsABlock'>
          <div class='CaptionAlignment'>
            <div class='rsSlideTitle tags'>
              <ul>
                <li>Salads</li>
              </ul>
              <div class='clearfix'></div>
            </div>

            <h2 class='rsSlideTitle title'>
              <a href='recipe-page-2.html'>
                Avocado Melon Salad With Lime Vinaigrette
              </a>
            </h2>

            <div class='rsSlideTitle details'>
              <ul>
                <li>
                  <i class='fa fa-cutlery'></i> 1 Servings
                </li>
                <li>
                  <i class='fa fa-clock-o'></i> 15 Min
                </li>
                <li>
                  <i class='fa fa-user'></i> by <a href='#'>Sandra Fortin</a>
                </li>
              </ul>
            </div>

            <a href='recipe-page-2.html' class='rsSlideTitle button'>
              View Recipe
            </a>
          </div>
        </div>
      </div>

      {/*  Slide #4 */}
      <div class='rsContent'>
        <a class='rsImg' href='images/sliderA_04.jpg'></a>
        <i class='rsTmb'>Chunky Beef Stew</i>

        {/*  Slide Caption */}
        <div class='SlideTitleContainer rsABlock'>
          <div class='CaptionAlignment'>
            <div class='rsSlideTitle tags'>
              <ul>
                <li>Beef</li>
              </ul>
              <div class='clearfix'></div>
            </div>

            <h2 class='rsSlideTitle title'>
              <a href='recipe-page-1.html'>Chunky Beef Stew</a>
            </h2>

            <div class='rsSlideTitle details'>
              <ul>
                <li>
                  <i class='fa fa-cutlery'></i> 4 Servings
                </li>
                <li>
                  <i class='fa fa-clock-o'></i> 2 Hr 30 Min
                </li>
                <li>
                  <i class='fa fa-user'></i> by <a href='#'>Sandra Fortin</a>
                </li>
              </ul>
            </div>

            <a href='recipe-page-1.html' class='rsSlideTitle button'>
              View Recipe
            </a>
          </div>
        </div>
      </div>

      {/*  Slide #5 */}
      <div class='rsContent'>
        <a class='rsImg' href='images/sliderA_05.jpg'></a>
        <i class='rsTmb'>
          Farmhouse Vegetable <br /> And Barley Soup
        </i>

        {/*  Slide Caption */}
        <div class='SlideTitleContainer rsABlock'>
          <div class='CaptionAlignment'>
            <div class='rsSlideTitle tags'>
              <ul>
                <li>Soups</li>
              </ul>
              <div class='clearfix'></div>
            </div>

            <h2 class='rsSlideTitle title'>
              <a href='recipe-page-1.html'>
                Farmhouse Vegetable And Barley Soup
              </a>
            </h2>

            <div class='rsSlideTitle details'>
              <ul>
                <li>
                  <i class='fa fa-cutlery'></i> 4 Servings
                </li>
                <li>
                  <i class='fa fa-clock-o'></i> 1 Hr 30 Min
                </li>
                <li>
                  <i class='fa fa-user'></i> by <a href='#'>Sandra Fortin</a>
                </li>
              </ul>
            </div>

            <a href='recipe-page-1.html' class='rsSlideTitle button'>
              View Recipe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroMember;
