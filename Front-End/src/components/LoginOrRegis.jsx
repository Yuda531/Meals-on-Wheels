import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const LoginOrRegis = () => {
  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setPasswordLogin] = useState('');
  const [loginRole, setRole] = useState('');


  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showReplacement, setShowReplacement] = useState(false);
  const [showForm, setShowForm] = useState(false);


  // LOGIN

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
      
    // Create an object with the form data
    const user = {
      email: loginName,
      password: loginPassword,
      role: loginRole
    };
  
    try {
      // Make the POST request using Axios to send user credentials to the server
     axios.post('http://localhost:8080/auth/login', user).then((response)=>{
      console.log(response.data)
      sessionStorage.setItem("user", JSON.stringify(response.data))
      window.location.href = "/dashboard"
      alert("Login success")
     });
  
      // Check if the server response contains a success message or token
      
    } catch (error) {
      alert("Invalid credentials");
      console.error(error);
      // Handle error during login
    }
  
    setEmail('');
    setPassword('');
    setRole(loginRole)
    };


    // REGIS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    const user = {
      name: name,
      email: email,
      role: loginRole.toUpperCase(),
      password: password,
    };

    axios
      .post('http://localhost:8080/user/register', user)
      .then((response) => {
        alert('Registration Successful');
        window.location.href = '/login';
        console.log(response.data);
      })
      .catch((error) => {
        alert('Error Occurred');
        console.error(error);
      });
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
    <div className="col-6">



      {!showReplacement ? (
        <div id="regisForm">
          <h1 className="display-6 text-white">Sign Up</h1>
          <hr className="border-white" />
          <form className="col-12" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <select
                placeholder="Select a Role."
                id="roleId"
                className="form-control"
                value={loginRole}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select a Role
                </option>
                <option value="Partner">Partner</option>
                <option value="Member">Member</option>
                <option value="Caregiver">Caregiver</option>
                <option value="Donour">Donour</option>
                <option value="Volunteer">Volunteer</option>
              </select>
              <label htmlFor="roleId">Which role do you want to be?</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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

            <p className="lead text-white">
              Already have an account? Click{' '}
              <span>
                <a className="text-warning" onClick={handleClick}>
                  here to Sign-In
                </a>
              </span>
            </p>
            <button type="submit" className="btn btn-outline-warning col-6 my-3">
              Register
            </button>
            <br />
          </form>
        </div>
        // REPLACE
      ) : (  
        <div id="loginForm">
          <h1 className="display-6 text-white">Sign In</h1>
          <hr className="border-white" />
          <form onSubmit={handleLoginFormSubmit} className="col-12">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                required
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setPasswordLogin(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="remember" />
              <label className="form-check-label text-white" htmlFor="remember">
                Remember me
              </label>
            </div>
            <p className="lead text-white mt-3">
              Don't have an account? Click{' '}
              <span>
                <a className="text-warning" onClick={handleBack}>
                  here to Sign-Up
                </a>
              </span>
            </p>

            <button type="submit" className="btn btn-outline-warning col-6 my-3">
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginOrRegis;
