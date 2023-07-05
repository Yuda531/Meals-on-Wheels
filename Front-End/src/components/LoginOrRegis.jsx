import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button, Form} from 'react-bootstrap';
import axios from 'axios';

const LoginOrRegis = () =>{
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginName, setLoginName] = useState('');
  const [role, setRole] = useState('');
  const [loginPassword, setPasswordLogin] = useState('');
  // const [showReplacement, setShowReplacement] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [validated, setValidated] = useState(false);

const handleLoginFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    setValidated(true);
  
    if (e.target.checkValidity()) {
      // Create an object with the form data
      const user = {
        email: loginName,
        password: loginPassword
      };
  
      try {
        // Make a GET request to fetch the actual password from the database
        const response = await axios.get('http://localhost:8080/auth/user/' + loginName);
        const actualPassword = response.data.password;
  
        if (actualPassword === loginPassword) {
          // Passwords match, login successful
          sessionStorage.setItem("user", JSON.stringify(user));
          window.location.href = "/home";
          alert("Login success");
  
          setEmail('');
          setPassword('');
          setUserName(user.name);
        } else {
          // Passwords don't match, login failed
          alert("Invalid credentials");
        }
      } catch (error) {
        // Handle error during login
        console.log(error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }
    const user = {
      name: name,
      email: email,
      role: role,
      password: password,
    };
  
    axios.post('http://localhost:8080/user/register', user)
      .then(response => {
      alert("Register Successfull")
       window.location.href = "/login"
        console.log(response.data);
      })
      .catch(error => {
        alert("Error Occured");
        console.error(error);
      });

  };
  
    const [showReplacement, setShowReplacement] = useState(false);
    const [showForm, setShowForm] = useState(false);
  
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
    return(
        <div className="col-6"> 
        {!showReplacement ? (
            <div id="regisForm">
            <h1 className="display-6 text-white">
                Sign Up
            </h1>
            <hr className='border-white' />
            <form className="col-12" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="name" placeholder="Name" value={name}
                    onChange={(e) => setUserName(e.target.value)} required/>
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="email" placeholder="Email address" value={email}
                     onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <select placeholder="Select a Role." id="roleId" className="form-control" value={role}
                 onChange={(e) => setRole(e.target.value)} required >
                    <option className='' value="" disabled>Select a Role</option>
                    <option value="option1">Partner</option>
                    <option value="option2">Member</option>
                    <option value="option4">Caregiver</option>
                    <option value="option5">Donour</option>
                    <option value="option6">Voulenteer</option>
                </select>
                <label htmlFor="roleId">Which role do you want to be?</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" placeholder="Password" value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required />
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-floating mb-3">
  <Form.Control
    type="password"
    className="form-control"
    id="Cfpassword"
    value={confirmPassword}
    placeholder="Confirm Password"
    onChange={(e) => setConfirmPassword(e.target.value)}
    required
    isInvalid={passwordError}
  />
  <Form.Label htmlFor="Cfpassword">Confirm Password</Form.Label>
  {passwordError && (
    <Form.Control.Feedback type="invalid">
      Passwords do not match
    </Form.Control.Feedback>
  )}
</div>
              
              <p className="lead text-white">Already have an account? Click <span><a className='text-warning' onClick={handleClick}>here to Sign-In</a></span></p>
              <button type="submit" className="btn btn-outline-warning col-6 my-3">Register</button>
              <br />
        
            </form>
          </div>
          ) : (
            <div id="loginForm">
              <h1 className="display-6 text-white">
                  Sign In
              </h1>
              <hr className='border-white' />
              <form onSubmit={handleLoginFormSubmit} className="col-12">
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Email address" />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="password" placeholder="Password" />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label text-white" htmlFor="remember">Remember me</label>
                </div>
                <p className="lead text-white mt-3">Don't have an account? Click <span><a className='text-warning' onClick={handleBack}>here to Sign-Up</a></span></p>

                <button type="submit" className="btn btn-outline-warning col-6 my-3">Login</button>
             
                
              </form>
            </div>
          )}
          </div>
    )
}

export default LoginOrRegis;