import React, { useState } from 'react';
import axios from 'axios';

function SignInOnly(){

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
    
    return(
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
                <p className="lead text-white mt-3">Don't have an account? Click <span><a className='text-warning' href='/getStarted'>here to Sign-Up</a></span></p>

                <button type="submit" className="btn btn-outline-warning col-6 my-3">Login</button>
             
                
              </form>
            </div>
    )
}

export default SignInOnly;