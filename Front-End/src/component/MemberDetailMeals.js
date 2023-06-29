import recipe1 from "../images/recipePhoto-01.jpg";
import thumb1 from "../images/recipeThumb-01.jpg";
import thumb2 from "../images/recipeThumb-02.jpg";
import thumb3 from "../images/recipeThumb-03.jpg";
import author from "../images/author-photo.png";
import recipebg from "../images/recipeBackground.jpg";
import Sidebar from "./Sidebar";

function MemberDetailMeals() {
  return (
    <div>
      <div class='recipeBackground'>
        <img src={recipebg} alt='' />
      </div>
      <div class='container' itemscope itemtype='http://schema.org/Recipe'>
        {/*  Recipe */}
        <div class='twelve columns'>
          <div class='alignment'>
            {/*  Header */}
            <section class='recipe-header'>
              <div class='title-alignment'>
                <h2>Chunky Beef Stew</h2>
              </div>
            </section>

            {/*  Slider */}
            <div class='recipeSlider rsDefault'>
              <img itemprop='image' class='rsImg' src={recipe1} alt='' />
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
            <p itemprop='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              facere non cupiditate dicta accusantium! Magni voluptatum dolore,
              aspernatur laborum architecto eveniet!
            </p>

            {/*  Directions */}
            <h3>Ingredient</h3>
            <ol class='directions' itemprop='recipeInstructions'>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem quibusdam veniam molestias deleniti minus iure
                nemo consectetur perferendis minima? Deleniti?
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                doloribus voluptatibus nihil vitae, enim quos necessitatibus
                cum.
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
                optio laboriosam exercitationem minima, necessitatibus tempora!
                Provident.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum.
              </li>
            </ol>
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
