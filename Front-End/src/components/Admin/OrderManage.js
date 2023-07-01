import backgroundImage from "../../images/bg/retina_wood.png";
import { useState } from "react";
import { useEffect } from "react";

const OrderManage = () => {
  const Orders = [
    {
      id: 1,
      mmemberName: "Ajang Sagara",
      mealsName: "Grilled Chicken Salad",
      orderDate: "23 June, 2023",
      orderStatus: "New",
    },
    {
      id: 2,
      mmemberName: "Nara Shika",
      mealsName: "Chicken Teriyaki",
      orderDate: "12 Feb, 2023",
      orderStatus: "Cancelled",
    },
    {
      id: 3,
      mmemberName: "Sophia Wagon",
      mealsName: "Sushi Platter",
      orderDate: "26 Apr, 2023",
      orderStatus: "Process",
    },
    {
      id: 4,
      mmemberName: "Daniel Manhattan",
      mealsName: "Caesar Salad",
      orderDate: "10 Jun, 2023",
      orderStatus: "Delivered",
    },
  ];

  const initialDrivers = [
    { id: 1, name: "Driver 1", status: "Available" },
    { id: 2, name: "Driver 2", status: "Available" },
    { id: 3, name: "Driver 3", status: "Busy" },
  ];

  const initialPartners = [
    { id: 1, name: "Partner 1", status: "Available" },
    { id: 2, name: "Partner 2", status: "Available" },
    { id: 3, name: "Partner 3", status: "Busy" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(Orders);
  const [drivers, setDrivers] = useState(initialDrivers);
  const [partners, setPartners] = useState(initialPartners);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedPartner, setSelectedPartner] = useState(null);

  useEffect(() => {
    const filtered = Orders.filter(
      (Order) =>
        Order.mmemberName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        Order.mealsName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredOrders(filtered);
  }, [searchTerm]);

  const handleDriverSelection = (driver) => {
    setSelectedDriver(driver);
  };

  const handlePartnerSelection = (partner) => {
    setSelectedPartner(partner);
  };

  const handleAssignDriver = () => {
    if (selectedDriver) {
      // Perform the assignment logic here
      console.log("Assigned Driver:", selectedDriver);
    }
  };

  const handleAssignPartner = () => {
    if (selectedPartner) {
      // Perform the assignment logic here
      console.log("Assigned Partner:", selectedPartner);
    }
  };

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
        <main className="table">
          <section className="table__header">
            <h1 className="text-black ps-3 ">Order List</h1>
            <div className="input-group">
              <input
                type="search"
                placeholder="Search Order..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <img src="images/search.png" alt="" />
            </div>
          </section>
          <section className="table__body">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Members Name</th>
                  <th>Meals Name</th>
                  <th>Order Date</th>
                  <th>Order Status</th>
                  <th>Partner</th>
                  <th>Driver</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((Order, index) => (
                  <tr key={Order.id}>
                    <td>{index + 1}</td>
                    <td>{Order.mmemberName}</td>
                    <td>{Order.mealsName}</td>
                    <td>{Order.orderDate}</td>
                    <td>
                      <a href="" style={{ textDecoration: "none" }}>
                        <p
                          className={`status ${Order.orderStatus.toLowerCase()}`}
                        >
                          {Order.orderStatus}
                        </p>
                      </a>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary rounded-2"
                        data-bs-toggle="modal"
                        data-bs-target="#pickPartner"
                        onClick={() => setSelectedPartner(null)}
                      >
                        Assign <i className="fas fa-cutlery fa-sm"></i>
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary rounded-2"
                        data-bs-toggle="modal"
                        data-bs-target="#pickDriver"
                        onClick={() => setSelectedDriver(null)}
                      >
                        Assign <i className="fas fa-car fa-sm"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>

      {/* Pick Driver Modal */}
      <div
        className="modal fade"
        id="pickDriver"
        tabIndex="-1"
        aria-labelledby="pickDriverLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="pickDriverLabel">
                Pick a Driver
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                {drivers.map((driver) => (
                  <li
                    key={driver.id}
                    className={`list-group-item d-flex justify-content-between align-items-center ${
                      driver === selectedDriver ? "active" : ""
                    }`}
                    onClick={() => handleDriverSelection(driver)}
                  >
                    {driver.name}
                    <span className="badge bg-primary rounded-pill">
                      {driver.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleAssignDriver}
              >
                Assign Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pick Partner Modal */}
      <div
        className="modal fade"
        id="pickPartner"
        tabIndex="-1"
        aria-labelledby="pickPartnerLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="pickPartnerLabel">
                Pick a Partner
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul className="list-group">
                {partners.map((partner) => (
                  <li
                    key={partner.id}
                    className={`list-group-item d-flex justify-content-between align-items-center ${
                      partner === selectedPartner ? "active" : ""
                    }`}
                    onClick={() => handlePartnerSelection(partner)}
                  >
                    {partner.name}
                    <span className="badge bg-primary rounded-pill">
                      {partner.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleAssignPartner}
              >
                Assign Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderManage;
