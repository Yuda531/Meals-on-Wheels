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

  // Function to generate dummy data for request meals
  const generateRequestMealsData = () => {
    const meals = [
      {
        mealsName: "Gorengan Anjay",
        memberName: "Kg Agung",
        orderDate: "17 Dec, 2090",
        status: "New",
      },
      {
        mealsName: "Froze Fruits",
        memberName: "Rocky",
        orderDate: "27 Aug, 9000",
        status: "Cancelled",
      },
      {
        mealsName: "Bakso Kimochi",
        memberName: "Kg Agung",
        orderDate: "14 Mar, 2023",
        status: "Process",
      },
      {
        mealsName: "Bubur Enak",
        memberName: "Crots Roki",
        orderDate: "25 May, 2023",
        status: "Delivered",
      },
      {
        mealsName: "Pizza Margherita",
        memberName: "John",
        orderDate: "5 Jan, 2023",
        status: "New",
      },
      {
        mealsName: "Chicken Teriyaki",
        memberName: "Emily",
        orderDate: "12 Feb, 2023",
        status: "Process",
      },
      {
        mealsName: "Spaghetti Bolognese",
        memberName: "Michael",
        orderDate: "19 Mar, 2023",
        status: "Delivered",
      },
      {
        mealsName: "Sushi Platter",
        memberName: "Sophia",
        orderDate: "26 Apr, 2023",
        status: "New",
      },
      {
        mealsName: "Fish and Chips",
        memberName: "Daniel",
        orderDate: "3 May, 2023",
        status: "Process",
      },
      {
        mealsName: "Caesar Salad",
        memberName: "Olivia",
        orderDate: "10 Jun, 2023",
        status: "Delivered",
      },
      {
        mealsName: "Beef Stroganoff",
        memberName: "David",
        orderDate: "17 Jul, 2023",
        status: "New",
      },
      {
        mealsName: "Miso Soup",
        memberName: "Emma",
        orderDate: "24 Aug, 2023",
        status: "Process",
      },
      {
        mealsName: "Cheeseburger",
        memberName: "Liam",
        orderDate: "1 Sep, 2023",
        status: "Delivered",
      },
      {
        mealsName: "Pancakes",
        memberName: "Ava",
        orderDate: "8 Oct, 2023",
        status: "New",
      },
      {
        mealsName: "Tom Yum Soup",
        memberName: "Noah",
        orderDate: "15 Nov, 2023",
        status: "Process",
      },
      {
        mealsName: "Steak with Mushrooms",
        memberName: "Isabella",
        orderDate: "22 Dec, 2023",
        status: "Delivered",
      },
    ];

    return meals.map((meal, index) => ({
      ...meal,
      id: index + 1,
      image: getImageUrl(meal.mealsName),
    }));
  };

  // Function to get the image URL based on meals name
  const getImageUrl = (mealsName) => {
    // Add your logic to return the appropriate image URL based on the meals name
    // For now, we'll return a placeholder image URL
    return `https://source.unsplash.com/random${encodeURIComponent(mealsName)}`;
  };

  // Get the request meals data
  const requestMeals = generateRequestMealsData();

  const [searchQuery, setSearchQuery] = useState("");

  const filteredMeals = requestMeals.filter(
    (meal) =>
      meal.mealsName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      meal.memberName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="backimg"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
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

          <main className="table mt-5">
            <section className="table__header ">
              <h1 className="ps-2">Orders</h1>
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Search Data..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <img src="images/search.png" alt="" />
              </div>
            </section>
            <section className="table__body">
              <table>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Meals Name</th>
                    <th>Member Name</th>
                    <th>Order Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMeals.map((meal) => (
                    <tr key={meal.id}>
                      <td>{meal.id}</td>
                      <td>
                        <img src={meal.image} alt={meal.mealsName} />
                        {meal.mealsName}
                      </td>
                      <td>{meal.memberName}</td>
                      <td>{meal.orderDate}</td>
                      <td>
                        <a href="" style={{ textDecoration: "none" }}>
                          <p className={`status ${meal.status.toLowerCase()}`}>
                            {meal.status}
                          </p>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
