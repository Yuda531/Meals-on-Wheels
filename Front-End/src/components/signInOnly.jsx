import React, { useState } from 'react';
import axios from 'axios';
import { logRoles } from '@testing-library/react';

function SignInOnly(){

    const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginName, setLoginName] = useState('');
  const [loginRole, setRole] = useState('');
  const [loginPassword, setPasswordLogin] = useState('');
  const [isActive, setActive] = useState('');
  // const [showReplacement, setShowReplacement] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    
    // Create an object with the form data
    const user = {
      email: loginName,
      password: loginPassword,
      role: loginRole,
      isActive: isActive
    };
  
    try {
      // Check if user isActive is true

  
      axios.post('http://localhost:8080/auth/login', user)
      .then((response) => {
        if (user.isActive === false) {
          alert("User is inactive. Cannot login.");
          return;
        } else 
        console.log(response.data);
        sessionStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/dashboard";
        alert("Login success");
      });
  
      // Check if the server response contains a success message or token
  
    } catch (error) {
      alert("Invalid credentials");
      console.error(error);
      // Handle error during login
    }
  
    setEmail('');
    setPassword('');
    setRole(loginRole);
    setActive(isActive);
  };
  
  
  
    
    return(
      <div className="body">
        <div className="backblur">
        <div className='col-6 mx-auto' id="loginForm">
              
              <div className="d-flex justify-content-center">
                <div>
                <h1 className="display-6 text-white text-center">
                  Sign In
                </h1>
                <hr className='border-white' />
                <p className="lead text-white text-center">
                Login to enjoy all features
                </p>
                </div>
              
                </div>
              <br />
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
                <p className="lead text-white mt-3">Don't have an account? Click <span><a className='text-warning' href='/getStarted'>here to Sign-Up</a></span></p>

                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-outline-warning col-6 my-3">Login</button>

                </div>
             
                
              </form>
            </div>
        </div>
      </div>

    )
}

export default SignInOnly;