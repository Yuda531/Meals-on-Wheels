import { useState } from "react";
import backgroundImage from "../../images/bg/tileable_wood_texture.png";
import NavbarAdmin from "../Navbar";

const DriverManage = () => {
  const [activeTab, setActiveTab] = useState("driver");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Sample data for Driver table
  const driver = [
    {
      id: 1,
      name: "Jade Smith",
      vehicle: "Bike",
      status: "Available",
    },
    {
      id: 2,
      name: "Grock Brog",
      vehicle: "Car",
      status: "Busy",
    },
  ];

  // Sample data for Driver Request table
  const driverRequest = [
    {
      id: 1,
      name: "Mike Johnson",
      vehicle: "Car",
    },
    {
      id: 2,
      name: "Sara Anderson",
      vehicle: "Bike",
    },
  ];

  const [filteredDrivers, setFilteredDrivers] = useState(driver);
  const [filteredDriverRequest, setFilteredDriverRequest] =
    useState(driverRequest);

  return (
    <>
      <NavbarAdmin />
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
        <div className="row">
          <div className="col-md-12">
            <ul
              className="nav nav-tabs"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.523)",
              }}
            >
              <li className="nav-item" style={{ textDecoration: "none" }}>
                <button
                  className={`nav-link ${
                    activeTab === "driver" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("driver")}
                >
                  Driver
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${
                    activeTab === "driverRequest" ? "active" : ""
                  }`}
                  onClick={() => handleTabChange("driverRequest")}
                >
                  Driver Request
                </button>
              </li>
            </ul>
            <div className="tab-content">
              {activeTab === "driver" && (
                <div className="tab-pane fade show active">
                  <main className="table">
                    <section className="table__header">
                      <h1 className="text-black ps-3 ">List Drivers</h1>
                    </section>
                    <section className="table__body">
                      <table>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Driver Name</th>
                            <th>Vehicle</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredDrivers.map((driver, index) => (
                            <tr key={driver.id}>
                              <td>{index + 1}</td>
                              <td>{driver.name}</td>
                              <td>{driver.vehicle}</td>
                              <td>
                                <a href="" style={{ textDecoration: "none" }}>
                                  <p
                                    className={`status ${driver.status.toLowerCase()}`}
                                  >
                                    {driver.status}
                                  </p>
                                </a>
                              </td>
                              <td>
                                <button
                                  className="btn btn-primary rounded-2 ms-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editMenu"
                                >
                                  <i className="fas fa-edit fa-sm"></i>
                                </button>
                                <button
                                  className="btn btn-danger rounded-2 ms-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteMenu"
                                >
                                  <i className="fas fa-trash fa-sm"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </section>
                  </main>
                </div>
              )}
              {activeTab === "driverRequest" && (
                <div className="tab-pane fade show active">
                  <main className="table">
                    <section className="table__header">
                      <h1 className="text-black ps-3 ">List Driver Request</h1>
                    </section>
                    <section className="table__body">
                      <table>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Driver Name</th>
                            <th>Vehicle</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredDriverRequest.map((driverReq, index) => (
                            <tr key={driverReq.id}>
                              <td>{index + 1}</td>
                              <td>{driverReq.name}</td>
                              <td>{driverReq.vehicle}</td>
                              <td>
                                <button
                                  className="btn btn-secondary rounded-2 ms-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteMenu"
                                >
                                  Details <i className="fas fa-eye fa-sm"></i>
                                </button>
                                <button
                                  className="btn btn-danger rounded-2 ms-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#editMenu"
                                >
                                  Reject <i className="fas fa-times fa-sm"></i>
                                </button>
                                <button
                                  className="btn btn-success rounded-2 ms-2"
                                  data-bs-toggle="modal"
                                  data-bs-target="#deleteMenu"
                                >
                                  Approve <i className="fas fa-check fa-sm"></i>
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </section>
                  </main>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default DriverManage;
