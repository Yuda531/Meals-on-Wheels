import logo from '../img/mowlogonew.png'

function Footer() {
    return (
      <footer>
 <div style={{ padding:"0.25%"}} className="bg-success"></div>

        <div style={{backgroundColor:"white", padding: "60px"}} className="col-12 d-flex">
            <div className="col-3 px-5 mt-3">
              <div className="col-12 d-flex">
              <img src={logo} className='col-1' alt="" />
              <h5 className="fw-bold">MoW</h5>
              </div>
                <br />
                <small className="mt-1">
                Jl. Soekarno Hatta No.378, Kb. Lega, Kec. Bojongloa Kidul, Kota Bandung, Jawa Barat 40235
                </small>
            </div>

            <div className="col-5 px-5">
                <h1 className="lead fw-bold mb-3">About Us</h1 >
                <small><span className="text-warning">Meals</span> on <span className="text-success">Wheels</span>: Healthy, Convenient, Affordable.

                              Discover nutritious meals tailored to your needs. Fast delivery, great prices.

                              Quality ingredients, delicious taste. Eat well with ease.

                              Join us for a healthy, hassle-free experience.</small>
            </div>
            <div className="col-4 px-5">
              <h1 className="lead fw-bold">
                Sitemap
              </h1>
              <ul className='mt-3'>
                <div className="d-flex col-12">
                <div>
                <li className='mb-1'><a href="/">Home</a></li>
                <li className='mb-1'><a href="/about-us">About us</a></li>
                <li className='mb-1'><a href="/contact-us">Contact us</a></li>
                <li className='mb-1'><a href="/about-us">Where to find us</a></li>
                </div>
                <div className='ms-3'>
                <li className='mb-1'><a href="/terms">Terms & Conditions</a></li>
                <li className='mb-1'><a href="/privacy">Privacy Policy</a></li>
                </div>
                </div>
                
                
                {/* <br />
                <hr style={{border:"1px solid gray"}} /> */}
                

                
              </ul>
            </div>
        </div>

        <div style={{ backgroundColor: "black", padding: "20px" }} className="col-12">
          <div className="text-center text-white">
            &copy; {new Date().getFullYear()} <strong><span>Meals on Wheels</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  