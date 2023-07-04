import React from "react";
import img from "../images/logo.png";
import bg from '../images/bg.jpg';


const Navbar = () => {
  return (
    <header id="header">
    <div className="container">
      <div className="row">
        <div className="col-3">
          <div id="logo">
            <h1>
              <a href="/dashboard">
                <img src={img} alt="MoW" />
                <p className="lead text-success my-auto">
                  Meals <span className="lead text-dark"> on </span>{" "}
                  <span className="text-warning">Wheels</span>.
                </p>
              </a>
            </h1>
          </div>
        </div>
        <div className="col-9">
          <nav id="navigation" className="menu">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="/dashboard" id="current">
                  Dashboard
                </a>
              </li>
              <li className="nav-item dropdown">
                <a   >
                  Manage Users
                </a>
                <ul >
                 
{/*                 
                  <li>
                    <a className="dropdown-item" href="typography.html">
                      <i class="fa fa-shopping-cart small text-white me-1"></i>
                      Manage Orders
                    </a>
                  </li> */}
                  
                 
                </ul>
              </li>


              <li className="nav-item dropdown">
                <a   >
                  Manage Meals
                </a>
     
              </li>

              <li className="nav-item dropdown">
                <a   >
                  Manage Order
                </a>
     
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
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
                    <a className="dropdown-item" href="shortcodes.html">
                      <i class="fa fa-user-circle-o small text-white me-1"></i>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="typography.html">
                      <i class="fa fa-sign-out small text-white me-1"></i>
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
);
};


export default Navbar;