import React, { useEffect, useState } from 'react';
import logo from "../images/logo.png";
import { Nav, NavDropdown, Modal, Container, Form, Button } from 'react-bootstrap';
import "@fortawesome/fontawesome-free/css/all.css";
import Swal from 'sweetalert2';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const logout = () => {
    sessionStorage.clear();
    window.localStorage.clear();
    Swal.fire({
      icon: 'success',
      title: 'Logout Successful',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      window.location.href = "/";
    });
  };

  let User = sessionStorage.getItem("user");
  User = JSON.parse(User);

  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserEmail(parsedUser.email);
    }
  }, []);

  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div id="logo">
              <h1>
                <a href="/admin_dashboard">
                  <img src={logo} alt="MoW" />
                </a>
              </h1>
            </div>
          </div>
          <div className="col-9 mt-3">
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
                      <a className="dropdown-item" href="/admin_orders">
                        <i class="fa fa-shopping-cart small text-white me-1"></i>
                        Manage Orders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/admin_members">
                        <i class="fa fa-user small text-white me-1"></i>
                        Manage Members
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/admin_drivers">
                        <i class="fa fa-car small text-white me-1"></i>
                        Manage Drivers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/admin_partners">
                        <i class="fa fa-building small text-white me-1"></i>
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
                      <a
                        className="dropdown-item"
                        onClick={handleModal}
                        href="#"
                      >
                        <i class="fa fa-sign-out small text-white me-1"></i>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            {/* Modal */}
            <Modal show={showModal} onHide={handleModal}>
              <Modal.Header closeButton>
                <Modal.Title>Sign Out Confirmation</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Are you sure you want to sign out?</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleModal}>
                  Cancel
                </Button>
                <Button variant="outline-danger" onClick={() => logout()}>
                  Sign Out
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
