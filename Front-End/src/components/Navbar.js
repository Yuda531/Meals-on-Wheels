import React from "react";
import logo from "../images/logo.png";
import "@fortawesome/fontawesome-free/css/all.css";

const Navbar = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div id="logo">
              <h1>
                <a href="/dashboard">
                  <img src={logo} alt="Chow" />
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
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Manage
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/admin_donations">
                        <i className="fa fa-usd small text-white me-2"></i>
                        Manage Donations
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/admin_meals">
                        <i className="fa fa-cutlery small text-white me-2"></i>
                        Manage Meals
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="typography.html">
                        <i class="fa fa-shopping-cart small text-white me-1"></i>
                        Manage Orders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="shortcodes.html">
                        <i class="fa fa-user small text-white me-1"></i>
                        Manage Members
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="typography.html">
                        <i class="fa fa-car small text-white me-1"></i>
                        Manage Drivers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="shortcodes.html">
                        <i class="fa fa-users small text-white me-1"></i>
                        Manage Partners
                      </a>
                    </li>
                  </ul>
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
