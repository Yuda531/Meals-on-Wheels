import React from "react";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <header id='header'>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <div id='logo'>
              <h1>
                <a href='index.html'>
                  <img src={logo} alt='Chow' />
                </a>
              </h1>
            </div>
          </div>
          <div className='col-9'>
            <nav id='navigation' className='menu'>
              <ul className='nav'>
                <li className='nav-item'>
                  <a className='nav-link' href='index.html' id='current'>
                    Dashboard
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Manage Users
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Manage Meals
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Manage Orders
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='#'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Administrator
                  </a>
                  <ul
                    className='dropdown-menu'
                    aria-labelledby='navbarDropdown'
                  >
                    <li>
                      <a className='dropdown-item' href='shortcodes.html'>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='typography.html'>
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
