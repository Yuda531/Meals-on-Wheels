import author from "../images/author-photo.png";
import thumb5 from "../images/recipeThumb-05.jpg";
import thumb9 from "../images/recipeThumb-09.jpg";

function Sidebar() {
  return (
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

      {/* Status Order */}
      <div class='widget'>
        <h4 class='headline'>Order Status</h4>
        <span class='line margin-bottom-20'></span>
        <div class='clearfix'></div>

        <ul class='categories'>
          <li>
            <a href='#'>My Order</a>
          </li>
        </ul>
      </div>

      {/*  Popular Meals */}
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
  );
}
export default Sidebar;
