import React, { useState } from 'react';
import axios from 'axios';
import { logRoles } from '@testing-library/react';
import Swal from 'sweetalert2';

function SignInOnly(){

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