import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import MapModal from "./map";
import "leaflet/dist/leaflet.css";

import { getCurrentLocation } from "../utils/geolocation";
import { map } from "leaflet";
import Feedback from "react-bootstrap/esm/Feedback";

const LoginOrRegis = () => {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      const { role } = JSON.parse(user);
      setUserRole(role);
    }
  }, []);

  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setPasswordLogin] = useState("");
  const [roleId, setRoleId] = useState("");
  const [driverName, setDriverName] = useState("");
  const [driverPlate, setDriverPlate] = useState("");
  const [isLicensed, setLicensed] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  // PARTNER
  const [partnerAddress, setPartnerAddress] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [activeOrNot, setActiveOrNot] = useState("");

  //MEMBER
  const [memberAge, setAge] = useState("");
  const [memberReason, setReason] = useState("");

  const [isActive, setActive] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [noAddress, setAddressError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showReplacement, setShowReplacement] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // LOGIN

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    // Create an object with the form data
    const user = {
      email: loginName,
      password: loginPassword,
      roleId: roleId,
      active: isActive,
    };

    // Check if user isActive is true

    axios
      .post("http://localhost:8080/auth/login", user)
      .then((response) => {
        console.log(response.data);
        sessionStorage.setItem("user", JSON.stringify(response.data));
        Swal.fire({
          icon: "success",
          title: "Login success!",
          footer: "",
          confirmButtonColor: "#127d3f",
          confirmButtonText: "Go to homepage",
          preConfirm: () => {
            return new Promise((resolve) => {
              window.location.href = "/";
              resolve();
            });
          },
        });
      })
      .catch((error) => {
        console.log(error.response.data.message);
        if (
          error.response.status === 401 &&
          error.response.data.message === "Inactive user"
        ) {
          Swal.fire({
            icon: "error",
            title: "Oops... Sorry",
            text: "Your Account is not activated yet, please wait or contact admin for activation.",
            footer: '<a href="/contact-us">Contact us</a>',
          });
        }
        if (error.response.data.message === "Invalid password.") {
          Swal.fire({
            icon: "error",
            title: "Oops... Sorry",
            text: "Incorrect password. Check your credentials",
            footer: '<a href="/contact-us">Contact us</a>',
          });
        }
        if (error.response.data.message === "Email not found.") {
          Swal.fire({
            icon: "error",
            title: "Oops... Sorry",
            text: "We couldn't find your email. Please register if your email is not registered.",
            footer: '<a href="/getStarted">Register</a>',
          });
        }
      });
    // error.response.status === 401 &&

    setEmail("");
    setPassword("");
    setRoleId(roleId);
    setActive(isActive);
  };

  // MODAL PETA
  const [showModal, setShowModal] = useState(false);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedLatitude, setSearchedLatitude] = useState(null);
  const [searchedLongitude, setSearchedLongitude] = useState(null);
  const [onSelectLocation, setSelectedLocation] = useState(null);
  const [handleClose, setClose] = useState(null);

  const [addressInfo, setAddressInfo] = useState({
    road: "",
    village: "",
    subdistrict: "",
    city: "",
    state: "",
    country: "",
    postcode: "",
  });

  //road + village + subdistrict + city + state + country + postcode

  const handleShowModal = () => {
    setShowModal(true);
  };

  // if (setShowModal) {
  //   const handleGetLocation = () => {
  //   getCurrentLocation(
  //     (lat, lng) => {
  //       setLatitude(lat);
  //       setLongitude(lng);
  //     },
  //     (error) => {
  //       console.error("Error getting current location:", error.message);
  //     }
  //   );
  //   };
  // }

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectLocation = (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
    handleCloseModal();
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=1`
      );
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setSearchedLatitude(parseFloat(lat));
        setSearchedLongitude(parseFloat(lon));
      } else {
        console.log("No results found for the search query");
      }
    } catch (error) {
      console.error("Error occurred during geocoding:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((roleId === 2 || roleId === 4) && (latitude === 0 || longitude === 0)) {
      setAddressError(true);

      // Show SweetAlert when latitude or longitude is 0
      Swal.fire({
        icon: "error",
        title: "Oops... Sorry",
        text: "Looks like you forgot to add your location. Please select your location by clicking a spot in the map.",
        footer: '<a href="/contact-us">Contact us</a>',
      });

      return;
    }

    if (password !== confirmPassword) {
      setPasswordError(true);
      return;
    }

    const user = {
      name: name,
      email: email,
      password: password,
      roleId: roleId,
    };

    let data = {
      userDTO: user,
    };

    if (roleId === 3) {
      const caregiverData = {
        driverName: driverName,
        driverPlate: driverPlate,
        isLicensed: isLicensed,
        licenseNumber: licenseNumber,
      };

      data = {
        ...data,
        caregiver: caregiverData,
      };
    } else if (roleId === 5) {
      const donorData = {
        // ... data yang dibutuhkan untuk registrasi Donor
      };

      data = {
        ...data,
        donor: donorData,
      };
    } else if (roleId === 2) {
      const memberData = {
        age: memberAge,
        reason: memberReason,
        latitude: latitude,
        longitude: longitude,
        ...addressInfo,
      };
      data = {
        ...data,
        member: memberData,
      };
    } else if (roleId === 4) {
      const partnerData = {
        partnerAddress: partnerAddress,
        partnerName: partnerName,
        activeOrNot: activeOrNot,
        latitude: latitude,
        longitude: longitude,
        ...addressInfo,
      };
      data = {
        ...data,
        partner: partnerData,
      };
    }

    axios
      .post("http://localhost:8080/user/register", data)
      .then((response) => {
        Swal.fire("Registration Success", "", "success").then(() => {
          window.location.href = "/login";
        });
        console.log(response.data);
        console.log("addressInfo:", addressInfo);
      })
      .catch((error) => {
        alert("Error Occurred");
        console.error(error);
      });
  };

  const handleClick = () => {
    if (!showReplacement) {
      setShowReplacement(true);
    } else {
      setShowForm(true);
    }
  };

  const handleBack = () => {
    setShowForm(false);
    setShowReplacement(false);
  };
  const [selectedAddress, setSelectedAddress] = useState({});

  return (
    <div
      style={{ maxHeight: "560px", overflow: "auto" }}
      className="col-9 teams aboutt px-5"
    >
      {!showReplacement ? (
        <div id="regisForm">
          <h1 className="display-3 text-white">Sign Up</h1>
          <hr className="border-white" />
          <form className="col-12" onSubmit={handleSubmit}>
            <div className="d-flex col-12">
              <div className="col-6 px-1 mx-auto">
                <div className="form-floating col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating col-12 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating col-12 mb-3">
                  <select
                    placeholder="Select a Role."
                    id="roleId"
                    className="form-control"
                    value={roleId}
                    onChange={(e) => setRoleId(Number(e.target.value))}
                    required
                  >
                    <option value="" disabled>
                      Select a Role
                    </option>
                    <option value="2">Member</option>
                    <option value="3">Caregiver</option>
                    <option value="4">Partner</option>
                    <option value="5">Donor</option>
                    <option value="6">Volunteer</option>
                  </select>
                  <label htmlFor="roleId">Which role do you want to be?</label>
                </div>
              </div>

              <div className="col-6 px-1 mx-auto">
                <div className="form-floating col-12 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="form-floating col-12 mb-3">
                  <Form.Control
                    type="password"
                    className="form-control"
                    id="Cfpassword"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    isInvalid={passwordError}
                  />
                  <Form.Label htmlFor="Cfpassword">Confirm Password</Form.Label>
                  {passwordError && (
                    <Form.Control.Feedback type="invalid">
                      Passwords do not match
                    </Form.Control.Feedback>
                  )}
                </div>
              </div>
            </div>

            {roleId === 2 && (
              <div id="details">
                <p className="lead mt-5 fw-bold text-white">
                  Personal Information:
                </p>

                <div className="d-flex col-12">
                  <div className="form-floating col-6 px-1 mb-3">
                    <input
                      type="number"
                      max={122}
                      className="form-control"
                      id="name"
                      placeholder="How old are you?"
                      value={memberAge}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                    <label htmlFor="name">How old are you?</label>
                  </div>

                  <div className="form-floating  col-6 px-1 mb-3">
                    <textarea
                      type="text"
                      className="form-control"
                      id="license"
                      placeholder="Why are you joining us?"
                      value={memberReason}
                      onChange={(e) => setReason(e.target.value)}
                      required
                    />
                    <label htmlFor="name">Why are you joining us?</label>
                  </div>
                </div>
                <p className="lead fw-bold mt-1 text-white">
                  Where do you live?
                </p>
                <p className="lead text-white col-6 px-1 mt-3">
                  {`${addressInfo.road || ""} ${addressInfo.village || ""} ${
                    addressInfo.subdistrict || addressInfo.city || ""
                  } ${addressInfo.state || ""} ${addressInfo.country || ""} ${
                    addressInfo.postcode || ""
                  }`}
                </p>

                <div className="form-floating col-6 px-1 mb-4">
                  <button
                    type="button"
                    className="btn btn-success col-12 p-2 mx-auto mt-2"
                    onClick={handleShowModal}
                  >
                    Get My Address
                  </button>
                </div>
                <MapModal
                  latitude={latitude}
                  longitude={longitude}
                  onSelectLocation={(lat, lng) => {
                    setLatitude(lat);
                    setLongitude(lng);
                  }}
                  setAddressInfo={setAddressInfo} // Menyediakan setAddressInfo ke dalam MapModal
                  show={showModal}
                  handleClose={handleCloseModal}
                />
              </div>
            )}
            {roleId === 3 && (
              <div id="details">
                <p className="lead mt-5 text-white">Personal Information:</p>
                <div className="d-flex col-12">
                  <div className="form-floating col-6 px-1 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Driver Username"
                      value={driverName}
                      onChange={(e) => setDriverName(e.target.value)}
                      required
                    />
                    <label htmlFor="name">Driver Username</label>
                  </div>

                  <div className="form-floating  col-6 px-1 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="license"
                      placeholder="Name"
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      required
                    />
                    <label htmlFor="name">License Number</label>
                  </div>
                </div>

                <div className="form-floating col-6 px-1 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Driver Username"
                    value={driverPlate}
                    onChange={(e) => setDriverPlate(e.target.value)}
                    required
                  />
                  <label htmlFor="name">Police Number</label>
                </div>
              </div>
            )}
            {roleId === 4 && (
              <div id="details">
                <p className="lead mt-5 fw-bold text-white">
                  Personal Information:
                </p>
                <div className="d-flex col-12">
                  <div className="form-floating col-6 px-1 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Partner name"
                      value={partnerName}
                      onChange={(e) => setPartnerName(e.target.value)}
                      required
                    />
                    <label htmlFor="name">Partner name</label>
                  </div>

                  <div className="form-floating col-6 px-1 mb-3">
                    <select
                      placeholder="Are you cooking and supplying in the last 18 months?"
                      id="roleId"
                      className="form-control"
                      value={activeOrNot}
                      onChange={(e) => setActiveOrNot(Number(e.target.value))}
                      required
                    >
                      <option value="" disabled>
                        Yes or No
                      </option>
                      <option value="1">Yes</option>
                      <option value="0">No</option>
                    </select>
                    <label htmlFor="roleId">
                      Are you cooking and supplying in the last 18 months?
                    </label>
                  </div>
                </div>

                <p className="lead fw-bold mt-1 text-white">Store Address</p>

                <p className="lead text-white col-6 px-1 mt-3">
                  {`${addressInfo.road || ""} ${addressInfo.village || ""} ${
                    addressInfo.subdistrict || addressInfo.city || ""
                  } ${addressInfo.state || ""} ${addressInfo.country || ""} ${
                    addressInfo.postcode || ""
                  }`}
                </p>

                <div className="form-floating col-6 px-1 mb-4">
                  <button
                    type="button"
                    className="btn btn-success col-12 p-2 mx-auto mt-2"
                    onClick={handleShowModal}
                  >
                    Find My Store Address
                  </button>
                </div>
                <MapModal
                  latitude={latitude}
                  longitude={longitude}
                  onSelectLocation={(lat, lng) => {
                    setLatitude(lat);
                    setLongitude(lng);
                  }}
                  setAddressInfo={setAddressInfo} // Menyediakan setAddressInfo ke dalam MapModal
                  show={showModal}
                  handleClose={handleCloseModal}
                />
              </div>
            )}
            <br />
            <p className="lead text-white">
              Already have an account? Click{" "}
              <span>
                <a className="text-warning" onClick={handleClick}>
                  here to Sign-In
                </a>
              </span>
            </p>
            <button
              type="submit"
              className="btn btn-outline-warning col-6 my-3"
            >
              Register
            </button>
            <br />
          </form>
        </div>
      ) : (
        // REPLACE
        <div id="loginForm">
          <h1 className="display-3 text-white">Sign In</h1>
          <hr className="border-white" />
          <form onSubmit={handleLoginFormSubmit} className="col-12">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email address"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                required
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setPasswordLogin(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="remember"
              />
              <label className="form-check-label text-white" htmlFor="remember">
                Remember me
              </label>
            </div>
            <p className="lead text-white mt-3">
              Don't have an account? Click{" "}
              <span>
                <a className="text-warning" onClick={handleBack}>
                  here to Sign-Up
                </a>
              </span>
            </p>

            <button
              type="submit"
              className="btn btn-outline-warning col-6 my-3"
            >
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginOrRegis;
