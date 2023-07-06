import React, { useEffect, useState } from 'react';
import { Navbar, Nav,NavDropdown, Modal, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../img/mowlogonew.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub, faGem, faUser } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint, faPerson, faUserMd, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import LogoutButton from './LogoutButton';


const StickyHeader = ( {activePage} ) => {

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const logout = () => {
    
    sessionStorage.clear();
    window.localStorage.clear();
    alert('Logout Successfull')
    window.location.href = "/";
  ;
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
    <header className="fixed-top">
      <Navbar className='navbar-custom ' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container className='col-12 d-flex'>
        <Navbar.Brand className='col-4 me-5' href="/">
          
          <div className="d-flex justify-content-center">
          <img style={{ height: "50px", width: "65px", marginRight: "10px" }} src={img} alt="logo" />
          <p className="lead text-success my-auto">Meals <span className="lead text-dark"> on </span> <span className="text-warning">Wheels</span>.</p>
           
          </div>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="col-7 d-flex mx-auto justify-content-center">
            
            <NavLink exact to="/" className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>Home</NavLink>

            {!User && (
            <NavLink to="/getStarted" className={`nav-link ${activePage === 'getStarted' ? 'active' : ''}`}>Get Started</NavLink>
              )}

            <NavLink to="/about-us" className={`nav-link ${activePage === 'about-us' ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/contact-us" className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}>Contact</NavLink>

            {User && (   
            <NavLink to="/dashboard" className={`nav-link ${activePage === 'dashboard' ? 'active' : ''}`}>Dashboard</NavLink>
              )}
              {User && (   
            <NavDropdown className='my-auto' title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/dashboard">My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={handleModal} href="#">Sign Out</NavDropdown.Item>
            </NavDropdown>
              )}
          

          </Nav>

          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

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
    </header>
  );
};

export default StickyHeader;
