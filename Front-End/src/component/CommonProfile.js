import React from 'react';
import richie from "../img/richiedriver.png";
import { CircleFill } from 'react-bootstrap-icons';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';
import pp from '../img/user.png';
import axios from 'axios';

const CommonProfile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let userSession = sessionStorage.getItem("user");
    userSession = JSON.parse(userSession);

    const [members, setMembers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredMembers, setFilteredMembers] = useState([]);
  
    useEffect(() => {
      const fetchMembers = async () => {
        try {
          const response = await axios.get(
            "http://localhost:8080/admin/all-members"
          );
          setMembers(response.data);
          setFilteredMembers(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchMembers();
    }, []);
  
    // useEffect(() => {
    //   const filtered = members.filter((member) => {
    //     const memberName = member.member_name
    //       ? member.member_name.toLowerCase()
    //       : "";
    //     const memberAge = member.age ? member.age.toString() : "";
    //     return (
    //       memberName.includes(searchTerm.toLowerCase()) ||
    //       memberAge.includes(searchTerm.toLowerCase())
    //     );
    //   });
    //   setFilteredMembers(filtered);
    // }, [searchTerm, members]);

    const [memberAddress, setMemberAddress] = useState(null);

    useEffect(() => {

      const user = sessionStorage.getItem("user");
      if (user) {
        const parsedUser = JSON.parse(user);
        setMemberAddress(parsedUser.member?.userId?.country || "");
        // setDriverName(parsedUser.caregiver?.driverName || "");
        // setDriverEmail(parsedUser.caregiver?.userId?.email || "");
       
      }
    }, []);

    return ( 
      <div className="body">
      <div className="backblur">
        <h1 className="display-5 text-white">
          Welcome, {userSession.name}!
        </h1>
        <hr className="border-white" />
        <div className="col-12 d-flex">
          <div className="col-md-5 col-12 me-5 profileCard">
            <div className="col-12 d-flex flex-column align-items-center">
              <div className="col-8 d-flex  align-items-center justify-content-center">
                <img
                  style={{ borderRadius: "50%" }}
                  src={pp}
                  className="col-12"
                  alt=""
                />
              </div>

                <small className="lead fw-bold text-center text-white mt-4">
                {userSession.roleId.roleName} 
                </small>
              {/* {filteredMembers.filter((member) => member.memberId === userSession.id).map((member, index) => ( */}
              <br />
                <br />

              <div  className="col-6 profileCardData mx-auto text-center text-white">
                <small className="display-6 mb-5">
                  {userSession.name}
                </small>
                <br />
                <br />


                <small className="lead text-white text-center mt-5">
                {userSession.email} 
                </small>

                <br />
                <br />



    
                <button
                  onClick={handleShow}
                  className="btn btn-success col-12 mb-3"
                >
                  Edit Profile
                </button>
              </div>
             {/* ))} */}

            </div>
          </div>
          <div className="col-md-7 col-12 px-md-5 px-0 aboutt">
            <div className="orderTable text-white">
              <small className="display-6 m-4">My Orders</small>
    
              <div className="newOrder d-flex col-12 p-3">
                <table className="custom-table col-12">
                  {/* <thead> */}
                    <div className="d-flex mb-2 text-white py-4">
                      <th className="col-md-3 col-6 mx-auto">Order Name</th>
                      <th className="col-md-3 col-6 mx-auto">Time Order</th>
                      <th className="col-md-6 col-12 mx-auto">Status</th>
                    </div>
                    <hr className="border-white" />
                  {/* </thead> */}
                  <div
                    style={{ maxHeight: "400px", overflow: "auto" }}
                    className="orders teams"
                  >
                    <div className="anOrder">
                      <div className="d-flex col-12 mb-3 px-4">
                        <p className="col-md-3 col-6 my-auto">Food name</p>
                        <p className="col-md-3 col-6 my-auto">06/08/2023</p>
                        <div className="col-md-6 col-12 d-flex">
                          <button className="btn btn-outline-danger">Process</button>
                        </div>
                      </div>
                      <hr className="border-light" />
                    </div>
    
                    <div className="anOrder">
                      <div className="d-flex col-12 mb-3 px-4">
                        <p className="col-md-3 col-6 my-auto">Food name</p>
                        <p className="col-md-3 col-6 my-auto">06/08/2023</p>
                        <div className="col-md-6 col-12 d-flex">
                          <button className="col-md-4 col-6 btn btn-outline-success">
                            Done
                          </button>
                        </div>
                      </div>
                      <hr className="border-light" />
                    </div>
    
                    <div className="anOrder">
                      <div className="d-flex col-12 mb-3 px-4">
                        <p className="col-md-3 col-6 my-auto">Food name</p>
                        <p className="col-md-3 col-6 my-auto">06/08/2023</p>
                        <div className="col-md-6 col-12 d-flex">
                          <button className="col-md-4 col-6 btn btn-outline-success">
                            Done
                          </button>
                        </div>
                      </div>
                      <hr className="border-light" />
                    </div>
    
                    <div className="anOrder">
                      <div className="d-flex col-12 mb-3 px-4">
                        <p className="col-md-3 col-6 my-auto">Food name</p>
                        <p className="col-md-3 col-6 my-auto">06/08/2023</p>
                        <div className="col-md-6 col-12 d-flex">
                          <button className="col-md-4 col-6 btn btn-outline-success">
                            Done
                          </button>
                        </div>
                      </div>
                      <hr className="border-light" />
                    </div>
                    <div className="anOrder">
                      <div className="d-flex col-12 mb-3 px-4">
                        <p className="col-md-3 col-6 my-auto">Food name</p>
                        <p className="col-md-3 col-6 my-auto">06/08/2023</p>
                        <div className="col-md-6 col-12 d-flex">
                          <button className="col-md-4 col-6 btn btn-outline-success">
                            Done
                          </button>
                        </div>
                      </div>
                      <hr className="border-light" />
                    </div>
                    <div className="anOrder">
                      <div className="d-flex col-12 mb-3 px-4">
                        <p className="col-md-3 col-6 my-auto">Food name</p>
                        <p className="col-md-3 col-6 my-auto">06/08/2023</p>
                        <div className="col-md-6 col-12 d-flex">
                          <button className="col-md-4 col-6 btn btn-outline-success">
                            Done
                          </button>
                        </div>
                      </div>
                      <hr className="border-light" />
                    </div>
                    <div className="anOrder">
                      <div className="d-flex col-12 mb-3 px-4">
                        <p className="col-md-3 col-6 my-auto">Food name</p>
                        <p className="col-md-3 col-6 my-auto">06/08/2023</p>
                        <div className="col-md-6 col-12 d-flex">
                          <button className="col-md-4 col-6 btn btn-outline-success">
                            Done
                          </button>
                        </div>
                      </div>
                      <hr className="border-light" />
                    </div>
                    <div className="anOrder">
                      <div className="d-flex col-12 mb-3 px-4">
                        <p className="col-md-3 col-6 my-auto">Food name</p>
                        <p className="col-md-3 col-6 my-auto">06/08/2023</p>
                        <div className="col-md-6 col-12 d-flex">
                          <button className="col-md-4 col-6 btn btn-outline-success">
                            Done
                          </button>
                        </div>
                      </div>
                      <hr className="border-light" />
                    </div>
                  </div>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set your status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-center">
            <small id="activeStatusModal" className="lead statusSet">
              <CircleFill color="green" /> Active
            </small>
            <small id="unactiveStatusModal" className="lead statusSet">
              <CircleFill color="red" /> Not Active
            </small>
            <small id="busyStatusModal" className="lead statusSet">
              <CircleFill color="yellow" /> Busy
            </small>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-center col-12">
            <Button className="col-md-5 col-12 me-md-1 me-0" variant="outline-danger" onClick={handleClose}>
              Close
            </Button>
            <Button className="col-md-5 col-12 ms-md-1 ms-0" variant="outline-success" onClick={handleClose}>
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
    
     );
}
 
export default CommonProfile;