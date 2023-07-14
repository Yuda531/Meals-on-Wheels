import axios from "axios";
import backgroundImage from "../../images/bg/donation1.jpeg";
import "../../CSS/admin/AdminDashboard.css";
import { useState, useEffect } from "react";
import NavbarAdmin from "../NavbarAdmin";

const Donate = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);

  useEffect(() => {
    // Fetch donations from the backend API
    axios.get("http://localhost:8080/donation/all-donate")
      .then(response => {
        const donations = response.data;
        setFilteredDonors(donations);
        
        // Calculate the total donation amount
        const totalAmount = donations.reduce(
          (accumulator, donate) => accumulator + donate.donate_amount,
          0
        );
        setTotalDonation(totalAmount);
      })
      .catch(error => {
        console.error("Error fetching donations:", error);
      });
  }, []);

  useEffect(() => {
    const filtered = filteredDonors.filter(
      (donor) =>
        donor.donor_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.donor_address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDonors(filtered);
  }, [searchTerm]);

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
          <main className="table">
            <section className="table__header">
              <h1 className="text-black ps-3 ">Donations</h1>
              <div className="input-group">
                <input
                  type="search"
                  placeholder="Search Donor..."
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
                    <th>Donor Name</th>
                    <th>Address</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDonors.map((donate, index) => (
                    <tr key={donate.donate_id}>
                      <td>{index + 1}</td>
                      <td>{donate.donor_name}</td>
                      <td>{donate.donor_address}</td>
                      <td>
                        <i className="fa fa-usd"></i> {donate.donate_amount}
                      </td>
                    </tr>
                  ))}
                  {/* Add the row for the total donation */}
                  <tr>
                    <td colSpan="3" className="text-end">
                      Total Donation:
                    </td>
                    <td>
                      <i className="fa fa-usd"></i> {totalDonation}
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Donate;
