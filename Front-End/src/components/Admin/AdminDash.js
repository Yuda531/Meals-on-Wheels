// AdminDashboard.js
import React from "react";
import { useState, useEffect} from "react";
import axios from "axios";
import "../../CSS/admin/AdminDashboard.css";
import "@fortawesome/fontawesome-free/css/all.css";
import backgroundImage from "../../images/bg/diamond_upholstery.png";

const AdminDashboard = () => {

  const [totalDonation, setTotalDonation] = useState(0);
  const [totalMembers, setTotalMembers] = useState(0);
  const [totalDrivers, setTotalDrivers] = useState(0);
  const [totalPartners, setTotalPartners] = useState(0);



  useEffect(() => {
    axios.get("http://localhost:8080/admin/all-donate")
      .then(response => {
        const donationData = response.data;
        let totalAmount = 0;
  
        // Menghitung total donasi dari respons
        donationData.forEach(donation => {
          totalAmount += donation.donate_amount;
        });
  
        setTotalDonation(totalAmount);
      })
      .catch(error => {
        console.error("Error fetching donation data:", error);
      });
  }, []);


  useEffect(() => {
    axios.get("http://localhost:8080/admin/all-members")
      .then(response => {
        const membersData = response.data;
        const totalMembers = membersData.length;
  
        setTotalMembers(totalMembers);
      })
      .catch(error => {
        console.error("Error fetching members data:", error);
      });
  }, []);
  
  useEffect(() => {
    axios.get("http://localhost:8080/admin/caregivers/active") // Ubah URL sesuai endpoint yang benar
      .then(response => {
        const driversData = response.data;
        const totalDrivers = driversData.length; // Menghitung total driver dari respons
        setTotalDrivers(totalDrivers);
      })
      .catch(error => {
        console.error("Error fetching drivers data:", error);
      });
  }, []);


  useEffect(() => {
    axios.get("http://localhost:8080/admin/partners/active") // Ubah URL sesuai endpoint yang benar
      .then(response => {
        const partnersData = response.data;
        const totalPartners = partnersData.length; // Menghitung total partners dari respons
        setTotalPartners(totalPartners);
      })
      .catch(error => {
        console.error("Error fetching partners data:", error);
      });

    // ...
  }, []);
 

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
                    <i class="fa fa-usd"></i> {totalDonation}
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
                    <i class="fa fa-users"></i> {totalMembers}
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
                    <i class="fa fa-car"></i> {totalDrivers}
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
                    <i class="fa fa-building"></i> {totalPartners}
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
