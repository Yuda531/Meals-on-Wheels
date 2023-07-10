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

    // LOGIN
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
  
    const user = {
      email: loginName,
      password: loginPassword,
      role: loginRole
    };
  
    try {
      const response = await axios.post('http://localhost:8080/auth/login', user);
      sessionStorage.setItem('user', JSON.stringify(response.data));
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        showConfirmButton: true
      }).then(() => {
        window.location.href = '/dashboard';
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Credentials Incorrect',
        text: 'Please Try Again!',
        showConfirmButton: true
      });
      console.error(error);
    }
  
    setEmail('');
    setPassword('');
    setRole(loginRole);
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
            <Button href='/getStarted' className="homeBtn btn btn-success col-12 my-3 py-2 btnOrder fw-bold mx-auto">Get Started</Button>
            {/* <button className="homeBtn btn btn-success col-12 my-3 py-2 btnOrder mx-auto">Get started</button> */}
            <button onClick={handleClick} className="homeBtn btn btn-outline-warning col-12 py-2 mx-auto">Sign In</button>
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
