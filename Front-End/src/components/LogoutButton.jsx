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
    <Nav.Item onClick={() => logout()}>Sign Out</Nav.Item>

  ) 
}

export default LogoutButton;