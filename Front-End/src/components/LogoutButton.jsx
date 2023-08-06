import { icon } from '@fortawesome/fontawesome-svg-core';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

function LogoutButton(props) {


  const logout = () => {
    Swal.fire({
      title: 'Sign Out?',
      text: "All sessions will be cleared!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sign Out'
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.clear();
        window.localStorage.clear();
        Swal.fire(
          'Logged out!',
          'Your session has been cleared.',
          'success'
        ).then(() => {
          window.location.href = '/';
        });;
      }
    });
  };



  return (


    <NavDropdown className='my-auto' title="Account" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
      <NavDropdown.Item onClick={() => logout()} href="#">Sign Out</NavDropdown.Item>
    </NavDropdown>





  )
}

export default LogoutButton;