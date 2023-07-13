import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';

const LoginOrRegis = () => {

  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const { role } = JSON.parse(user);
      setUserRole(role);
    }
  }, []);


  const [name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginName, setLoginName] = useState('');
  const [loginPassword, setPasswordLogin] = useState('');
  const [roleId, setRoleId] = useState('');
  const [driverName, setDriverName] = useState('');
  const [driverPlate, setDriverPlate] = useState('');
  const [isLicensed, setLicensed] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');

  const [isActive, setActive] = useState('');
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
      role: roleId,
      isActive: isActive
    };
  
    try {
    
  
      // Make the POST request using Axios to send user credentials to the server
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
    setRoleId(roleId);
    setActive(isActive);
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
        password: password,
        roleId: roleId
      };
    
      let data = {
        userDTO: user
      };
    
      if (roleId === 3) {
        const caregiverData = {
          driverName: driverName,
          driverPlate: driverPlate,
          isLicensed: isLicensed,
          licenseNumber: licenseNumber
        };
    
        data = {
          ...data,
          caregiver: caregiverData
        };
      }
    
      axios
        .post('http://localhost:8080/user/register', data)
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
    <div style={{maxHeight:"560px", overflow:"auto"}} className="col-7 teams">



      {!showReplacement ? (
        <div id="regisForm">
          <h1 className="display-6 text-white">Sign Up</h1>
          <hr className="border-white" />
          <form className="col-12" onSubmit={handleSubmit}>

            <div className="d-flex col-12">
              <div className="col-6 px-1 mx-auto">
              <div className="form-floating col-12 mb-3">
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
            <div className="form-floating col-12 mb-3">
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
            <div className="form-floating col-12 mb-3">
              <select
                placeholder="Select a Role."
                id="roleId"
                className="form-control"
                value={roleId}
                onChange={(e) => setRoleId(Number(e.target.value))}
                required
              >
                <option value="" disabled>
                  Select a Role
                </option>
                <option value="2">Member</option>
                <option value="3">Caregiver</option>
                <option value="4">Partner</option>
                <option value="5">Donour</option>
                <option value="6">Volunteer</option>
              </select>
              <label htmlFor="roleId">Which role do you want to be?</label>
            </div>
              </div>

              <div className="col-6 px-1 mx-auto">
              <div className="form-floating col-12 mb-3">
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
            <div className="form-floating col-12 mb-3">
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
              </div>
            </div>

            

            {roleId === 3 && (

            <div id="details">
              <p className="display-6 mt-5 text-white">
              Detail Information
              </p>

          <hr className="border-white" />
              <div className="d-flex col-12">
              <div className="form-floating col-6 px-1 mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Driver Username"
                value={driverName}
                onChange={(e) => setDriverName(e.target.value)}
                required
              />
              <label htmlFor="name">Driver Username</label>
            </div>

            <div className="form-floating  col-6 px-1 mb-3">
              <input
                type="text"
                className="form-control"
                id="license"
                placeholder="Name"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
                required
              />
              <label htmlFor="name">License Number</label>
            </div>


              </div>

            <div className="form-floating col-6 px-1 mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Driver Username"
                value={driverPlate}
                onChange={(e) => setDriverPlate(e.target.value)}
                required
              />
              <label htmlFor="name">Police Number</label>
            </div>
            </div>
            

            )}
<br />
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
