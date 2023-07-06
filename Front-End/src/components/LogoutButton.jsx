import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function LogoutButton(props) {

  
  const logout = () => {
    
      sessionStorage.clear();
      window.localStorage.clear();
      alert('Logout Successfull')
      window.location.href = "/";
    ;
  };

  

  return(


    <NavDropdown className='my-auto' title="Account" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/dashboard">My Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={() => logout()} href="#">Sign Out</NavDropdown.Item>
            </NavDropdown>





  ) 
}

export default LogoutButton;