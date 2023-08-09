// AdminDashboard.js
import React from "react";
import { useState } from "react";
import "../../CSS/admin/AdminDashboard.css";
import "@fortawesome/fontawesome-free/css/all.css";
import backgroundImage from "../../images/bg/diamond_upholstery.png";

const AdminDashboard = () => {
  // Dummy data for current statistics
  const currentDonationAmount = "5000";
  const jumlahMembers = 15;
  const jumlahDrivers = 20;
  const jumlahPartners = 10;

 

  return (
    <div
      className="backimg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "50px",
      }}
    >
      <div className="container">
        <div className="adminDashboard">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="card card-dash mb-4">
                <div className="card-body">
                  <h5 className="card-title text-success ">
                    Current Donation Amount
                  </h5>
                  <p className="card-text text-success">
                    <i class="fa fa-usd"></i> {currentDonationAmount}{" "}
                  </p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a
                    className="small text-success stretched-link"
                    href="/admin_donations"
                  >
                    View Details
                  </a>
                  <div className="small ">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card card-dash mb-4">
                <div className="card-body">
                  <h5 className="card-title text-success">Number of Members</h5>
                  <p className="card-text text-success">
                    <i class="fa fa-users"></i> {jumlahMembers}
                  </p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a
                    className="small text-success stretched-link"
                    href="/admin_members"
                  >
                    View Details
                  </a>
                  <div className="small ">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card card-dash mb-4">
                <div className="card-body">
                  <h5 className="card-title text-success">Number of Drivers</h5>
                  <p className="card-text text-success">
                    <i class="fa fa-car"></i> {jumlahDrivers}
                  </p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a
                    className="small text-success stretched-link"
                    href="/admin_drivers"
                  >
                    View Details
                  </a>
                  <div className="small ">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="card card-dash mb-4">
                <div className="card-body">
                  <h5 className="card-title text-success">
                    Number of Partners
                  </h5>
                  <p className="card-text text-success">
                    <i class="fa fa-building"></i> {jumlahPartners}
                  </p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                  <a
                    className="small text-success stretched-link"
                    href="/admin_partners"
                  >
                    View Details
                  </a>
                  <div className="small ">
                    <i className="fas fa-angle-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
