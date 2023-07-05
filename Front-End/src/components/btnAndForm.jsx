import React, { useState } from 'react';
import { Container, Row, Col, Carousel, Button, Form} from 'react-bootstrap';


const ButtonAndForm = () => {
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
            <form className="col-12">
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
