import { useState } from "react";
import backgroundImage from "../../images/bg/tileable_wood_texture.png";

const PartnerManage = () => {
  const [activeTab, setActiveTab] = useState("Partner");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Sample data for Partner table
  const Partner = [
    {
      id: 1,
      partnerName: "Gilang Skak",
      companyName: "Saos Gulung",
      address: "Cipejuh",
    },
    {
      id: 2,
      partnerName: "Bambang Gumilang",
      companyName: "Karoket Jaya",
      address: "Rock Bottom",
    },
  ];

  // Sample data for Partner Request table
  const PartnerRequest = [
    {
      id: 1,
      partnerName: "Gwen Sarah",
      companyName: "ABC Company",
      address: "Ciparay",
    },
    {
      id: 2,
      partnerName: "Brook Dwan",
      companyName: "XYZ Corp",
      address: "Majalaya",
    },
  ];

  const [filteredPartners, setFilteredPartners] = useState(Partner);
  const [filteredPartnerRequest, setFilteredPartnerRequest] =
    useState(PartnerRequest);

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
                            <th>Partner Name</th>
                            <th>Company Name</th>
                            <th>Address</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredPartners.map((Partner, index) => (
                            <tr key={Partner.id}>
                              <td>{index + 1}</td>
                              <td>{Partner.partnerName}</td>
                              <td>{Partner.companyName}</td>
                              <td>{Partner.address}</td>
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
              {activeTab === "PartnerRequest" && (
                <div className="tab-pane fade show active">
                  <main className="table">
                    <section className="table__header">
                      <h1 className="text-black ps-3 ">List Partners Request</h1>
                    </section>
                    <section className="table__body">
                      <table>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Partner Name</th>
                            <th>Company Name</th>
                            <th>Address</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredPartnerRequest.map((PartnerReq, index) => (
                            <tr key={PartnerReq.id}>
                              <td>{index + 1}</td>
                              <td>{PartnerReq.partnerName}</td>
                              <td>{PartnerReq.companyName}</td>
                              <td>{PartnerReq.address}</td>
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
  );
};

export default PartnerManage;
