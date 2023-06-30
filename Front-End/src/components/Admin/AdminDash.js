// AdminDashboard.js
import React from "react";
import "../../css/admin/AdminDashboard.css";
import "@fortawesome/fontawesome-free/css/all.css";

const AdminDashboard = () => {
  // Dummy data for current statistics
  const currentDonationAmount = "$5000";
  const jumlahMembers = 15;
  const jumlahDrivers = 20;
  const jumlahPartners = 10;

  // Dummy data for request meals
  const requestMeals = [
    { mealsName: "Chicken Curry", memberName: "John Doe", status: "New Order" },
    {
      mealsName: "Vegetable Stir-Fry",
      memberName: "Jane Smith",
      status: "Processing",
    },
    {
      mealsName: "Beef Stew",
      memberName: "Michael Johnson",
      status: "Delivering",
    },
    {
      mealsName: "Pasta Carbonara",
      memberName: "Sarah Wilson",
      status: "Completed",
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="container">
      <div className="adminDashboard">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card bg-primary text-white mb-4">
              <div className="card-body">
                <h5 className="card-title">Current Donation Amount</h5>
                <p className="card-text">{currentDonationAmount}</p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="/admin_donations">
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card bg-warning text-white mb-4">
              <div className="card-body">
                <h5 className="card-title">Number of Members</h5>
                <p className="card-text">{jumlahMembers}</p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="/members">
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card bg-success text-white mb-4">
              <div className="card-body">
                <h5 className="card-title">Number of Drivers</h5>
                <p className="card-text">{jumlahDrivers}</p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="/drivers">
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card bg-info text-white mb-4">
              <div className="card-body">
                <h5 className="card-title">Number of Partners</h5>
                <p className="card-text">{jumlahPartners}</p>
              </div>
              <div className="card-footer d-flex align-items-center justify-content-between">
                <a className="small text-white stretched-link" href="/partners">
                  View Details
                </a>
                <div className="small text-white">
                  <i className="fas fa-angle-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-4">
            <div className="card mb-4 shadow">
              <div className="card-header text-center">
                <i className="fas fa-table me-1"></i>
                All Request Meals
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table
                    className="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>Meals Name</th>
                        <th>Member Name</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {requestMeals.map((meal, index) => (
                        <tr key={index}>
                          <td>{meal.mealsName}</td>
                          <td>{meal.memberName}</td>
                          <td>{meal.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
