import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Carousel, Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2';


const ButtonAndForm = () => {
    const [showReplacement, setShowReplacement] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginName, setLoginName] = useState('');
    const [loginRole, setRole] = useState('');
    const [loginPassword, setPasswordLogin] = useState('');
    // const [showReplacement, setShowReplacement] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [validated, setValidated] = useState(false);
  const [active, setActive] = useState('');


    const handleLoginFormSubmit = async (e) => {
      e.preventDefault(); // Prevent form submission
      
      // Create an object with the form data
      const user = {
        email: loginName,
        password: loginPassword,
        roleId: loginRole,
        active : active
      };
    
      
        // Check if user isActive is true
        
    
        axios.post('http://localhost:8080/auth/login', user)
          .then((response) => {
            console.log(response.data);
            sessionStorage.setItem("user", JSON.stringify(response.data));
            Swal.fire({
              icon: 'success',
              title: 'Login success!',
              footer: '',
              confirmButtonColor: '#127d3f',
              confirmButtonText: 'Go to homepage',
              preConfirm: () => {
                return new Promise((resolve) => {
                  window.location.href = '/';
                  resolve();
                });
              },
            });
            
            
          }).catch((error)=>{
            console.log(error.response.data.message);
            if (error.response.status === 401 && error.response.data.message === "Inactive user") {
              Swal.fire({
                icon: 'error',
                title: 'Oops... Sorry',
                text: 'Your Account is not activated yet, please wait or contact admin for activation.',
                footer: '<a href="/contact-us">Contact us</a>'
              })
            } 
            if (error.response.data.message === "Invalid password.") {
              Swal.fire({
                icon: 'error',
                title: 'Oops... Sorry',
                text: 'Incorrect password. Check your credentials',
                footer: '<a href="/contact-us">Contact us</a>'
              })
              
            }
            if (error.response.data.message === "Email not found.") {
              Swal.fire({
                icon: 'error',
                title: 'Oops... Sorry',
                text: "We couldn't find your email. Please register if your email is not registered.",
                footer: '<a href="/getStarted">Register</a>'
              })
            }
            
          })
          // error.response.status === 401 && 
      
    
      setEmail('');
      setPassword('');
      setRole(loginRole);
      setActive(active)
    };
  
    const handleClick = () => {
      if (!showReplacement) {
        setShowReplacement(true);
      } else {
        setShowForm(true);
      }
    };
  
    const handleBack = () => {
      setShowForm(false);
      setShowReplacement(false);
    };
  
    return (
      <div className="col-6 px-5 py-auto my-auto">
        {!showReplacement ? (
          <div id="replace" className="replace col-12 ">
            <Button id="homeBtn" href='/getStarted' className=" btn btn-success col-12 my-3 py-2 btnOrder fw-bold mx-auto">Get Started</Button>
            {/* <button className="homeBtn btn btn-success col-12 my-3 py-2 btnOrder mx-auto">Get started</button> */}
            <button onClick={handleClick} className=" btn btn-outline-warning col-12 py-2 mx-auto">Sign In</button>
          </div>
        ) : (
          <div id="loginForm">
            <h1 className="display-6 text-white">
                Sign In
            </h1>
            <hr className='border-white' />
            <form onSubmit={handleLoginFormSubmit} className="col-12">
            <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="name" placeholder="Email address" value={loginName}
                  onChange={(e) => setLoginName(e.target.value)} />
                  <label htmlFor="name">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="password" placeholder="Password" value={loginPassword}
                  onChange={(e) => setPasswordLogin(e.target.value)} />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label text-white" htmlFor="remember">Remember me</label>
                </div>
              <p className="lead text-white mt-3">Don't have an account? Click <span><a className='text-info' href='getStarted'>here to Sign-Up</a></span></p>

              <button type="submit" className="btn btn-outline-warning col-6 my-3">Login</button>
              <br />
              <Button onClick={handleBack} variant="secondary" className="btn col-6">Back</Button>
            </form>
          </div>
        )}
      </div>
    );
  };

export default ButtonAndForm;
