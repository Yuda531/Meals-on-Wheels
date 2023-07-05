function Footer() {
  return (
    <div id='footer'>
      {/*  Container */}
      <div class='container'>
        <div class='five columns'>
          {/*  Headline */}
          <h3 class='headline footer'>About</h3>
          <span class='line'></span>
          <div class='clearfix'></div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
            maiores molestias officia reiciendis nesciunt ad id quisquam nulla.
            Officiis, pariatur!
          </p>
        </div>

        <div class='three columns'>
          {/*  Headline */}
          <h3 class='headline footer'>Pages</h3>
          <span class='line'></span>
          <div class='clearfix'></div>

          <ul class='footer-links'>
            <li>
              <a href='#'>Dashboard</a>
            </li>
            <li>
              <a href='#'>Profile</a>
            </li>
          </ul>
        </div>

        <div class='three columns'>
          {/*  Headline */}
          <h3 class='headline footer'>Meals</h3>
          <span class='line'></span>
          <div class='clearfix'></div>

          <ul class='footer-links'>
            <li>
              <a href='/'>Browse Meals</a>
            </li>
          </ul>
        </div>

        <div class='five columns'>
          {/*  Headline */}
          <h3 class='headline footer'>Newsletter</h3>
          <span class='line'></span>
          <div class='clearfix'></div>
          <p>
            Sign up to receive email updates on new product announcements, gift
            ideas, sales and more.
          </p>

          <form action='#' method='get'>
            <input
              class='newsletter'
              type='text'
              placeholder='mail@example.com'
              value=''
            />
            <button class='newsletter-btn' type='submit'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/*  Container / End */}
    </div>
  );
}
export default Footer;
