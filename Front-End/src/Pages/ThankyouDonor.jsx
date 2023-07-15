import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import verified from "../img/verified.jpg";
import background from "../img/background.jpeg";
import StickyHeader from "../components/header";
import StickyFooter from "../components/footer";

const ThankyouDonor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [totalDonation, setTotalDonation] = useState(0);

  useEffect(() => {
    // Fetch donations from the backend API
    axios
      .get("http://localhost:8080/admin/all-donate")
      .then((response) => {
        const donations = response.data;
        setFilteredDonors(donations);

        // Calculate the total donation amount
        const totalAmount = donations.reduce(
          (accumulator, donate) => accumulator + donate.donate_amount,
          0
        );
        setTotalDonation(totalAmount);
      })
      .catch((error) => {
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
    <div style={{ minHeight: "100vh", backgroundImage: `url(${background})` }}>
      <StickyHeader />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="p-5 m-5 text-center">
              <h1>Thank you for Donating</h1>
              <div
                className="mt-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img style={{ width: "150px" }} src={verified} alt="Verified" />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex justify-content-center mt-5 ">
              <table className="table">
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
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ThankyouDonor;
