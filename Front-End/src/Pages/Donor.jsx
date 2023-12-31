import React, { useState } from "react";
import background from "../img/sedekah1.jpg";
import StickyHeader from "../components/header";
import axios from "axios";
import Swal from "sweetalert2";
import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";

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
      .post("http://localhost:8080/admin/add-donate", donateData)
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
            window.location.href = '/thanksdonor';
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
          <div
            className="col-md-8 p-5 mt-5"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <StickyHeader activePage={"contact-us"} />
            <h1>
              <span style={{ color: "red" }}>Indonesia</span>{" "}
              <span className="text-white">Senior need you</span>
            </h1>
            <h3 className="text-white">
              Your gift will help us support the local programs that keep
              seniors safe and living independently nationwide.
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 p-5 mt-3 text-center d-flex flex-column" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
            <h1 className="text-white">Donate Now</h1>
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
                    className="btn btn-primary"
                    htmlFor="btnradio1"
                    style={{ margin: "0 5px" }}
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
                    className="btn btn-primary"
                    htmlFor="btnradio2"
                    style={{ margin: "0 5px" }}
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
                    className="btn btn-primary"
                    htmlFor="btnradio3"
                    style={{ margin: "0 5px" }}
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
                    className="btn btn-primary"
                    htmlFor="btnradio4"
                    style={{ margin: "0 5px" }}
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
                    className="btn btn-primary"
                    htmlFor="btnradio5"
                    style={{ margin: "0 5px" }}
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
                    className="btn btn-primary"
                    htmlFor="btnradio6"
                    style={{ margin: "0 5px" }}
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

              <br />
              <PayPalScriptProvider options={{ "client-id": "ASEN8REnqJZClRemwTgF7i-AyfChxvKWzzwipeyW6HApqkZNtFmGWx-ovLbB9ajN0TrHlAx6d5sHv2bt" }}>
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: "10.0",
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={(data, actions) => {
                    return actions.order.capture().then(function (details) {
                      alert("berhasil");
                    });
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donor;
