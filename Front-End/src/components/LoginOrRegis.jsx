import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";

const LoginOrRegis = () => {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setPasswordLogin] = useState("");
  const [loginRole, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showReplacement, setShowReplacement] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // LOGIN
  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: loginName,
      password: loginPassword,
      role: loginRole,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/auth/login",
        user
      );
      sessionStorage.setItem("user", JSON.stringify(response.data));
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        showConfirmButton: true,
      }).then(() => {
        window.location.href = "/dashboard";
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Credentials Incorrect",
        text: "Please Try Again!",
        showConfirmButton: true,
      });
      console.error(error);
    }

    setEmail("");
    setPassword("");
    setRole(loginRole);
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
      .post("http://localhost:8080/user/register", user)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          showConfirmButton: true,
        }).then(() => {
          window.location.href = "/login";
        });
        console.log(response.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Email already registered in system",
          showConfirmButton: true,
        });
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
                <option value="Donor">Donor</option>
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
              Already have an account? Click{" "}
              <span>
                <a className="text-warning" onClick={handleClick}>
                  here to Sign-In
                </a>
              </span>
            </p>
            <button
              type="submit"
              className="btn btn-outline-warning col-6 my-3"
            >
              Register
            </button>
            <br />
          </form>
        </div>
      ) : (
        // REPLACE
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
            <p className="lead text-white mt-3">
              Don't have an account? Click{" "}
              <span>
                <a className="text-warning" onClick={handleBack}>
                  here to Sign-Up
                </a>
              </span>
            </p>

            <button
              type="submit"
              className="btn btn-outline-warning col-6 my-3"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>

  );
};

export default LoginOrRegis;
