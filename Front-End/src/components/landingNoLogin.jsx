import img from "../img/mowlogonew.png";
import deliver from "../img/delivery.png";
import healthy from "../img/healthy.png";
import afford from "../img/afford.png";
import foods from "../img/food.png";
import foodBg from "../img/foodBg.jpg";
import React, { useEffect, useState } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import ButtonAndForm from "./btnAndForm";

function LandingNoLogin() {
  let User = sessionStorage.getItem("user");
  User = JSON.parse(User);

  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserEmail(parsedUser.name);
    }
  }, []);

  return (
    <div className="body custom-overflow" style={{ padding: "0" }}>
      <div className="backblur">
        <div
          style={{ paddingTop: "6%", paddingBottom: "6%" }}
          className=" col-12"
        >
          <div className="d-flex col-12 row">
            <div className="col-6 p-3">
              <h1
                style={{ fontSize: "85px" }}
                className="text-white display-1 fw-bold col-12 my-auto"
              >
                Meals <span className=" text-success"> on </span>
                <span className="text-warning">Wheels.</span>
              </h1>
              <br />
              <h4 className="text-white lead">
                We brought you{" "}
                <span className="text-success fw-bold">fresh</span> and{" "}
                <span className="fw-bold text-success">healthy</span> meals
                everyday.
                <br /> On <span className="fw-bold text-warning">Wheels!</span>
              </h4>
            </div>

            {!User && <ButtonAndForm />}
            {User && (
              <div className="col-6 p-5 text-white aboutt my-auto">
                <h1 className="display-6 text-white">Welcome, {userEmail ? userEmail : "Guest"}</h1>
                <br />
                <br />

                  <Button
                    href="/dashboard"
                    variant="success"
                    className="col-12 mx-auto mb-3 greenBtns"
                  >
                    Go to dashboard
                  </Button>


             
                
                
                {/* IF MEMBER */}
                {User && User.roleId.roleName === "MEMBER" && (

                            <button
                              href="/dashboard"
                              className="col-12 mx-auto btn btn-outline-warning"
                            >
                              Make an Order
                            </button>
                )}

              </div>
            )}
          </div>
        </div>
      </div>
      <div className="whyUss">
        <div style={{ padding: "0.25%" }} className="bg-white"></div>

        <div className="backblur2">
  <div className="px-5 d-flex justify-content-center">
    <h1 className="display-3 mb-5 my-auto">
      Why <span className="text-success fw-bold">Meals </span> on
      <span className="text-warning fw-bold"> Wheels</span> ?
    </h1>
  </div>

  <div className="row justify-content-center">
    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card rounded-5 p-5 whyUs">
        <img src={deliver} className="col-12 mx-auto" alt="" />
        <h1 style={{ fontSize: "30px" }} className="text-center fw-bold mt-2">
          <span className="text-success">On</span>-time{" "}
          <span className="text-warning">Delivery</span>
        </h1>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card rounded-5 p-5 whyUs">
        <img src={healthy} className="col-12 mx-auto" alt="" />
        <h1 style={{ fontSize: "30px" }} className="text-center fw-bold mt-2">
          <span className="text-success">Healthy</span> food{" "}
          <span className="text-warning">Quality</span>
        </h1>
      </div>
    </div>

    <div className="col-md-4 col-sm-6 mb-4">
      <div className="card rounded-5 p-5 whyUs">
        <img src={afford} className="col-12 mx-auto" alt="" />
        <h1 style={{ fontSize: "30px" }} className="text-center fw-bold mt-2">
          <span className="text-success">Affordable</span> food{" "}
          <span className="text-warning">Price</span>
        </h1>
      </div>
    </div>
  </div>
</div>
<div style={{ padding: "0.25%" }} className="bg-white"></div>

      </div>

      {User && User.roleId.roleName === "MEMBER" && (

        
      <div className="backblur1">
  <div style={{ padding: "0%" }} className="col-12">
    <div className="row">
      <div
        style={{ paddingLeft: "10%", paddingRight: "5%" }}
        className="col-12 col-md-9 my-auto"
      >
        <h1
          style={{ fontSize: "90px" }}
          className="text-white fw-bold col-12 my-auto"
        >
          Fast <span className="text-success">and</span>
          <br />
          <br />
          <span className="text-warning">Satisfying.</span>
        </h1>
        <br />
        <h4 className="text-white lead col-12 col-md-6 my-4">
          Guaranteed <span className="text-warning fw-bold">Satisfaction</span>,
          On-<span className="text-success fw-bold">time</span> delivery, and{" "}
          <span className="text-success fw-bold">Healthy</span>
        </h4>
        <button className="btn btn-success col-6 my-3">Order Now</button>
      </div>
      <div className="col-12 col-md-3 my-auto">
        <img
          src={foods}
          className="col-12 mx-auto d-block img-fluid"
          alt=""
        />
      </div>
    </div>
  </div>
</div>

      )}

    </div>
  );
}

export default LandingNoLogin;
