import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import backgroundImage from "../../images/bg/tileable_wood_texture.png";
import NavbarAdmin from "../NavbarAdmin";

const DriverManage = () => {
  const [activeTab, setActiveTab] = useState("driver");
  const [drivers, setDrivers] = useState([]);
  const [driverRequests, setDriverRequests] = useState([]);

  useEffect(() => {
    if (activeTab === "driver") {
      fetch("http://localhost:8080/admin/caregivers/active")
        .then((response) => response.json())
        .then((data) => {
          setDrivers(data);
        })
        .catch((error) => {
          console.error("Fetch drivers error:", error);
        });
    } else if (activeTab === "driverRequest") {
      fetch("http://localhost:8080/admin/caregivers/not-active")
        .then((response) => response.json())
        .then((data) => {
          setDriverRequests(data);
        })
        .catch((error) => {
          console.error("Fetch driver requests error:", error);
        });
    }
  }, [activeTab]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleApprove = (userId) => {
    axios
      .put(`http://localhost:8080/admin/approve-user/${userId}`)
      .then((response) => {
        console.log("User Approved:", response.data);
        Swal.fire({
          icon: "success",
          title: "Success Approve",
        }).then(() => {
          console.log("SweetAlert Closed");
          
        });

        const updatedRequests = driverRequests.filter(
          (request) => request[1].userId.userId !== userId
        );
        setDriverRequests(updatedRequests);
      })
      .catch((error) => {
        console.error("Approve error:", error);
      });
  };

  const handleReject = (userId) => {
    axios
      .delete(`http://localhost:8080/admin/reject-user/${userId}`)
      .then((response) => {
        console.log("User Rejected:", response.data);
        Swal.fire({
          icon: "success",
          title: "User Has Been Rejected",
        }).then(() => {
          console.log("SweetAlert Closed");
          
        });

        const updatedRequests = driverRequests.filter(
          (request) => request[1].userId.userId !== userId
        );
        setDriverRequests(updatedRequests);
      })
      .catch((error) => {
        console.error("Reject error:", error);
      });
  };

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
                              <th>User Name</th>
                              <th>Driver Name</th>
                              <th>Driver Plate</th>
                              <th>License Number</th>
                            </tr>
                          </thead>
                          <tbody>
                            {drivers.map((driver, index) => (
                              <tr key={driver[0].userId}>
                                {" "}
                                {/* Menggunakan userId sebagai kunci unik */}
                                <td>{index + 1}</td>
                                <td>{driver[0].name}</td>{" "}
                                {/* Mengambil nama dari objek user */}
                                <td>{driver[1].driverName}</td>{" "}
                                {/* Mengambil driverName dari objek caregiver */}
                                <td>{driver[1].driverPlate}</td>{" "}
                                {/* Mengambil driverPlate dari objek caregiver */}
                                <td>{driver[1].licenseNumber}</td>{" "}
                                {/* Mengambil licenseNumber dari objek caregiver */}
                                {/* <td>
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
                                </td> */}
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
                        <h1 className="text-black ps-3">List Driver Request</h1>
                      </section>
                      <section className="table__body">
                        <table>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>User Name</th>
                              <th>Driver Name</th>
                              <th>Driver Plate</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {driverRequests.map((driverReq, index) => (
                              <tr key={driverReq[1].driverId}>
                                {" "}
                                {/* Menggunakan driverId sebagai kunci unik */}
                                <td>{index + 1}</td>
                                <td>{driverReq[0].name}</td>{" "}
                                {/* Mengambil nama dari objek user */}
                                <td>{driverReq[1].driverName}</td>{" "}
                                {/* Mengambil driverName dari objek caregiver */}
                                <td>{driverReq[1].driverPlate}</td>{" "}
                                {/* Mengambil driverPlate dari objek caregiver */}
                                <td>
                                  <button
                                    className="btn btn-danger rounded-2 ms-2"
                                    onClick={() =>
                                      handleReject(driverReq[1].userId.userId)
                                    }
                                  >
                                    Reject{" "}
                                    <i className="fas fa-times fa-sm"></i>
                                  </button>
                                  <button
                                    className="btn btn-success rounded-2 ms-2"
                                    onClick={() =>
                                      handleApprove(driverReq[1].userId.userId)
                                    }
                                  >
                                    Approve{" "}
                                    <i className="fas fa-check fa-sm"></i>
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
