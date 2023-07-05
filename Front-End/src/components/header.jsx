import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import img from '../img/mowlogonew.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub, faGem, faUser } from '@fortawesome/free-brands-svg-icons';
import { faHome, faEnvelope, faPhone, faPrint, faPerson, faUserMd, faUserAlt } from '@fortawesome/free-solid-svg-icons';


const StickyHeader = ( {activePage} ) => {

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
      <Navbar className='navbar-custom' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand className='col-3' href="/">
          
          <div className="d-flex">
          <img style={{ height: "50px", width: "65px", marginRight: "10px" }} src={img} alt="logo" />
          <p className="lead text-success my-auto">Meals <span className="lead text-dark"> on </span> <span className="text-warning">Wheels</span>.</p>
           
          </div>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="col-6 mx-auto">
            <NavLink exact to="/" className={`nav-link ${activePage === 'home' ? 'active' : ''}`}>Home</NavLink>

            {!User && (
            <NavLink to="/getStarted" className={`nav-link ${activePage === 'getStarted' ? 'active' : ''}`}>Get Started</NavLink>
              )}

            <NavLink to="/about-us" className={`nav-link ${activePage === 'about-us' ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/contact-us" className={`nav-link ${activePage === 'contact' ? 'active' : ''}`}>Contact</NavLink>

            {/* {User && (    */}
            <NavLink to="/dashboard" className={`nav-link ${activePage === 'dashboard' ? 'active' : ''}`}>Dashboard</NavLink>
              {/* )} */}

          </Nav>

          
          <Form className="d-flex col-4">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
};

export default StickyHeader;
