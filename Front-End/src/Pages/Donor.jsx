import React, { useState } from "react";
import background from "../img/sedekah1.jpg";
import StickyHeader from "../components/header";
import axios from "axios";
import Swal from "sweetalert2";

const Donor = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [donationAmount, setDonationAmount] = useState(0);
  const [customAmount, setCustomAmount] = useState("");

  const handleDonation = (e) => {
    e.preventDefault();

    const donateData = {
      donor_name: name,
      donor_address: address,
      donate_amount: donationAmount || customAmount,
    };

    axios
      .post("http://localhost:8080/donation/add-donate", donateData)
      .then((response) => {
        console.log("Donation successful:", response.data);
        // Show the success alert using SweetAlert2
        Swal.fire({
          title: "Success",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          // Refresh the page
          if (result.isConfirmed) {
            window.location.reload();
          }
        });
      })
      .catch((error) => {
        console.error("Donation error:", error);
        // Show an error alert using SweetAlert2
        Swal.fire({
          title: "Oops...",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center mt-4"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mt-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-8 p-5 mt-5 bg-white">
            <StickyHeader activePage={"contact-us"} />
            <h1>
              <span style={{ color: "red" }}>Indonesia</span> Senior need you
            </h1>
            <h3>
            Your gift will help us support the local programs that keep seniors safe and living independently nationwide.
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 p-5 mt-3 bg-white text-center d-flex flex-column">
            <h1>Donate Now</h1>
            <div className="form-group mt-4">
              <form onSubmit={handleDonation}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className="form-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="btn-group mt-4 col-12"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autoComplete="off"
                    onClick={() => setDonationAmount(10)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio1"
                  >
                    $10
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autoComplete="off"
                    onClick={() => setDonationAmount(15)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio2"
                  >
                    $15
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    autoComplete="off"
                    onClick={() => setDonationAmount(20)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio3"
                  >
                    $20
                  </label>
                </div>
                <div
                  className="btn-group mt-4 col-12"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio4"
                    autoComplete="off"
                    onClick={() => setDonationAmount(25)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio4"
                  >
                    $25
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio5"
                    autoComplete="off"
                    onClick={() => setDonationAmount(50)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio5"
                  >
                    $50
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio6"
                    autoComplete="off"
                    onClick={() => setDonationAmount(100)}
                  />
                  <label
                    className="btn btn-outline-primary"
                    htmlFor="btnradio6"
                  >
                    $100
                  </label>
                </div>
                <div className="form-group mt-4">
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradioOther"
                      autoComplete="off"
                      onClick={() => setDonationAmount("")}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradioOther"
                    >
                      Other
                    </label>
                  </div>
                </div>
                <div className="form-group mt-4">
                  {donationAmount === "" && (
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$"
                      value={customAmount}
                      onChange={(e) =>
                        setCustomAmount(parseFloat(e.target.value))
                      }
                      required
                    />
                  )}
                </div>
                <button type="submit" className="btn btn-primary btn-md mt-4">
                  Donate
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donor;
