import logo from '../img/logo.png';

const Navbar = () => {
    return ( 

      <header id="header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-3">
            <div id="logo">
              <h1>
                <a href="index.html">
                  <img src={logo} alt="Chow" />
                </a>
              </h1>
            </div>
          </div>
          <div className="col-9">
            <nav id="navigation" className="menu">
              <ul className="nav me-auto">
                <li className="nav-item">
                  <a className="nav-link active text-dark" href="index.html">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Manage Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Manage Meals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="#">
                    Manage Orders
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Administrator
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item text-dark" href="shortcodes.html">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-dark" href="typography.html">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>

  //     <nav class="navbar navbar-expand-lg bg-light">
  //     <div class="container-fluid">
  //     <img src={logo} alt="Logo" className="navbar-brand" />
  //         {/* <a class="navbar-brand" href="#">Navbar</a> */}
  //         <button class="navbar-toggler" type="button"
  //             data-bs-toggle="collapse"
  //             data-bs-target="#navbarSupportedContent"
  //             aria-controls="navbarSupportedContent"
  //             aria-expanded="false" aria-label="Toggle navigation">
  //             <span class="navbar-toggler-icon"></span>
  //         </button>
  //         <div class="collapse navbar-collapse"
  //             id="navbarSupportedContent">
  //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  //                 <li class="nav-item">
  //                     <a class="nav-link active" aria-current="page"
  //                         href="#">Home</a>
  //                 </li>
  //                 <li class="nav-item">
  //                     <a class="nav-link" href="#">Link</a>
  //                 </li>
  //                 <li class="nav-item">
  //                     <a class="nav-link disabled">Disabled</a>
  //                 </li>
  //             </ul>
  //         </div>
  //     </div>
  // </nav>
       
     );
}
 
export default Navbar;