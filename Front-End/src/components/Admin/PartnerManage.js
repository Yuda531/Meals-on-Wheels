import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import backgroundImage from "../../images/bg/tileable_wood_texture.png";
import NavbarAdmin from "../NavbarAdmin";

const PartnerManage = () => {
  const [activeTab, setActiveTab] = useState("Partner");
  const [partner, setPartner] = useState([]);
  const [partnerRequests, setPartnerRequests] = useState([]);

  useEffect(() => {
    if (activeTab === "Partner") {
      fetch("http://localhost:8080/admin/partners/active")
        .then((response) => response.json())
        .then((data) => {
          setPartner(data);
        })
        .catch((error) => {
          console.error("Fetch Partner error:", error);
        });
    } else if (activeTab === "PartnerRequest") {
      fetch("http://localhost:8080/admin/partners/not-active")
        .then((response) => response.json())
        .then((data) => {
          setPartnerRequests(data);
        })
        .catch((error) => {
          console.error("Fetch PartnerRequest error:", error);
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

        const updatedRequests = partnerRequests.filter(
          (request) => request[1].userId.userId !== userId
        );
        setPartnerRequests(updatedRequests);
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

        const updatedRequests = partnerRequests.filter(
          (request) => request[1].userId.userId !== userId
        );
        setPartnerRequests(updatedRequests);
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
                      activeTab === "Partner" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("Partner")}
                  >
                    Partner
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className={`nav-link ${
                      activeTab === "PartnerRequest" ? "active" : ""
                    }`}
                    onClick={() => handleTabChange("PartnerRequest")}
                  >
                    Partner Request
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                {activeTab === "Partner" && (
                  <div className="tab-pane fade show active">
                    <main className="table">
                      <section className="table__header">
                        <h1 className="text-black ps-3 ">List Partners</h1>
                      </section>
                      <section className="table__body">
                        <table>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>User Name</th>
                              <th>Partner Name</th>
                              <th>City</th>
                              <th>Country</th>
                            </tr>
                          </thead>
                          <tbody>
                            {partner.map((Partner, index) => (
                              <tr key={Partner[0].userId}>
                                {" "}
                                {/* Menggunakan userId sebagai kunci unik */}
                                <td>{index + 1}</td>
                                <td>{Partner[0].name}</td>{" "}
                                {/* Mengambil nama dari objek user */}
                                <td>{Partner[1].partnerName}</td>{" "}
                                {/* Mengambil Partnerame dari objek Partner */}
                                <td>{Partner[1].city}</td>{" "}
                                {/* Mengambil Partnerlate dari objek Partner */}
                                <td>{Partner[1].country}</td>{" "}
                                {/* Mengambil licenseNumber dari objek Partner */}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </section>
                    </main>
                  </div>
                )}
                {activeTab === "PartnerRequest" && (
                  <div className="tab-pane fade show active">
                    <main className="table">
                      <section className="table__header">
                        <h1 className="text-black ps-3 ">
                          List Partners Request
                        </h1>
                      </section>
                      <section className="table__body">
                        <table>
                          <thead>
                            <tr>
                              <th>No</th>
                              <th>User Name</th>
                              <th>Partner Name</th>
                              <th>City</th>
                              <th>Country</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {partnerRequests.map((PartnerReq, index) => (
                              <tr key={PartnerReq[0].userId}>
                                <td>{index + 1}</td>
                                <td>{PartnerReq[0].name}</td>
                                <td>{PartnerReq[1].partnerName}</td>
                                <td>{PartnerReq[1].city}</td>
                                <td>{PartnerReq[1].country}</td>
                                <td>
                                  <button
                                    className="btn btn-danger rounded-2 ms-2"
                                    onClick={() =>
                                      handleReject(PartnerReq[1].userId.userId)
                                    }
                                  >
                                    Reject{" "}
                                    <i className="fas fa-times fa-sm"></i>
                                  </button>
                                  <button
                                    className="btn btn-success rounded-2 ms-2"
                                    onClick={() =>
                                      handleApprove(PartnerReq[1].userId.userId)
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

export default PartnerManage;
