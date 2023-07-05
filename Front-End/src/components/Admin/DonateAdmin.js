import backgroundImage from "../../images/bg/donation1.jpeg";
import "../../CSS/admin/AdminDashboard.css";
import { useState } from "react";
import { useEffect } from "react";

const Donate = () => {
  const donations = [
    {
      id: 1,
      name: "Roger Richard",
      address: "Los Angeles",
      amount: 50,
    },
    {
      id: 2,
      name: "Sarah Moan",
      address: "Amsterdam",
      amount: 25,
    },
    {
      id: 3,
      name: "Harry Scarfield",
      address: "Edinburgh",
      amount: 150,
    },
    {
      id: 4,
      name: "Antonio Gracha",
      address: "California",
      amount: 50,
    },
    {
      id: 5,
      name: "Agung Yuda",
      address: "Baleendah",
      amount: 500,
    },
    {
      id: 6,
      name: "Asep Supriyadi",
      address: "Pameungpeuk",
      amount: 250,
    },
  ];

  // Calculate the total donation amount
  const totalDonation = donations.reduce(
    (accumulator, donate) => accumulator + donate.amount,
    0
  );

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDonors, setFilteredDonors] = useState(donations);

  useEffect(() => {
    const filtered = donations.filter(
      (donor) =>
        donor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donor.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDonors(filtered);
  }, [searchTerm]);

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
                  <tr key={donate.id}>
                    <td>{index + 1}</td>
                    <td>{donate.name}</td>
                    <td>{donate.address}</td>
                    <td><i class="fa fa-usd"></i> {donate.amount}</td>
                  </tr>
                ))}
                {/* Add the row for the total donation */}
                <tr>
                  <td colSpan="3" className="text-end">Total Donation:</td>
                  <td><i class="fa fa-usd"></i> {totalDonation}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Donate;
